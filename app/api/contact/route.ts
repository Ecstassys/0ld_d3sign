import { NextRequest, NextResponse } from "next/server"
import twilio from "twilio"

export async function POST(request: NextRequest) {
  try {
    // 1. Initialize variables INSIDE the function
    const accountSid = process.env.TWILIO_ACCOUNT_SID
    const authToken = process.env.TWILIO_AUTH_TOKEN
    const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER 
    const businessWhatsAppNumber = process.env.BUSINESS_WHATSAPP_NUMBER 

    const body = await request.json()
    const { name, email, phone, projectType, budget, message } = body

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format budget for display
    const budgetLabels: Record<string, string> = {
      "under-5": "Under ₹5 Lakhs",
      "5-10": "₹5 - 10 Lakhs",
      "10-25": "₹10 - 25 Lakhs",
      "25-50": "₹25 - 50 Lakhs",
      "above-50": "Above ₹50 Lakhs",
    }

    // Create WhatsApp message
    const whatsappMessage = `🏠 *New Inquiry - Olive Design Lab*

*From:* ${name}
*Email:* ${email}
*Phone:* ${phone || "Not provided"}

*Project Type:* ${projectType}
*Budget:* ${budget ? budgetLabels[budget] || budget : "Not specified"}

*Message:*
${message}

---
_Received via website contact form_`

    // Check if Twilio is configured
    if (!accountSid || !authToken || !twilioWhatsAppNumber || !businessWhatsAppNumber) {
      console.log("[API] WhatsApp API not configured. Message would be:\n", whatsappMessage)
      
      return NextResponse.json({
        success: true,
        message: "Form submitted successfully",
        note: "WhatsApp API not configured - check environment variables"
      })
    }

    // Send WhatsApp message via Twilio
    const client = twilio(accountSid, authToken)
    
    await client.messages.create({
      body: whatsappMessage,
      from: twilioWhatsAppNumber,
      to: businessWhatsAppNumber,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully via WhatsApp"
    })

  } catch (error) {
    console.error("[API] Error sending WhatsApp message:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
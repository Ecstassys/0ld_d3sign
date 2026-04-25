// lib/projects.ts

export const projects = [
  {
    id: 1,
    slug: "clickbox-photography", // Changed to lowercase for better URLs
    title: "Clickbox Photography (Office + Studio)",
    category: "Commercial", 
    client: "Clickbox",
    location: "ECR, Chennai",
    budget: "25 - 50 Lakhs",
    description: "A contemporary coastal villa with organic textures and a serene color palette. The space was reimagined to maximize natural light and ocean breeze.",
    image: "/images/project-1.jpg", // FIXED: Removed "public" from the start
  },
  {
    id: 2,
    slug: "minimalist-home",
    title: "Modern Minimalist Home",
    category: "Residential",
    client: "Young Family",
    location: "Adyar, Chennai",
    budget: "15 - 30 Lakhs",
    description: "Clean lines and thoughtful spaces define this modern family residence. Focused on smart storage solutions and neutral color palettes.",
    image: "/images/project-2.jpg",
  },
  {
    id: 3,
    slug: "artisan-coffee-house",
    title: "Artisan Coffee House",
    category: "Commercial",
    client: "Local Roasters",
    location: "T. Nagar, Chennai",
    budget: "10 - 25 Lakhs",
    description: "A warm, inviting cafe that celebrates local craftsmanship and community, featuring a striking terrazzo counter and fluted wood paneling.",
    image: "/images/project-3.jpg",
  },
  {
    id: 4,
    slug: "urban-loft",
    title: "Urban Loft Apartment",
    category: "Residential",
    client: "Tech Entrepreneur",
    location: "OMR, Chennai",
    budget: "10 - 25 Lakhs",
    description: "Industrial charm meets cozy living. We utilized exposed brickwork, matte black metal fixtures, and warm amber lighting to create an urban retreat.",
    image: "/images/project-4.jpg",
  }
];
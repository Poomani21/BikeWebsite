// White-label configuration. Edit values here to rebrand the entire site.
window.SITE_CONFIG = {
  company: {
    name: "Velocity Motors",
    logo: "images/logo.png",
    phone: "+1 (555) 010-2040",
    whatsapp: "15550102040",
    email: "hello@velocitymotors.example",
    address: "1200 Redline Avenue, Motor City, 90210",
    mapsUrl: "https://www.google.com/maps?q=Los+Angeles&output=embed"
  },
  theme: {
    primaryColor: "#e11d2a",
    secondaryColor: "#0b0b0f"
  },
  hero: {
    title: "Ride Beyond Limits.",
    subtitle: "Discover premium motorcycles engineered for those who refuse to slow down.",
    ctaText: "Explore Bikes",
    image: "images/hero.jpg"
  },
  bikes: [
    { name: "Thunderbolt 650", price: "$8,999", image: "images/bike1.jpg",
      specs: { engine: "649cc Parallel-Twin", power: "67 HP", torque: "64 Nm", weight: "196 kg", topSpeed: "210 km/h" } },
    { name: "Nightfury 900", price: "$12,499", image: "images/bike2.jpg",
      specs: { engine: "889cc Triple", power: "119 HP", torque: "93 Nm", weight: "188 kg", topSpeed: "245 km/h" } },
    { name: "Stormrider 450", price: "$6,299", image: "images/bike3.jpg",
      specs: { engine: "451cc Twin", power: "47 HP", torque: "42 Nm", weight: "175 kg", topSpeed: "180 km/h" } },
    { name: "Apex GT 1000", price: "$16,999", image: "images/bike4.jpg",
      specs: { engine: "998cc Inline-4", power: "197 HP", torque: "113 Nm", weight: "201 kg", topSpeed: "299 km/h" } },
    { name: "Cruiser Royale", price: "$10,750", image: "images/bike5.jpg",
      specs: { engine: "1250cc V-Twin", power: "91 HP", torque: "130 Nm", weight: "245 kg", topSpeed: "195 km/h" } },
    { name: "Trailblazer ADV", price: "$11,850", image: "images/bike6.jpg",
      specs: { engine: "890cc Twin", power: "105 HP", torque: "100 Nm", weight: "210 kg", topSpeed: "220 km/h" } }
  ],
  gallery: [
    "images/bike1.jpg","images/bike2.jpg","images/bike3.jpg",
    "images/bike4.jpg","images/bike5.jpg","images/bike6.jpg",
    "images/hero.jpg","images/bike1.jpg"
  ],
  services: [
    { icon: "🔧", title: "Expert Servicing", desc: "Factory-trained technicians and genuine parts for every service." },
    { icon: "🛡️", title: "Extended Warranty", desc: "Comprehensive coverage plans to keep you riding worry-free." },
    { icon: "🏁", title: "Performance Tuning", desc: "Dyno tuning and upgrades to unlock your bike's full potential." },
    { icon: "🚚", title: "Doorstep Delivery", desc: "Free delivery within city limits with full pre-delivery inspection." },
    { icon: "💳", title: "Easy Finance", desc: "Flexible EMI options starting from 8.5% with quick approvals." },
    { icon: "🎓", title: "Riding School", desc: "Certified training programs for beginners and advanced riders." }
  ],
  whyChooseUs: [
    { number: 25, suffix: "+", label: "Years of Excellence" },
    { number: 15000, suffix: "+", label: "Happy Riders" },
    { number: 40, suffix: "+", label: "Bike Models" },
    { number: 98, suffix: "%", label: "Customer Satisfaction" }
  ],
  emi: {
    headline: "Own Your Dream Bike, Pay Easy Monthly",
    points: [
      "Interest rates starting from 8.5% p.a.",
      "Loan tenure up to 60 months",
      "Zero processing fee on select models",
      "Instant approval within 30 minutes",
      "Minimal documentation required"
    ],
    calcNote: "Sample: $10,000 for 36 months @ 9% ≈ $318/mo"
  },
  testimonials: [
    { name: "Marcus Reid", role: "Weekend Rider", text: "The buying experience was seamless. My Thunderbolt 650 rides like a dream and the after-sales service is unmatched." },
    { name: "Elena Torres", role: "Track Enthusiast", text: "Best dealership in the region. Their performance tuning transformed my Apex GT into a proper track weapon." },
    { name: "Jordan Blake", role: "Adventure Tourer", text: "Bought my Trailblazer here and toured 5 countries. The team's support on the road was phenomenal." },
    { name: "Priya Menon", role: "First-time Owner", text: "As a new rider, their riding school and patient sales team made everything stress-free. Highly recommended!" }
  ],
  faqs: [
    { q: "Do you offer test rides?", a: "Yes, complimentary test rides are available for all models. Book online or visit our showroom with a valid license." },
    { q: "What documents are needed for financing?", a: "ID proof, address proof, income proof (3 months), and PAN. Our team assists with the entire process." },
    { q: "Is home delivery available?", a: "Free doorstep delivery within 50 km of our showroom. Nominal charges apply for longer distances." },
    { q: "Do you accept trade-ins?", a: "Absolutely. Get an instant valuation for your existing bike and offset it against your new purchase." },
    { q: "What warranty is included?", a: "All new bikes ship with a 2-year manufacturer warranty, extendable up to 5 years." }
  ],
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com"
  }
};

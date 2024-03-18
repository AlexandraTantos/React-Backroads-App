import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook " },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter " },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace " },
];

export const services = [
  {
    id: 1,
    icon: " fas fa-wallet fa-fw",
    title: "saving money ",
    text: " With just a few clicks, you can book your dream vacation with confidence, knowing that your information is safe and your experience is in good hands.",
  },
  {
    id: 2,
    icon: " fas fa-tree fa-fw",
    title: "endless hiking ",
    text: " From vibrant cities and cultural attractions to breathtaking landscapes and outdoor adventures, you'll find all you desire for a memorable vacation.",
  },
  {
    id: 3,
    icon: " fas fa-socks fa-fw",
    title: "amazing comfort",
    text: " With well-trained local guides and personalized tours, you'll have the opportunity to uncover the culture, history, and traditions of each destination in a unique and engaging way.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "august 26th, 2024",
    title: "Tibet Adventure",
    info: `Prepare for an unforgettable journey to the mystical land of Tibet, where ancient traditions meet breathtaking landscapes. Our Tibet adventure tours offer you the opportunity to explore this enchanting region like never before.`,
    location: "china",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2025",
    title: "best of java",
    info: ` Welcome to Java, the vibrant heart of Indonesia, where ancient temples, lush landscapes, and rich cultural heritage await your discovery. Join us on an unforgettable journey as we explore the best that Java has to offer.`,
    location: "indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "september 15th, 2025",
    title: "explore hong kong",
    info: ` Welcome to Hong Kong, where East meets West in a dazzling fusion of culture, cuisine, and cosmopolitan flair. Get ready to experience the vibrant energy and excitement of this dynamic city with our curated tours.`,
    location: "hong kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "december 5th, 2026",
    title: "kenya highlights",
    info: ` Welcome to Kenya, the jewel of East Africa, where endless savannahs, diverse wildlife, and vibrant cultures await your discovery. Join us on an unforgettable safari adventure as we explore the natural wonders and rich heritage of this beautiful country.`,
    location: "kenya",
    duration: 20,
    cost: 3300,
  },
];

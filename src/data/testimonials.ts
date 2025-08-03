export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Luxury Home Buyer",
    avatar: "/assets/images/avatar1.jpg",
    rating: 5,
    content: "Homeverse made finding our dream home effortless. Their attention to detail and market knowledge is unparalleled. We couldn't be happier with our new penthouse!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Real Estate Investor",
    avatar: "/assets/images/avatar2.jpg",
    rating: 5,
    content: "As an investor with multiple properties, I appreciate Homeverse's data-driven approach. They've helped me build a portfolio that consistently outperforms the market."
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "First-time Buyer",
    avatar: "/assets/images/avatar3.jpg",
    rating: 5,
    content: "The team at Homeverse made what seemed like an overwhelming process completely manageable. We got our dream home within our budget and timeline!"
  }
];
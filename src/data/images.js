export const IMAGES = {
  hero: 'https://images.pexels.com/photos/24357101/pexels-photo-24357101.jpeg?auto=compress&cs=tinysrgb&w=1920',
  about: 'https://images.pexels.com/photos/29181494/pexels-photo-29181494.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/11806482/pexels-photo-11806482.jpeg?auto=compress&cs=tinysrgb&w=1920',
  portfolio: {
    bathroom1: 'https://images.pexels.com/photos/6032429/pexels-photo-6032429.jpeg?auto=compress&cs=tinysrgb&w=800',
    bathroom2: 'https://images.pexels.com/photos/7147294/pexels-photo-7147294.jpeg?auto=compress&cs=tinysrgb&w=800',
    bathroom3: 'https://images.pexels.com/photos/7195883/pexels-photo-7195883.jpeg?auto=compress&cs=tinysrgb&w=800',
    kitchen1: 'https://images.pexels.com/photos/10486271/pexels-photo-10486271.jpeg?auto=compress&cs=tinysrgb&w=800',
    kitchen2: 'https://images.pexels.com/photos/8584040/pexels-photo-8584040.jpeg?auto=compress&cs=tinysrgb&w=800',
    outdoor1: 'https://images.pexels.com/photos/9690090/pexels-photo-9690090.jpeg?auto=compress&cs=tinysrgb&w=800',
    living1: 'https://images.pexels.com/photos/7031622/pexels-photo-7031622.jpeg?auto=compress&cs=tinysrgb&w=800',
    living2: 'https://images.pexels.com/photos/6899354/pexels-photo-6899354.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
};

export const PORTFOLIO_ITEMS = [
  { id: 1, title: 'Marble Bathroom Renovation', category: 'Bathroom', image: IMAGES.portfolio.bathroom1 },
  { id: 2, title: 'Modern Kitchen Backsplash', category: 'Kitchen', image: IMAGES.portfolio.kitchen1 },
  { id: 3, title: 'Contemporary Bathroom Design', category: 'Bathroom', image: IMAGES.portfolio.bathroom2 },
  { id: 4, title: 'Spacious Kitchen Floor Tiles', category: 'Kitchen', image: IMAGES.portfolio.kitchen2 },
  { id: 5, title: 'Garden Patio Stone Work', category: 'Outdoor', image: IMAGES.portfolio.outdoor1 },
  { id: 6, title: 'Luxury Marble Bathroom', category: 'Bathroom', image: IMAGES.portfolio.bathroom3 },
  { id: 7, title: 'Living Room Floor Tiles', category: 'Living Room', image: IMAGES.portfolio.living1 },
  { id: 8, title: 'Modern Interior Tiling', category: 'Living Room', image: IMAGES.portfolio.living2 },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Wanjiku',
    role: 'Homeowner, Lavington',
    avatar: 'https://i.pravatar.cc/80?u=sarah-wanjiku',
    text: 'They did our bathroom tiles in two days. Clean work, no mess, and the finish is perfect. Would definitely hire again.',
  },
  {
    id: 2,
    name: 'James Omondi',
    role: 'Property Developer',
    avatar: 'https://i.pravatar.cc/80?u=james-omondi',
    text: 'Professional and reliable. We\'ve used Lilian Tile Solutions for three projects now. They always deliver quality work on time.',
  },
  {
    id: 3,
    name: 'Grace Muthoni',
    role: 'Homeowner, Westlands',
    avatar: 'https://i.pravatar.cc/80?u=grace-muthoni',
    text: 'Fair pricing and great communication throughout. Our kitchen floor tiles look amazing. Highly recommend their services.',
  },
];

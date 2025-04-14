import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  // Pakistani Section
  {
    id: 'p1',
    name: 'Mutton Karai Regular',
    price: 4000,
    category: 'Pakistani',
    description: 'Traditional mutton karai cooked with special spices',
    variants: [
      { size: 'Half', price: 2000 },
      { size: 'Full', price: 4000 }
    ]
  },
  {
    id: 'p2',
    name: 'Mutton Namkeen',
    price: 4000,
    category: 'Pakistani',
    description: 'Salt-based mutton dish with aromatic spices',
    variants: [
      { size: 'Half', price: 2000 },
      { size: 'Full', price: 4000 }
    ]
  },
  {
    id: 'p3',
    name: 'Mutton Mughlai Karai',
    price: 4000,
    category: 'Pakistani',
    description: 'Rich and creamy Mughlai-style mutton preparation',
    variants: [
      { size: 'Half', price: 2000 },
      { size: 'Full', price: 4000 }
    ]
  },
  {
    id: 'p4',
    name: 'Haks Special Handi',
    price: 3200,
    category: 'Pakistani',
    description: 'Signature handi dish with special spice blend',
    variants: [
      { size: 'Half', price: 1700 },
      { size: 'Full', price: 3200 }
    ]
  },
  {
    id: 'p5',
    name: 'Afghani Herb Handi',
    price: 3000,
    category: 'Pakistani',
    description: 'Afghan-style handi with fresh herbs',
    variants: [
      { size: 'Half', price: 1500 },
      { size: 'Full', price: 3000 }
    ]
  },
  {
    id: 'p6',
    name: 'Chicken White Karai',
    price: 3000,
    category: 'Pakistani',
    description: 'Creamy white chicken karai',
    variants: [
      { size: 'Half', price: 1500 },
      { size: 'Full', price: 3000 }
    ]
  },
  {
    id: 'p7',
    name: 'Chicken Steam Roast',
    price: 2200,
    category: 'Pakistani',
    description: 'Whole chicken steam roasted (1 kg)',
    variants: [
      { size: 'Full', price: 2200 }
    ]
  },
  {
    id: 'p8',
    name: 'Daal Mash Makhni',
    price: 1200,
    category: 'Pakistani',
    description: 'Creamy black lentils cooked with butter',
    variants: [
      { size: 'Full', price: 1200 }
    ]
  },
  {
    id: 'p9',
    name: 'Mix Vegetable',
    price: 900,
    category: 'Pakistani',
    description: 'Assorted vegetables cooked in Pakistani style',
    variants: [
      { size: 'Full', price: 900 }
    ]
  },
  {
    id: 'p10',
    name: 'Mutton Pulao',
    price: 1050,
    category: 'Pakistani',
    description: 'Aromatic rice cooked with tender mutton',
    variants: [
      { size: 'Full', price: 1050 }
    ]
  },
  {
    id: 'p11',
    name: 'Chicken Pulao',
    price: 900,
    category: 'Pakistani',
    description: 'Fragrant rice cooked with chicken pieces',
    variants: [
      { size: 'Full', price: 900 }
    ]
  },
  // Breads
  {
    id: 'b1',
    name: 'Garlic Naan',
    price: 100,
    category: 'Pakistani',
    description: 'Naan bread topped with garlic'
  },
  {
    id: 'b2',
    name: 'Plain Naan',
    price: 70,
    category: 'Pakistani',
    description: 'Traditional plain naan bread'
  },
  {
    id: 'b3',
    name: 'Roghani Naan',
    price: 100,
    category: 'Pakistani',
    description: 'Naan bread enriched with ghee'
  },
  {
    id: 'b4',
    name: 'Kalwanji Naan',
    price: 100,
    category: 'Pakistani',
    description: 'Naan bread with nigella seeds'
  },
  {
    id: 'b5',
    name: 'Khamiri Roti',
    price: 50,
    category: 'Pakistani',
    description: 'Traditional fermented flatbread'
  },
  // Soups
  {
    id: 's1',
    name: 'Haks Special Soup',
    price: 1800,
    category: 'Pakistani',
    description: 'Signature special soup',
    variants: [
      { size: 'Half', price: 900 },
      { size: 'Full', price: 1800 }
    ]
  },
  {
    id: 's2',
    name: 'Chicken Corn Soup',
    price: 1800,
    category: 'Pakistani',
    description: 'Classic chicken soup with sweet corn',
    variants: [
      { size: 'Half', price: 900 },
      { size: 'Full', price: 1800 }
    ]
  },
  {
    id: 's3',
    name: 'Hot and Sour Soup',
    price: 1800,
    category: 'Pakistani',
    description: 'Spicy and tangy soup',
    variants: [
      { size: 'Half', price: 900 },
      { size: 'Full', price: 1800 }
    ]
  },
  // Rice & Noodles
  {
    id: 'r1',
    name: 'Egg Fried Rice',
    price: 800,
    category: 'Pakistani',
    description: 'Rice stir-fried with eggs and vegetables'
  },
  {
    id: 'r2',
    name: 'Vegetable Rice',
    price: 700,
    category: 'Pakistani',
    description: 'Rice cooked with mixed vegetables'
  },
  {
    id: 'r3',
    name: 'Chicken Fried Rice',
    price: 900,
    category: 'Pakistani',
    description: 'Rice stir-fried with chicken and vegetables'
  },
  {
    id: 'r4',
    name: 'Plain Rice',
    price: 500,
    category: 'Pakistani',
    description: 'Steamed white rice'
  },
  {
    id: 'r5',
    name: 'Haks Special Rice',
    price: 1000,
    category: 'Pakistani',
    description: 'Signature special rice preparation'
  },
  // Salads & Raita
  {
    id: 'sr1',
    name: 'Fresh Garden Salad',
    price: 200,
    category: 'Pakistani',
    description: 'Fresh mixed vegetables salad'
  },
  {
    id: 'sr2',
    name: 'HAKS Special Salad',
    price: 1200,
    category: 'Pakistani',
    description: 'Signature special salad preparation'
  },
  {
    id: 'sr3',
    name: 'Zeera Raita',
    price: 200,
    category: 'Pakistani',
    description: 'Yogurt dip with roasted cumin'
  },
  {
    id: 'sr4',
    name: 'Fruit Salad',
    price: 1400,
    category: 'Pakistani',
    description: 'Fresh mixed fruits salad'
  },
  // Chinese Section (keeping existing items)
  {
    id: 'c1',
    name: 'Kung Pao Chicken',
    price: 600,
    category: 'Chinese',
    description: 'Spicy diced chicken with peanuts and vegetables'
  },
  {
    id: 'c2',
    name: 'Chowmein',
    price: 400,
    category: 'Chinese',
    description: 'Stir-fried noodles with vegetables and choice of protein'
  },
  // Other Section (keeping existing items)
  {
    id: 'o1',
    name: 'Fresh Lime',
    price: 120,
    category: 'Other',
    description: 'Refreshing lime juice with mint'
  }
];
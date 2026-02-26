import { create } from 'zustand';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  protein?: string;
  extras?: string[];
  specialInstructions?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.menuItem.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.menuItem.id === id ? { ...i, quantity } : i
      ),
    })),
  clearCart: () => set({ items: [] }),
  total: () => get().items.reduce((sum, i) => sum + i.menuItem.price * i.quantity, 0),
}));

import { IMAGES } from "./images";

export { IMAGES };

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Jollof Rice & Fried Chicken',
    description: 'Our signature jollof rice, cooked to perfection, served with succulent fried chicken.',
    price: 4500,
    image: IMAGES.jollof,
    category: 'Jollof Rice & Entrees',
    popular: true,
  },
  {
    id: '2',
    name: 'Spicy Tilapia Pepper Soup',
    description: 'A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.',
    price: 3800,
    image: IMAGES.soup,
    category: 'Seafood & Soups',
    popular: true,
  },
  {
    id: '3',
    name: 'Egusi Soup with Pounded Yam',
    description: 'Rich melon seed soup with assorted meat, served with freshly pounded yam.',
    price: 5200,
    image: IMAGES.soup,
    category: 'Seafood & Soups',
    popular: true,
  },
  {
    id: '4',
    name: 'Suya Skewers',
    description: 'Spicy grilled beef skewers with onions, tomatoes and suya spice.',
    price: 3200,
    image: IMAGES.grilled,
    category: 'Grills & Sides',
  },
  {
    id: '5',
    name: 'Fried Plantain (Dodo)',
    description: 'Golden crispy fried plantain slices, a perfect side dish.',
    price: 1500,
    image: IMAGES.plantain,
    category: 'Grills & Sides',
  },
  {
    id: '6',
    name: 'Chin Chin',
    description: 'Crunchy fried dough snack, lightly sweetened and perfectly golden.',
    price: 1200,
    image: IMAGES.snack,
    category: 'Desserts',
  },
  {
    id: '7',
    name: 'Moi Moi',
    description: 'Steamed bean pudding with eggs and fish, wrapped in banana leaves.',
    price: 2000,
    image: IMAGES.snack,
    category: 'Grills & Sides',
  },
  {
    id: '8',
    name: 'Jollof Rice & Fried Chicken (Large)',
    description: 'Double portion of our famous jollof rice with two pieces of fried chicken.',
    price: 7500,
    image: IMAGES.jollof,
    category: 'Jollof Rice & Entrees',
  },
  {
    id: '9',
    name: 'Zobo Drink',
    description: 'Refreshing hibiscus flower drink with ginger and pineapple, served chilled.',
    price: 800,
    image: IMAGES.drink,
    category: 'Beverages',
  },
  {
    id: '10',
    name: 'Chapman',
    description: 'Nigeria\'s favourite cocktail with Fanta, Sprite, cucumber and orange slices.',
    price: 1200,
    image: IMAGES.drink,
    category: 'Beverages',
  },
  {
    id: '11',
    name: 'Palm Wine',
    description: 'Traditional naturally fermented palm sap, mildly sweet and refreshing.',
    price: 1000,
    image: IMAGES.drink,
    category: 'Beverages',
  },
];

export const heroImage = IMAGES.hero;

export const categories = [
  'Jollof Rice & Entrees',
  'Seafood & Soups',
  'Grills & Sides',
  'Beverages',
  'Desserts',
];

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Pakistani' | 'Chinese' | 'Other';
  description?: string;
  variants?: Array<{
    size: string;
    price: number;
  }>;
}

export type OrderType = 'Dine In' | 'Take Away' | 'Room Guest';

export interface OrderItem extends MenuItem {
  quantity: number;
  selectedVariant?: {
    size: string;
    price: number;
  };
}

export interface Order {
  id: string;
  items: OrderItem[];
  type: OrderType;
  tableNumber?: string;
  roomNumber?: string;
  discount: number;
  notes?: string;
  total: number;
  createdAt: Date;
  status: 'pending' | 'completed' | 'cancelled';
}
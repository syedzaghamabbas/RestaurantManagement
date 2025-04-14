import React from 'react';
import { Order, OrderItem } from '../types';
import { Trash2 } from 'lucide-react';

interface OrderSummaryProps {
  items: OrderItem[];
  orderType: Order['type'];
  discount: number;
  onRemoveItem: (id: string) => void;
  onDiscountChange: (value: number) => void;
  onOrderTypeChange: (type: Order['type']) => void;
  tableNumber?: string;
  roomNumber?: string;
  onTableNumberChange?: (value: string) => void;
  onRoomNumberChange?: (value: string) => void;
}

export function OrderSummary({
  items,
  orderType,
  discount,
  onRemoveItem,
  onDiscountChange,
  onOrderTypeChange,
  tableNumber,
  roomNumber,
  onTableNumberChange,
  onRoomNumberChange,
}: OrderSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = (subtotal * discount) / 100;
  const total = subtotal - discountAmount;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Order Type
        </label>
        <select
          value={orderType}
          onChange={(e) => onOrderTypeChange(e.target.value as Order['type'])}
          className="w-full p-2 border rounded-md"
        >
          <option value="Dine In">Dine In</option>
          <option value="Take Away">Take Away</option>
          <option value="Room Guest">Room Guest</option>
        </select>
      </div>

      {orderType === 'Dine In' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Table Number
          </label>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => onTableNumberChange?.(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter table number"
          />
        </div>
      )}

      {orderType === 'Room Guest' && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Room Number
          </label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => onRoomNumberChange?.(e.target.value)}
            className="w-full p-2 border rounded-md"
            placeholder="Enter room number"
          />
        </div>
      )}

      <div className="divide-y">
        {items.map((item) => (
          <div key={item.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">
                {item.quantity} × Rs. {item.price}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold">Rs. {item.price * item.quantity}</p>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center mb-2">
          <span>Subtotal</span>
          <span className="font-semibold">Rs. {subtotal}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-2">
          <label className="text-sm">Discount (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={discount}
            onChange={(e) => onDiscountChange(Number(e.target.value))}
            className="w-20 p-1 border rounded-md"
          />
          <span className="text-sm text-gray-600">-Rs. {discountAmount}</span>
        </div>

        <div className="flex justify-between items-center text-lg font-bold">
          <span>Total</span>
          <span>Rs. {total}</span>
        </div>
      </div>
    </div>
  );
}
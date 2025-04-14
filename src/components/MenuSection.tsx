import React from 'react';
import { MenuItem } from '../types';
import { Plus, Minus } from 'lucide-react';

interface MenuSectionProps {
  category: string;
  items: MenuItem[];
  selectedItems: Record<string, number>;
  onItemSelect: (item: MenuItem, quantity: number) => void;
}

export function MenuSection({ category, items, selectedItems, onItemSelect }: MenuSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-lg font-bold mb-2">Rs. {item.price}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onItemSelect(item, (selectedItems[item.id] || 0) - 1)}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                disabled={!selectedItems[item.id]}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="font-semibold w-8 text-center">
                {selectedItems[item.id] || 0}
              </span>
              <button
                onClick={() => onItemSelect(item, (selectedItems[item.id] || 0) + 1)}
                className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
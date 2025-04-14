import React, { useEffect, useState } from 'react';
import { MenuSection } from './components/MenuSection';
import { OrderSummary } from './components/OrderSummary';
import { MenuItem, Order, OrderItem } from './types';
import { menuItems } from './data/menu';
import { UtensilsCrossed, LogOut, Search } from 'lucide-react';
import { AuthForm } from './components/AuthForm';
import { supabase } from './lib/supabase';

function App() {
  const [session, setSession] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [orderType, setOrderType] = useState<Order['type']>('Dine In');
  const [discount, setDiscount] = useState(0);
  const [tableNumber, setTableNumber] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(!!session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = Array.from(new Set(filteredMenuItems.map(item => item.category)));
  
  const orderItems: OrderItem[] = Object.entries(selectedItems)
    .filter(([, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const item = menuItems.find(item => item.id === id)!;
      return { ...item, quantity };
    });

  const handleItemSelect = (item: MenuItem, quantity: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [item.id]: Math.max(0, quantity)
    }));
  };

  const handleRemoveItem = (id: string) => {
    setSelectedItems(prev => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  };

  if (!session) {
    return <AuthForm onAuthSuccess={() => setSession(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="w-8 h-8" />
              <h1 className="text-3xl font-bold text-gray-900">Restaurant Manager</h1>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5" />
              Sign out
            </button>
          </div>
          
          {/* Search Bar */}
          <div className="mt-4 relative">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for dishes, categories, or descriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {categories.map(category => (
              <MenuSection
                key={category}
                category={category}
                items={filteredMenuItems.filter(item => item.category === category)}
                selectedItems={selectedItems}
                onItemSelect={handleItemSelect}
              />
            ))}
            {filteredMenuItems.length === 0 && (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-500">No items found matching your search.</p>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-1">
            <OrderSummary
              items={orderItems}
              orderType={orderType}
              discount={discount}
              onRemoveItem={handleRemoveItem}
              onDiscountChange={setDiscount}
              onOrderTypeChange={setOrderType}
              tableNumber={tableNumber}
              roomNumber={roomNumber}
              onTableNumberChange={setTableNumber}
              onRoomNumberChange={setRoomNumber}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
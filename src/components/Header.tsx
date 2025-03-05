import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Menu, X, Mic } from 'lucide-react';

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-emerald-600">QuickMart</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Groceries
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Fresh Produce
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Household
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium">
              Deals
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => console.log('Voice search')}
              >
                <Mic className="h-5 w-5 text-gray-400 hover:text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-emerald-600">
              <Heart className="h-6 w-6" />
            </button>
            <button className="relative text-gray-700 hover:text-emerald-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">
              Groceries
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">
              Fresh Produce
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">
              Household
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600">
              Deals
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
import React, { useState } from 'react';
import { Heart, ShoppingCart, Grid, List, Star, Plus, ShoppingBag } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Dairy & Eggs",
    products: [
      { id: 1, name: "Milk", image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&q=80" },
      { id: 2, name: "Eggs", image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80" },
      { id: 3, name: "Yoghurt", image: "https://images.unsplash.com/photo-1571212515416-fca319e08c88?auto=format&fit=crop&w=300&q=80" },
      { id: 4, name: "Butter", image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 2,
    name: "Food Cupboard",
    products: [
      { id: 5, name: "Flour", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80" },
      { id: 6, name: "Fats & Oil", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80" },
      { id: 7, name: "Rice & Cereals", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&q=80" },
      { id: 8, name: "Sugar", image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 3,
    name: "Personal Care",
    products: [
      { id: 9, name: "Oral Care", image: "https://images.unsplash.com/photo-1559591937-abc3a5eaca60?auto=format&fit=crop&w=300&q=80" },
      { id: 10, name: "Deo & Anti-Perspirant", image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?auto=format&fit=crop&w=300&q=80" },
      { id: 11, name: "Feminine Sanitary", image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&w=300&q=80" },
      { id: 12, name: "Shaving", image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?auto=format&fit=crop&w=300&q=80" }
    ]
  },
  {
    id: 4,
    name: "Electronics",
    products: [
      { id: 13, name: "TVs", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80" },
      { id: 14, name: "Sound Systems", image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=300&q=80" },
      { id: 15, name: "Fridges & Freezers", image: "https://images.unsplash.com/photo-1584568694244-14677ea5d8ed?auto=format&fit=crop&w=300&q=80" },
      { id: 16, name: "Gaming", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&w=300&q=80" }
    ]
  }
];

const products = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 299,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 128,
    stock: 50,
    tag: "Fresh",
    discount: 10,
    isPopular: true
  },
  {
    id: 2,
    name: "Fresh Avocados",
    price: 399,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviews: 96,
    stock: 30,
    tag: "Organic",
    discount: 15,
    isPopular: false
  },
  {
    id: 3,
    name: "Red Apples",
    price: 199,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    rating: 4.3,
    reviews: 75,
    stock: 100,
    tag: "Best Value",
    discount: 0,
    isPopular: true
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    price: 499,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviews: 154,
    stock: 25,
    tag: "Premium",
    discount: 20,
    isPopular: true
  }
];

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return `KSH ${price.toLocaleString()}`;
  };

  const renderProductSection = (title: string, filteredProducts: typeof products) => (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className={`grid ${
        viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'
      } gap-8`}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ${
              viewMode === 'list' ? 'flex items-center' : ''
            }`}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-emerald-50">
                <Heart className="h-5 w-5 text-gray-400 hover:text-emerald-600" />
              </button>
              {product.tag && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                  {product.tag}
                </span>
              )}
              {product.discount > 0 && (
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>

            <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-600">{product.reviews} reviews</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xl font-bold text-emerald-600">{formatPrice(product.price)}</p>
                  {product.discount > 0 && (
                    <p className="text-sm text-gray-400 line-through">
                      {formatPrice(product.price * (1 + product.discount / 100))}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                  <ShoppingBag className="h-4 w-4" />
                  <span>Buy Now</span>
                </button>
                <button className="flex items-center justify-center p-2 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-colors">
                  <ShoppingCart className="h-5 w-5" />
                </button>
              </div>

              {product.stock < 30 && (
                <p className="mt-2 text-sm text-red-600">Only {product.stock} left in stock</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMostPopularSection = () => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Most Popular</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.products.map((product) => (
                  <div key={product.id} className="relative group">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-600 text-center">{product.name}</p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 px-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400'
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-emerald-100 text-emerald-600' : 'text-gray-400'
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        {renderMostPopularSection()}
        {renderProductSection("Featured Products", products)}
        {renderProductSection("Top Deals", products.filter(p => p.discount > 0))}
      </div>
    </section>
  );
}
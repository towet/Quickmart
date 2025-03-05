import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Heart, ShoppingCart, Grid, List, Star, Plus, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';

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
    featured: true,
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
    featured: true,
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
    featured: false,
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
    featured: true,
    isPopular: true
  }
];

const weeklyDeals = [
  {
    id: 1,
    name: "Fresh Organic Bananas",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=600&q=80",
    tag: "Fresh",
    stock: 50,
    savings: "Save KSH 100",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Fresh Avocados",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=600&q=80",
    tag: "Organic",
    stock: 30,
    savings: "Save KSH 100",
    rating: 4.8,
    reviews: 96
  },
  {
    id: 3,
    name: "Red Apples",
    price: 199,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    tag: "Best Value",
    stock: 100,
    savings: "Save KSH 100",
    rating: 4.3,
    reviews: 75
  },
  {
    id: 4,
    name: "Fresh Strawberries",
    price: 499,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80",
    tag: "Premium",
    stock: 25,
    savings: "Save KSH 100",
    rating: 4.7,
    reviews: 154
  },
  {
    id: 5,
    name: "Organic Carrots Bundle",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    tag: "Organic",
    stock: 45,
    savings: "Save KSH 50",
    rating: 4.6,
    reviews: 89
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    price: 179,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    tag: "Fresh",
    stock: 60,
    savings: "Save KSH 70",
    rating: 4.4,
    reviews: 112
  },
  {
    id: 7,
    name: "Organic Bell Peppers",
    price: 259,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80",
    tag: "Organic",
    stock: 35,
    savings: "Save KSH 70",
    rating: 4.7,
    reviews: 94
  },
  {
    id: 8,
    name: "Fresh Oranges Pack",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=600&q=80",
    tag: "Best Value",
    stock: 40,
    savings: "Save KSH 100",
    rating: 4.9,
    reviews: 167
  }
];

const cleaningProducts = [
  {
    id: 1,
    name: "Harpic Power Plus Toilet Cleaner",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1585832770485-e68a5cc2b55c?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller",
    stock: 45,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 2,
    name: "Dettol Multi Surface Cleaner",
    price: 349,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1584784335607-f2535eeb6f7e?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
    stock: 30,
    rating: 4.6,
    reviews: 98
  },
  {
    id: 3,
    name: "Vim Dishwashing Liquid",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1585832770485-e68a5cc2b55c?auto=format&fit=crop&w=600&q=80",
    tag: "Value Pack",
    stock: 60,
    rating: 4.5,
    reviews: 112
  },
  {
    id: 4,
    name: "Mr Muscle Glass Cleaner",
    price: 279,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1622503174935-c27c5289f186?auto=format&fit=crop&w=600&q=80",
    tag: "New",
    stock: 40,
    rating: 4.7,
    reviews: 84
  },
  {
    id: 5,
    name: "Colin Surface Cleaner Spray",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1584784335607-f2535eeb6f7e?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
    stock: 55,
    rating: 4.4,
    reviews: 92
  },
  {
    id: 6,
    name: "Lizol Disinfectant Floor Cleaner",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1585832770485-e68a5cc2b55c?auto=format&fit=crop&w=600&q=80",
    tag: "Best Value",
    stock: 35,
    rating: 4.9,
    reviews: 178
  }
];

const electronicsProducts = [
  {
    id: 1,
    name: "Samsung 55\" 4K Smart TV",
    price: 69999,
    originalPrice: 89999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller",
    stock: 15,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro 256GB",
    price: 149999,
    originalPrice: 169999,
    image: "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=600&q=80",
    tag: "Premium",
    stock: 25,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 3,
    name: "Sony WH-1000XM4 Headphones",
    price: 29999,
    originalPrice: 34999,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
    stock: 40,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 4,
    name: "MacBook Air M2 8GB 256GB",
    price: 134999,
    originalPrice: 149999,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    tag: "New",
    stock: 20,
    rating: 4.9,
    reviews: 156
  }
];

const drinksProducts = [
  {
    id: 1,
    name: "Coca-Cola 2L Pack of 4",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    tag: "Best Value",
    stock: 120,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 2,
    name: "Fanta Orange 1.5L Pack of 6",
    price: 499,
    originalPrice: 649,
    image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
    stock: 85,
    rating: 4.4,
    reviews: 178
  },
  {
    id: 3,
    name: "Sprite 2L Pack of 4",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80",
    tag: "Value Pack",
    stock: 95,
    rating: 4.6,
    reviews: 201
  },
  {
    id: 4,
    name: "Minute Maid Pulpy Orange 1L",
    price: 159,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    tag: "Fresh",
    stock: 150,
    rating: 4.3,
    reviews: 167
  }
];

const alcoholProducts = [
  {
    id: 1,
    name: "Johnnie Walker Black Label",
    price: 3999,
    originalPrice: 4599,
    image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=600&q=80",
    tag: "Premium",
    stock: 45,
    rating: 4.8,
    reviews: 289
  },
  {
    id: 2,
    name: "Heineken Beer 6-Pack",
    price: 1299,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&w=600&q=80",
    tag: "Popular",
    stock: 120,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 3,
    name: "Absolut Vodka 750ml",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1613208602577-50fd50740a3e?auto=format&fit=crop&w=600&q=80",
    tag: "Best Seller",
    stock: 60,
    rating: 4.6,
    reviews: 198
  },
  {
    id: 4,
    name: "Glenfiddich 12 Year",
    price: 4999,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=600&q=80",
    tag: "Limited",
    stock: 25,
    rating: 4.9,
    reviews: 156
  }
];

const formatPrice = (price: number) => {
  return `KSH ${price.toLocaleString()}`;
};

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const renderProductSection = (title: string, filteredProducts: typeof products) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className={`grid ${
        viewMode === 'grid' 
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      } gap-4 sm:gap-6 lg:gap-8`}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${
              viewMode === 'list' ? 'flex flex-col sm:flex-row' : ''
            }`}
          >
            <div className={`relative aspect-square overflow-hidden rounded-t-xl ${viewMode === 'list' ? 'w-full sm:w-1/3' : ''}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${
                  product.tag === 'Fresh' ? 'bg-emerald-500' :
                  product.tag === 'Organic' ? 'bg-green-500' :
                  product.tag === 'Premium' ? 'bg-purple-500' :
                  'bg-blue-500'
                }`}>
                  {product.tag}
                </span>
              </div>
              <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 transition-colors group">
                <Heart className="h-4 w-4 text-gray-600 group-hover:text-emerald-600" />
              </button>
              {product.discount > 0 && (
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-lg">
                    -{product.discount}%
                  </span>
                </div>
              )}
            </div>

            <div className={`p-4 ${viewMode === 'list' ? 'w-full sm:w-2/3' : ''}`}>
              <h3 className="text-sm text-gray-900 font-medium line-clamp-2 mb-2 h-10">
                {product.name}
              </h3>
              
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-gray-600">{product.reviews} reviews</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-gray-900">KSH {product.price}</p>
                    {product.discount > 0 && (
                      <p className="text-sm text-gray-500 line-through">
                        KSH {Math.round(product.price * (1 + product.discount / 100))}
                      </p>
                    )}
                  </div>
                </div>

                {product.stock <= 30 && (
                  <p className="text-xs text-red-600 font-medium">
                    Only {product.stock} left in stock
                  </p>
                )}

                <div className="flex items-center gap-2">
                  <button className="flex-1 py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Buy Now
                  </button>
                  <button className="p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
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

  const renderWeeklyDeals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    
    const scrollNext = useCallback(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= weeklyDeals.length ? 0 : nextIndex;
      });
    }, []);
    
    const scrollPrev = () => {
      setCurrentIndex(prevIndex => {
        const prevIdx = prevIndex - 1;
        return prevIdx < 0 ? weeklyDeals.length - 1 : prevIdx;
      });
    };

    useEffect(() => {
      // Start auto-scroll
      autoScrollRef.current = setInterval(scrollNext, 3000);

      // Clear interval on component unmount
      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }, [scrollNext]);

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    // Resume auto-scroll on mouse leave
    const handleMouseLeave = () => {
      autoScrollRef.current = setInterval(scrollNext, 3000);
    };

    return (
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Deals Of The Week</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 gap-3 pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {weeklyDeals.map((deal, index) => (
              <div
                key={deal.id}
                className={`flex-none w-[calc(50%-0.5rem)] sm:w-[300px] md:w-[240px] snap-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === currentIndex || index === currentIndex + 1 ? 'opacity-100' : 'opacity-100'
                }`}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={deal.image}
                    alt={deal.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white rounded-full ${
                      deal.tag === 'Fresh' ? 'bg-emerald-500' :
                      deal.tag === 'Organic' ? 'bg-green-500' :
                      deal.tag === 'Premium' ? 'bg-purple-500' :
                      'bg-blue-500'
                    }`}>
                      {deal.tag}
                    </span>
                  </div>
                  <button className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 transition-colors group">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 group-hover:text-emerald-600" />
                  </button>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium bg-red-500 text-white rounded-lg">
                      -{Math.round((deal.originalPrice - deal.price) / deal.originalPrice * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm text-gray-900 font-medium line-clamp-2 mb-1.5 sm:mb-2 h-8 sm:h-10">
                    {deal.name}
                  </h3>
                  
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs sm:text-sm text-gray-600">{deal.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs sm:text-sm text-gray-600">{deal.reviews} reviews</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm sm:text-lg font-bold text-gray-900">KSH {deal.price}</p>
                        <p className="text-xs sm:text-sm text-gray-500 line-through">KSH {deal.originalPrice}</p>
                      </div>
                    </div>

                    {deal.stock <= 30 && (
                      <p className="text-[10px] sm:text-xs text-red-600 font-medium">Only {deal.stock} left in stock</p>
                    )}

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2">
                        <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                        Buy Now
                      </button>
                      <button className="p-1.5 sm:p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200">
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCleaningSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    
    const scrollNext = useCallback(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= cleaningProducts.length ? 0 : nextIndex;
      });
    }, []);
    
    const scrollPrev = () => {
      setCurrentIndex(prevIndex => {
        const prevIdx = prevIndex - 1;
        return prevIdx < 0 ? cleaningProducts.length - 1 : prevIdx;
      });
    };

    useEffect(() => {
      autoScrollRef.current = setInterval(scrollNext, 3000);
      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }, [scrollNext]);

    const handleMouseEnter = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    const handleMouseLeave = () => {
      autoScrollRef.current = setInterval(scrollNext, 3000);
    };

    return (
      <div className="mb-16">
        <div className="mb-8">
          <img 
            src="https://d16zmt6hgq1jhj.cloudfront.net/slider/OtQ9i8dUy6J85gvfBnvc34P6TeUDRZU7cLXwsp2F.jpg" 
            alt="Cleaning Supplies Banner"
            className="w-full h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Cleaning Essentials</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {cleaningProducts.map((product, index) => (
              <div
                key={product.id}
                className={`flex-none w-[calc(50%-0.5rem)] sm:w-[300px] md:w-[240px] snap-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === currentIndex || index === currentIndex + 1 ? 'opacity-100' : 'opacity-100'
                }`}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white rounded-full ${
                      product.tag === 'Best Seller' ? 'bg-red-500' :
                      product.tag === 'Popular' ? 'bg-emerald-500' :
                      product.tag === 'Value Pack' ? 'bg-blue-500' :
                      product.tag === 'New' ? 'bg-purple-500' :
                      'bg-orange-500'
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                  <button className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 transition-colors group">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 group-hover:text-emerald-600" />
                  </button>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium bg-red-500 text-white rounded-lg">
                      -{Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm text-gray-900 font-medium line-clamp-2 mb-1.5 sm:mb-2 h-8 sm:h-10">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs sm:text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs sm:text-sm text-gray-600">{product.reviews} reviews</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm sm:text-lg font-bold text-gray-900">KSH {product.price}</p>
                        <p className="text-xs sm:text-sm text-gray-500 line-through">KSH {product.originalPrice}</p>
                      </div>
                    </div>

                    {product.stock <= 30 && (
                      <p className="text-[10px] sm:text-xs text-red-600 font-medium">Only {product.stock} left in stock</p>
                    )}

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2">
                        <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                        Buy Now
                      </button>
                      <button className="p-1.5 sm:p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200">
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderProductCarousel = (title: string, products: any[], bannerImage: string) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);
    
    const scrollNext = useCallback(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex >= products.length ? 0 : nextIndex;
      });
    }, [products.length]);
    
    const scrollPrev = () => {
      setCurrentIndex(prevIndex => {
        const prevIdx = prevIndex - 1;
        return prevIdx < 0 ? products.length - 1 : prevIdx;
      });
    };

    useEffect(() => {
      autoScrollRef.current = setInterval(scrollNext, 3000);
      return () => {
        if (autoScrollRef.current) {
          clearInterval(autoScrollRef.current);
        }
      };
    }, [scrollNext]);

    const handleMouseEnter = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };

    const handleMouseLeave = () => {
      autoScrollRef.current = setInterval(scrollNext, 3000);
    };

    return (
      <div className="mb-16">
        <div className="mb-8">
          <img 
            src={bannerImage}
            alt={`${title} Banner`}
            className="w-full h-[200px] object-cover rounded-xl"
          />
        </div>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div 
          className="relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 pb-4"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`flex-none w-[calc(50%-0.5rem)] sm:w-[300px] md:w-[240px] snap-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === currentIndex || index === currentIndex + 1 ? 'opacity-100' : 'opacity-100'
                }`}
              >
                <div className="relative aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-white rounded-full ${
                      product.tag === 'Best Seller' ? 'bg-red-500' :
                      product.tag === 'Premium' ? 'bg-purple-500' :
                      product.tag === 'Popular' ? 'bg-emerald-500' :
                      product.tag === 'New' ? 'bg-blue-500' :
                      product.tag === 'Limited' ? 'bg-amber-500' :
                      'bg-orange-500'
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                  <button className="absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 transition-colors group">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600 group-hover:text-emerald-600" />
                  </button>
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
                    <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 text-[10px] sm:text-xs font-medium bg-red-500 text-white rounded-lg">
                      -{Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}% OFF
                    </span>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm text-gray-900 font-medium line-clamp-2 mb-1.5 sm:mb-2 h-8 sm:h-10">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2 sm:mb-3">
                    <div className="flex items-center">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-xs sm:text-sm text-gray-600">{product.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-xs sm:text-sm text-gray-600">{product.reviews} reviews</span>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm sm:text-lg font-bold text-gray-900">KSH {product.price}</p>
                        <p className="text-xs sm:text-sm text-gray-500 line-through">KSH {product.originalPrice}</p>
                      </div>
                    </div>

                    {product.stock <= 30 && (
                      <p className="text-[10px] sm:text-xs text-red-600 font-medium">Only {product.stock} left in stock</p>
                    )}

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <button className="flex-1 py-1.5 sm:py-2 px-3 sm:px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors duration-200 flex items-center justify-center gap-1.5 sm:gap-2">
                        <ShoppingBag className="h-3 w-3 sm:h-4 sm:w-4" />
                        Buy Now
                      </button>
                      <button className="p-1.5 sm:p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-lg transition-colors duration-200">
                        <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end mb-8">
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

        <div className="mb-16">
          <img 
            src="https://cdn.quickmart.co.ke/resized/2000_500/2024_07_1722154512-TopBannerArtwork1024x36002png"
            alt="Top Banner"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {renderWeeklyDeals()}
        {renderProductSection('Featured Products', products.filter(p => p.featured))}
        {renderProductSection('Top Deals', products.filter(p => p.discount > 0))}
        {renderMostPopularSection()}
        {renderProductCarousel('Electronics', electronicsProducts, 'https://d16zmt6hgq1jhj.cloudfront.net/slider/OwryrzX0E7DY7UBW6Yr9L0j0s5BNOddGUhbr5rHi.jpg')}
        {renderProductCarousel('Food & Soft Drinks', drinksProducts, 'https://quickmartexpress.com/q-assets/img/slider/slidernew.jpg')}
        {renderProductCarousel('Alcohol & Spirits', alcoholProducts, 'https://d16zmt6hgq1jhj.cloudfront.net/slider/S9jVI1gdJslRBVZfiwBywAFCnqWJU6Dl6Y7SW85K.jpg')}
      </div>
    </section>
  );
}
import { useState } from 'react';
import { Scissors, Filter } from 'lucide-react';

const Collections = () => {
  const categories = [
    'All',
    'Blouse Design',
    'Dress Design',
    'Chanyacholi Design',
    'Partywear',
    'Bridal Wear',
    'Kutchi Art'
  ];

  const [activeCategory, setActiveCategory] = useState('All');

  // Sample collection items - in a real app, these would come from an API
  const collectionItems = [
    {
      id: 1,
      title: 'Traditional Cotton Blouse',
      category: 'Blouse Design',
      image: '/api/placeholder/300/400',
      description: 'Handcrafted cotton blouse with traditional embroidery'
    },
    {
      id: 2,
      title: 'Modern Fusion Dress',
      category: 'Dress Design',
      image: '/api/placeholder/300/400',
      description: 'Contemporary dress design with traditional elements'
    },
    {
      id: 3,
      title: 'Festive Chaniya Choli',
      category: 'Chanyacholi Design',
      image: '/api/placeholder/300/400',
      description: 'Vibrant chaniya choli perfect for celebrations'
    },
    {
      id: 4,
      title: 'Evening Party Gown',
      category: 'Partywear',
      image: '/api/placeholder/300/400',
      description: 'Elegant evening wear for special occasions'
    },
    {
      id: 5,
      title: 'Wedding Lehenga Set',
      category: 'Bridal Wear',
      image: '/api/placeholder/300/400',
      description: 'Luxurious bridal lehenga with intricate work'
    },
    {
      id: 6,
      title: 'Kutchi Mirror Work Blouse',
      category: 'Kutchi Art',
      image: '/api/placeholder/300/400',
      description: 'Traditional Kutchi mirror work blouse'
    },
    {
      id: 7,
      title: 'Silk Designer Blouse',
      category: 'Blouse Design',
      image: '/api/placeholder/300/400',
      description: 'Premium silk blouse with designer patterns'
    },
    {
      id: 8,
      title: 'Casual Summer Dress',
      category: 'Dress Design',
      image: '/api/placeholder/300/400',
      description: 'Light and comfortable summer dress'
    },
    {
      id: 9,
      title: 'Navratri Special Chaniya',
      category: 'Chanyacholi Design',
      image: '/api/placeholder/300/400',
      description: 'Perfect chaniya for Navratri celebrations'
    },
    {
      id: 10,
      title: 'Cocktail Party Outfit',
      category: 'Partywear',
      image: '/api/placeholder/300/400',
      description: 'Stylish outfit for cocktail parties'
    },
    {
      id: 11,
      title: 'Reception Saree Blouse',
      category: 'Bridal Wear',
      image: '/api/placeholder/300/400',
      description: 'Elegant blouse for reception ceremonies'
    },
    {
      id: 12,
      title: 'Traditional Kutchi Dress',
      category: 'Kutchi Art',
      image: '/api/placeholder/300/400',
      description: 'Authentic Kutchi traditional dress'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
            Our Collections
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our diverse portfolio of custom-designed garments, showcasing the perfect blend 
            of traditional craftsmanship and contemporary fashion.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Filter className="h-5 w-5 text-gray-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">Filter by Category:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <Scissors className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <p className="text-lg text-gray-600">
                  Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} 
                  {activeCategory !== 'All' && ` in ${activeCategory}`}
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                  >
                    <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <Scissors className="h-12 w-12 mx-auto mb-2 group-hover:text-primary-600 transition-colors" />
                          <p className="text-sm font-medium">{item.title}</p>
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white">
                          <p className="text-sm font-medium mb-2">View Design</p>
                          <div className="w-12 h-0.5 bg-white mx-auto"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Custom Designs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
              <div className="text-gray-600 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
              <div className="text-gray-600 text-sm">Design Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-6">
            Love What You See?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's create something beautiful together. Get in touch to discuss your custom design project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Start Your Project
            </a>
            <a
              href="/courses"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn the Craft
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;

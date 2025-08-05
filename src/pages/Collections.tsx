import { useState } from 'react';
import { Scissors, Filter } from 'lucide-react';
import GalleryLightbox from '../components/GalleryLightbox';

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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [showSidebar, setShowSidebar] = useState(false);

  // Sample collection items - in a real app, these would come from an API
  const collectionItems = [
    {
      id: 1,
      title: 'Traditional Cotton Blouse',
      category: 'Blouse Design',
      images: ['/collections/1.jpg', '/collections/1b.jpg', '/collections/1c.jpg'],
      description: 'Handcrafted cotton blouse with traditional embroidery'
    },
    {
      id: 2,
      title: 'Modern Fusion Dress',
      category: 'Dress Design',
      images: ['/collections/2.jpg'],
      description: 'Contemporary dress design with traditional elements'
    },
    {
      id: 3,
      title: 'Festive Chaniya Choli',
      category: 'Chanyacholi Design',
      images: ['/collections/3.jpg'],
      description: 'Vibrant chaniya choli perfect for celebrations'
    },
    {
      id: 4,
      title: 'Evening Party Gown',
      category: 'Partywear',
      images: ['/collections/4.jpg'],
      description: 'Elegant evening wear for special occasions'
    },
    {
      id: 5,
      title: 'Wedding Lehenga Set',
      category: 'Bridal Wear',
      images: ['/collections/5.jpg'],
      description: 'Luxurious bridal lehenga with intricate work'
    },
    {
      id: 6,
      title: 'Kutchi Mirror Work Blouse',
      category: 'Kutchi Art',
      images: ['/collections/6.jpg'],
      description: 'Traditional Kutchi mirror work blouse'
    },
    {
      id: 7,
      title: 'Silk Designer Blouse',
      category: 'Blouse Design',
      images: ['/collections/7.jpg'],
      description: 'Premium silk blouse with designer patterns'
    },
    {
      id: 8,
      title: 'Casual Summer Dress',
      category: 'Dress Design',
      images: ['/collections/8.jpg'],
      description: 'Light and comfortable summer dress'
    },
    {
      id: 9,
      title: 'Navratri Special Chaniya',
      category: 'Chanyacholi Design',
      images: ['/collections/9.jpg'],
      description: 'Perfect chaniya for Navratri celebrations'
    },
    {
      id: 10,
      title: 'Cocktail Party Outfit',
      category: 'Partywear',
      images: ['/collections/10.jpg'],
      description: 'Stylish outfit for cocktail parties'
    },
    {
      id: 11,
      title: 'Reception Saree Blouse',
      category: 'Bridal Wear',
      images: ['/collections/11.jpg'],
      description: 'Elegant blouse for reception ceremonies'
    },
    {
      id: 12,
      title: 'Traditional Kutchi Dress',
      category: 'Kutchi Art',
      images: ['/collections/12.jpg'],
      description: 'Authentic Kutchi traditional dress'
    }
  ];

  const filteredItems = activeCategory === 'All' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === activeCategory);

  // Group items by category for display
  const grouped = categories.filter(c => c !== 'All').map(category => ({
    category,
    items: filteredItems.filter(item => item.category === category)
  })).filter(group => group.items.length > 0);

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
          <div className="flex flex-wrap justify-center gap-3 md:hidden">
            {/* Mobile: show button to open sidebar */}
            <button
              className="px-4 py-2 bg-primary-600 text-white rounded-full font-medium"
              onClick={() => setShowSidebar(true)}
            >
              Show Categories
            </button>
          </div>
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {/* Desktop: show categories inline */}
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
        {/* Mobile sidebar overlay */}
        {showSidebar && (
          <div className="fixed inset-0 z-50 flex">
            <div className="bg-white w-64 p-6 shadow-lg h-full overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">Categories</span>
                <button onClick={() => setShowSidebar(false)} className="text-gray-500 text-2xl">&times;</button>
              </div>
              <div className="flex flex-col gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => { setActiveCategory(category); setShowSidebar(false); }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-left ${
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
            <div className="flex-1 bg-black bg-opacity-30" onClick={() => setShowSidebar(false)}></div>
          </div>
        )}
      </section>

      {/* Collections by Category */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {grouped.length === 0 ? (
            <div className="text-center py-16">
              <Scissors className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category.</p>
            </div>
          ) : (
            grouped.map(group => (
              <div key={group.category} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold font-serif text-primary-700 mb-4">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {group.items.map(item => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                    >
                      <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="object-cover w-full h-full"
                          loading="lazy"
                          style={{ display: 'block' }}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <button
                          className="mt-4 btn-primary px-6 py-2 rounded-lg font-semibold"
                          onClick={() => {
                            setLightboxImages(item.images);
                            setLightboxOpen(true);
                          }}
                        >
                          View Design
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
          <GalleryLightbox
            images={lightboxImages}
            open={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
            startIndex={0}
          />
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

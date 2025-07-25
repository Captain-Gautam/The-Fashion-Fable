import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Heart } from 'lucide-react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Custom Traditional Wear",
      description: "Expertly crafted traditional garments tailored to your measurements and preferences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Modern Fusion Outfits", 
      description: "Contemporary designs that blend traditional aesthetics with modern fashion trends.",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Wedding & Event Styling",
      description: "Special occasion wear designed to make your memorable moments even more beautiful.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Personalized Fashion Consultations",
      description: "One-on-one styling sessions to help you discover your perfect fashion style.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const featuredWorks = [
    { id: 1, image: "/featured_collections/design1.jpg" },
    { id: 2, image: "/featured_collections/design2.jpg" },
    { id: 3, image: "/featured_collections/design3.jpg" },
    { id: 4, image: "/featured_collections/design4.jpg" },
    { id: 5, image: "/featured_collections/design5.jpg" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 rounded-full text-sm font-medium border border-primary-200/50">
                    ✨ Fashion Design Studio
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    The Fashion 
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                    Fable
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Where traditional craftsmanship meets modern elegance. Create your perfect wardrobe 
                  with custom designs that reflect your unique style and personality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/collections"
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 overflow-hidden"
                >
                  <span className="relative z-10 inline-flex items-center justify-center">
                    View Collections
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/courses"
                  className="group px-8 py-4 border-2 border-primary-300 text-primary-700 rounded-full font-semibold transition-all duration-300 hover:bg-primary-50 hover:border-primary-400 hover:scale-105"
                >
                  Learn Fashion Design
                </Link>
              </div>
            </div>
            
            <div className="relative lg:ml-12">
              <div className="relative aspect-square bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-3xl overflow-hidden flex items-center justify-center backdrop-blur-sm border border-white/50">
                {/* Main Studio Image */}
                <img
                  src="/studio.jpg"
                  alt="Fashion Design Studio"
                  className="absolute inset-0 w-full h-full object-cover object-center z-0"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent z-10"></div>
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center z-20">
                  <p className="text-lg font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 bg-clip-text text-transparent drop-shadow-lg">Fashion Design Studio</p>
                  <p className="text-sm text-white drop-shadow-lg">Professional Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-600 rounded-full text-sm font-medium">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                What I Offer
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive fashion design services tailored to bring your style vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-primary-200/50 hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className={`relative z-10 text-primary-600 mb-6 p-3 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10`}>
                  {service.icon}
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                  {service.title}
                </h3>
                <p className="relative z-10 text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest designs and handcrafted fashion pieces
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {featuredWorks.map((work, idx) => (
              <div
                key={work.id}
                className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:scale-105 hover:-translate-y-2"
                onClick={() => { setLightboxOpen(true); setLightboxIndex(idx); }}
              >
                {/* Glowing border */}
                <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-400 group-hover:shadow-[0_0_24px_8px_rgba(168,85,247,0.4)] group-hover:border-opacity-80 transition-all duration-500 z-10"></div>
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                  <img
                    src={work.image}
                    alt={`Featured Design ${work.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={featuredWorks.map((work) => ({ src: work.image }))}
            index={lightboxIndex}
            on={{ view: ({ index }) => setLightboxIndex(index) }}
          />
          
          <div className="text-center mt-12">
            <Link
              to="/collections"
              className="btn-primary inline-flex items-center"
            >
              View Full Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

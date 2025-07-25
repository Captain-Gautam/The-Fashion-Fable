import { Award, Heart, Target, Users, Scissors, Star } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "500+ Happy Clients",
      description: "Served customers across Gujarat with custom fashion solutions"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Professional Training",
      description: "Certified fashion design courses with hands-on experience"
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Traditional Expertise",
      description: "Specializing in traditional Indian wear with modern touches"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Quality Craftsmanship",
      description: "Attention to detail and premium materials in every creation"
    }
  ];

  const values = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion",
      description: "Every design is crafted with love and dedication to fashion excellence."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Quality",
      description: "Using only the finest materials and techniques for lasting beauty."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer Focus",
      description: "Your satisfaction and style preferences are our top priority."
    }
  ];

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
            About the Designer
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the creative mind behind The Fashion Fable - where traditional artistry 
            meets contemporary fashion innovation.
          </p>
        </div>
      </div>

      {/* Designer Profile */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Designer Image */}
          <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
            <img
              src="/about/designer.jpg"
              alt="Minaxiben Prajapati"
              className="rounded-full w-40 h-40 md:w-56 md:h-56 object-cover border-4 border-primary-400 shadow-lg"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
            />
          </div>

          {/* Designer Story */}
          <div className="w-full">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-primary-900 mb-4">
              Minaxiben Prajapati
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Minaxiben Prajapati is a passionate and visionary fashion designer known for blending traditional aesthetics with modern styles. With years of dedication and creativity, she has transformed countless wardrobes with her unique couture and intricate craftsmanship.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Her work speaks of elegance, culture, and innovation—making every client feel confidently beautiful. Based in the culturally rich region of Kutch, Gujarat, Minaxiben draws inspiration from the traditional art forms and textile heritage of the region.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through The Fashion Fable, she not only creates stunning custom garments but also shares her knowledge through comprehensive fashion design courses, helping others discover their creative potential in the world of fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-transform duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-primary-100 p-3 rounded-lg mr-4">
                  <Target className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-gray-900">Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To be recognized as a leading name in the fashion industry by crafting timeless 
                and culturally rooted fashion that empowers women with confidence and grace.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-md transition-transform duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-6">
                <div className="bg-secondary-100 p-3 rounded-lg mr-4">
                  <Heart className="h-8 w-8 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-gray-900">Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                To deliver high-quality, custom-designed garments that reflect the identity of 
                every client, combining traditional artistry with modern trends for a 
                transformative fashion experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-gray-900 mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a legacy of excellence in fashion design and education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-primary-600 flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-primary-100">
              The principles that guide every design and interaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

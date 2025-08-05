import { Link } from 'react-router-dom';
import { Clock, Award, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 'certificate-course-90-days',
      title: 'Certificate Course with 90 Days',
      duration: '3 months',
      level: 'Comprehensive',
      price: 'Contact for pricing',
      description: 'Complete fashion design certification covering cutting, stitching, and measurement techniques.',
      curriculum: [
        'સાદી સિલાઈ (Basic Stitching)',
        'તકિયા (Pillow covers)',
        'સાદી સલવાર (Simple Salwar)',
        'સાદો ડ્રેસ (Simple Dress/Top)',
        'કોલર વાળો ડ્રેસ (Collar Dress)',
        'ધોતી સલવાર (Dhoti Salwar)',
        'નાયરા કટ્ટ કુર્તી (Nyra Cut Kurti)',
        'પેન્ટ વિથ પોકેટ (Pants with Pockets)',
        'અમરેલા લોન્ગ કુર્તી (Umbrella Long Kurti)',
        'પફ સ્લિવ (Puff Sleeves)',
        'પ્રિન્સેસ વીથ પાછળ હુક પેટર્ન (Princess with Back Hook Pattern)',
        'બેકનેક પેટર્ન (Back Neck Pattern)'
      ],
      includes: 'કટીંગ + સિલાઈ + મેજરમેન્ટ (Cutting + Stitching + Measurement)',
      featured: true
    },
    {
      id: 'unique-course',
      title: 'Unique Course',
      duration: '3 months',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Specialized course focusing on unique designs and intricate patterns.',
      curriculum: [
        'થેલી (ગોળ ચોરસ) - Bags (Round & Square)',
        'તકિયા (Pillows)',
        'તકિયા ડિઝાઈન (Pillow Designs)',
        'બેબી-ફ્રોક નેક પેટર્ન (Baby Frock Neck Patterns)',
        'ચણીયો (Chaniya)'
      ]
    },
    {
      id: 'basic-course',
      title: 'Basic Course',
      duration: '1 month',
      level: 'Beginner',
      price: 'Contact for pricing',
      description: 'Perfect starting point for beginners to learn fundamental stitching techniques.',
      curriculum: [
        'થેલી (ગોળ ચોરસ) - Basic Bags',
        'તકિયા (Pillows)',
        'તકિયા ડિઝાઈન (Pillow Designs)',
        'બેબી-ફ્રોક નેક પેટર્ન (Baby Frock Neck Patterns)',
        'ચણીયો (Chaniya)'
      ]
    },
    {
      id: 'dress-course',
      title: 'Dress Course',
      duration: '1 month',
      level: 'Intermediate',
      price: 'Contact for pricing',
      description: 'Comprehensive dress making course covering various styles and techniques.',
      curriculum: [
        'સાદો ડ્રેસ (Simple Dress)',
        'કોલરદાર ડ્રેસ (Collar Dress)',
        'ચેનવાળો ડ્રેસ (Chain Dress)',
        'સાદી સલવાર (Simple Salwar)',
        'ધોતી સલવાર (Dhoti Salwar)',
        'પટિયાલા સલવાર (Patiala Salwar)',
        'ટોપ (Tops)'
      ],
      includes: 'કટીંગ + સિલાઈ + મેજરમેન્ટ (Cutting + Stitching + Measurement)'
    },
    {
      id: 'kurti-design-course',
      title: 'Kurti Design Course',
      duration: '1 month',
      level: 'Intermediate',
      price: 'Contact for pricing',
      description: 'Specialized course focusing on various kurti designs and patterns.',
      curriculum: [
        'શ્રી કટ કુર્તી + કોલર (Shree Cut Kurti + Collar)',
        'નાયરા કટ કુર્તી (Nyra Cut Kurti)',
        'બેબી બટન (Baby Buttons)',
        'પોકેટ + પેન્ટ (Pockets + Pants)',
        'પ્લાઝો (Palazzo)',
        'ધોતી + સલવાર (Dhoti + Salwar)',
        'કેડીયા કુર્તી (Kedia Kurti)',
        'લોંગ કુર્તી (Long Kurti)',
        'અમરેલા + અંગરખા પેટર્ન કુર્તી (Umbrella + Angrakha Pattern Kurti)'
      ]
    },
    {
      id: 'simple-blouse-course',
      title: 'Simple Blouse Course',
      duration: '1 month',
      level: 'Beginner',
      price: 'Contact for pricing',
      description: 'Learn the fundamentals of blouse making with various traditional styles.',
      curriculum: [
        'સાદુ બ્લાઉઝ (Simple Blouse)',
        'કટોરી બ્લાઉઝ (Katori Blouse)',
        'ચાર ટક્સ બ્લાઉઝ (Four Tucks Blouse)',
        'પ્રિન્સકટ બ્લાઉઝ (Princess Cut Blouse)',
        'ગોળ ગળા પાઈપીંગ (Round Neck Piping)',
        'પાંદ ગળુ ડિઝાઇન (Shoulder Neck Design)',
        'મટકા ગળુ ડિઝાઇન (Matka Neck Design)'
      ]
    },
    {
      id: 'blouse-pattern-design-course',
      title: 'Blouse Pattern Design Course',
      duration: '1 month',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Advanced blouse patterns and intricate design techniques.',
      curriculum: [
        'કટોરી બ્લાઉઝ + બેક નેક પેટર્ન (Katori Blouse + Back Neck Pattern)',
        'ચાર ટક્ષ બ્લાઉઝ + સાઈડ કટ પેટર્ન (Four Tucks Blouse + Side Cut Pattern)',
        'પ્રિન્સેસ કટ બ્લાઉઝ + બોટ નેક (Princess Cut Blouse + Boat Neck)',
        'સ્લીવ પેટર્ન (Sleeve Patterns)',
        'પફ સ્લીવ (Puff Sleeves)',
        'પ્રિન્સેસ વિથ પાછળ હુક પેટર્ન (Princess with Back Hook Pattern)',
        'કોલર ચેન + બ્લાઉઝ (Collar Chain + Blouse)',
        'પ્રિન્સેસ (પેડેડ) બ્લાઉઝ (Princess Padded Blouse)'
      ]
    },
    {
      id: 'special-course',
      title: 'Special Course',
      duration: '1 month',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Exclusive designs for special occasions and intricate garments.',
      curriculum: [
        'ચણીયા ચોલી + બ્લાઉઝ (Chaniya Choli + Blouse)',
        'વન પીસ (One Piece)',
        'બેબી ફ્રોક (Baby Frock)',
        'ડિઝાઇનર ચોલી (Designer Choli)',
        'ફક્ત ચોલી બ્લાઉઝ (Only Choli Blouse)'
      ]
    },
    {
      id: 'advanced-course',
      title: 'Advanced Course',
      duration: '1 month',
      level: 'Expert',
      price: 'Contact for pricing',
      description: 'Master level course for complex designs and professional techniques.',
      curriculum: [
        'અમ્રૈલા પ્લાઝો (Umbrella Palazzo)',
        'અમ્રૈલા પ્લાઝો વિથ શોર્ટ ટોપ (Umbrella Palazzo with Short Top)',
        'અફઘાની સલવાર વિથ કુર્તી (Afghani Salwar with Kurti)',
        'પંજાબી સલવાર વિથ ટોપ (Punjabi Salwar with Top)',
        'પાકિસ્તાની સ્ટાઈલ શુટ (Pakistani Style Suit)',
        'Coord Set',
        'પેન્ટ ડિઝાઇન વિથ કુર્તી (Pant Design with Kurti)'
      ]
    }
  ];

  const requirements = {
    courseItems: [
      'કેસ (Case)',
      'બાબીન (Bobbin)',
      'બાબીન ભરવાનું (Bobbin Filling)',
      'રીલ (Reel)'
    ],
    cuttingItems: [
      'ચોક (Chalk)',
      'મેજરટેપ (Measuring Tape)',
      'કાતર (Scissors)',
      'ટાંચણી પીન (Pinning Pins)',
      'મશીનની સોય (Machine Needles)',
      'હાથ સિલાઈની સોય (Hand Stitching Needles)'
    ],
    stitchingItems: [
      'ટોપ માટે પેપર કેનવાસ (Paper Canvas for Tops)',
      'સલવાર માટે સલવાર નો રોલ (Salwar Roll for Salwars)',
      'માપ લખવા નોટબુક અને પેન (Notebook and Pen for Measurements)'
    ]
  };

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
            Fashion Design Courses
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Learn professional fashion design techniques from basic stitching to advanced pattern making. 
            All courses include hands-on training with cutting, stitching, and measurement techniques.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  course.featured ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {course.featured && (
                  <div className="bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {course.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Clock className="h-4 w-4 text-primary-600" />
                      </div>
                      <p className="text-xs text-gray-500">Duration</p>
                      <p className="text-sm font-medium text-gray-900">{course.duration}</p>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Award className="h-4 w-4 text-primary-600" />
                      </div>
                      <p className="text-xs text-gray-500">Level</p>
                      <p className="text-sm font-medium text-gray-900">{course.level}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Course Curriculum:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {course.curriculum.slice(0, 4).map((item, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                      {course.curriculum.length > 4 && (
                        <li className="text-primary-600 font-medium">
                          +{course.curriculum.length - 4} more topics
                        </li>
                      )}
                    </ul>
                  </div>

                  {course.includes && (
                    <div className="mb-6 p-3 bg-primary-50 rounded-lg">
                      <p className="text-sm text-primary-800 font-medium">
                        Includes: {course.includes}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-bold text-gray-900">{course.price}</p>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn-primary text-sm inline-flex items-center"
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      View Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-gray-900 text-center mb-12">
            Course Requirements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                કોર્સ માટે જોઈતી વસ્તુઓ
                <br />
                <span className="text-sm text-gray-600">Course Materials</span>
              </h3>
              <ul className="space-y-2">
                {requirements.courseItems.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                કટીંગ માટે જોઈતી વસ્તુઓ
                <br />
                <span className="text-sm text-gray-600">Cutting Tools</span>
              </h3>
              <ul className="space-y-2">
                {requirements.cuttingItems.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                સિલાઈ માટે જોઈતી વસ્તુઓ
                <br />
                <span className="text-sm text-gray-600">Stitching Materials</span>
              </h3>
              <ul className="space-y-2">
                {requirements.stitchingItems.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif text-white mb-6">
            Ready to Start Your Fashion Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us to enroll in any course or get more information about our training programs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Courses;

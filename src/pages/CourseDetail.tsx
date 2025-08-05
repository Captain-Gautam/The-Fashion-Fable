import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Award, BookOpen, CheckCircle } from 'lucide-react';
import CourseGallery from '../components/CourseGallery';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();

  const courses = {
    'certificate-course-90-days': {
      title: 'Certificate Course with 90 Days',
      duration: '3 months',
      level: 'Comprehensive',
      price: 'Contact for pricing',
      description: 'Complete fashion design certification covering cutting, stitching, and measurement techniques. This comprehensive course is perfect for those who want to master all aspects of fashion design.',
      longDescription: 'This 90-day certificate course is designed to provide you with comprehensive knowledge and hands-on experience in fashion design. You will learn traditional techniques combined with modern approaches to create beautiful garments. The course covers everything from basic stitching to advanced pattern making.',
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
      highlights: [
        'Comprehensive 3-month program',
        'Hands-on practical training',
        'Industry-standard techniques',
        'Certificate upon completion',
        'Small batch sizes for personalized attention',
        'All tools and materials guidance provided'
      ],
      prerequisites: 'No prior experience required',
      schedule: 'Flexible timing - Morning and Evening batches available'
    },
    'basic-course': {
      title: 'Basic Course',
      duration: '1 month',
      level: 'Beginner',
      price: 'Contact for pricing',
      description: 'Perfect starting point for beginners to learn fundamental stitching techniques.',
      longDescription: 'This basic course is ideal for beginners who want to learn the fundamentals of fashion design and stitching. You will start with simple projects and gradually build your skills.',
      curriculum: [
        'થેલી (ગોળ ચોરસ) - Basic Bags',
        'તકિયા (Pillows)',
        'તકિયા ડિઝાઈન (Pillow Designs)',
        'બેબી-ફ્રોક નેક પેટર્ન (Baby Frock Neck Patterns)',
        'ચણીયો (Chaniya)'
      ],
      includes: undefined,
      highlights: [
        'Beginner-friendly approach',
        'Basic stitching techniques',
        'Simple project-based learning',
        'Foundation for advanced courses'
      ],
      prerequisites: 'No prior experience required',
      schedule: 'Flexible timing available'
    },
    'unique-course': {
      title: 'Unique Course',
      duration: '3 months',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Specialized course focusing on unique designs and intricate patterns.',
      longDescription: 'This unique course is designed for those who want to explore advanced and creative fashion techniques. You will work on special projects and develop your own signature style.',
      curriculum: [
        'થેલી (ગોળ ચોરસ) - Bags (Round & Square)',
        'તકિયા (Pillows)',
        'તકિયા ડિઝાઈન (Pillow Designs)',
        'બેબી-ફ્રોક નેક પેટર્ન (Baby Frock Neck Patterns)',
        'ચણીયો (Chaniya)'
      ],
      includes: undefined,
      highlights: [
        'Advanced creative projects',
        'Unique pattern making',
        'Personalized guidance',
        'Portfolio development'
      ],
      prerequisites: 'Basic stitching knowledge recommended',
      schedule: 'Flexible timing available'
    },
    'dress-course': {
      title: 'Dress Course',
      duration: '1 month',
      level: 'Intermediate',
      price: 'Contact for pricing',
      description: 'Comprehensive dress making course covering various styles and techniques.',
      longDescription: 'Learn to make a variety of dress styles, from simple to advanced, with hands-on practice and expert instruction.',
      curriculum: [
        'સાદો ડ્રેસ (Simple Dress)',
        'કોલરદાર ડ્રેસ (Collar Dress)',
        'ચેનવાળો ડ્રેસ (Chain Dress)',
        'સાદી સલવાર (Simple Salwar)',
        'ધોતી સલવાર (Dhoti Salwar)',
        'પટિયાલા સલવાર (Patiala Salwar)',
        'ટોપ (Tops)'
      ],
      includes: 'કટીંગ + સિલાઈ + મેજરમેન્ટ (Cutting + Stitching + Measurement)',
      highlights: [
        'Dress making from scratch',
        'Pattern drafting',
        'Finishing techniques',
        'Project-based learning'
      ],
      prerequisites: 'Basic sewing skills',
      schedule: 'Flexible timing available'
    },
    'kurti-design-course': {
      title: 'Kurti Design Course',
      duration: '1 month',
      level: 'Intermediate',
      price: 'Contact for pricing',
      description: 'Specialized course focusing on various kurti designs and patterns.',
      longDescription: 'Master the art of kurti design with a focus on traditional and modern patterns, including hands-on practice.',
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
      ],
      includes: undefined,
      highlights: [
        'Kurti pattern mastery',
        'Modern and traditional styles',
        'Hands-on projects',
        'Expert feedback'
      ],
      prerequisites: 'Basic sewing skills',
      schedule: 'Flexible timing available'
    },
    'simple-blouse-course': {
      title: 'Simple Blouse Course',
      duration: '1 month',
      level: 'Beginner',
      price: 'Contact for pricing',
      description: 'Learn the fundamentals of blouse making with various traditional styles.',
      longDescription: 'This course covers the basics of blouse making, including traditional and modern styles, with step-by-step guidance.',
      curriculum: [
        'સાદુ બ્લાઉઝ (Simple Blouse)',
        'કટોરી બ્લાઉઝ (Katori Blouse)',
        'ચાર ટક્સ બ્લાઉઝ (Four Tucks Blouse)',
        'પ્રિન્સકટ બ્લાઉઝ (Princess Cut Blouse)',
        'ગોળ ગળા પાઈપીંગ (Round Neck Piping)',
        'પાંદ ગળુ ડિઝાઇન (Shoulder Neck Design)',
        'મટકા ગળુ ડિઝાઇન (Matka Neck Design)'
      ],
      includes: undefined,
      highlights: [
        'Traditional blouse making',
        'Pattern drafting',
        'Step-by-step instruction',
        'Beginner friendly'
      ],
      prerequisites: 'No prior experience required',
      schedule: 'Flexible timing available'
    },
    'blouse-pattern-design-course': {
      title: 'Blouse Pattern Design Course',
      duration: '1 month',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Advanced blouse patterns and intricate design techniques.',
      longDescription: 'Take your blouse making skills to the next level with advanced patterns and design techniques.',
      curriculum: [
        'કટોરી બ્લાઉઝ + બેક નેક પેટર્ન (Katori Blouse + Back Neck Pattern)',
        'ચાર ટક્ષ બ્લાઉઝ + સાઈડ કટ પેટર્ન (Four Tucks Blouse + Side Cut Pattern)',
        'પ્રિન્સેસ કટ બ્લાઉઝ + બોટ નેક (Princess Cut Blouse + Boat Neck)',
        'સ્લીવ પેટર્ન (Sleeve Patterns)',
        'પફ સ્લીવ (Puff Sleeves)',
        'પ્રિન્સેસ વિથ પાછળ હુક પેટર્ન (Princess with Back Hook Pattern)',
        'કોલર ચેન + બ્લાઉઝ (Collar Chain + Blouse)',
        'પ્રિન્સેસ (પેડેડ) બ્લાઉઝ (Princess Padded Blouse)'
      ],
      includes: undefined,
      highlights: [
        'Advanced pattern making',
        'Complex designs',
        'Professional finishing',
        'Portfolio projects'
      ],
      prerequisites: 'Simple blouse course recommended',
      schedule: 'Flexible timing available'
    },
    'special-course': {
      title: 'Special Course',
      duration: '1 month',
      level: 'Advanced',
      price: 'Contact for pricing',
      description: 'Exclusive designs for special occasions and intricate garments.',
      longDescription: 'Learn to create special occasion wear and intricate garments with expert guidance and creative freedom.',
      curriculum: [
        'ચણીયા ચોલી + બ્લાઉઝ (Chaniya Choli + Blouse)',
        'વન પીસ (One Piece)',
        'બેબી ફ્રોક (Baby Frock)',
        'ડિઝાઇનર ચોલી (Designer Choli)',
        'ફક્ત ચોલી બ્લાઉઝ (Only Choli Blouse)'
      ],
      includes: undefined,
      highlights: [
        'Special occasion designs',
        'Creative garment making',
        'Expert mentorship',
        'Showcase opportunities'
      ],
      prerequisites: 'Intermediate sewing skills',
      schedule: 'Flexible timing available'
    },
    'advanced-course': {
      title: 'Advanced Course',
      duration: '1 month',
      level: 'Expert',
      price: 'Contact for pricing',
      description: 'Master level course for complex designs and professional techniques.',
      longDescription: 'This course is for those who want to master complex designs and professional techniques in fashion design.',
      curriculum: [
        'અમ્રૈલા પ્લાઝો (Umbrella Palazzo)',
        'અમ્રૈલા પ્લાઝો વિથ શોર્ટ ટોપ (Umbrella Palazzo with Short Top)',
        'અફઘાની સલવાર વિથ કુર્તી (Afghani Salwar with Kurti)',
        'પંજાબી સલવાર વિથ ટોપ (Punjabi Salwar with Top)',
        'પાકિસ્તાની સ્ટાઈલ શુટ (Pakistani Style Suit)',
        'Coord Set',
        'પેન્ટ ડિઝાઇન વિથ કુર્તી (Pant Design with Kurti)'
      ],
      includes: undefined,
      highlights: [
        'Expert-level projects',
        'Professional techniques',
        'Portfolio building',
        'Career guidance'
      ],
      prerequisites: 'Advanced sewing skills',
      schedule: 'Flexible timing available'
    },
  };

  const courseImages: Record<string, string[]> = {
    'certificate-course-90-days': [
      '/courses/certificate-course-90-days/1.jpg',
      '/courses/certificate-course-90-days/2.jpg',
      '/courses/certificate-course-90-days/3.jpg',
      '/courses/certificate-course-90-days/4.jpg'
    ],
    'basic-course': [
      '/courses/basic-course/1.jpg',
      '/courses/basic-course/2.jpg',
      '/courses/basic-course/3.jpg'
    ],
    'unique-course': [
      '/courses/unique-course/1.jpg',
      '/courses/unique-course/2.jpg',
      '/courses/unique-course/3.jpg'
    ],
    'dress-course': [
      '/courses/dress-course/1.jpg',
      '/courses/dress-course/2.jpg',
      '/courses/dress-course/3.jpg'
    ],
    'kurti-design-course': [
      '/courses/kurti-design-course/1.jpg',
      '/courses/kurti-design-course/2.jpg',
      '/courses/kurti-design-course/3.jpg'
    ],
    'simple-blouse-course': [
      '/courses/simple-blouse-course/1.jpg',
      '/courses/simple-blouse-course/2.jpg',
      '/courses/simple-blouse-course/3.jpg'
    ],
    'blouse-pattern-design-course': [
      '/courses/blouse-pattern-design-course/1.jpg',
      '/courses/blouse-pattern-design-course/2.jpg',
      '/courses/blouse-pattern-design-course/3.jpg'
    ],
    'special-course': [
      '/courses/special-course/1.jpg',
      '/courses/special-course/2.jpg',
      '/courses/special-course/3.jpg'
    ],
    'advanced-course': [
      '/courses/advanced-course/1.jpg',
      '/courses/advanced-course/2.jpg',
      '/courses/advanced-course/3.jpg'
    ]
  };

  const course = courseId ? courses[courseId as keyof typeof courses] : null;

  if (!course) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h1>
        <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
        <Link
          to="/courses"
          className="btn-primary inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/courses"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {course.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                  <Clock className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-gray-900">{course.duration}</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                  <Award className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Level</p>
                  <p className="font-semibold text-gray-900">{course.level}</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4 shadow-sm">
                  <BookOpen className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-gray-900">{course.price}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-lg sticky top-8 flex flex-col items-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enroll Now</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Start your fashion design journey with expert guidance and hands-on training.
                </p>
                <Link
                  to="/contact"
                  className="w-full btn-primary text-center block mb-4"
                >
                  Contact for Enrollment
                </Link>
              </div>
              <CourseGallery
                images={courseImages[courseId!] || []}
                buttonClassName="w-full bg-gradient-to-r from-fuchsia-600 via-pink-500 to-purple-600 text-white font-bold py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg flex items-center justify-center gap-2 mt-4"
                icon
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Course Overview */}
              <div>
                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
                  Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {course.longDescription}
                </p>
              </div>

              {/* Curriculum */}
              <div>
                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
                  What You'll Learn
                </h2>
                <div className="bg-gray-50 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.curriculum.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {course.includes && (
                    <div className="mt-6 p-4 bg-primary-100 rounded-lg">
                      <p className="text-primary-800 font-medium">
                        <strong>Includes:</strong> {course.includes}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Course Highlights */}
              <div>
                <h2 className="text-3xl font-bold font-serif text-gray-900 mb-6">
                  Course Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-primary-600">
                      <p className="text-gray-700">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* What You Get */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Hands-on practical training',
                    'Course completion certificate',
                    'Tools and materials guidance',
                    'Lifetime support for queries',
                    'Portfolio building assistance'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Card */}
              <div className="bg-primary-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Have Questions?</h3>
                <p className="text-primary-100 text-sm mb-4">
                  Get in touch to learn more about this course or to discuss your learning goals.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm block text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold font-serif text-gray-900 text-center mb-12">
            Other Courses You Might Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(courses)
              .filter(([id]) => id !== courseId)
              .slice(0, 3)
              .map(([id, relatedCourse]) => (
                <Link
                  key={id}
                  to={`/courses/${id}`}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {relatedCourse.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedCourse.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary-600 font-medium">{relatedCourse.duration}</span>
                    <span className="text-gray-500">{relatedCourse.level}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;

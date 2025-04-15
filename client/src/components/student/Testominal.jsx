import React from 'react';
import Slider from 'react-slick';

// Import Slick Carousel CSS files (add these imports in your main JS/CSS file if preferred)
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Sample testimonial data
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Web Developer',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    testimonial:
      'This course completely changed my career. The content was insightful and the instructors were extremely knowledgeable.',
  },
  {
    name: 'John Smith',
    role: 'Software Engineer',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    testimonial:
      'I was able to learn new technologies in an efficient and structured way. I highly recommend these courses!',
  },
  {
    name: 'Alice Johnson',
    role: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/47.jpg',
    testimonial:
      'The practical examples and real-life projects helped me grasp complex concepts with ease. Absolutely worth it!',
  },
  {
    name: 'Michael Lee',
    role: 'Data Scientist',
    image: 'https://randomuser.me/api/portraits/men/48.jpg',
    testimonial:
      'A beautifully designed platform where every course is structured to deliver results. I learned a lot and had fun throughout!',
  },
  // Add more testimonials if needed...
];

const TestimonialCarousel = () => {
  // Slick slider settings for infinite circular loop and responsiveness
  const settings = {
    dots: true, // Show navigation dots below the slider
    infinite: true, // Enable infinite looping
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll per transition
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our community of learners who have transformed their careers through our courses.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  {/* Quote Icon */}
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M7.17 6A5.002 5.002 0 002 11v1a1 1 0 001 1h3a1 1 0 001-1v-1a3 3 0 00-3-3 1 1 0 010-2 5 5 0 015 5v1a3 3 0 01-3 3H4a3 3 0 01-3-3v-1a7.002 7.002 0 017-7 7.002 7.002 0 017 7v1a5 5 0 01-5 5H8a5 5 0 01-5-5v-1a7.002 7.002 0 017-7zm10 0a5.002 5.002 0 00-5 5v1a1 1 0 001 1h3a1 1 0 001-1v-1a3 3 0 00-3-3 1 1 0 010-2 5 5 0 015 5v1a3 3 0 01-3 3h-1a3 3 0 01-3-3v-1a7.002 7.002 0 017-7 7.002 7.002 0 017 7v1a5 5 0 01-5 5h-1a5 5 0 01-5-5v-1a7.002 7.002 0 017-7z" />
                  </svg>
                  <p className="mt-4 text-gray-600 italic">
                    {item.testimonial}
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center mt-6">
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="ml-4">
                    <p className="font-bold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

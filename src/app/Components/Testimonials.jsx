'use client';

import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Football Player',
    review:
      'Amazing experience! The turf was clean and booking was super easy.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
  },
  {
    id: 2,
    name: 'Sarah Khan',
    role: 'Team Manager',
    review:
      'Very smooth service and great support. Highly recommended for sports lovers.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    id: 3,
    name: 'Alex Smith',
    role: 'Cricket Player',
    review:
      'One of the best booking platforms I have used. Everything works perfectly.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            What Our Users Say
          </h2>
          <p className="text-gray-600 mt-3">
            Trusted by sports lovers and teams every day.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300"
            >
              {/* User Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold text-gray-800">
                {testimonial.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-blue-500 mb-4">
                {testimonial.role}
              </p>

              {/* Review */}
              <p className="text-gray-600">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from 'react';

const Companies = () => {
  // Company data - you can add more companies or modify as needed
  const companies = [
    {
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      url: 'https://google.com'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      url: 'https://microsoft.com'
    },
    {
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      url: 'https://apple.com'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      url: 'https://amazon.com'
    },
   
    {
      name: 'Netflix',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      url: 'https://netflix.com'
    },
    
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by the World's Best Companies
          </h2>
          {/* <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations who partner with us to transform their business
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center col-span-1 px-2 py-4 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 max-w-full object-contain  transition-all duration-300"
                style={{ maxWidth: '120px' }}
                loading="lazy"
              />
            </a>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Join 500+ companies already growing with us
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Companies;
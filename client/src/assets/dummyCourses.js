const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    courseDescription: "<h2>Learn the Basics of JavaScript</h2><p>JavaScript is a versatile programming language that powers the web. In this course, you will learn the fundamentals of JavaScript, including syntax, data types, and control structures.</p><p>This course is perfect for beginners who want to start their journey in web development. By the end of this course, you will be able to create interactive web pages and understand the core concepts of JavaScript.</p><ul><li>Understand the basics of programming</li><li>Learn how to manipulate the DOM</li><li>Create dynamic web applications</li></ul>",
    instructor: 'John Doe',
    // rating: 4.8,
    reviews: 1254,
    price: 89.99,
    discount: 10,
    category: 'Programming',
    duration: 32,
    
    bestSeller: true,
    new: false,
    isPublished: true,
    
    courseContent: [
      {
        chapterId: 'chapter1',
        chapterOrder: 1,
        chapterTitle: 'Getting Started with JavaScript',
        chapterContent: [
          { lectureId: 'lecture1', lectureTitle: 'What is JavaScript?', lectureDuration: 16, lectureUrl: 'https://youtu.be/CBWnBi-awSA', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'lecture2', lectureTitle: 'Setting Up Your Environment', lectureDuration: 19, lectureUrl: 'https://youtu.be/4l87c2aeB4I', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'chapter2',
        chapterOrder: 2,
        chapterTitle: 'Variables and Data Types',
        chapterContent: [
          { lectureId: 'lecture3', lectureTitle: 'Understanding Variables', lectureDuration: 20, lectureUrl: 'https://youtu.be/pZQeBJsGoDQ', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'lecture4', lectureTitle: 'Data Types in JavaScript', lectureDuration: 10, lectureUrl: 'https://youtu.be/ufHT2WEkkC4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: '675ac1512100b91a6d9b8b24',
    enrolledStudents: ['user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V','user_2qjlgkAqIMpiR2flWIRzvWKtE0w','user_3hKgB19KjvY12L5aTn4FoJ3m'],
    courseRatings: [
      { userId: 'user_2qjlgkAqIMpiR2flWIRzvWKtE0w', rating: 2, _id: '6773e37360cb0ab974342314' },
      { userId: 'user_3hKgB19KjvY12L5aTn4FoJ3m', rating: 2, _id: '6784f28371db1bb885453425' }
    ],
    createdAt: '2024-12-17T08:16:53.622Z',
    updatedAt: '2025-01-02T04:47:44.701Z',
    image: 'https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png',
  },
  {
    id: 2,
    title: 'Graphic Design Masterclass',
    courseDescription: "<h2>Master the Art of Visual Communication</h2><p>In this comprehensive course, you'll learn essential graphic design principles, from color theory to typography. Perfect for aspiring designers and marketers looking to elevate their visual content.</p><ul><li>Fundamentals of design theory</li><li>Working with Adobe Photoshop and Illustrator</li><li>Creating brand identities</li></ul>",
    instructor: 'Jane Smith',
    // rating: 4.6,
    reviews: 987,
    price: 69.99,
    discount: 15,
    category: 'Design',
    duration: 24,
   
    bestSeller: false,
    new: true,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-graphic-design.mp4',
    courseContent: [
      {
        chapterId: 'gdm_chap1',
        chapterOrder: 1,
        chapterTitle: 'Design Principles and Elements',
        chapterContent: [
          { lectureId: 'gdm_lec1', lectureTitle: 'Elements of Design', lectureDuration: 22, lectureUrl: 'https://youtu.be/design1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'gdm_lec2', lectureTitle: 'Color Theory Basics', lectureDuration: 18, lectureUrl: 'https://youtu.be/design2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'gdm_chap2',
        chapterOrder: 2,
        chapterTitle: 'Tools and Techniques',
        chapterContent: [
          { lectureId: 'gdm_lec3', lectureTitle: 'Adobe Photoshop Essentials', lectureDuration: 25, lectureUrl: 'https://youtu.be/design3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'gdm_lec4', lectureTitle: 'Vector Graphics with Illustrator', lectureDuration: 30, lectureUrl: 'https://youtu.be/design4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: '784bd2623211c82b7e5a9c35',
    enrolledStudents: ['user_4jKlM29LpXyZ2V7bYn5QpK4r','user_6tMnN38QqXpW3X9dCu6RrL5','user_1xAbC47DeRfT8GhIj9KlM0'],
    courseRatings: [
      { userId: 'user_4jKlM29LpXyZ2V7bYn5QpK4r', rating: 1, _id: '6795g39482ec2cc996564536' },
      { userId: 'user_6tMnN38QqXpW3X9dCu6RrL5', rating: 2, _id: '67a6h4a593fd3dda77567547' }
    ],
    createdAt: '2024-11-05T10:12:30.000Z',
    updatedAt: '2025-02-20T14:22:11.000Z',
     image: 'https://cdn.pixabay.com/photo/2012/09/29/20/43/graphic-58495_960_720.jpg',
  },
  {
    id: 3,
    title: 'Data Science Fundamentals',
    courseDescription: "<h2>Kickstart Your Data Science Journey</h2><p>Learn data analysis, visualization, and machine learning basics using Python. This course is designed for beginners looking to enter the world of data science.</p><ul><li>Pandas and NumPy for data manipulation</li><li>Matplotlib and Seaborn for visualization</li><li>Introduction to machine learning</li></ul>",
    instructor: 'Alice Johnson',
    // rating: 4.7,
    reviews: 1123,
    price: 99.99,
    discount: 20,
    category: 'Data Science',
    duration: 40,
   
    bestSeller: true,
    new: true,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-data-science.mp4',
    courseContent: [
      {
        chapterId: 'ds_chap1',
        chapterOrder: 1,
        chapterTitle: 'Python for Data Science',
        chapterContent: [
          { lectureId: 'ds_lec1', lectureTitle: 'Python Setup and Basics', lectureDuration: 20, lectureUrl: 'https://youtu.be/ds1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'ds_lec2', lectureTitle: 'Data Structures in Python', lectureDuration: 25, lectureUrl: 'https://youtu.be/ds2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'ds_chap2',
        chapterOrder: 2,
        chapterTitle: 'Data Analysis and Visualization',
        chapterContent: [
          { lectureId: 'ds_lec3', lectureTitle: 'Pandas Deep Dive', lectureDuration: 30, lectureUrl: 'https://youtu.be/ds3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'ds_lec4', lectureTitle: 'Plotting with Matplotlib', lectureDuration: 28, lectureUrl: 'https://youtu.be/ds4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: '892ce3734312d93c8f6b3d46',
    enrolledStudents: ['user_8uOpP57QrStY4X1zUp7ZyN6','user_5vNmQ67RuUvZ5Y2bVq8WsO3','user_7wXrR78SvTwA6Z3Wr9pXtP1'],
    courseRatings: [
      { userId: 'user_8uOpP57QrStY4X1zUp7ZyN6', rating: 5, _id: '67b7i5b6a4ge4eeb88678658' },
      { userId: 'user_5vNmQ67RuUvZ5Y2bVq8WsO3', rating: 4, _id: '67c8j6c7b5hf5ffc99789769' }
    ],
    createdAt: '2024-10-12T09:45:00.000Z',
    updatedAt: '2025-03-15T11:34:22.000Z',
     image: 'https://cdn.pixabay.com/photo/2024/08/20/13/21/artificial-intelligence-8983285_960_720.jpg',
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials',
    courseDescription: "<h2>Protect Systems and Networks</h2><p>This course covers fundamental cybersecurity concepts, including threat analysis, secure network design, and basic ethical hacking techniques.</p><ul><li>Network security principles</li><li>Vulnerability assessment</li><li>Introduction to penetration testing</li></ul>",
    instructor: 'Michael Lee',
    // rating: 1.5,
    reviews: 876,
    price: 79.99,
    discount: 25,
    category: 'Security',
    duration: 35,
    
    bestSeller: false,
    new: false,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-cybersecurity.mp4',
    courseContent: [
      {
        chapterId: 'cyb_chap1',
        chapterOrder: 1,
        chapterTitle: 'Introduction to Cybersecurity',
        chapterContent: [
          { lectureId: 'cyb_lec1', lectureTitle: 'Cyber Threat Landscape', lectureDuration: 24, lectureUrl: 'https://youtu.be/cyb1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'cyb_lec2', lectureTitle: 'Security Policies and Standards', lectureDuration: 20, lectureUrl: 'https://youtu.be/cyb2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'cyb_chap2',
        chapterOrder: 2,
        chapterTitle: 'Basic Ethical Hacking',
        chapterContent: [
          { lectureId: 'cyb_lec3', lectureTitle: 'Scanning and Enumeration', lectureDuration: 26, lectureUrl: 'https://youtu.be/cyb3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'cyb_lec4', lectureTitle: 'Penetration Testing Basics', lectureDuration: 30, lectureUrl: 'https://youtu.be/cyb4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: '903df4845423e04d9g7c4e57',
    enrolledStudents: ['user_9yZaS89TxUvB7Z4yXs0ZqR2','user_2aAbC90UyVwC8Z5zYt1WrM4','user_3bBcD01VzWxD9A6aZu2XsN5'],
    courseRatings: [
      { userId: 'user_9yZaS89TxUvB7Z4yXs0ZqR2', rating: 5, _id: '67d9k7d8c6ig6ggcaa898980' },
      { userId: 'user_2aAbC90UyVwC8Z5zYt1WrM4', rating: 4, _id: '67eal8e9d7jh7hhdbb909091' }
    ],
    createdAt: '2024-09-20T13:20:10.000Z',
    updatedAt: '2025-02-10T16:45:30.000Z',
    image: 'https://cdn.pixabay.com/photo/2018/01/28/00/11/hacking-3112539_1280.png',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    courseDescription: "<h2>Build Cross-Platform Mobile Apps</h2><p>Learn how to develop mobile applications using React Native. Explore component-based development and native APIs to build performant apps.</p><ul><li>React Native fundamentals</li><li>State management with Redux</li><li>Integrating native modules</li></ul>",
    instructor: 'Emily Davis',
    // rating: 2.9,
    reviews: 14,
    price: 109.99,
    discount: 30,
    category: 'Programming',
    duration: 45,
    
    bestSeller: true,
    new: false,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-mobile-dev.mp4',
    courseContent: [
      {
        chapterId: 'mob_chap1',
        chapterOrder: 1,
        chapterTitle: 'React Native Setup',
        chapterContent: [
          { lectureId: 'mob_lec1', lectureTitle: 'Environment Setup', lectureDuration: 18, lectureUrl: 'https://youtu.be/mob1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'mob_lec2', lectureTitle: 'Core Components', lectureDuration: 22, lectureUrl: 'https://youtu.be/mob2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'mob_chap2',
        chapterOrder: 2,
        chapterTitle: 'Advanced Topics',
        chapterContent: [
          { lectureId: 'mob_lec3', lectureTitle: 'Navigation and Routing', lectureDuration: 24, lectureUrl: 'https://youtu.be/mob3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'mob_lec4', lectureTitle: 'Performance Optimization', lectureDuration: 26, lectureUrl: 'https://youtu.be/mob4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: 'a014e5956534f15eah8d5f68',
    enrolledStudents: ['user_4cCdD12WxVxE1C7bYk3LmN8','user_5dDeE23XyWyF2D8cZm4MnO9','user_6eEfF34YzZxG3E9dAn5NoP0'],
    courseRatings: [
      { userId: 'user_4cCdD12WxVxE1C7bYk3LmN8', rating: 5, _id: '67fal9f0e8ki8iiecbb101102' },
      { userId: 'user_5dDeE23XyWyF2D8cZm4MnO9', rating: 5, _id: '67gbl0g1f9lj9jjfcc121213' }
    ],
    createdAt: '2024-08-15T11:30:00.000Z',
    updatedAt: '2025-03-05T09:15:45.000Z',
    image: 'https://cdn.pixabay.com/photo/2018/11/28/11/03/coffee-3843382_960_720.jpg',
  },
  {
    id: 6,
    title: 'UI/UX Design Crash Course',
    courseDescription: "<h2>Design Engaging User Experiences</h2><p>Quickly learn the essentials of UI/UX design, including wireframing, prototyping, and usability testing. Perfect for busy professionals.</p><ul><li>Wireframing with Figma</li><li>Interactive prototyping</li><li>Conducting user tests</li></ul>",
    instructor: 'Chris Martin',
    // rating: 4.4,
    reviews: 654,
    price: 59.99,
    discount: 0,
    category: 'Design',
    duration: 20,
    
    bestSeller: false,
    new: true,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-uiux.mp4',
    courseContent: [
      {
        chapterId: 'ux_chap1',
        chapterOrder: 1,
        chapterTitle: 'Foundations of UX',
        chapterContent: [
          { lectureId: 'ux_lec1', lectureTitle: 'Principles of UX Design', lectureDuration: 20, lectureUrl: 'https://youtu.be/ux1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'ux_lec2', lectureTitle: 'Gray-Box Testing Basics', lectureDuration: 18, lectureUrl: 'https://youtu.be/ux2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'ux_chap2',
        chapterOrder: 2,
        chapterTitle: 'Design Tools',
        chapterContent: [
          { lectureId: 'ux_lec3', lectureTitle: 'Figma for Beginners', lectureDuration: 24, lectureUrl: 'https://youtu.be/ux3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'ux_lec4', lectureTitle: 'Usability Testing', lectureDuration: 22, lectureUrl: 'https://youtu.be/ux4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: 'b125f6a6745g26fb9i6e7g79',
    enrolledStudents: ['user_7fFfG45YkZyH4E0eBm6OpR1','user_8gGgH56ZlAzI5F1fCn7PqS2','user_9hHhI67AmBaJ6G2gDo8QrT3'],
    courseRatings: [
      { userId: 'user_7fFfG45YkZyH4E0eBm6OpR1', rating: 4, _id: '67hbm1h2g0mk0kkgdd131324' },
      { userId: 'user_8gGgH56ZlAzI5F1fCn7PqS2', rating: 5, _id: '67icn2i3h1nl1llhee141435' }
    ],
    createdAt: '2024-07-10T12:00:00.000Z',
    updatedAt: '2025-01-28T10:20:10.000Z',
    image: 'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg',
  },
  {
    id: 7,
    title: 'Digital Marketing Strategies',
    courseDescription: "<h2>Boost Your Online Presence</h2><p>Explore key digital marketing channels including SEO, social media, and email marketing. Learn strategies to grow your brand and drive sales.</p><ul><li>Search engine optimization</li><li>Social media campaigns</li><li>Email marketing basics</li></ul>",
    instructor: 'Sophia Rodriguez',
    // rating: 4.6,
    reviews: 800,
    price: 69.99,
    discount: 10,
    category: 'Marketing',
    duration: 32,
    
    bestSeller: true,
    new: false,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-digital-marketing.mp4',
    courseContent: [
      {
        chapterId: 'dm_chap1',
        chapterOrder: 1,
        chapterTitle: 'SEO Fundamentals',
        chapterContent: [
          { lectureId: 'dm_lec1', lectureTitle: 'Keyword Research', lectureDuration: 20, lectureUrl: 'https://youtu.be/dm1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'dm_lec2', lectureTitle: 'On-Page SEO Techniques', lectureDuration: 22, lectureUrl: 'https://youtu.be/dm2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'dm_chap2',
        chapterOrder: 2,
        chapterTitle: 'Social Media Marketing',
        chapterContent: [
          { lectureId: 'dm_lec3', lectureTitle: 'Building a Social Strategy', lectureDuration: 25, lectureUrl: 'https://youtu.be/dm3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'dm_lec4', lectureTitle: 'Measuring ROI', lectureDuration: 18, lectureUrl: 'https://youtu.be/dm4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: 'c236g7b7856h37gcaj7f8h80',
    enrolledStudents: ['user_1iIjJ78BnCaK7H3hEp9StU4','user_2jJjK89CoDbL8I4iFq0TuV5','user_3kKkL90DpEcM9J5jGr1UvW6'],
    courseRatings: [
      { userId: 'user_1iIjJ78BnCaK7H3hEp9StU4', rating: 5, _id: '67jdf3j4i2om2mmiff151546' },
      { userId: 'user_2jJjK89CoDbL8I4iFq0TuV5', rating: 4, _id: '67keg4k5j3pn3nnggg161657' }
    ],
    createdAt: '2024-06-18T14:50:00.000Z',
    updatedAt: '2025-02-05T13:10:05.000Z',
    image: 'https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg',
  },
  {
    id: 8,
    title: 'Photography Masterclass',
    courseDescription: "<h2>Capture Stunning Photos</h2><p>From camera fundamentals to composition techniques, this course will help you elevate your photography skills. Ideal for hobbyists and aspiring professionals.</p><ul><li>Camera settings and modes</li><li>Lighting and composition</li><li>Post-processing workflow</li></ul>",
    instructor: 'David Wilson',
    // rating: 4.8,
    reviews: 1000,
    price: 89.99,
    discount: 5,
    category: 'Photography',
    duration: 25,
   
    bestSeller: false,
    new: true,
    isPublished: true,
    // previewVideo: 'https://www.example.com/preview-photography.mp4',
    courseContent: [
      {
        chapterId: 'photo_chap1',
        chapterOrder: 1,
        chapterTitle: 'Camera Basics',
        chapterContent: [
          { lectureId: 'photo_lec1', lectureTitle: 'Exposure Triangle', lectureDuration: 20, lectureUrl: 'https://youtu.be/photo1', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'photo_lec2', lectureTitle: 'Lens Selection', lectureDuration: 22, lectureUrl: 'https://youtu.be/photo2', isPreviewFree: false, lectureOrder: 2 }
        ]
      },
      {
        chapterId: 'photo_chap2',
        chapterOrder: 2,
        chapterTitle: 'Advanced Composition',
        chapterContent: [
          { lectureId: 'photo_lec3', lectureTitle: 'Rule of Thirds and Beyond', lectureDuration: 25, lectureUrl: 'https://youtu.be/photo3', isPreviewFree: true, lectureOrder: 1 },
          { lectureId: 'photo_lec4', lectureTitle: 'Post-Processing Techniques', lectureDuration: 30, lectureUrl: 'https://youtu.be/photo4', isPreviewFree: false, lectureOrder: 2 }
        ]
      }
    ],
    educator: 'd347h8c8967i48hdbk8g9i01',
    enrolledStudents: ['user_4lLlM12EnDbO1K7iHp2VqW3','user_5mMmN23FoEcP2L8jIq3WrX4','user_6nNnO34GpFdQ3M9kJr4XsY5'],
    courseRatings: [
      { userId: 'user_4lLlM12EnDbO1K7iHp2VqW3', rating: 5, _id: '67lef5l6k4qr4rrjhh171768' },
      { userId: 'user_5mMmN23FoEcP2L8jIq3WrX4', rating: 4, _id: '67mfg6m7m5rs5sstii181879' }
    ],
    createdAt: '2024-05-23T09:25:00.000Z',
    updatedAt: '2025-03-18T15:55:55.000Z',
     image: 'https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg',
  },
 
];

export default courses;

export const dummyDashboardData = {
  "totalEarnings": 707.38,
  "enrolledStudentsData": [
      {
          "courseTitle": "Introduction to JavaScript",
          "student": {
              "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
              "name": "Great Stack",
              "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
          }
      },
      {
          "courseTitle": "Advanced Python Programming",
          "student": {
              "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
              "name": "Great Stack",
              "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
          }
      },
      {
          "courseTitle": "Web Development Bootcamp",
          "student": {
              "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
              "name": "Great Stack",
              "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
          }
      },
      {
          "courseTitle": "Data Science with Python",
          "student": {
              "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
              "name": "Great Stack",
              "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
          }
      },
      {
          "courseTitle": "Cybersecurity Basics",
          "student": {
              "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
              "name": "Great Stack",
              "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
          }
      }
  ],
  "totalCourses": 8
}

export const dummyStudentEnrolled = [
  {
      "student": {
          "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
          "name": "GreatStack",
          "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
      },
      "courseTitle": "Introduction to JavaScript",
      "purchaseDate": "2024-12-20T08:39:55.509Z"
  },
  {
      "student": {
          "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
          "name": "GreatStack",
          "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
      },
      "courseTitle": "Introduction to JavaScript",
      "purchaseDate": "2024-12-20T08:59:49.964Z"
  },
  {
      "student": {
          "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
          "name": "GreatStack",
          "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
      },
      "courseTitle": "Advanced Python Programming",
      "purchaseDate": "2024-12-20T11:03:42.931Z"
  },
  {
      "student": {
          "_id": "user_2qQlvXyr02B4Bq6hT0Gvaa5fT9V",
          "name": "GreatStack",
          "imageUrl": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18ycVFsdmFMSkw3ckIxNHZMU2o4ZURWNEtmR2IifQ"
      },
      "courseTitle": "Web Development Bootcamp",
      "purchaseDate": "2024-12-20T11:04:48.798Z"
  }
]
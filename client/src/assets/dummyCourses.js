const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      instructor: 'John Doe',
      rating: 4.8,
      reviews: 1254,
      price: 89.99,
      discount: 10,
      category: 'Programming',
      duration: '32 hours',
      image: 'https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png',
      bestSeller: true,
      new: false,
      previewVideo: 'https://www.w3schools.com/html/mov_bbb.mp4', // sample video URL
      curriculum: [
        {
          sectionTitle: "Introduction",
          lessons: [
            "Welcome to the Course",
            "Course Overview",
            "What You'll Learn"
          ]
        },
        {
          sectionTitle: "Fundamentals",
          lessons: [
            "HTML Basics",
            "CSS Essentials",
            "JavaScript Introduction"
          ]
        },
        // Add more sections as needed
      ]
    },
    {
      id: 2,
      title: 'Graphic Design Masterclass',
      instructor: 'Jane Smith',
      rating: 4.6,
      reviews: 987,
      price: 69.99,
      discount: 15,
      category: 'Design',
      duration: '28 hours',
      image: 'https://cdn.pixabay.com/photo/2012/09/29/20/43/graphic-58495_960_720.jpg',
      bestSeller: false,
      new: true
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      instructor: 'Alice Johnson',
      rating: 4.7,
      reviews: 1123,
      price: 99.99,
      discount: 20,
      category: 'Data Science',
      duration: '40 hours',
      image: 'https://cdn.pixabay.com/photo/2024/08/20/13/21/artificial-intelligence-8983285_960_720.jpg',
      bestSeller: true,
      new: true
    },
    {
      id: 4,
      title: 'Cybersecurity Essentials',
      instructor: 'Michael Lee',
      rating: 4.5,
      reviews: 876,
      price: 79.99,
      discount: 25,
      category: 'Security',
      duration: '35 hours',
      image: 'https://cdn.pixabay.com/photo/2018/01/28/00/11/hacking-3112539_1280.png',
      bestSeller: false,
      new: false
    },
    {
      id: 5,
      title: 'Mobile App Development',
      instructor: 'Emily Davis',
      rating: 4.9,
      reviews: 1456,
      price: 109.99,
      discount: 30,
      category: 'Programming',
      duration: '45 hours',
      image: 'https://cdn.pixabay.com/photo/2018/11/28/11/03/coffee-3843382_960_720.jpg',
      bestSeller: true,
      new: false
    },
    {
      id: 6,
      title: 'UI/UX Design Crash Course',
      instructor: 'Chris Martin',
      rating: 4.4,
      reviews: 654,
      price: 59.99,
      discount: 0,
      category: 'Design',
      duration: '20 hours',
      image: 'https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg',
      bestSeller: false,
      new: true
    },
    {
      id: 7,
      title: 'Digital Marketing Strategies',
      instructor: 'Sophia Rodriguez',
      rating: 4.6,
      reviews: 800,
      price: 69.99,
      discount: 10,
      category: 'Marketing',
      duration: '30 hours',
      image: 'https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg',
      bestSeller: true,
      new: false
    },
    {
      id: 8,
      title: 'Photography Masterclass',
      instructor: 'David Wilson',
      rating: 4.8,
      reviews: 1000,
      price: 89.99,
      discount: 5,
      category: 'Photography',
      duration: '25 hours',
      image: 'https://cdn.pixabay.com/photo/2016/09/14/08/18/film-1668918_960_720.jpg',
      bestSeller: false,
      new: true
    },
    {
      id: 9,
      title: 'Financial Analysis and Modeling',
      instructor: 'Olivia Brown',
      rating: 4.7,
      reviews: 950,
      price: 79.99,
      discount: 15,
      category: 'Finance',
      duration: '38 hours',
      image: 'https://cdn.pixabay.com/photo/2016/08/06/17/34/office-1574717_960_720.jpg',
      bestSeller: false,
      new: false
    },
    {
      id: 10,
      title: 'Project Management Professional',
      instructor: 'Daniel Garcia',
      rating: 4.5,
      reviews: 720,
      price: 89.99,
      discount: 20,
      category: 'Management',
      duration: '40 hours',
      image: 'https://cdn.pixabay.com/photo/2019/02/26/09/09/clock-4021494_960_720.jpg',
      bestSeller: true,
      new: false
    }
  ];
  export default courses;
import { Event } from '@/types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Global Tech Summit 2024',
    description: 'Join industry leaders and innovators for the biggest tech event of the year. Featuring keynotes, workshops, and networking opportunities.',
    date: '2024-12-15',
    time: '09:00',
    location: {
      city: 'San Francisco',
      country: 'USA',
      venue: 'Moscone Center',
      address: '747 Howard St, San Francisco, CA 94103'
    },
    category: 'Technology',
    image: '/api/placeholder/600/400',
    price: {
      amount: 299,
      currency: 'USD'
    },
    organizer: {
      name: 'Tech Events Inc.',
      email: 'info@techevents.com',
      phone: '+1 (555) 123-4567'
    },
    capacity: 5000,
    registeredCount: 3247,
    tags: ['tech', 'innovation', 'networking', 'AI']
  },
  {
    id: '2',
    title: 'International Music Festival',
    description: 'A celebration of world music featuring artists from over 20 countries. Three days of non-stop entertainment.',
    date: '2024-11-20',
    time: '14:00',
    location: {
      city: 'London',
      country: 'UK',
      venue: 'Hyde Park',
      address: 'Hyde Park, London W2 2UH'
    },
    category: 'Music',
    image: '/api/placeholder/600/400',
    price: {
      amount: 150,
      currency: 'GBP'
    },
    organizer: {
      name: 'World Music Collective',
      email: 'events@worldmusic.co.uk',
      phone: '+44 20 7123 4567'
    },
    capacity: 50000,
    registeredCount: 42350,
    tags: ['music', 'festival', 'international', 'outdoor']
  },
  {
    id: '3',
    title: 'Startup Pitch Competition',
    description: 'Watch the next generation of entrepreneurs pitch their innovative ideas to top investors and industry experts.',
    date: '2024-11-25',
    time: '10:00',
    location: {
      city: 'Tokyo',
      country: 'Japan',
      venue: 'Tokyo International Forum',
      address: '3 Chome-5-1 Marunouchi, Chiyoda City, Tokyo'
    },
    category: 'Business',
    image: '/api/placeholder/600/400',
    price: {
      amount: 0,
      currency: 'JPY'
    },
    organizer: {
      name: 'Tokyo Startup Hub',
      email: 'contact@tokyostartup.jp',
      phone: '+81 3-1234-5678'
    },
    capacity: 800,
    registeredCount: 623,
    tags: ['startup', 'pitch', 'business', 'investors']
  },
  {
    id: '4',
    title: 'Digital Art Expo',
    description: 'Explore the future of digital art with immersive installations, NFT galleries, and interactive experiences.',
    date: '2024-12-08',
    time: '11:00',
    location: {
      city: 'Berlin',
      country: 'Germany',
      venue: 'Potsdamer Platz Gallery',
      address: 'Potsdamer Platz 1, 10785 Berlin'
    },
    category: 'Art',
    image: '/api/placeholder/600/400',
    price: {
      amount: 25,
      currency: 'EUR'
    },
    organizer: {
      name: 'Digital Arts Foundation',
      email: 'info@digitalarts.de',
      phone: '+49 30 12345678'
    },
    capacity: 1200,
    registeredCount: 890,
    tags: ['art', 'digital', 'NFT', 'gallery']
  },
  {
    id: '5',
    title: 'Sustainable Future Conference',
    description: 'Join global leaders in sustainability to discuss climate action, renewable energy, and environmental innovation.',
    date: '2024-12-01',
    time: '08:30',
    location: {
      city: 'Copenhagen',
      country: 'Denmark',
      venue: 'Bella Center',
      address: 'Center Blvd 5, 2300 København S'
    },
    category: 'Environment',
    image: '/api/placeholder/600/400',
    price: {
      amount: 180,
      currency: 'EUR'
    },
    organizer: {
      name: 'Green Future Org',
      email: 'events@greenfuture.org',
      phone: '+45 12 34 56 78'
    },
    capacity: 2000,
    registeredCount: 1456,
    tags: ['sustainability', 'climate', 'environment', 'innovation']
  },
  {
    id: '6',
    title: 'Culinary World Championship',
    description: 'The ultimate cooking competition featuring master chefs from around the globe competing for the world title.',
    date: '2024-11-30',
    time: '16:00',
    location: {
      city: 'Paris',
      country: 'France',
      venue: 'Le Grand Palais',
      address: '3 Av. du Général Eisenhower, 75008 Paris'
    },
    category: 'Food',
    image: '/api/placeholder/600/400',
    price: {
      amount: 75,
      currency: 'EUR'
    },
    organizer: {
      name: 'International Culinary Society',
      email: 'info@culinarychampionship.fr',
      phone: '+33 1 23 45 67 89'
    },
    capacity: 3000,
    registeredCount: 2567,
    tags: ['cooking', 'food', 'competition', 'international']
  },
  {
    id: '7',
    title: 'Global Health Innovation Summit',
    description: 'Healthcare professionals and researchers unite to share breakthrough innovations in medical technology and patient care.',
    date: '2024-12-20',
    time: '09:00',
    location: {
      city: 'Singapore',
      country: 'Singapore',
      venue: 'Marina Bay Sands Convention Centre',
      address: '10 Bayfront Ave, Singapore 018956'
    },
    category: 'Healthcare',
    image: '/api/placeholder/600/400',
    price: {
      amount: 450,
      currency: 'SGD'
    },
    organizer: {
      name: 'HealthTech Global',
      email: 'contact@healthtechglobal.sg',
      phone: '+65 6123 4567'
    },
    capacity: 1500,
    registeredCount: 1123,
    tags: ['healthcare', 'innovation', 'medical', 'technology']
  },
  {
    id: '8',
    title: 'Street Art Festival',
    description: 'Experience the vibrant world of street art with live graffiti sessions, workshops, and artist meetups.',
    date: '2024-11-28',
    time: '12:00',
    location: {
      city: 'Melbourne',
      country: 'Australia',
      venue: 'Hosier Lane',
      address: 'Hosier Ln, Melbourne VIC 3000'
    },
    category: 'Art',
    image: '/api/placeholder/600/400',
    price: {
      amount: 0,
      currency: 'AUD'
    },
    organizer: {
      name: 'Melbourne Street Art Collective',
      email: 'info@melbournestreetart.com.au',
      phone: '+61 3 9123 4567'
    },
    capacity: 2000,
    registeredCount: 1834,
    tags: ['street art', 'graffiti', 'urban', 'free']
  },
  {
    id: '9',
    title: 'India Tech Summit 2024',
    description: 'The largest technology conference in India featuring AI, blockchain, and digital transformation leaders from across the subcontinent.',
    date: '2024-12-10',
    time: '09:30',
    location: {
      city: 'Bangalore',
      country: 'India',
      venue: 'Bangalore International Exhibition Centre',
      address: '10th Mile, Tumkur Road, Madavara Post, Bangalore 562123'
    },
    category: 'Technology',
    image: '/api/placeholder/600/400',
    price: {
      amount: 12000,
      currency: 'INR'
    },
    organizer: {
      name: 'Tech India Foundation',
      email: 'contact@techindia.org',
      phone: '+91 80 2345 6789'
    },
    capacity: 8000,
    registeredCount: 6234,
    tags: ['tech', 'AI', 'blockchain', 'india', 'innovation']
  },
  {
    id: '10',
    title: 'DevOps & Cloud Computing Conference',
    description: 'Deep dive into modern DevOps practices, cloud architecture, and container orchestration with industry experts.',
    date: '2024-12-05',
    time: '08:00',
    location: {
      city: 'Austin',
      country: 'USA',
      venue: 'Austin Convention Center',
      address: '500 E Cesar Chavez St, Austin, TX 78701'
    },
    category: 'Technology',
    image: '/api/placeholder/600/400',
    price: {
      amount: 399,
      currency: 'USD'
    },
    organizer: {
      name: 'Cloud Native Foundation',
      email: 'events@cloudnative.org',
      phone: '+1 (512) 555-0123'
    },
    capacity: 3000,
    registeredCount: 2567,
    tags: ['devops', 'cloud', 'containers', 'kubernetes', 'tech']
  },
  {
    id: '11',
    title: 'Mumbai Fintech Revolution',
    description: 'Explore the future of financial technology in India with blockchain, digital payments, and cryptocurrency innovations.',
    date: '2024-11-22',
    time: '10:00',
    location: {
      city: 'Mumbai',
      country: 'India',
      venue: 'World Trade Center Mumbai',
      address: 'Cuffe Parade, Mumbai 400005'
    },
    category: 'Technology',
    image: '/api/placeholder/600/400',
    price: {
      amount: 8500,
      currency: 'INR'
    },
    organizer: {
      name: 'India Fintech Association',
      email: 'info@indiafintech.com',
      phone: '+91 22 6789 0123'
    },
    capacity: 2500,
    registeredCount: 1890,
    tags: ['fintech', 'blockchain', 'payments', 'cryptocurrency', 'mumbai']
  },
  {
    id: '12',
    title: 'Delhi Cultural Heritage Festival',
    description: 'Celebrate India\'s rich cultural heritage with traditional music, dance performances, art exhibitions, and culinary experiences.',
    date: '2024-12-18',
    time: '16:00',
    location: {
      city: 'New Delhi',
      country: 'India',
      venue: 'Red Fort Complex',
      address: 'Netaji Subhash Marg, Chandni Chowk, New Delhi 110006'
    },
    category: 'Art',
    image: '/api/placeholder/600/400',
    price: {
      amount: 500,
      currency: 'INR'
    },
    organizer: {
      name: 'Cultural Heritage Society of India',
      email: 'events@culturalheritage.in',
      phone: '+91 11 2345 6789'
    },
    capacity: 10000,
    registeredCount: 7892,
    tags: ['culture', 'heritage', 'music', 'dance', 'delhi']
  },
  {
    id: '13',
    title: 'Cybersecurity & Data Privacy Summit',
    description: 'Leading cybersecurity experts discuss emerging threats, data protection strategies, and the future of digital security.',
    date: '2024-11-18',
    time: '09:00',
    location: {
      city: 'London',
      country: 'UK',
      venue: 'ExCeL London',
      address: 'One Western Gateway, Royal Victoria Dock, London E16 1XL'
    },
    category: 'Technology',
    image: '/api/placeholder/600/400',
    price: {
      amount: 350,
      currency: 'GBP'
    },
    organizer: {
      name: 'Global Cybersecurity Alliance',
      email: 'info@cybersecalliance.org',
      phone: '+44 20 7890 1234'
    },
    capacity: 4000,
    registeredCount: 3456,
    tags: ['cybersecurity', 'privacy', 'data protection', 'tech', 'security']
  },
  {
    id: '14',
    title: 'Kolkata Book Fair & Literary Festival',
    description: 'Asia\'s largest book fair featuring renowned authors, publishers, and literary discussions from around the world.',
    date: '2024-12-12',
    time: '11:00',
    location: {
      city: 'Kolkata',
      country: 'India',
      venue: 'Central Park Mela Ground',
      address: 'Salt Lake City, Kolkata 700064'
    },
    category: 'Art',
    image: '/api/placeholder/600/400',
    price: {
      amount: 200,
      currency: 'INR'
    },
    organizer: {
      name: 'Publishers & Booksellers Guild',
      email: 'info@kolkatabookfair.org',
      phone: '+91 33 2345 6789'
    },
    capacity: 25000,
    registeredCount: 18567,
    tags: ['books', 'literature', 'authors', 'kolkata', 'festival']
  }
];

export const categories = [
  'All Categories',
  'Technology',
  'Music',
  'Business',
  'Art',
  'Environment',
  'Food',
  'Healthcare',
  'Sports'
];

export const countries = [
  'All Countries',
  'USA',
  'UK',
  'Japan',
  'Germany',
  'Denmark',
  'France',
  'Singapore',
  'Australia',
  'India'
];
// Easy Image Configuration - Edit this file to change gallery images
// Format: { slug: { couple: 'Name', description: '...', images: ['/path1.jpg', '/path2.jpg'] } }

export interface GalleryData {
  [key: string]: {
    couple: string;
    description: string;
    details: {
      planner?: string;
      brideOutfit?: string;
      groomOutfit?: string;
      stylists?: string;
      makeup?: string;
      hair?: string;
    };
    images: string[];
  };
}

export const galleries: GalleryData = {
  'reva-zach': {
    couple: 'Reva and Zach.',
    description:
      'Let\'s call this our "Happy New Year Wedding". We welcomed 2024 partying with Reva and Zach and we couldn\'t have asked for a better beginning for the new year.\n\nThis was quite an experience for us and the 450 American friends of Reva and Zach who flew all the way to Udaipur for this cross cultural union.',
    details: {
      planner: 'Seven Steps Weddings',
      brideOutfit: 'Tarun Tahiliani, Galia Hav',
      groomOutfit: 'Rohit Bal, Brioni',
      stylists: 'Mohit Rai and Aastha Sharma',
      makeup: 'Savleen Manchanda',
      hair: 'Amit Thakur',
    },
    images: [
      '/wedding-1.jpg',
      '/gallery-1.jpg',
      '/gallery-2.jpg',
      '/gallery-3.jpg',
      '/gallery-4.jpg',
      '/gallery-5.jpg',
      '/story-1.jpg',
      '/story-2.jpg',
    ],
  },
  'manisha-christopher': {
    couple: 'Manisha & Christopher',
    description:
      'An evening of love, style and blend of two cultures in the heart of Singapore.',
    details: {},
    images: ['/wedding-2.jpg', '/gallery-6.jpg', '/story-3.jpg', '/story-4.jpg'],
  },
  'alia-ranbir': {
    couple: 'Alia & Ranbir, Mumbai',
    description:
      'Two of the greatest actors of this generation decided to get married in the simplest possible way - in their balcony surrounded by only 30 of their closest friends and family members. We spent three days in their Apartment and witnessed love in its purest form.',
    details: {},
    images: ['/wedding-3.jpg', '/gallery-1.jpg', '/gallery-3.jpg', '/gallery-5.jpg'],
  },
  'kiara-siddharth': {
    couple: 'Kiara & Siddharth',
    description: '',
    details: {},
    images: ['/wedding-4.jpg', '/story-5.jpg', '/story-6.jpg', '/film-1.jpg'],
  },
  'joanna-matt': {
    couple: 'Joanna & Matt, Phuket',
    description:
      'Against the backdrop of the Azure ocean and on a floral altar, adorned with blooms in every shade imaginable, Joanna and Matt exchanged vows that echoed their deep affection and unwavering commitment to each other.',
    details: {},
    images: ['/story-1.jpg', '/story-2.jpg', '/ibtda-bg.jpg'],
  },
  'raina-darshan': {
    couple: 'Raina & Darshan, Greece',
    description:
      'Surrounded by calm oceans with clear skies above, Athens, Greece was a stunning location to host an elegant and bespoke wedding.',
    details: {},
    images: ['/story-2.jpg', '/story-3.jpg', '/story-4.jpg'],
  },
  'arpita-kunal': {
    couple: 'Arpita Mehta & Kunal Rawal, Mumbai',
    description:
      'Friends then, friends now, friends forever…. Some bonds do not need a seal or approval… but they only get stronger and better with this institution we call marriage.',
    details: {},
    images: [
      '/story-3.jpg',
      '/story-5.jpg',
      '/story-6.jpg',
      '/gallery-1.jpg',
      '/gallery-2.jpg',
      '/gallery-3.jpg',
      '/gallery-4.jpg',
      '/gallery-5.jpg',
      '/gallery-6.jpg',
      '/wedding-1.jpg',
      '/wedding-2.jpg',
      '/wedding-3.jpg',
    ],
  },
  'ananya-jahan': {
    couple: 'Ananya & Jahan, Delhi',
    description:
      'In a beautiful home, amidst intimacy and ecstasy, Ananya and Jahan gave their hand to each other.',
    details: {},
    images: ['/story-4.jpg', '/gallery-4.jpg', '/gallery-6.jpg'],
  },
  'meghna-karan': {
    couple: 'Meghna and Karan, Mumbai',
    description:
      'Rare is that Indian Wedding celebrated with intimacy, for intimacy. Rare is the atypical aesthetics used to decorate an age old tradition.',
    details: {},
    images: ['/story-5.jpg', '/gallery-2.jpg', '/gallery-5.jpg'],
  },
  'mona-ahmad': {
    couple: 'Mona & Ahmad, Dubai',
    description: '',
    details: {},
    images: ['/story-6.jpg', '/gallery-1.jpg', '/gallery-3.jpg'],
  },
  'alya-yahia': {
    couple: 'Alya and Yahia, Dubai',
    description:
      'We can\'t stop thanking our stars for taking us to places we have never been before, exploring cultures we have never experienced before.',
    details: {},
    images: ['/gallery-1.jpg', '/gallery-2.jpg', '/gallery-3.jpg'],
  },
  'zina-zain': {
    couple: 'Zina and Zain, Kashmir',
    description:
      'This wedding, we witnessed two love stories made for the books. Each one surreal, sublime, spiritual in its own way.',
    details: {},
    images: ['/gallery-2.jpg', '/gallery-4.jpg', '/gallery-6.jpg'],
  },
};

// Helper function to get gallery by slug
export const getGallery = (slug: string) => galleries[slug] || null;

// Helper function to get all gallery slugs
export const getAllGallerySlugs = () => Object.keys(galleries);

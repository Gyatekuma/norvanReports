import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    featuredArticle: {
      id: 1,
      title: 'Breaking: Major Climate Agreement Reached at Global Summit',
      subtitle: 'World leaders commit to ambitious carbon reduction targets in landmark deal',
      category: 'Climate',
      author: 'Sarah Johnson',
      time: '2 hours ago',
      image: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51?w=1200&h=600&fit=crop',
      readTime: '8 min read'
    },

    // Articles organized by category
    categories: {
      politics: {
        name: 'Politics',
        slug: 'politics',
        articles: [
          {
            id: 101,
            title: 'Parliament Approves New Electoral Reform Bill',
            subtitle: 'The bill introduces significant changes to voting procedures',
            category: 'Politics',
            author: 'Kwame Asante',
            time: '1 hour ago',
            image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 102,
            title: 'President Announces Cabinet Reshuffle',
            subtitle: 'Key ministries see new leadership appointments',
            category: 'Politics',
            author: 'Ama Serwaa',
            time: '3 hours ago',
            image: 'https://images.unsplash.com/photo-1575320181282-9afab399332c?w=600&h=400&fit=crop',
            readTime: '4 min read'
          },
          {
            id: 103,
            title: 'Opposition Party Calls for Economic Reforms',
            subtitle: 'Leaders demand immediate action on inflation and unemployment',
            category: 'Politics',
            author: 'Kofi Mensah',
            time: '5 hours ago',
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=600&h=400&fit=crop',
            readTime: '6 min read'
          },
          {
            id: 104,
            title: 'Regional Elections Set for December',
            subtitle: 'Electoral commission announces dates for local government polls',
            category: 'Politics',
            author: 'Efua Owusu',
            time: '6 hours ago',
            image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=600&h=400&fit=crop',
            readTime: '3 min read'
          },
          {
            id: 105,
            title: 'New Anti-Corruption Measures Introduced',
            subtitle: 'Government unveils comprehensive plan to tackle graft',
            category: 'Politics',
            author: 'Yaw Boateng',
            time: '8 hours ago',
            image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
            readTime: '7 min read'
          }
        ]
      },
      economy: {
        name: 'Economy',
        slug: 'economy',
        articles: [
          {
            id: 201,
            title: 'Central Bank Holds Interest Rates Steady',
            subtitle: 'MPC maintains policy rate amid inflation concerns',
            category: 'Economy',
            author: 'David Williams',
            time: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 202,
            title: 'Ghana Cedi Stabilizes Against Major Currencies',
            subtitle: 'Local currency shows signs of recovery after recent volatility',
            category: 'Economy',
            author: 'Abena Frimpong',
            time: '4 hours ago',
            image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&h=400&fit=crop',
            readTime: '4 min read'
          },
          {
            id: 203,
            title: 'IMF Projects 5.8% GDP Growth for Ghana',
            subtitle: 'Economic outlook remains positive despite global headwinds',
            category: 'Economy',
            author: 'Samuel Adjei',
            time: '6 hours ago',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
            readTime: '6 min read'
          },
          {
            id: 204,
            title: 'Inflation Rate Drops to 18-Month Low',
            subtitle: 'Consumer prices show continued decline for third consecutive month',
            category: 'Economy',
            author: 'Grace Mensah',
            time: '8 hours ago',
            image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 205,
            title: 'Government Issues New Treasury Bills',
            subtitle: 'High demand for short-term securities amid stable rates',
            category: 'Economy',
            author: 'Michael Osei',
            time: '10 hours ago',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
            readTime: '4 min read'
          }
        ]
      },
      business: {
        name: 'Business',
        slug: 'business',
        articles: [
          {
            id: 301,
            title: 'MTN Ghana Reports Strong Q3 Earnings',
            subtitle: 'Telecom giant sees 15% revenue growth year-over-year',
            category: 'Business',
            author: 'Jennifer Akoto',
            time: '1 hour ago',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 302,
            title: 'New Manufacturing Hub Opens in Tema',
            subtitle: 'Facility expected to create 2,000 jobs in the region',
            category: 'Business',
            author: 'Patrick Agyemang',
            time: '3 hours ago',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
            readTime: '4 min read'
          },
          {
            id: 303,
            title: 'Ghana Stock Exchange Hits Record High',
            subtitle: 'GSE Composite Index surges on banking sector gains',
            category: 'Business',
            author: 'Linda Appiah',
            time: '5 hours ago',
            image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop',
            readTime: '6 min read'
          },
          {
            id: 304,
            title: 'Cocoa Exports Surge in First Half of 2024',
            subtitle: 'Ghana remains world\'s second-largest cocoa producer',
            category: 'Business',
            author: 'Emmanuel Darko',
            time: '7 hours ago',
            image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 305,
            title: 'Banks Introduce New SME Lending Programs',
            subtitle: 'Financial institutions target small business growth',
            category: 'Business',
            author: 'Rita Mensah',
            time: '9 hours ago',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
            readTime: '4 min read'
          }
        ]
      },
      technology: {
        name: 'Technology',
        slug: 'technology',
        articles: [
          {
            id: 401,
            title: 'Ghana Launches National Digital ID System',
            subtitle: 'New platform aims to streamline government services',
            category: 'Technology',
            author: 'Michael Chen',
            time: '2 hours ago',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
            readTime: '6 min read'
          },
          {
            id: 402,
            title: 'Fintech Startups Raise $50M in Funding',
            subtitle: 'Local tech companies attract international investors',
            category: 'Technology',
            author: 'Angela Boateng',
            time: '4 hours ago',
            image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 403,
            title: '5G Network Expansion Reaches Northern Regions',
            subtitle: 'Telecoms extend high-speed coverage nationwide',
            category: 'Technology',
            author: 'Daniel Asare',
            time: '6 hours ago',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
            readTime: '4 min read'
          },
          {
            id: 404,
            title: 'Cybersecurity Center Opens in Accra',
            subtitle: 'Facility to protect critical national infrastructure',
            category: 'Technology',
            author: 'Priscilla Owusu',
            time: '8 hours ago',
            image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 405,
            title: 'E-Commerce Platforms See 40% Growth',
            subtitle: 'Online shopping becomes mainstream in urban areas',
            category: 'Technology',
            author: 'Frank Adjei',
            time: '10 hours ago',
            image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
            readTime: '4 min read'
          }
        ]
      },
      energy: {
        name: 'Energy',
        slug: 'energy',
        articles: [
          {
            id: 501,
            title: 'New Oil Discovery in Offshore Block',
            subtitle: 'Estimated reserves could boost production significantly',
            category: 'Energy',
            author: 'James Anderson',
            time: '3 hours ago',
            image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&h=400&fit=crop',
            readTime: '6 min read'
          },
          {
            id: 502,
            title: 'Solar Power Plant Inaugurated in Volta Region',
            subtitle: '100MW facility to provide clean energy to thousands',
            category: 'Energy',
            author: 'Mary Addo',
            time: '5 hours ago',
            image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
            readTime: '5 min read'
          },
          {
            id: 503,
            title: 'Fuel Prices Remain Stable This Month',
            subtitle: 'NPA maintains current pricing amid global fluctuations',
            category: 'Energy',
            author: 'Peter Kwarteng',
            time: '7 hours ago',
            image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=400&fit=crop',
            readTime: '3 min read'
          },
          {
            id: 504,
            title: 'Government Invests in Renewable Energy Grid',
            subtitle: 'Infrastructure upgrade to support green energy transition',
            category: 'Energy',
            author: 'Sandra Mensah',
            time: '9 hours ago',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop',
            readTime: '5 min read'
          }
        ]
      }
    },

    trending: [
      { id: 1, title: 'Central Bank Holds Interest Rates Steady', views: '125K' },
      { id: 2, title: 'MTN Ghana Reports Strong Q3 Earnings', views: '98K' },
      { id: 3, title: 'Ghana Launches National Digital ID System', views: '87K' },
      { id: 4, title: 'Parliament Approves New Electoral Reform Bill', views: '76K' },
      { id: 5, title: 'New Oil Discovery in Offshore Block', views: '65K' }
    ],

    opinions: [
      {
        id: 1,
        title: 'Why Economic Diversification Matters for Ghana\'s Future',
        author: 'Opinion by Dr. Rachel Green',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
      },
      {
        id: 2,
        title: 'The Case for Stronger Financial Regulation',
        author: 'Opinion by Prof. Mark Stevens',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
      }
    ]
  }),

  getters: {
    getCategoryArticles: (state) => (slug) => {
      return state.categories[slug]?.articles || []
    },
    getAllCategories: (state) => {
      return Object.values(state.categories)
    },
    getLatestNews: (state) => {
      // Combine latest articles from all categories
      const allArticles = Object.values(state.categories)
        .flatMap(cat => cat.articles)
        .sort((a, b) => a.id - b.id)
        .slice(0, 6)
      return allArticles
    }
  }
})

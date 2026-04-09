<script setup>
import { computed } from 'vue'
import { useNewsStore } from '@/stores/news'
import FeaturedArticle from '@/components/FeaturedArticle.vue'
import CategorySection from '@/components/CategorySection.vue'
import SidebarWidget from '@/components/SidebarWidget.vue'
import StockWidget from '@/components/StockWidget.vue'
import VideoSection from '@/components/VideoSection.vue'

const newsStore = useNewsStore()

// Get the latest news for the top banner section
const topBannerNews = computed(() => {
  const allArticles = Object.values(newsStore.categories)
    .flatMap(cat => cat.articles)
    .slice(0, 5) // Get 5 articles: 1 for big banner + 4 for small items
  return allArticles
})

const bigBannerArticle = computed(() => topBannerNews.value[0])
const smallBannerArticles = computed(() => topBannerNews.value.slice(1, 5))
</script>

<template>
  <div class="home">
    <!-- Top Banner Section: 4 small on left, 1 big on right -->
    <section class="top-banner-section">
      <!-- Left: 4 smaller news items -->
      <div class="small-banners">
        <article
          v-for="article in smallBannerArticles"
          :key="article.id"
          class="small-banner-card"
        >
          <img :src="article.image" :alt="article.title" class="small-banner-image" />
          <div class="small-banner-overlay">
            <span class="small-banner-category">{{ article.category }}</span>
            <h3 class="small-banner-title">{{ article.title }}</h3>
          </div>
        </article>
      </div>

      <!-- Right: 1 big banner -->
      <article class="big-banner" v-if="bigBannerArticle">
        <img :src="bigBannerArticle.image" :alt="bigBannerArticle.title" class="big-banner-image" />
        <div class="big-banner-overlay">
          <span class="big-banner-category">{{ bigBannerArticle.category }}</span>
          <h2 class="big-banner-title">{{ bigBannerArticle.title }}</h2>
          <p class="big-banner-subtitle">{{ bigBannerArticle.subtitle }}</p>
          <div class="big-banner-meta">
            <span>{{ bigBannerArticle.author }}</span>
            <span class="meta-separator">•</span>
            <span>{{ bigBannerArticle.time }}</span>
          </div>
        </div>
      </article>
    </section>

    <!-- Featured Section -->
    <section class="featured-section">
      <FeaturedArticle :article="newsStore.featuredArticle" />
    </section>

    <!-- Main Content Grid -->
    <div class="content-grid">
      <!-- Main Column -->
      <main class="main-column">
        <!-- Politics Section -->
        <CategorySection
          :category="newsStore.categories.politics"
          :limit="5"
        />

        <!-- Economy Section -->
        <CategorySection
          :category="newsStore.categories.economy"
          :limit="5"
        />

        <!-- Video Section -->
        <VideoSection />

        <!-- Business Section -->
        <CategorySection
          :category="newsStore.categories.business"
          :limit="5"
        />

        <!-- Technology Section -->
        <CategorySection
          :category="newsStore.categories.technology"
          :limit="4"
        />

        <!-- Energy Section -->
        <CategorySection
          :category="newsStore.categories.energy"
          :limit="4"
        />

        <!-- Opinion Section -->
        <section class="section opinion-section">
          <h2 class="section-title">Opinion</h2>
          <div class="opinion-grid">
            <article v-for="opinion in newsStore.opinions" :key="opinion.id" class="opinion-card">
              <img :src="opinion.image" :alt="opinion.author" class="opinion-avatar" />
              <div class="opinion-content">
                <h4 class="opinion-title">{{ opinion.title }}</h4>
                <span class="opinion-author">{{ opinion.author }}</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      <!-- Sidebar -->
      <aside class="sidebar">
        <StockWidget />

        <SidebarWidget title="Most Read" :items="newsStore.trending" />

        <div class="newsletter-box">
          <h3>Newsletter</h3>
          <p>The most important stories of the day, delivered to your inbox.</p>
          <form @submit.prevent class="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div class="ad-placeholder">
          <span>Advertisement</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

/* Top Banner Section */
.top-banner-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0.5rem;
  margin-bottom: 2rem;
  min-height: 500px;
}

/* Small Banners Grid (Left Side) */
.small-banners {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
}

.small-banner-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.small-banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.small-banner-card:hover .small-banner-image {
  transform: scale(1.05);
}

.small-banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: #fff;
}

.small-banner-category {
  display: inline-block;
  background: #0b57d4;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.5rem;
  margin-bottom: 0.5rem;
}

.small-banner-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Big Banner (Right Side) */
.big-banner {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.big-banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.big-banner:hover .big-banner-image {
  transform: scale(1.03);
}

.big-banner-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  color: #fff;
}

.big-banner-category {
  display: inline-block;
  background: #0b57d4;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.375rem 0.75rem;
  margin-bottom: 1rem;
}

.big-banner-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

.big-banner-subtitle {
  font-size: 1rem;
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.big-banner-meta {
  font-size: 0.875rem;
  opacity: 0.8;
}

.meta-separator {
  margin: 0 0.5rem;
}

/* Featured Section */
.featured-section {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #ddd;
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 3rem;
}

/* Sections */
.section {
  margin-bottom: 2.5rem;
}

.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  padding-left: 0.75rem;
  border-left: 4px solid #0b57d4;
  margin-bottom: 1.25rem;
}

/* Opinion Section */
.opinion-section {
  background: #fafafa;
  margin-left: -1.5rem;
  margin-right: -1.5rem;
  padding: 1.5rem;
}

.opinion-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.opinion-card {
  display: flex;
  gap: 1rem;
  cursor: pointer;
}

.opinion-card:hover .opinion-title {
  text-decoration: underline;
}

.opinion-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.opinion-content {
  flex: 1;
}

.opinion-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.3;
  color: #1a1a1a;
  margin-bottom: 0.375rem;
}

.opinion-author {
  font-size: 0.75rem;
  color: #666;
}

/* Sidebar */
.sidebar {
  border-left: 1px solid #e8e8e8;
  padding-left: 2rem;
}

.newsletter-box {
  background: #f5f5f5;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.newsletter-box h3 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.newsletter-box p {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.45;
  margin-bottom: 1rem;
}

.newsletter-form input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.newsletter-form input:focus {
  outline: none;
  border-color: #1a1a1a;
}

.newsletter-form button {
  width: 100%;
  padding: 0.75rem;
  background: #0b57d4;
  color: #fff;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.newsletter-form button:hover {
  background: #094bb8;
}

.ad-placeholder {
  background: #f0f0f0;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Responsive */
@media (max-width: 1024px) {
  .top-banner-section {
    grid-template-columns: 1fr 1fr;
    min-height: 400px;
  }

  .big-banner-title {
    font-size: 1.5rem;
  }

  .content-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-left: none;
    border-top: 1px solid #e8e8e8;
    padding-left: 0;
    padding-top: 2rem;
  }
}

@media (max-width: 768px) {
  .top-banner-section {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    min-height: auto;
  }

  .small-banners {
    order: 2;
    min-height: 300px;
  }

  .big-banner {
    order: 1;
    min-height: 300px;
  }

  .big-banner-title {
    font-size: 1.25rem;
  }

  .big-banner-overlay {
    padding: 1.5rem;
  }

  .opinion-grid {
    grid-template-columns: 1fr;
  }

  .opinion-section {
    margin-left: -1rem;
    margin-right: -1rem;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .small-banners {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    min-height: 400px;
  }

  .small-banner-title {
    font-size: 0.8rem;
  }
}
</style>

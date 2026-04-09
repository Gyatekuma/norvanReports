<script setup>
import ArticleCard from './ArticleCard.vue'

defineProps({
  category: {
    type: Object,
    required: true
  },
  limit: {
    type: Number,
    default: 4
  }
})
</script>

<template>
  <section class="category-section">
    <div class="section-header">
      <h2 class="section-title">{{ category.name }}</h2>
      <a :href="`/${category.slug}`" class="view-all">
        View All
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </a>
    </div>
    <div class="articles-grid">
      <ArticleCard
        v-for="(article, index) in category.articles.slice(0, limit)"
        :key="article.id"
        :article="article"
        :size="index === 0 ? 'large' : 'medium'"
      />
    </div>
  </section>
</template>

<style scoped>
.category-section {
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #e5e5e5;
}

.category-section:last-child {
  border-bottom: none;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.section-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  padding-left: 0.75rem;
  border-left: 4px solid #0b57d4;
}

.view-all {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #0b57d4;
  text-decoration: none;
  transition: gap 0.2s;
}

.view-all:hover {
  gap: 0.5rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.25rem;
}

/* First article spans 2 columns */
.articles-grid > :first-child {
  grid-column: span 2;
  grid-row: span 2;
}

@media (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: 1fr 1fr;
  }

  .articles-grid > :first-child {
    grid-column: span 2;
    grid-row: span 1;
  }
}

@media (max-width: 600px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .articles-grid > :first-child {
    grid-column: span 1;
  }

  .section-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
</style>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article class="featured-article">
    <div class="featured-image">
      <img :src="article.image" :alt="article.title" />
    </div>
    <div class="featured-content">
      <span class="category">{{ article.category }}</span>
      <h1 class="title">{{ article.title }}</h1>
      <p class="subtitle">{{ article.subtitle }}</p>
      <div class="meta">
        <span class="author">By {{ article.author }}</span>
        <span class="separator">|</span>
        <span class="time">{{ article.time }}</span>
        <span class="separator">|</span>
        <span class="read-time">{{ article.readTime }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.featured-article {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2rem;
  cursor: pointer;
}

.featured-article:hover .title {
  text-decoration: underline;
}

.featured-image {
  position: relative;
  overflow: hidden;
}

.featured-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-article:hover .featured-image img {
  transform: scale(1.02);
}

.featured-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #0b57d4;
  margin-bottom: 0.75rem;
}

.title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.125rem;
  line-height: 1.5;
  color: #4a4a4a;
  margin-bottom: 1.25rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  color: #666;
}

.author {
  font-weight: 600;
}

.separator {
  color: #ccc;
}

@media (max-width: 900px) {
  .featured-article {
    grid-template-columns: 1fr;
  }

  .featured-image img {
    height: 280px;
  }

  .title {
    font-size: 1.75rem;
  }
}
</style>

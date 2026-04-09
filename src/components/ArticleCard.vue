<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['large', 'medium', 'small'].includes(value)
  },
  showImage: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <article class="article-card" :class="[`size-${size}`]">
    <div v-if="showImage && article.image" class="card-image">
      <img :src="article.image" :alt="article.title" />
    </div>
    <div class="card-content">
      <span class="category">{{ article.category }}</span>
      <h3 class="title">{{ article.title }}</h3>
      <p v-if="article.subtitle && size !== 'small'" class="subtitle">
        {{ article.subtitle }}
      </p>
      <div class="meta">
        <span v-if="article.author" class="author">{{ article.author }}</span>
        <span v-if="article.author && article.time" class="separator">·</span>
        <span class="time">{{ article.time }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.article-card {
  cursor: pointer;
}

.article-card:hover .title {
  text-decoration: underline;
}

.card-image {
  overflow: hidden;
  margin-bottom: 0.875rem;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.article-card:hover .card-image img {
  transform: scale(1.03);
}

.category {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0b57d4;
  margin-bottom: 0.5rem;
}

.title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 0.9375rem;
  line-height: 1.45;
  color: #4a4a4a;
  margin-bottom: 0.625rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: #888;
}

.author {
  font-weight: 500;
}

.separator {
  color: #ccc;
}

/* Size variations */
.size-large {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.size-large .card-image {
  flex: 1;
  margin-bottom: 1rem;
}

.size-large .card-image img {
  height: 100%;
  min-height: 280px;
}

.size-large .title {
  font-size: 1.5rem;
}

.size-large .subtitle {
  -webkit-line-clamp: 3;
}

.size-medium .card-image img {
  height: 160px;
}

.size-medium .title {
  font-size: 1rem;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.size-medium .subtitle {
  display: none;
}

.size-small .card-image img {
  height: 140px;
}

.size-small .title {
  font-size: 0.9375rem;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 600;
}

.size-small .category {
  font-size: 0.625rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 1.125rem;
  }

  .size-large .title {
    font-size: 1.25rem;
  }

  .size-large .card-image img {
    min-height: 200px;
  }

  .size-medium .card-image img {
    height: 140px;
  }
}
</style>

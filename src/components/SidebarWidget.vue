<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="sidebar-widget">
    <h3 class="widget-title">{{ title }}</h3>
    <ul class="widget-list">
      <li v-for="(item, index) in items" :key="item.id" class="widget-item">
        <span class="item-number">{{ index + 1 }}</span>
        <div class="item-content">
          <a href="#" class="item-title">{{ item.title }}</a>
          <span v-if="item.views" class="item-views">{{ item.views }} reads</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar-widget {
  margin-bottom: 2rem;
}

.widget-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1a1a1a;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #1a1a1a;
  margin-bottom: 1rem;
}

.widget-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.widget-item {
  display: flex;
  gap: 1rem;
  padding: 0.875rem 0;
  border-bottom: 1px solid #e8e8e8;
}

.widget-item:last-child {
  border-bottom: none;
}

.item-number {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #ddd;
  line-height: 1;
  min-width: 1.5rem;
}

.item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.item-title {
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.35;
  color: #1a1a1a;
  text-decoration: none;
  transition: color 0.2s;
}

.item-title:hover {
  color: #0b57d4;
}

.item-views {
  font-size: 0.75rem;
  color: #888;
}
</style>

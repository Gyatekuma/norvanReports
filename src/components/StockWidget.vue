<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const stocks = ref([
  { symbol: 'DJIA', name: 'Dow Jones', price: 42847.32, change: 156.89, changePercent: 0.37 },
  { symbol: 'S&P 500', name: 'S&P 500', price: 5892.14, change: -12.45, changePercent: -0.21 },
  { symbol: 'NASDAQ', name: 'Nasdaq', price: 19203.67, change: 89.23, changePercent: 0.47 },
  { symbol: 'AAPL', name: 'Apple Inc.', price: 178.42, change: 2.15, changePercent: 1.22 },
  { symbol: 'GOOGL', name: 'Alphabet', price: 164.89, change: -0.87, changePercent: -0.52 },
  { symbol: 'MSFT', name: 'Microsoft', price: 425.33, change: 5.67, changePercent: 1.35 },
])

const lastUpdated = ref(new Date())

// Simulate live updates
let interval = null

const simulateUpdate = () => {
  stocks.value = stocks.value.map(stock => {
    const fluctuation = (Math.random() - 0.5) * 2
    const newChange = +(stock.change + fluctuation).toFixed(2)
    const newPrice = +(stock.price + fluctuation).toFixed(2)
    const newPercent = +((newChange / newPrice) * 100).toFixed(2)
    return {
      ...stock,
      price: newPrice,
      change: newChange,
      changePercent: newPercent
    }
  })
  lastUpdated.value = new Date()
}

onMounted(() => {
  interval = setInterval(simulateUpdate, 5000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})

const formatPrice = (price) => {
  return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}
</script>

<template>
  <div class="stock-widget">
    <div class="widget-header">
      <h3 class="widget-title">Markets</h3>
      <span class="last-updated">{{ formatTime(lastUpdated) }}</span>
    </div>

    <ul class="stock-list">
      <li v-for="stock in stocks" :key="stock.symbol" class="stock-item">
        <div class="stock-info">
          <span class="stock-symbol">{{ stock.symbol }}</span>
          <span class="stock-name">{{ stock.name }}</span>
        </div>
        <div class="stock-data">
          <span class="stock-price">{{ formatPrice(stock.price) }}</span>
          <span
            class="stock-change"
            :class="{ 'positive': stock.change > 0, 'negative': stock.change < 0 }"
          >
            <span class="change-icon">{{ stock.change > 0 ? '▲' : '▼' }}</span>
            {{ Math.abs(stock.change).toFixed(2) }} ({{ Math.abs(stock.changePercent).toFixed(2) }}%)
          </span>
        </div>
      </li>
    </ul>

    <a href="#" class="view-all">View Full Markets →</a>
  </div>
</template>

<style scoped>
.stock-widget {
  margin-bottom: 2rem;
}

.widget-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid #1a1a1a;
  margin-bottom: 0.5rem;
}

.widget-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1a1a1a;
}

.last-updated {
  font-size: 0.6875rem;
  color: #999;
}

.stock-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.stock-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.stock-item:last-child {
  border-bottom: none;
}

.stock-info {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.stock-symbol {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1a1a1a;
}

.stock-name {
  font-size: 0.6875rem;
  color: #888;
}

.stock-data {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.stock-price {
  font-size: 0.875rem;
  font-weight: 600;
  color: #1a1a1a;
}

.stock-change {
  font-size: 0.6875rem;
  font-weight: 500;
}

.stock-change.positive {
  color: #0a8043;
}

.stock-change.negative {
  color: #c41d3a;
}

.change-icon {
  font-size: 0.5rem;
  margin-right: 0.125rem;
}

.view-all {
  display: block;
  text-align: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #666;
  background: #f8f8f8;
  text-decoration: none;
  transition: all 0.2s;
}

.view-all:hover {
  background: #eee;
  color: #0b57d4;
}
</style>

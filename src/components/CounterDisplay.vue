<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()
const { count, doubleCount } = storeToRefs(counter)
</script>

<template>
  <div class="counter-display">
    <div class="count">
      <span class="label">Count:</span>
      <span class="value">{{ count }}</span>
    </div>
    <div class="double">
      <span class="label">Double:</span>
      <span class="value">{{ doubleCount }}</span>
    </div>
  </div>
</template>

<style scoped>
.counter-display {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 4px;
}

.count,
.double {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0.25rem;
}

.value {
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
}
</style>

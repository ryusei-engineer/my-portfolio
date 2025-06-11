<template>
  <section class="works">
    <div class="container">
      <h2 class="section-title">Works</h2>
      <div class="works-grid">
        <div class="work-card" v-for="(work, index) in works" :key="index">
          <img :src="work.image" :alt="work.title" />
          <div class="card-body">
            <h3>{{ work.title }}</h3>
            <p>{{ work.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const works = [
  {
    title: 'Portfolio Website',
    description: 'A responsive site built with Vue and Vite.',
    image: 'https://via.placeholder.com/600x360?text=Portfolio'
  },
  {
    title: 'Todo App',
    description: 'Task management with Vue 3 Composition API.',
    image: 'https://via.placeholder.com/600x360?text=Todo+App'
  },
  {
    title: 'Landing Page',
    description: 'Sleek landing page with animations.',
    image: 'https://via.placeholder.com/600x360?text=Landing'
  }
]
</script>

<style scoped>
.works {
  color: #f1f5f9;
  padding: 4rem 1rem;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.works-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .works-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.work-card {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #f1f5f9;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}


.work-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
}


.work-card img {
  width: 100%;
  height: auto;
  display: block;
}

.card-body {
  padding: 1.5rem;
}

.card-body h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: #fff;
}

.card-body p {
  font-size: 1rem;
  color: #cbd5e1;
}

</style>

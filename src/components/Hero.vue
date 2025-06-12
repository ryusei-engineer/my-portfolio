<template>
  <section class="hero">
    <div class="hero-content">
      <h1 ref="localTypeTarget"></h1>
    </div>
    <div v-if="showArrow" class="scroll-indicator fade-in">
      <div class="arrow-down" @click="scrollToAbout">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </div>
  </section>
  

</template>

<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['ready'])
const localTypeTarget = ref(null)
const showArrow = ref(false)

onMounted(() => {
  emit('ready', localTypeTarget.value)
  setTimeout(() => {
    showArrow.value = true
  }, 2700)
})

const scrollToAbout = () => {
  const target = document.getElementById('about')
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}


</script>


<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center;
  text-align: center;  */
  /* padding: 4rem 1.5rem; */
}

.hero-content h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* .subtitle {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  animation: fadeInUp 1.2s ease-out;
  animation-delay: 1.3s;
  animation-fill-mode: both;
} */

/* タブレット以上でサイズ拡張 */
@media (min-width: 768px) {
  .hero-content h1 {
  font-size: 4rem;
  }

  .scroll-indicator {
  bottom: 4rem;
}
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.scroll-indicator {
  position: absolute;
  bottom: 7rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: #ffffff;
  z-index: 1;
}


.fade-in {
  opacity: 0;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, 10px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

</style>

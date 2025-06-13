<template>
    <header v-if="showUI" class="navbar fade-in">
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#works">Works</a></li>
      </ul>
    </nav>
  </header>
  
  <div class="hero-page">
    <section>
      <Hero @ready="initTypeIt" />
    </section>

    <section id="about" data-sr class="about">
      <About />
    </section>

    <section id="skills" data-sr class="skills">
      <Skills />
    </section>

    <section id="works" data-sr class="works">
      <Works />
    </section>

    <section class="contact">
      <Contact />
    </section>
  </div>

  <footer class="footer">
    <p>&copy; 2025 Ryusei. All rights reserved.</p>
  </footer>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import TypeIt from 'typeit'
import ScrollReveal from 'scrollreveal'

import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Works from '../components/Works.vue'
import Contact from '../components/Contact.vue'
import Skills from '../components/Skills.vue'

const showUI = ref(false)

onMounted(() => {
setTimeout(() => {
    showUI.value = true
  }, 2700)
})


const typeTarget = ref(null)

const initTypeIt = (titleEl) => {
  typeTarget.value = titleEl
  new TypeIt(titleEl, {
  speed: 40,
  waitUntilVisible: true,
  cursorChar: '_'
})
.type("I'm Ryusei.<br />")
.pause(300)
.type("Software Engineer")
.go()

}

onMounted(() => {
  ScrollReveal().reveal('[data-sr]', {
    distance: '20px',
    duration: 600,
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100,
    opacity: 0,
    scale: 0.95
  })

  ScrollReveal().reveal('.section-title', {
  distance: '20px',
  duration: 600,
  easing: 'ease-out',
  origin: 'bottom',
  afterReveal: el => {
    el.classList.add('revealed');
  }
});

})
</script>

<style scoped>
.hero-page {
  font-family: sans-serif;
  color: #ffffff;
  scroll-behavior: smooth;
}

.about h2, .skills h2 .works h2, .contact h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
}

.about h2::after, .skills h2::after, .works h2::after, .contact h2::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  width: 40px;
  height: 2px;
}

.navbar {
  position: fixed;
  top: 0;
  width: calc(100% - (1rem * 2));
  padding: 1rem;
  z-index: 1000;
}

.navbar ul {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  gap: 1.5rem;
}

.navbar a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 100;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #c5c5c5;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translate(0, 10px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @media (min-width: 768px) {
    .navbar {
    width: calc(100% - (4rem * 2));
    padding: 1rem 4rem;
  }
}

.footer {
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.85rem;
  color: #94a3b8;
  background-color: transparent; /* または黒背景に合わせて調整 */
}

</style>

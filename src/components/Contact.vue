<template>
  <section class="contact">
    <div class="container">
      <div class="social-links">
        <a href="https://github.com/ryusei-engineer" target="_blank" rel="noopener">
          <i class="fab fa-github icon"></i>
        </a>
        <a href="https://x.com/ryusei_engineer" target="_blank" rel="noopener">
          <i class="fab fa-x-twitter icon"></i>
        </a>
        <a href="https://note.com/ryusei_engineer" target="_blank" rel="noopener" aria-label="Custom Icon">
          <img :src="IconSvg" alt="Custom Icon" class="icon note-icon" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconSvg from '/assets/icon.svg'

</script>


<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
}

.social-links a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;
}

i {
  color: #ffffff;
}
.icon {
  font-size: 1.5rem;
  width: 24px;
  height: 24px;
}

.note-icon {
  width: 25px;
  height: 25px;
  padding: 0;
}

.social-links a:hover .icon {
  color: #0d1117;
  filter: brightness(0) invert(1);
}
</style>

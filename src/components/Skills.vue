<template>
  <section class="skills">
    <div class="container">
      <h2 class="section-title">Skills</h2>
      <ul class="skills-list">
        <li><strong>Languages:</strong> HTML, CSS, JavaScript, PHP</li>
        <li><strong>Frameworks:</strong> Vue.js, Lalavel</li>
        <li><strong>Tools:</strong> Git, GitHub, Figma</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.skills-list {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  list-style: none;
  padding: 0;
  max-width: 700px;
  margin: 0 auto;
}

.skills-list li {
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  .skills-list {
    font-size: 1.25rem;
  }
}
</style>

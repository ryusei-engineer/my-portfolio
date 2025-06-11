<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="about-text">
        はじめまして、りゅうせいです。自社開発企業でエンジニアやってます。個人開発では自分が「こういうの欲しい」と思ったものを自由に作ってます。
      </p>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  font-size: 2rem;
  position: relative;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #cbd5e1;
  margin: 0 auto;
}

/* タブレット以上でサイズ拡張 */
@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  .about-text {
    font-size: 1.25rem;
  }
}
</style>

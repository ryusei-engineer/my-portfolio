<template>
  <section class="about">
    <div class="container">
      <h2 class="section-title" data-sr>About</h2>
      <p class="about-text">
        はじめまして、りゅうせいです。自社開発企業でエンジニアやってます。個人開発では自分が「こういうの欲しい」と思ったものを自由に作ってます。最近はVue.jsとSupabaseをよく使ってます。
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

.section-title {
  font-size: 2rem;
  position: relative;
  display: inline-block;
  text-align: center;
}

/* 下線アニメーション */
.section-title::after {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--color-accent, #3b82f6);
  margin-top: 0.4rem;
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.section-title.revealed::after {
  transform: scaleX(1);
}

</style>

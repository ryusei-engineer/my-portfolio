<template>
  <section class="works">
    <div class="container">
      <h2 class="section-title" data-sr>Works</h2>
      <div class="works-grid">
        <div class="work-card" v-for="(work, index) in works" :key="index" data-sr>
          <div class="image-wrapper">
            <img :src="work.image" :alt="work.title" />
          </div>
          <div class="card-body">
            <h3>{{ work.title }}</h3>
            <p>{{ work.description }}</p>
            <transition name="accordion">
              <div v-if="openIndex === index" class="accordion-detail">
                <a v-if="work.url" :href="work.url" class="work-link" target="_blank" rel="noopener">▶ URLはこちら</a>
                <span v-else class="work-link closed-info">
                  ※本サービスは現在ご利用いただけません
                </span>
                <p>{{ work.detail }}</p>
              </div>
            </transition>
            <button class="view-more" @click="toggleAccordion(index)">
              {{ openIndex === index ? 'Close' : 'More' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const toggleAccordion = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const works = [
  {
    title: 'YaruLog',
    description: '学習計画をスマートに管理',
    detail: '学習タスクの登録・進捗管理・カレンダー表示・記録機能を備えた自己学習支援ツールです。Vue 3 と Supabase を用いて開発し、シンプルかつ直感的なUIにこだわりました。',
    image: 'src/assets/yaru_log.png',
    url: 'https://yarulog.netlify.app'
  },
  {
    title: 'Racipe',
    description: 'レシピ共有サイト',
    detail: 'Laravelを用いて開発した、ユーザーがレシピを投稿・共有できるWebアプリです。カテゴリー検索やお気に入り機能があります。レシピは閲覧ユーザーが５段階でラクさを評価するため、客観的なラクさでレシピが評価されます。',
    image: 'src/assets/racipe.png',
    url: ''
  },
  {
    title: 'Portfolio Site',
    description: 'ポートフォリオサイト',
    detail: 'このポートフォリオサイトは Vue 3・ScrollReveal・TypeIt を活用し、アニメーションやスムーズなUXを重視して制作しました。',
    image: 'src/assets/portfolio_site.png',
    url: 'https://portfolio.example.com'
  },

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
  position: relative;
  display: inline-block;
  text-align: center;
  margin: 0 auto 2.5rem;
}

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

.works-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start; /* stretchを解除し、各カードを独立させる */
}

@media (min-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .works-grid {
    grid-template-columns: repeat(2, 1fr);
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
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-body h3 {
  font-size: 1.25rem;
  color: #fff;
}

.card-body p {
  font-size: 1rem;
  color: #cbd5e1;
}

.view-more {
  align-self: flex-end;
  color: var(--color-accent, #3b82f6);
  font-weight: 500;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.3s;
}

.view-more:hover {
  color: var(--color-accent-hover, #38bdf8);
}

.accordion-detail {
  margin-top: 1rem;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.6;
  overflow: hidden;
}

/* Transition for accordion */
.accordion-enter-active, .accordion-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.accordion-enter-from, .accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 200px; /* adjust as needed */
  opacity: 1;
}

.work-link {
  margin-top: 0.5rem;
  display: inline-block;
  color: var(--color-accent, #3b82f6);
  text-decoration: none;
  transition: color 0.3s;
}
.work-link:hover {
  color: var(--color-accent-hover, #60a5fa);
}
.closed-info {
  color: #94a3b8;
  font-size: 0.9rem;
}

</style>

<template>
  <div>
    <router-view />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  color: #ffffff;
  background: #000;
    background: linear-gradient(135deg, #000000, #111827, #1e3a8a);
  background-size: 200% 200%;
  animation: bgMove 20s ease infinite;
  backdrop-filter: blur(4px);
  min-height: 100vh;
}


@keyframes bgMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
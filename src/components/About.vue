<script setup>
// import axios from 'axios';
import { ref } from 'vue';

const about_content = ref(`
  Selamat Datang di GenratifAISimpel dimana anda dapat menggunakan AI untuk menghasilkan konten yang menarik dan berkualitas.
`)
// async function getAbout() {
//   await axios.get('http://127.0.0.1:8000/')
//     .then(function (response) {
//       about_content.value = response.data.message
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// getAbout()
</script>
<template>
  <div>
    <h3 class=" font-bold text-2xl">About</h3>
  </div>
  <div class="mt-5 text-center bg-slate-300 p-2 m-2 rounded-lg text-lg">
    {{ about_content }}
  </div>
</template>

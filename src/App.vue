<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <dir class="d-flex justify-content-center md:ml-5 mr-2">
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
      <div class=" md:container md:p-2 md:m-2 mr-[25px] shadow drop-shadow-lg rounded-xl">
        <!-- <HelloWorld msg="You did it!" /> -->
        <nav class="flex items-center gap-4 ml-[36px]">
          <RouterLink class="py-2 px-2" to="/"><h3 class="text-2xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">GenAI</h3></RouterLink>
          <RouterLink class="py-4 px-2" to="/"><div class="hover:bg-sky-500 hover:rounded-md hover:p-1 hover:text-slate-100 hover:font-bold hover:transition hover:duration-700 hover:ease-in-out">Home</div></RouterLink>
          <RouterLink class="py-4" to="/about"><div class="hover:bg-sky-500 hover:rounded-md hover:p-1 hover:text-slate-100 hover:font-bold hover:transition hover:duration-700 hover:ease-in-out">About</div></RouterLink>
        </nav>
      </div>
    </header>
    <body class=" md:container md:p-2 md:m-2">
      <RouterView />
    </body>
  </dir>

</template>

<script setup>
// import axios from 'axios';
import { marked } from 'marked';
import { ref } from 'vue'
import jsPDF from 'jspdf';
import simpleGen from '@/generatifAI/simpelGeneratif';
const promptUser = ref('')
const contentSebelum = ref('')
const content = ref('')
const gen = new simpleGen()

async function generate() {
  contentSebelum.value = await gen.generate(promptUser.value)
  content.value = marked.parse(contentSebelum.value.content)
}
function cetak() {
  const doc = new jsPDF();
  doc.text(contentSebelum.value.content, 10, 10, { maxWidth: 180 });
  doc.save('document.pdf');
}


// function generate() {
//   axios.post('http://127.0.0.1:8000/generatifAI', {
//     prompt: promptUser.value
//   })
//     .then(function (response) {
//       contentSebelum.value = response.data.output
//       content.value = marked.parse(contentSebelum.value) // response.data.output
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }
// function cetak() {
//   const doc = new jsPDF();
//   doc.text(contentSebelum.value, 10, 10, {maxWidth: 180});
//   doc.save('document.pdf');
// }
</script>
<template>
  <div class=" flex flex-col items-center md:mt-2 mt-5">
    <div class=" mb-5">
      <label for="" class=" font-bold md:text-3xl text-xl mr-[30px]">Tanya AI</label>
    </div>
    <div class=" md:w-1/2 w-[350px] ml-[-25px]">
      <textarea v-model="promptUser"
        class=" w-full md:h-56 h-36 border border-gray-400 p-2 rounded-xl text-lg hover:bg-gray-100" name="promp" id=""
        placeholder="Input Prompt"></textarea>
    </div>
    <div class="mt-5">
      <button @click="generate"
        class=" md:w-[400px] w-[300px] ml-[-25px] bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-xl">Generate</button>
    </div>
    <div class="mt-5 md:w-1/2 w-[350px] ml-[-25px]">
      <div class="mb-2 flex justify-center">
        <h3 class=" font-bold text-2xl">Content</h3>
      </div>
      <div class="static">
        <div v-html="content"
          class=" border border-gray-400 bg-white p-2 rounded-md md:h-[600px] h-[400px] overflow-y-scroll">
        </div>
        <button @click="cetak"
          class=" bg-green-400 p-2 rounded-lg w-[100px] absolute bottom-[-150px] left-[275px] hover:border hover:border-slate-500 text-white font-bold hover:bg-green-500 md:bottom-[-360px] md:left-[1110px]">Cetak</button>
      </div>
    </div>
  </div>
</template>

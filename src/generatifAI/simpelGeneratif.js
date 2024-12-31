import { ChatGroq } from "@langchain/groq";
import { PromptTemplate } from "@langchain/core/prompts";
class simpleGen {
  constructor() {
    this.model = new ChatGroq({
      model: "llama3-8b-8192",
      temperature: 1,
      apiKey: import.meta.env.VITE_GROQ_API_KEY,
    });
    this.promtemplate = new PromptTemplate({
      template: `
        Bayangkan kamu adalah seorang ilmuan yang sudah mencapai rana doktoral tentang keilmuan, kamu akan diberikan pertanyaan berikut ini :
        {text}

        dari pertanyaan tersebut, Jawablah pertanyaan tersebut dengan singkat dan jelas serta menggunakan bahasa akademis dan sesuai wawasan kamu yang luas. dan dapat di terima di kalangan akademis secara umum, dan kamu harus menggunakan bahasa Indonesia yang baik dan benar dalam menjelaskan nya tampa bahasa asing lainya.
      `,
      inputVariables: ["text"],
    });
  }

  async generate(text) {
    const chain = this.promtemplate.pipe(this.model);
    return await chain.invoke({ text });
  }
}

// testing
// const simpleGen = new simpleGen();
// console.log(await simpleGen.generate("apa itu langchain"));
export default simpleGen;

<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <vue3-tags-input :tags="tags"
                   placeholder="" />
</template>

<script>
import {defineComponent, ref, onMounted} from 'vue';
import Vue3TagsInput from 'vue3-tags-input';
import axios from 'axios';
// import {renderCaptcha} from "@/services/captcha";

export default defineComponent ({
  components: {
    Vue3TagsInput
  },
  props: {
    msg: String
  },
  setup() {
    const tags = ref(['VUE', 'HTML', 'CSS']);

    onMounted(async () => {
      // await renderCaptcha.getCaptcha();
      await axios({
        method: 'get',
        url: 'http://localhost:3001',
        config: {
          headers: {
            "Access-Control-Allow-Origin": "*",
          }
        }
      })
          .then(function (response) {
            console.log('response.data', response.data)
          });
    })

    return {
      tags,
    }
  }
});
</script>

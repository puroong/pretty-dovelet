<template>
  <div>
    <codemirror v-model='code' style='height:500px;width:300px' code='' :lineNumbers='true' :options='options'></codemirror>
    <button class="btn btn-success" type="button" name="button" @click="submit">제출하기</button>
  </div>
</template>

<script type="text/javascript">
  import { codemirror } from 'vue-codemirror'

  export default {
    name: 'editor',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        code: '',
        mode: 'text/x-csrc'
      }
    },
    computed: {
      options: function () {
        return {
          mode: this.mode
        }
      }
    },
    methods: {
      submit: function () {
        var payload = {
          title: this.title,
          language: 1,
          src: this.code
        }

        this.$store.dispatch('submit/editor/submit', payload)
      }
    },
    components: { codemirror }
  }
</script>

<style scoped>
  .editor__code {
  }
</style>

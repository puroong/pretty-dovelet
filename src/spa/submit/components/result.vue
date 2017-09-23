<template>
  <div>
    <div v-html="resultHtml"></div>
    <button class="btn btn-success" @click='solveAgain'>다시 풀기</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'result',
    computed: {
      ...mapGetters({
        resultHtml: 'submit/editor/resultHtml'
      })
    },
    methods: {
      solveAgain: function () {
        this.$store.commit('submit/editor/showResult', false)
      }
    }
  }
</script>

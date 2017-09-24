<template>
  <div>
    <h3>문제</h3>
    <div class="problem" v-html="problemHtml"></div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'problem',
    props: {
      fullLink: {
        type: String,
        required: true
      }
    },
    computed: {
      ...mapGetters({
        problemHtml: 'submit/problem/rawHtml'
      })
    },
    created: function () {
      this.$store.dispatch('submit/problem/fetchRawHtml', { full_link: this.fullLink })
    }
  }
</script>

<style scoped>
  .problem {
    overflow-x: hidden;
    height: 408px;
  }
</style>

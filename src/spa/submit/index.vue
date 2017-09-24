<template>
  <div>
    <div v-show="!showResult">
      <div class="row">
        <navigation></navigation>
        <div class="col col-xs-6">
          <problem :fullLink="fullLink"></problem>
        </div>
        <div class="col col-xs-6">
          <editor :title="title"></editor>
        </div>
      </div>
    </div>
    <div v-show="showResult">
      <div class="row">
        <result></result>
      </div>
    </div>
    <hr>
    <div class="row">
      <button class="btn btn-primary center-block" @click="routeBack">뒤로가기</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Navigation from '@/shared-components/navigation.vue'
  import Problem from './components/problem.vue'
  import Editor from './components/editor.vue'
  import Result from './components/result.vue'

  export default {
    name: 'submit',
    data: function () {
      return {
        title: this.$route.query.title
      }
    },
    computed: {
      ...mapGetters({
        getFullLinkByTitle: 'stair/getFullLinkByTitle',
        showResult: 'submit/editor/showResult'
      }),
      fullLink: function () {
        return this.getFullLinkByTitle(this.title)
      }
    },
    methods: {
      routeBack: function () {
        this.$router.go(-1)
      }
    },
    components: { Navigation, Problem, Editor, Result }
  }
</script>

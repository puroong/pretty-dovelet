<template>
  <div>
    <navigation></navigation>

    <h1>Stair {{this.$route.params.stairNum}}</h1>
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
        stair
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu scrollable-menu" role="menu">
        <li><router-link :to="{name: 'stair', params: {stairNum: 1}}">1</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 2}}">2</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 3}}">3</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 4}}">4</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 5}}">5</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 6}}">6</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 7}}">7</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 8}}">8</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 9}}">9</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 10}}">10</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 11}}">11</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 12}}">12</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 13}}">13</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 14}}">14</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 15}}">15</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 16}}">16</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 17}}">17</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 18}}">18</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 19}}">19</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 20}}">20</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 21}}">21</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 22}}">22</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 23}}">23</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 24}}">24</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 25}}">25</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 26}}">26</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 27}}">27</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 28}}">28</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 29}}">29</router-link></li>
        <li><router-link :to="{name: 'stair', params: {stairNum: 30}}">30</router-link></li>
      </ul>
    </div>

    <div class="table-reponsive">
      <table class="table table-striped table-hover table-condensed">
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>정답률</th>
            <th>업로드 날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="problem in problems">
            <td>{{ (problem.solved == true)?'O':'X' }}</td>
            <td>{{ problem.title }}</td>
            <td>{{ problem.correct_rate }}</td>
            <td>{{ problem.published_date }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <dot-loader class="center-spinner" :loading="loading"></dot-loader>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import DotLoader from 'vue-spinner/src/DotLoader.vue'
  import Navigation from '@/shared-components/navigation.vue'

  export default {
    name: 'stair',
    computed: {
      ...mapGetters({
        problems: 'stair/problems'
      }),
      loading: function () {
        return this.problems.length === 0
      }
    },
    methods: {
    },
    created: function () {
      this.$store.dispatch('stair/fetchProblems', this.$route.params.stairNum)
    },
    beforeRouteUpdate: function (to, from, next) {
      this.$store.dispatch('stair/fetchProblems', to.params.stairNum)
      next()
    },
    components: { Navigation, DotLoader }
  }
</script>

<style scoped>
  .scrollable-menu {
    height: auto;
    max-height: 200px;
    overflow-x: hidden;
  }

  .center-spinner {
    margin-left: 45%;
  }
</style>

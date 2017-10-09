<template>
  <div>
    <navigation></navigation>
    <h1>Stair {{this.$route.params.stairNum}}</h1>
    <dropdown :currentStair="$route.params.stairNum"></dropdown>
    <problems :problems="problems"></problems>
  </div>  
</template>

<script>
import Navigation from '@/components/common/Navigation.vue'
import Dropdown from '@/components/stair/Dropdown.vue'
import Problems from '@/components/stair/Problems.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'stair',
  components: {Navigation, Dropdown, Problems},
  computed: {
    ...mapGetters({
      problems: 'stair/problems'
    })
  },
  created () {
    this.$store.dispatch('stair/fetchProblems', this.$route.params.stairNum)
  },
  beforeRouteUpdate (to, from, next) {
    this.$store.dispatch('stair/fetchProblems', to.params.stairNum)
    next()
  }
}
</script>

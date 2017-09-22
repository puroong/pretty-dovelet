<template>
  <nav class="nav nav-tabs nav-justified">
    <li :class="isStairActive" @click="clickMenu" role="presentation" ><router-link id="stair" :to="{name: 'stair', params: {stairNum: 1}}">Stair</router-link></li>
    <li :class="isProfileActive" @click="clickMenu" role="presentation"><router-link id="profile" to="/profile">Profiles</router-link></li>
    <li :class="isAboutActive" @click="clickMenu" role="presentation"><router-link id="about" :to="{name: 'about'}">About</router-link></li>
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'navigation',
    computed: {
      ...mapGetters({
        active: 'navigation/active'
      }),
      isStairActive: function () {
        return { active: this.active === 'stair' }
      },
      isProfileActive: function () {
        return { active: this.active === 'profile' }
      },
      isAboutActive: function () {
        return { active: this.active === 'about' }
      }
    },
    methods: {
      clickMenu: function (e) {
        this.$store.commit('navigation/active', e.target.id)
      }
    }
  }
</script>

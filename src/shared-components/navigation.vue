<template>
  <nav class="nav nav-tabs nav-justified">
    <li :class="isStairActive" @click="clickMenu" role="presentation" ><router-link :to="{name: 'stair', params: {stairNum: 1}}">Stair</router-link></li>
    <li :class="isProfileActive" @click="clickMenu" role="presentation"><router-link to="/profile">Profiles</router-link></li>
    <li :class="isAboutActive" @click="clickMenu" role="presentation"><router-link to="/about">About</router-link></li>
  </nav>
</template>

<script>
  export default {
    name: 'navigation',
    data: function () {
      return {
        active: 'stair'
      }
    },
    computed: {
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
        this.active = e.target.id
      }
    }
  }
</script>

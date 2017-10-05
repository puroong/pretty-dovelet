<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-brand to="#">Pretty-Dovelet</b-navbar-brand>

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-collapse is-nav id="nav_collapse">
      <b-nav is-nav-bar>
        <b-nav-item to="/#/1">Home</b-nav-item>
        <b-nav-item to="/#/2">Stair</b-nav-item>
        <b-nav-item to="/#/3">About</b-nav-item>

        <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item @click="logout">로그아웃</b-dropdown-item>
      </b-nav-item-dropdown>
     </b-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    logout () {
      this.$store.dispatch('user/logout')
      .then(response => {
        this.$router.push({name: 'login'})
      })
    }
  }
}
</script>

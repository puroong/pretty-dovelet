<template>
  <div>
    <h1 class="text-center">Pretty Dovelet</h1>
    <hr>
    <b-img rounded="circle" center :src="logo" alt="pretty dovelet logo"/>
    <hr>    
    <b-row align-h="center">
      <b-col cols="4" class="text-center">
        <div>
          <b-input-group left="_아이디_">
            <b-form-input v-model="id" type="text" placeholder="아이디"></b-form-input>
          </b-input-group>
          <b-input-group left="비밀번호">
            <b-form-input v-model="passwd" type="text" placeholder="비밀번호"></b-form-input>
          </b-input-group>
        </div>
      </b-col>
    </b-row>
    <hr>
    <b-row class="text-center">
      <b-col>
        <b-button variant="primary" @click="submit">로그인</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'

export default {
  name: 'login',
  data () {
    return {
      id: '',
      passwd: '',
      logo: Logo
    }
  },
  methods: {
    submit () {
      var payload = {
        id: this.id,
        passwd: this.passwd
      }

      this.$store.dispatch('user/login', payload)
    }
  }
}
</script>

<style scoped>
hr {
  border: 0px solid white;
}
</style>

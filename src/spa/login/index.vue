<template>
  <div>
    <h1 class="text-center">Pretty Dovelet</h1>
    <img :src="logo" alt="logo" class="img-responsive center-block img-circle">
    <div id="login-form" class="input-groups">
      <input type="text" class="form-control" v-model="id" placeholder="아이디"/>
      <input type="password" class="form-control" v-model="passwd" placeholder="비밀번호"/>
      <button class="btn btn-primary center-block" @click="submit">로그인</button>
    </div>
    <div v-if="errorMessage != ''" id="error-message">{{errorMessage}}</div>
  </div>
</template>

<script>
  import logo from '@/assets/img/logo.png'
  import {APIv1} from '@/commons/api.js'

  export default {
    name: 'login',
    data: function () {
      return {
        id: '',
        passwd: '',
        logo: logo,
        errorMessage: ''
      }
    },
    methods: {
      submit: function () {
        APIv1.post('login', {
          id: this.id,
          passwd: this.passwd
        }).then(response => {
          if (response.data.success === false) {
            this.errorMessage = '로그인에 실패했습니다.'
          } else {
            this.$router.push({name: 'stair', params: {stairNum: 1}})
          }
        })
      }
    }
  }
</script>

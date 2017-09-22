<template>
  <div>
    <navigation></navigation>
    <h1 class="text-center">Pretty Dovelet</h1>
    <img :src="logo" alt="logo" class="img-responsive center-block img-circle">
    <p>
      Pretty Dovelet은 온라인 저지 사이트인 <a href="http://www.dovelet.com">http://www.dovelet.com</a>을 좀 더 편한 UI에서 사용하고자 만들어진 웹앱입니다.
    </p>
  </div>
</template>

<script type="text/javascript">
  import Navigation from '@/shared-components/navigation.vue'
  import logo from '@/assets/img/logo.png'

  export default {
    name: 'about',
    data: function () {
      return {
        logo: logo
      }
    },
    components: { Navigation }
  }
</script>

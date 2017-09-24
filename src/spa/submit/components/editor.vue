<template>
  <div>
    <h3>제출</h3>
    <div class="dropdown">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
        {{language}}
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu scrollable-menu" role="menu">
        <li><a @click="changeLanguage" id="1">C++</a></li>
        <li><a @click="changeLanguage" id="2">C</a></li>
        <li><a @click="changeLanguage" id="3">Java</a></li>
        <li><a @click="changeLanguage" id="4">Python2.5</a></li>
        <li><a @click="changeLanguage" id="5">Python3.2</a></li>
        <li><a @click="changeLanguage" id="6">Perl</a></li>
      </ul>
    </div>
    <hr>
    <codemirror v-model='code' style='height:500px;width:300px' code='' :lineNumbers='true' :options='options'></codemirror>
    <button class="btn btn-success btn-submit" type="button" name="button" @click="submit">제출하기</button>
  </div>
</template>

<script type="text/javascript">
  import { codemirror } from 'vue-codemirror'
  import 'codemirror/mode/clike/clike.js'
  import 'codemirror/mode/python/python.js'
  import 'codemirror/mode/perl/perl.js'

  export default {
    name: 'editor',
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data: function () {
      return {
        code: '',
        language: '언어',
        mode: ''
      }
    },
    computed: {
      options: function () {
        return {
          mode: this.mode
        }
      }
    },
    methods: {
      submit: function () {
        var payload = {
          title: this.title,
          language: 1,
          src: this.code
        }

        this.$store.dispatch('submit/editor/submit', payload)
      },
      changeLanguage: function (e) {
        var id = parseInt(e.target.id)
        this.language = e.target.innerHTML

        if (id === 1) {
          this.mode = 'text/x-c++src'
        } else if (id === 2) {
          this.mode = 'text/x-csrc'
        } else if (id === 3) {
          this.mode = 'text/x-java'
        } else if (id === 4 || id === 5) {
          this.mode = 'text/x-python'
        } else if (id === 6) {
          this.mode = 'text/x-perl'
        } else {
          this.mode = ''
        }
      }
    },
    components: { codemirror }
  }
</script>

<style scoped>
  .btn-submit {
    width: 100%;
  }
</style>

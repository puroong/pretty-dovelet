<template>
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
      <tbody v-for="problem in problems">
        <problem :problem="problem"></problem>
      </tbody>
    </table>
  </div>
</template>

<script>
import Problem from '@/components/stair/Problem.vue'

export default {
  name: 'problems',
  components: {Problem},
  props: {
    problems: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <tr :class="rowStyle">
    <td>{{ solved }}</td>
    <td>{{ problem.title }}</td>
    <td>{{ problem.correct_rate }}</td>
    <td>{{ problem.published_date }}</td>
  </tr>
</template>

<script>
export default {
  name: 'problem',
  props: {
    problem: {
      type: Object,
      required: true
    }
  },
  computed: {
    solved () {
      // 문서거나 시도하지 않은 문제면 아무 표시 안함
      if (this.problem.is_document || this.problem.solved === null) {
        return ''
      } else {
        return (this.problem.solved === true) ? 'O' : 'X'
      }
    },
    rowStyle () {
      return {
        'text-white': this.problem.solved !== null,
        'bg-success': this.problem.solved === true,
        'bg-danger': this.problem.solved === false,
        'bg-warning': this.problem.is_document === true
      }
    }
  }
}
</script>

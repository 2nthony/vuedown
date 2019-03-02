<template>
  <button @click="inc">Count: {{ count }}</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    inc() {
      this.count++
    }
  }
}
</script>

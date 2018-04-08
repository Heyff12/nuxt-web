<template>
  <div>
      <h3>详情</h3>
      <h4>{{detail}}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: this.$route.params.detail
    };
  }
//   validate({ params }) {
//     // Must be a number
//     this.detail = params.detail
//   }
};
</script>
<style>

</style>


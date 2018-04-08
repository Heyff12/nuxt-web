<template>
  <div class="dark">
    <headbar/>
    <nuxt/>
  </div>
</template>
<script>
import headbar from '~/components/head'
export default {
  components:{
    headbar
  }
}
</script>

<style>
body {
  overflow: hidden;
}
.dark {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background: black;
  color: white;
  padding:0 0px;
}
.dark a {
  color: white;
}
</style>
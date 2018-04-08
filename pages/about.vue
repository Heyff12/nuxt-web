<template>
  <div>
    <h3>about</h3>
    <p>Hi from {{ name }}</p>
    <ul>
      <li><nuxt-link to="/about/about">关于我们</nuxt-link></li>
      <li><nuxt-link to="/about/help">帮助中心</nuxt-link></li>
    </ul>
    <div class="rightBank">
<nuxt-child/>
    </div>
    
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData(val) {
      console.log(val)
    return {
      name: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  },
  head: {
    title: 'About page'
  }
}
</script>

<style lang="less"  rel="stylesheet/less" scoped>
 
 ul{
    width: 120px;
    height: 600px;
    background: green;
    float: left;
  }
  .rightBank{
    float:right;
  }
  .about{
    width: 600px;
    height: 600px;
    background:fuchsia;
  }
</style>


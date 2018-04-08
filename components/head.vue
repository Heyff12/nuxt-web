<template>
  <div>
    <ul>
        <li><nuxt-link to="/">首页</nuxt-link></li>
        <li><nuxt-link to="/news">列表页</nuxt-link></li>
        <li><nuxt-link to="/about/about">关于我们</nuxt-link></li>
        <li><nuxt-link to="/merchant">招商</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="less">
ul {
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: green;
    li {
        width: 25%;
        float: left;
        list-style: none;
        a{
            display:inline-block;
            width: 100%;
            height: 50px;
        }
    }
    &::after {
        display: block;
        content: '';
        clear: both;
        height: 0;
        line-height: 0;
    }
}
</style>
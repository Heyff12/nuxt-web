<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
    <!-- <h1>Cached components</h1>
    <p>Look at the source code and see how the timestamp is not reloaded before 10s after refreshing the page.</p>
    <p>Timestamp: {{ date }}</p> -->
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
  },
  // serverCacheKey() {
  //   // Will change every 10 secondes
  //   return Math.floor(Date.now() / 10000)
  // },
  // data() {
  //   return { date: Date.now() }
  // }
}
</script>
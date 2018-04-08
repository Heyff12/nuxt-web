<template>
  <div>
      <ul>
          <li v-for="item in listData"><nuxt-link :to='"/news/"+item.id'>{{item.text}}</nuxt-link></li>   
      </ul>
  </div>
</template>
<script>
export default {
    data(){
        return {
            listData:[{
                id:1111111111,text:'1111111111111111111'
            },{
                id:22222222222,text:'2222222222222222222'
            },{
                id:33333333333,text:'33333333333333333333'
            },{
                id:4444444444,text:'44444444444444444444'
            },{
                id:555555555555,text:'5555555555555555555555'
            },{
                id:6666666666666,text:'6666666666666666666'
            }
            ],
        }
    }
  
}
</script>
<style>
    
</style>


<template>
  <NavBar/>
  <router-view/>
</template>


<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components:{
      NavBar
    },
    setup(){
      
    }
  }
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.notice {
  text-align: center;
  margin-top:1rem;
  
}
</style>

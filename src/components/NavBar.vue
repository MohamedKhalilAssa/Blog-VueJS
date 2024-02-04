<template>
  <nav ref="nav"  id="nav" class="bg-white">
    <p class="brand">Blog</p>

        <div ref="btn" class="hamburger" @click="toggleMenu">
            <span class="layer"></span>
            <span class="layer"></span>
            <span class="layer"></span>
        </div>
        <div  class="linksHolder">
            <router-link class="links" to="/">Home</router-link>
            <router-link class="links" to="/about">About</router-link>
            <router-link class="links" to="/contact">Contact</router-link>
        </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const btn = ref('btn')
const nav = ref('nav')

const toggleMenu = ()=>{
    btn.value.classList.toggle('active');
    nav.value.classList.toggle('collapse')
}
</script>

<style scoped>
/* styling the navbar */
#nav{
    height:7vh;
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    position: sticky;
    top:0;
    z-index: 100;
    transition: all 0.3s ease;
    overflow: hidden;
}
#nav::after{
    content: "";
    width:60%;
    height: 1px;
    background-color: #333;
    position: absolute;
    bottom: 0;
    left: 20%;
}
#nav .brand{
    color:#e28743;
    font-size: 1.5rem;
    font-weight: 700;
}
#nav .links{
    text-decoration: none;
    color: #333;
    margin-left: 1rem;
    position:relative;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}
#nav .links::after{
    content: "";
    width:0;
    height: 1px;
    background-color: #333;
    position: absolute;
    bottom: -0.4rem;
    left: 20%;
    transition: all 0.3s ease;
}
#nav .links:hover::after{
    width:60%;
}
.router-link-exact-active{
    font-weight: 700;
}
#nav .links.router-link-exact-active::after{
    width:60%;
}
/* setting up hamburger menu  */
.hamburger{
    width:2rem;
    height: 5rem;
    display:none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition:all 0.4s ease-in-out
}

.layer{
    display: block;
    width: 100%;
    height:4px;
    background: #333;
    margin-top:6px;
    transition:all 0.4s ease-in-out
}
.hamburger:hover .layer:nth-child(2) {
    width: 20%;
}


@media screen and (max-width: 550px){
    .brand{
        position:fixed;
        top:5px;
        left:16px;
    }
    .hamburger{
        display: flex;
        position:fixed;
        height:2.5rem;
        right:16px;
        top:5px;
    }
    .hamburger.active{
        top:0;
    }
    .hamburger.active .layer:nth-child(2){
        display: none;
    }
    .hamburger.active .layer:nth-child(1){
        background: red;
        rotate: -45deg;
        transform: translate(-7px,5.5px );
    }
    .hamburger.active .layer:nth-child(3){
        background: red;
        rotate: 45deg;
    }
    
    #nav.collapse .linksHolder{
        display: block;
        position: absolute;
        top:12vh;
        left:50%;
        transform: translateX(-50%);
    }
    .linksHolder{
        display: none;
    }
    .links{
        display: block;
        font-size:1.3rem;
        margin-top:1rem;
    }
    .links::after{
        display: none;
    }
   
    #nav.collapse{
        height:40vh;
    }
}
</style>
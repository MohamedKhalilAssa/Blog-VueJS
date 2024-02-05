<template>
    <div class="back"></div>
    <div class="container fix">
        <h1>404</h1>
        <p>Page Not Found</p>
    </div>
    
</template>

<script>
export default {

}
</script>
    
<style scoped>
    h1,p{
        text-align: center;
    }
    h1{
        color:#e28743;
        font-size:5rem;
    }
    .fix{
        margin-top: 10rem;
        position:fixed;
        z-index: 1000;
        font-size:4rem;
    }
    .back{
        background: #fff;
        position:fixed;
        top:0;
        height:100vh;
        width:100vw;
        z-index:101;
    }
</style>
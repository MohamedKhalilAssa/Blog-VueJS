  <template>
    <div v-if="posts.length" class="container mb-5" >
      <div  v-for="post in posts" :key = "post.id" class="row mt-4 mb-4">
          <div class="card">
            <h5 class="card-header ">Post: {{ post.id }}</h5>
            <div class="card-body">
              <h2 class="card-title">{{ post.title }}</h2>
              <p class="card-text">{{ post.body }}</p>
              <router-link class="btn btn-dark" :to="{name: 'post' ,params: {id: post.id}}">See Details</router-link>
            </div>
          </div>
      </div>
      <slot ></slot>
    </div>
    <h1 v-else class='notice' :class="{error: error}">
      {{ error ? error : 'Loading Data...'}}</h1>
  </template>

  <script setup>
  import { watchEffect , defineProps} from 'vue'
  import getPosts from '../../composables/getPosts'

  

  const props = defineProps(['counter'])



  const {posts,error,load} = getPosts()

  
  watchEffect(()=>{
    load(props.counter)
  })
  </script>

  <style>
      .error{
        color : red;
      }
  </style>
import { ref } from "vue";

const getPosts =  () =>{

  
    const posts = ref([])
    const error = ref(null)

    const load = async (count = 0) =>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            
            if(!res.ok){
              throw('Could not fetch the data!')
            }
            posts.value = await res.json()
            posts.value = posts.value.slice(0, 10 + count * 10 )
        } catch(err){
            error.value = err
        }

    }
    return {posts, error, load}
}

export default getPosts
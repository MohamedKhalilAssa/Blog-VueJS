import { ref } from "vue";

const getPost =  () =>{

  
    const post =  ref(null)
    const error = ref(null)

    const load = async (id) =>{
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            
            if(!res.ok){
              throw('could not fetch the data')
            }

            post.value = await res.json()
        } catch(err){
            error.value = err.message
        }

    }
    return {post, error, load}
}

export default getPost
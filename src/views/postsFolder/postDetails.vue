<template>
  <div class="container mt-5 mb-5 height">
    <div class="card" v-if="post">
      <h5 class="card-header ">{{ post.title }}</h5>
      <div class="card-body">
        <p class="card-text">{{post.body }}<br> {{moreText}}</p>
      </div>
    </div>
  </div>
  
</template>

<script setup>
  import getPost from '../../composables/getPost'
  import { defineProps, watchEffect } from 'vue';

  const props = defineProps(['id']);


  const {post,error,load} = getPost();


  const  moreText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi reiciendis velit eveniet tenetur! Dolore quod tenetur enim fugit nihil, praesentium, iure voluptas eligendi sunt sequi velit ullam facilis provident? Dignissimos?
        Odio perspiciatis architecto consectetur, dignissimos, ad asperiores itaque vitae dolorem vero commodi, eligendi atque a ipsam! Consequatur cumque labore rem. Molestiae minima a maiores nesciunt tenetur architecto voluptatum odit sit?
        Deleniti in commodi ea. Dolorum harum quos vitae eligendi quae dolores, id illum atque hic neque molestiae ducimus facere excepturi aut dolor qui esse tenetur dolorem adipisci eaque laborum. Dicta?
        Aliquid inventore atque nihil eius nam sit quo numquam expedita asperiores blanditiis libero est harum quia autem illum in placeat nulla, eligendi ducimus natus? Assumenda similique perspiciatis doloremque in ut.
        Nihil, quisquam officia totam in voluptas doloremque, at illum molestiae omnis magnam harum nesciunt, dignissimos tenetur sunt laborum soluta earum. Repellendus delectus error provident ipsam. Aliquid eligendi placeat pariatur repellat?
        Perspiciatis tempora amet beatae, repellendus consequatur magni temporibus repudiandae! Iste architecto suscipit temporibus autem cumque eum laudantium quam harum sint! Quis, porro ullam tempora modi ea esse dolor repellendus praesentium!
        Ipsum quia temporibus, debitis inventore ipsa laudantium earum velit vero praesentium, voluptate error? Nam, aliquam magni, non porro amet neque consequuntur, nisi soluta laudantium voluptatibus eos adipisci saepe officiis quisquam!
        Illum, perspiciatis numquam quasi provident ad repellendus modi iusto reiciendis molestias sint odio? Error placeat recusandae perferendis repudiandae, culpa unde ex nostrum? Culpa similique et laboriosam maiores adipisci voluptatibus. Nobis.
        Eligendi laboriosam culpa tempora corporis eos obcaecati amet fugit nesciunt vel! Ducimus ipsa deserunt incidunt architecto, quasi explicabo expedita assumenda, minus inventore, similique illo nobis ex necessitatibus repudiandae. Tempora, totam?
        Nemo corrupti quibusdam repellat, eaque consequatur fugiat molestiae eum sunt officia consectetur repellendus, perspiciatis laboriosam exercitationem reiciendis quis! Repudiandae, quod expedita recusandae ducimus reiciendis quis ipsa. Omnis, temporibus! Quia, officiis?
        Consectetur, iusto itaque harum facere consequuntur quod laborum molestias architecto repellat optio dignissimos ipsam beatae perferendis voluptates sapiente officiis voluptatum vitae numquam tempore cupiditate distinctio dolores delectus provident? Quis, ut?
        Quis perferendis consequuntur voluptas aspernatur, debitis iste fugit, omnis sunt minima illo labore aut, quam est? Adipisci placeat repellendus voluptatibus, aperiam neque autem architecto harum dolor! Dolores blanditiis ea a!
        Libero molestiae omnis dolore odit minima hic repellat, reiciendis, ipsa ratione ut fugiat voluptatibus iusto dolor. Distinctio, dolor dolore. Necessitatibus praesentium itaque adipisci id animi explicabo laborum quam ad maxime.`

  load(props.id);

  watchEffect(()=>{
    
    console.log(post.value)
  })

</script>

<style>
  .height{
    min-height:60vh 
  }
  .card-header{
    font-weight: 700;
  }
  .height .card{
    height: 100%;
  }
</style>
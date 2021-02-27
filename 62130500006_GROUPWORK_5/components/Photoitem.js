app.component('photo-item',{
  props:['photos'],
  /*html*/
  template:
  `<div id="content" class="grid grid-cols-4 gap-y-72 " v-if="photos.length !==0">
    
    <ul class=" col-start-2 ">
      <li v-for="photo in photos" :key='photo.id' v-show="photo.show" class="mt-10 h-72" >
        <img :src="photo.src" class="h-64 w-64" :alt="photos.title" @dblclick="toggleLike(photo.id)" @click="expand(photo.id)">
        <button class="focus:outline-none ml-56">
        <i xmlns="http://www.w3.org/2000/svg" v-show="!photo.favor"
        class="material-icons icon icon-tabler icon-tabler-chevron-right"  width="24"
        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
        stroke-linecap="round" stroke-linejoin="round" @click="toggleLike(photo.id)" >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />favorite
    </i>
  </button>
    <button class="focus:outline-none">
        <i xmlns="http://www.w3.org/2000/svg" v-show="photo.favor"
        class="material-icons text-red-600 icon icon-tabler icon-tabler-chevron-right" width="24"
        height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none"
        stroke-linecap="round" stroke-linejoin="round" @click="toggleLike(photo.id)">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="9 6 15 12 9 18" />favorite
    </i>
  </button>
      </li>
    </ul>
    <ul class=" col-start-3">
      <li v-for="photo in photos ">
        <p class="font-mono h-64 flex items-center mt-10 text-4xl  h-72">{{photo.title}}</p>
              
      </li>
    </ul>
  </div>
  <div v-else class='flex items-center justify-center mt-96 text-5xl font-mono'>No photo</div>`,
  methods:{
      toggleLike(index){
          this.$emit('toggle-like',index);
      },
      expand(index){
          this.$emit('expand',index)
      }
  }

})

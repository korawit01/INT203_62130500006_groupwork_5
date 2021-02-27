app.component('photo-view',{
  props:['bigsrc','bigpic']
,
  /*html*/
  template:
  `<div class="bg-black h-auto flex justify-between "  v-show="bigpic">
  <div></div>
  <img :src="bigsrc" class="bg-center ">
  <button class="flex mb-auto focus:outline-none " @click="close">   
  <i class="material-icons text-white " >
    clear
  </i>
</button>
</div>`,
  methods:{
      close(){
          this.$emit('close');
      }
  }
})

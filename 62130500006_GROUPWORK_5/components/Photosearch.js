app.component('photo-search',{
    props: ['searching',],
    template:
    /*html*/
    `<div id="head" class="flex items-center justify-center mt-5">
    <button class="focus:outline-none" @click="openSearch">
      <i class="material-icons" v-show="!searching">
      search
    </i>
  </button>
    <input v-show="searching"  v-model="inputValue" @keyup.enter="search"
    class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
    type="text" placeholder="Please enter text for searching photos">
    <button v-show="searching" @click="cancelSearch" class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500">Cancel</button>
  </div>`,
  data(){
    return {
        inputValue:''
    }
},
    methods:{
        openSearch() {
            this.$emit('open-search');
        },
        cancelSearch(){
            this.$emit('cancel-search');
        },
    },
    computed: {
        search(){
            let text = this.inputValue;   
            this.$emit('search',text);
        }            
    },
        
}
)
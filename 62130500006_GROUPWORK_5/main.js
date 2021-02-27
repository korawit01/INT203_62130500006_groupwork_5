const app = Vue.createApp({
    data() {
        return {
            
            searching: false,
            inputValue:'',
            bigPic:false,
            bigSrc:'',
            photos: [{id:0, src: 'https://img.kapook.com/u/pirawan/Pet/persia.jpg',title: 'Persian',favor: false, show: true,},
                    {id:1, src: 'https://img.kapook.com/u/pirawan/Pet/americanshothair1.jpg',title: 'American Shorthair',favor: false,show: true,},
                    {id:2, src: 'https://img.kapook.com/u/pirawan/Pet/scottich.jpg',title: 'Scottish Fold',favor: false, show: true,},
                    {id:3, src: 'https://img.kapook.com/u/pirawan/Pet/wicheinmas.jpg',title: 'Siamese',favor: false,show: true,},
                    {id:4, src: 'https://img.kapook.com/u/pirawan/Pet/siamese1.jpg',title: 'Korat',favor: false,show: true,},
                    {id:5, src: 'https://img.kapook.com/u/pirawan/Pet/khaomanee2.jpg', title: 'Khao Manee',favor: false,show: true,},
                    {id:6, src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_113944567.jpg',title: 'British Shorthair',favor: false,show: true,},
                    {id:7, src: 'https://img.kapook.com/u/pirawan/Pet/exotic.jpg',title: 'Exotic',favor: false,show: true,},
                    {id:8, src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_96886009.jpg',title: 'Main Coon',favor: false,show: true,},
                    {id:9, src: 'https://img.kapook.com/u/pirawan/Pet/shutterstock_12862705.jpg',title: 'Bengal',favor: false,show: true,}

            ],
            showPhotos:[],
        }
    },
    methods:{
        toggleLike(index){
            this.photos[index].favor = !this.photos[index].favor
        },
        cancelSearch(){
            this.searching = false;
            this.inputValue = '';
        },
        openSearch() {
            this.searching = true;
        },
        expand(index) {
            this.bigPic = true
            return this.bigSrc = this.photos[index].src;
        },
        close() {
            this.bigPic = false;
        },
        inputValueSearch(text){
            this.inputValue = text;
        }
    },
    computed: {
        countPic() {
            return this.photos.filter(t => !t.false).length
        },
        search(){      
            return this.photos.filter((searchPic)=> {return searchPic.title.toLowerCase().includes(this.inputValue.toLowerCase())})
        }       
    },
        
    }    
    )
const app = Vue.createApp({
    el: "hey",
    data() {
        return {
            title: "The final empire",
            url : "https://pnefoods.com/",
            age: 0,
            x: 0,
            y: 0,
            users : [
                {name : "raghd", age : 28 , department : "project manager"},
                {name : "george", age : 28 , department : "project manager"},
                {name : "arthor", age : 10 , department : "rat"},

            ]

        }
    },

    methods: {
        increase: function inccrease() {
            this.age++

        },
        decrease: function inccrease() {
            this.age--

        },
        mouseEvents: function mouseEvent(e) {
            console.log(e);
        },
        handleMousemove: function name(e) {
            // this.x = e.offsetX;
            // this.y = e.offsetY;
            this.x = e.offsetX ;
            this.y = e.offsetY ;
            
            
            // console.log(x, y)
        } 

    },
    
});

app.mount("#app");
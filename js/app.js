const app = Vue.createApp({
    el: "hey",
    data() {
        return {
            title : "The final empire",
            age : 0,

        }
    },
    methods: {
        increase : function inccrease() {
            this.age++
            
        },
        decrease : function inccrease() {
            this.age--
            
        },
    },
});

app.mount("#app");
new Vue({
    el: '#app',
    data: {
        title: 'Hello World! This is rendered by Vue.js.'
    },
    methods: {
        changeTitle: function(event){
            this.title = event.target.value;
        }
    }
});

new Vue({
    // which element we want this vue instance to control on our webpage
    el: '#app', // # for id, . for class
    // data property is an object which contains all the different data to do with this particular instance
    data: {
        title: 'Becoming a Vue',
        name: 'kuanyu',
        url: 'https://www.youtube.com/?gl=TW&hl=zh-TW',
        classes: ['one', 'two']
    },
    methods: {
        greet(time) {
            // access title property right here
            // this.data.title
            // Vue takes all of the data properties and process them up to the top, so don't need to write .data
            // this.title

            // `Hello there`: ES6 template string
            return `Hello and good ${time}, ${this.name}`
        }
    }

})
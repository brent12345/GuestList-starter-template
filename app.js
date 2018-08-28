var vm1 = new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventTitle2: 'v text output',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers',
        },
        newNameText: '',
        guestName: [], 
       
        eventCapacity: 25,
        eventCapacityPercentage: 0
        
    },
    methods: {
        formSubmitted() {
            //console.log(this.appName)
            //console.log('method')
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100 ) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
        
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        },
       keyPressed () {
           console.log('key pressed!')
       }
     
    },
    computed: {
        sortNames() {
            console.log('computed')
            return this.guestName.sort ()
        },
     
    },
    watch: {
        guestName (data) {
            console.log('watch trigger')
        }
    },
    filters: {
      //  toUpper (value) {
       //     return value.toUpperCase()
       // },
        formatName (value) {
                //console.log(value)
                return value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase()
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforemount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeDestroy() {
        console.log('beforeDestroy')
    },
    
    destroyed() {
        console.log('destroyed')
    }

});

var vm2 = new Vue({
    el: '#navigation',
    data() {
        return {
            appName: 'Guest List',
            navLinks: [
                {name: "Home", id: 1, url: "https://www.google.com"}, 
                {name: "Upcoming", id: 2, url: "https://www.amazon.com"},
                {name: "Guest Benefits", id: 3, url: "https://www.ebay.com"},
                {name: "Contact", id: 4, url: "https://www.bestbuy.com"}
            ]
        }
    },
    methods: {
        //capcityChanged() {
           // vm1.eventCapacity = 15
           // vm1.title = "new title"
       // }
       changeTitle () {
           this.$refs.name.innerText = "change up title"
           console.log(this.$refs)
       }
    }
})

//var vm3 = new Vue({
//    template: '<div class="col-sm-12 text-center">'+
 //   '<h1>Guest List</h1>' +
 //   '</div>'
//})
//console.log(vm1, vm2)
//vm3.$mount('#navigation')
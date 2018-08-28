new Vue({
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
    }
});

new Vue({
    el: '#navigation',
    data() {
        return {
            appName: 'Guest List',
            navLinks: [
                {name: "Home", id: 1}, 
                {name: "Upcoming", id: 2},
                {name: "Guest Benefits", id: 3},
                {name: "Contact", id: 4}
            ]
        }
    }
})

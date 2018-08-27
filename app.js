new Vue({
    el: '#app',
    data: {
        event: {
            eventDate: 'August 14th - 16th',
            eventTitle: 'Summer Festival!',
            eventTitle2: 'v text output',
            signUpText: 'Add your name to the guest list for <em>exclusive</em> offers',
            eventDescription: "It's back! This years summer festival will be in the beautiful countryside featuring our best line up ever! Add your name to the guest list for exclusive offers:"
        },
        newNameText: '',
        guestName: [], 
        appStyles: {
            marginTop: '25px'

        },
        eventCapacity: 25,
        eventCapacityPercentage: 0
        
    },
    methods: {
        formSubmitted() {
            //console.log(this.newNameText)
            console.log('method')
            if(this.newNameText.length > 0 && this.eventCapacityPercentage < 100 ) {
                this.guestName.push(this.newNameText)
                this.newNameText = ''
        
                this.eventCapacityPercentage = this.guestName.length / (this.eventCapacity / 100)
            }
        },
        methodCall() {
            this.appStyles.marginTop = '50px'
        },
     
    },
    computed: {
        sortNames() {
            console.log('computed')
            return this.guestName.sort ()
        },
        test () {
            console.log('method text')
        }
    }
});

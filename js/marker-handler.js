AFRAME.registerComponent('marker-handler',{
    init: async function(){
        this.el.addEventListener('markerFound',()=>{
            this.handleMarkerFound()
        })
        this.el.addEventListener('markerLost', ()=>{
            this.handleMarkerLost()
        })
    },
    handleMarkerFound: function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'flex'
        var ratingButton = document.getElementById('rating-button')
        var orderButton = document.getElementById('order-button')
        ratingButton.addEventListener('click',function(){
            swal({
                icon: 'warning',
                title: 'Rate Dish',
                text: 'Work In Progress'
            })
        })
        orderButton.addEventListener('click',()=>{
            swal({
                icon: './assets/image-markers/thumbsUp.png',
                title: 'Thanks For Order',
                text: 'Your Order Will Be Served Soon On Your Table'
            })
        })
    },
    handleMarkerLost: function(){
        var buttonDiv = document.getElementById('button-div')
        buttonDiv.style.display = 'none'
    }
})
var updataBtns = document.getElementsByClassName('update-cart')

for(var i = 0; i < updataBtns.length; i++){
    updataBtns[i].addEventListener('click',function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId :', productId, 'Action:',action)

        console.log("User:",user)
        if(user == 'AnonymousUser'){
            console.log('Not logged in')
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log('User is logged in , sending data...')

    var url = '/update-item/'

    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken':csrftoken,
        },
        body:JSON.stringify({'productId':productId, 'action':action})
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log('data:',data)
        location.reload()
    })
}

import {menuArray} from './data.js'

document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.getElementById('menu') 
    const orderContainer = document.getElementById('order-container') 
    const orderDetails = document.getElementById('order-details') 
    const totalPriceElement = document.getElementById('total') 
    const addToCartButtons = document.querySelectorAll('.add-to-cart') 
    const completeOrderBtn = document.getElementById('complete-order')
    
    let totalPrice = 0 
    

    function addItemToOrder(item) {
        const orderItem = document.createElement('div') 
        orderItem.classList.add('order-item') 
        orderItem.innerHTML = `
            <div class="order-details-item">
                <h2 class="item-name">${item.name}</h2>
                <h2 class="item-price">$${item.price}</h2>
            </div>
        ` 
        orderDetails.appendChild(orderItem) 
        totalPrice += item.price 
        updateTotalPrice() 
        orderContainer.classList.remove('hidden') 
    }

    function updateTotalPrice() {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}` 
    }

        /*Complete order button interaction*/
    completeOrderBtn.addEventListener('click', function(){
        const modal = document.getElementById('modal')
        modal.classList.remove('hidden')
    })

    const closeModal = document.getElementById('close')
    closeModal.addEventListener('click', function(){
        modal.classList.add('hidden')
    })

    const paymentForm = document.getElementById('pay')
    paymentForm.addEventListener('click', function(event){
        event.preventDefault();
    
        modal.classList.add('hidden')

        orderContainer.classList.add('hidden') 
    
        const buyerName = document.getElementById('buyer-name').value
        
    
        const thanks = document.querySelector('.thanks')
        
    
        thanks.innerHTML = `Thanks, ${buyerName}! Your order is on its way!`
        
    
        thanks.style.visibility = 'visible'
        
    });
    


    menuArray.forEach((item, index) => {
        const menuItem = document.createElement('div') 
        menuItem.classList.add('menu-item') 

        menuItem.innerHTML = `
            <div class="item-container">
                <span class="item-emoji">${item.emoji}</span>
                <div class="item-details">
                    <h2 class="item-name">${item.name}</h2>
                    <p class="item-ingredients">${item.ingredients.join(', ')}</p>
                    <p class="item-price">$${item.price}</p>
                </div>
                <button class="add-to-cart" data-index="${index}">+</button>
            </div>
        ` 

        menuItem.querySelector('.add-to-cart').addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index')) 
            addItemToOrder(menuArray[index]) 
        }) 

        menuContainer.appendChild(menuItem) 
    }) 
}) 

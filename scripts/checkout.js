
import {cart,removeFromCart} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';
const today = dayjs();

hello();


const deliveryDate=today.add(7,'days');
console.log(deliveryDate.format('dddd, MMMM D'));


let cartSummaryHTML='';

cart.forEach((cartItem)=>{ 

    const productId=cartItem.productId;
    let matchingproduct;
    products.forEach((product)=>{
        if(product.id===productId)
        {
            matchingproduct=product;
        }
    });
    console.log(matchingproduct);

    if(!matchingproduct){
      return;
    }

    

    
    cartSummaryHTML+=
    `<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                    ${matchingproduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingproduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingproduct.id}">
                    Delete
                  </span>
                </div>
              </div>

              ${deliveryOptionsHTML(matchingproduct, cartItem)}

            </div>
          </div>`;


});

function deliveryOptionsHTML(matchingproduct, cartItem){
  let html = `<div class="delivery-options"><div class="delivery-options-title">Choose a delivery option:</div>`;

  const selectedId = cartItem && cartItem.deliveryOptionId ? cartItem.deliveryOptionId : null;

  deliveryOptions.forEach((option)=>{
    const now = dayjs();
    const deliveryDateLocal = now.add(option.deliveryDays, 'days');
    const dateString = deliveryDateLocal.format('dddd, MMMM D');
    const priceString = option.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(option.priceCents) } - Shipping`;
    const checked = option.id === selectedId ? 'checked' : '';

    html += `
      <div class="delivery-option">
        <input type="radio" ${checked} class="delivery-option-input" name="delivery-option-${matchingproduct.id}" value="${option.id}">
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString}</div>
        </div>
      </div>`;
  });

  html += `</div>`;
  return html;
}

document.querySelector('.js-order-summary').innerHTML=cartSummaryHTML; 
document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
       const productId =link.dataset.productId
       removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();

    })
})
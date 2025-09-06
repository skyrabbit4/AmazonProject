
import {cart,removeFromCart,updateDeliveryOption} from "../../data/cart.js";
import { products,getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';

hello();
export function renderOrderSummary(){

let cartSummaryHTML='';

cart.forEach((cartItem)=>{ 

    const productId=cartItem.productId;
    const matchingproduct=getProduct(productId);

    if(!matchingproduct){
      return;
    }

    
    const deliveryOptionId=cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

    cartSummaryHTML+=
    `<div class="cart-item-container js-cart-item-container-${matchingproduct.id}">
            <div class="delivery-date">
              Delivery date: ${deliveryOption ? dayjs().add(deliveryOption.deliveryDays, 'days').format('dddd, MMMM D') : 'Not available'}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingproduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                    ${matchingproduct.name}
                </div>
                <div class="product-price">
                  ${matchingproduct.getPrice()}
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

  deliveryOptions.forEach((option)=>{
    const now = dayjs();
    const deliveryDateLocal = now.add(option.deliveryDays, 'days');
    const dateString = deliveryDateLocal.format('dddd, MMMM D');
    const priceString = option.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(option.priceCents) } - Shipping`;

    const isChecked=option.id===cartItem.deliveryOptionId;
    html += `
      <div class="delivery-option js-delivery-option"
      data-product-id="${matchingproduct.id}"
      data-delivery-option-id="${option.id}">
        <input type="radio" ${isChecked ? 'checked' : ''} class="delivery-option-input" name="delivery-option-${matchingproduct.id}" value="${option.id}">
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

// Add event listeners after HTML is rendered
document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click',()=>{
       const productId =link.dataset.productId
       removeFromCart(productId);
      document.querySelector(`.js-cart-item-container-${productId}`).remove();
      renderPaymentSummary(); // Update payment summary after deletion
    });
});

document.querySelectorAll('.js-delivery-option input')
.forEach((element)=>{
  element.addEventListener('change', (event) => {
   
    const deliveryOptionId = event.target.value;
    const productId = event.target.closest('.js-delivery-option').dataset.productId;
    updateDeliveryOption(productId, deliveryOptionId);
    
    // Update the displayed delivery date for this cart item
    const option = deliveryOptions.find(o => o.id === deliveryOptionId);
    if(option){
      const dateString = dayjs().add(option.deliveryDays, 'days').format('dddd, MMMM D');
      const el = document.querySelector(`.js-cart-item-container-${productId} .delivery-date`);
      if(el) el.textContent = `Delivery date: ${dateString}`;
    }
    renderOrderSummary();
    renderPaymentSummary(); // Update payment summary after delivery option change
  });
});

}


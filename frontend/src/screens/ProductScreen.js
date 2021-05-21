import axios from 'axios';
import getProduct from '../getProduct';
import {parseRequestUrl} from '../utils';
import Rating from '../components/Rating';
const ProductScreen = {

    after_render: ()=>{
        const request = parseRequestUrl();
        const addBtn = document.querySelector('#add-button');
        addBtn.addEventListener('click',()=>{
            console.log("addBtn");
            document.location.hash = `/cart/${request.id}`;
        });

    },

    render: async()=>{
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        
        if(product.error) {
            return `<div>${product.error}</div>`
        }
        return `
        <div class="content">
                <div class="detail">
                    <div class="detail__img">
                        <img src="${product.image}" alt="${product.name}">
                    </div>

                    <div class="detail__info">
                        <div class="info-header">
                            ${product.name}
                            <!-- 동적제목 -->
                        </div>
                        <div class="info-review">
                            ${Rating.render({
                                rating: product.rating,
                                review: `${product.numReviews} reviews`})
                            }
                            <!-- 동적 -->
                        </div>
                        <div class="price">
                            $${product.price}
                            <!-- 동적 -->
                        </div>
                        <div class="info-description">
                            ${product.description}
                            <!-- 동적 -->
                        </div>
                    </div>
                    
                    <div class="detail__action">
                        <div class="action-price">Price : $${product.price} </p>
                        <div class="action-status">Status: 
                        ${product.countInStock > 0 
                        ? `<span class="success">In Stock</span>` 
                        : `<span class="error">Unavailable</span>`   
                    }
                        </div>
                        <button id="add-button" class="action-button"> Add to cart </button>
                    </div>

                </div>

            </div>
            <div class="review">
                <div class="review-header">
                    Review
                </div>
                <ul class="reviews">
                    <li class="review-item">
                        <div class="item-name">
                            jmw93
                        </div>
                        <div class="item-rating">
                            5점
                        </div>
                        <div class="item-date">2021-01-03</div>
                        <div class="item-description">Excellent</div>
                    </li>
                    
                    <li class="review-item">
                        <div class="item-name">
                            jmw93
                        </div>
                        <div class="item-rating">
                            5점
                        </div>
                        <div class="item-date">2021-01-03</div>
                        <div class="item-description">Excellent</div>
                    </li>
                    <li class="review-item">
                        <div class="item-name">
                            jmw93
                        </div>
                        <div class="item-rating">
                            5점
                        </div>
                        <div class="item-date">2021-01-03</div>
                        <div class="item-description">Excellent</div>
                    </li>
                </ul>
            </div>
        `
  
    },
};

export default ProductScreen;
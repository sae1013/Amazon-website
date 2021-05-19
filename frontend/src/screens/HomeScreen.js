import data from '../data.js';

const HomeScreen = {
    render: ()=>{
        const products = data.products;
        return `
        <div>
            <ul class="products"> 
                ${products.map( product => `
                    <li>
                    <div class="product">
                        <a href="#/product/${product._id}">
                            <img src=${product.image} alt="" class="product-img">
                        </a>
                        <div class="product-name">
                            <a href="#">
                                ${product.name}
                            </a>
                        </div>
                        <div class="product-brand">
                            ${product.brand}
                        </div>
                        <div class="product-price">
                            ${product.price}
                        </div>
                    </div>
                </li>
                `).join('\n')} 
            </ul>
        </div>
        `
    }
}

export default HomeScreen;
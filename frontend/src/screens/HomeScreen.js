import Rating from '../components/Rating';

const HomeScreen = {
    render: async()=>{
        const response = await fetch("http://localhost:5000/api/products");
        
        if (!response || !response.ok){
            return `<div>response Error Page</div>`;
        }
        const products = await response.json();
        console.log(products);
        
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
                        <div class="product-rating">
                            ${Rating.render({rating : product.rating, review:`${product.numReviews} Reviews`})}
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
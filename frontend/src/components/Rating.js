const Rating = {
    render: (props)=>{
        console.log("rendering");
        if(!props.rating){
            return `<div></div>`;
        }
        return `
        <div class="rating">
            
            <span>
                <i class="${props.rating >= 1 ? 'fas fa-star': props.rating>=0.5 ? 'fas fa-star-half-alt':'far fa-star' }"></i>
            </span>
            <span>
                <i class="${props.rating >= 2 ? 'fas fa-star': props.rating>=1.5 ? 'fas fa-star-half-alt':'far fa-star' }"></i>
            </span>
            <span>
                <i class="${props.rating >= 3 ? 'fas fa-star': props.rating>=2.5 ? 'fas fa-star-half-alt':'far fa-star' }"></i>
            </span>
            <span>
                <i class="${props.rating >= 4 ? 'fas fa-star': props.rating>=3.5 ? 'fas fa-star-half-alt':'far fa-star' }"></i>
            </span>
            <span>
                <i class="${props.rating >= 5 ? 'fas fa-star': props.rating>=4.5 ? 'fas fa-star-half-alt':'far fa-star' }"></i>
            </span>
            <span> ${props.review}</span>
        </div>
        `
    },
};

export default Rating;
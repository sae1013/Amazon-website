import axios from "axios";

const getProduct = async(id)=>{

    try {
        const response = await axios("http://localhost:5000/api/products/1");
        if (response.statusText !== 'OK'){
            throw new Error(response.data.message);
        }
        return response.data;
    } catch(err){
        return {error: err.message};
    }
};
export default getProduct;
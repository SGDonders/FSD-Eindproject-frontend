
import axios from 'axios';

const API_URL = 'http://localhost:8080/product';

export const PRODUCTS = [];

const fillArrayWithData = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;
        console.log(data)


        data.forEach(item => {
            const { id, productName, price, category, image} = item;
            PRODUCTS.push({  image , category, id, productName, price: price.toFixed(2) });
        });
    } catch (error) {
        console.error(error);
    }
};

void fillArrayWithData();




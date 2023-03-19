import axios from 'axios';

import image from '../src/assets/NoProduct/notAvailable.png'
const API_URL = 'http://localhost:8080/product';


export const PRODUCTS = [];

const DEFAULT_IMAGE = image

const fillArrayWithData = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;

        data.forEach(item => {
            const { id, productName, price, category, image} = item;
            let productImage = image ? image : DEFAULT_IMAGE;
            PRODUCTS.push({  image: productImage , category, id, productName, price: price.toFixed(2) });
        });
    } catch (error) {
        console.error(error);
    }
};

void fillArrayWithData();

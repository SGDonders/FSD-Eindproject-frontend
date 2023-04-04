import axios from 'axios';

import defaultImage from '../src/assets/NoProduct/notAvailable.png'

// This code fetches product data from an API, creates an array of product objects with information such as id,
// productName, price, category, and image, and assigns it to the empty PRODUCTS array. If there is an error in fetching
// the data, it logs the error to the console. The fillArrayWithData function is called with the void keyword to
// indicate that it is an immediately invoked function expression (IIFE).

export const PRODUCTS = [];

const DEFAULT_IMAGE = defaultImage

const fillArrayWithData = async () => {
    try {
        const response = await axios.get('http://localhost:8080/product');
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

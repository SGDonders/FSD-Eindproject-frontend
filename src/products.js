
import axios from 'axios';

const API_URL = 'http://localhost:8080/product';

export const PRODUCTS = [];

const fillArrayWithData = async () => {
    try {
        const response = await axios.get(API_URL);
        const data = response.data;


        data.forEach(item => {
            const { id, productName, price, category } = item;
            PRODUCTS.push({ category, id, productName, price: price.toFixed(2) });
        });
    } catch (error) {
        console.error(error);
    }
};

void fillArrayWithData();


// import axios from 'axios';
//
// const API_URL = 'http://localhost:8080/product';
//
// export const PRODUCTS = [];
//
// const fillArrayWithData = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         const data = response.data;
//
//         let idCounter = 1;
//
//         data.forEach(item => {
//             const { productName, price, category } = item;
//             PRODUCTS.push({ category, id: idCounter++, productName, price: price.toFixed(2) });
//         });
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// void fillArrayWithData();

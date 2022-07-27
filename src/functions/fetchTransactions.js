import axios from 'axios';


axios.defaults.baseURL = 'https://62d829ad9c8b5185c7845596.mockapi.io/';




export const fetchTransactions = async() => {
    const { data } = await axios.get(`/transactions`);    
    return data;
}

/* https://mockapi.io/api/mocks/62d829ad9c8b5185c7845597/resources/62d82a719c8b5185c78462da/data */
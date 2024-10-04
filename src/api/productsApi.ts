
import axios from 'axios';
import { Product } from '../types/Product';

const API_URL = 'https://dummyjson.com/products';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(`${API_URL}?limit=100`); 
  return response.data.products;
};

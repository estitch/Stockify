import axios from 'axios';
import productsData from '../data/products.json'
class ProductService{
// GET: Obtener lista de productos
  async getProduct() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData)
      }, 500)
    })
/*     const url = `${import.meta.env.API_BASE_URL}`
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.data; // Devuelve los datos de la API
    } catch (error) {
      console.error('Error al obtener productos:', error);
      return null
    } */
  };

  // POST: Crear un nuevo producto
  async createProduct(productData){
    const url = `${import.meta.env.API_BASE_URL}`
    try {
      const response = await axios.post(url, productData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return response.data
    } catch (error) {
      console.error('Error al crear producto:', error);
      return null
    }
  };
}
export const productService = new ProductService();
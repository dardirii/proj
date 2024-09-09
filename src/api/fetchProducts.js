const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:2000/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Gagal mengambil data produk:', error);
      return [];
    }
  };
  
  export default fetchProducts;
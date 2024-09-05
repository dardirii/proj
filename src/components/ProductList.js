import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Product from './Product';
import { fetchProducts } from '../api/productApi';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <Container>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <Row>
          {products.map(product => (
            <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
              <Product product={product} addToCart={addToCart} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductList;
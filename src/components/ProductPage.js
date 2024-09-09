import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Card, Container } from 'react-bootstrap';
import fetchProducts from '../api/fetchProducts'; // File fetch terpisah

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };
    loadProducts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterProducts(e.target.value, selectedTag);
  };

  const handleTagFilter = (tag) => {
    setSelectedTag(tag);
    filterProducts(searchTerm, tag);
  };

  const filterProducts = (search, tag) => {
    let filtered = products;

    if (search) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (tag) {
      filtered = filtered.filter((product) => product.tags.includes(tag));
    }

    setFilteredProducts(filtered);
  };

  return (
    <Container className="my-4">
      <h1>Produk Kami</h1>

      <Form>
        <Form.Group controlId="search">
          <Form.Control
            type="text"
            placeholder="Cari Produk..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
      </Form>

      <div className="my-3">
        <Button variant={selectedTag === '' ? 'primary' : 'outline-primary'} onClick={() => handleTagFilter('')}>
          Semua
        </Button>
        <Button variant={selectedTag === 'elektronik' ? 'primary' : 'outline-primary'} onClick={() => handleTagFilter('elektronik')}>
          Elektronik
        </Button>
        <Button variant={selectedTag === 'fashion' ? 'primary' : 'outline-primary'} onClick={() => handleTagFilter('fashion')}>
          Fashion
        </Button>
        <Button variant={selectedTag === 'makanan' ? 'primary' : 'outline-primary'} onClick={() => handleTagFilter('makanan')}>
          Makanan
        </Button>
      </div>

      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <Card className="my-3 p-3 rounded">
                <Card.Img src={product.image} variant="top" />
                <Card.Body>
                  <Card.Title as="div">
                    <strong>{product.name}</strong>
                  </Card.Title>
                  <Card.Text as="h3">Rp {product.price}</Card.Text>
                  <Button variant="primary">Tambahkan ke Keranjang</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>Tidak ada produk yang ditemukan.</p>
        )}
      </Row>
    </Container>
  );
};

export default ProductPage;
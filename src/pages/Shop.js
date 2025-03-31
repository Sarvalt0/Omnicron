import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

const products = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    category: 'T-Shirts',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: 59.99,
    category: 'Pants',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 3,
    name: 'Casual Jacket',
    price: 89.99,
    category: 'Outerwear',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 49.99,
    category: 'Dresses',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 5,
    name: 'Sneakers',
    price: 79.99,
    category: 'Shoes',
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 6,
    name: 'Hoodie',
    price: 45.99,
    category: 'T-Shirts',
    image: 'https://via.placeholder.com/300x400',
  },
];

const categories = ['All', 'T-Shirts', 'Pants', 'Outerwear', 'Dresses', 'Shoes'];

function Shop() {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
      </Typography>

      {/* Filters */}
      <Box sx={{ mb: 4, display: 'flex', gap: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Search"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.category}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price}
                </Typography>
                <Button
                  component={RouterLink}
                  to={`/product/${product.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Shop; 
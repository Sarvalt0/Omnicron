import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Card,
  CardMedia,
} from '@mui/material';

// This would typically come from an API or database
const product = {
  id: 1,
  name: 'Classic T-Shirt',
  price: 29.99,
  category: 'T-Shirts',
  description: 'A comfortable and stylish classic t-shirt made from 100% cotton. Perfect for everyday wear.',
  image: 'https://via.placeholder.com/600x800',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['White', 'Black', 'Navy'],
};

function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState('');

  const handleAddToCart = () => {
    // This would typically dispatch an action to add the item to the cart
    console.log('Adding to cart:', {
      product,
      size: selectedSize,
      color: selectedColor,
    });
  };

  return (
    <Container>
      <Grid container spacing={4}>
        {/* Product Image */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="800"
              image={product.image}
              alt={product.name}
            />
          </Card>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>

          {/* Size Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Select Size
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'contained' : 'outlined'}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Color Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Select Color
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {product.colors.map((color) => (
                <Button
                  key={color}
                  variant={selectedColor === color ? 'contained' : 'outlined'}
                  onClick={() => setSelectedColor(color)}
                >
                  {color}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleAddToCart}
            disabled={!selectedSize || !selectedColor}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail; 
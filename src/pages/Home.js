import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from '@mui/material';

const featuredProducts = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 29.99,
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 2,
    name: 'Denim Jeans',
    price: 59.99,
    image: 'https://via.placeholder.com/300x400',
  },
  {
    id: 3,
    name: 'Casual Jacket',
    price: 89.99,
    image: 'https://via.placeholder.com/300x400',
  },
];

function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
          color: 'white',
          borderRadius: 2,
          mb: 6,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Omnicron
        </Typography>
        <Typography variant="h5" gutterBottom>
          Discover the latest trends in fashion
        </Typography>
        <Button
          component={RouterLink}
          to="/shop"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 2 }}
        >
          Shop Now
        </Button>
      </Box>

      {/* Featured Products */}
      <Typography variant="h4" component="h2" gutterBottom>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {featuredProducts.map((product) => (
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

export default Home; 
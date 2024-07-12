import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function ProductCard({ product }) {
  return (
    <Card className="max-w-sm mx-auto">
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;

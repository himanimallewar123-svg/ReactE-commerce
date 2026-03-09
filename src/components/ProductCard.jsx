import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Rating } from "@mui/material";

function ProductCard({ product, addToCart }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
      />

      <CardContent>
        <Typography variant="h6">
          {product.title}
        </Typography>

        <Rating value={product.rating?.rate} readOnly />

        <Typography variant="h6" color="primary">
          ${product.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
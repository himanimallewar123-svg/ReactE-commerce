import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";

function Cart({ cart }) {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" mb={3}>
        Your Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        cart.map((item) => (
          <Card key={item.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">
                {item.title}
              </Typography>

              <Typography>
                Price: ${item.price}
              </Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Cart;
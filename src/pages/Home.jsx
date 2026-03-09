import React, { useEffect, useState } from "react";
import { Grid, Container, Typography, TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productAPI";
import { Select, MenuItem } from "@mui/material";

function Home({ addToCart }) {

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {

  const matchSearch = product.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "all" || product.category === category;

  return matchSearch && matchCategory;
});

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);



  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Products
      </Typography>

      <TextField
        label="Search products"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: 4 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  sx={{ mb: 3 }}
>
  <MenuItem value="all">All</MenuItem>
  <MenuItem value="men's clothing">Men</MenuItem>
  <MenuItem value="women's clothing">Women</MenuItem>
  <MenuItem value="jewelery">Jewelry</MenuItem>
  <MenuItem value="electronics">Electronics</MenuItem>
</Select>

      <Grid container spacing={4}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;
import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Blog Dashboard
      </Typography>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

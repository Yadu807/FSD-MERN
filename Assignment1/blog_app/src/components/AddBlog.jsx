import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const AddBlog = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ blogName, description, authorName });
    // Handle form submission
  };

  return (
    <Container>
      <Typography variant="h4" component="div" gutterBottom>
        Add Blog
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Blog Name"
          variant="outlined"
          margin="normal"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          fullWidth
          label="Author Name"
          variant="outlined"
          margin="normal"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AddBlog;

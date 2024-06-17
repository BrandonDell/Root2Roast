// import Grid from '@material-ui/core/Grid'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>New Post</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Create Post</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Share</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Link</Item>
        </Grid>
      </Grid>
    </Box>
  );
}


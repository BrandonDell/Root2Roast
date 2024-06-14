
    import Box from '@mui/material/Box';
    import Grid from '@mui/material/Grid';
    import RecipeApi from '../components/RecipeApi'
export const layout = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
          {/* left colum */}
          <RecipeApi/>
            </Grid>
            <Grid item xs={4}>
                {/* middle colum */}
            </Grid>
            <Grid item xs={4}>
                {/* right colum */}
            </Grid>
            
          </Grid>
        </Box>
    
    </div>
  )
}

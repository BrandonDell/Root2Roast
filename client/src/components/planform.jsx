import  {useState} from 'react'
import { Box, Typography, TextField, Button } from "@mui/material";

export const Planform = () => {
    const [plantName, setPlantName] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();

      // Perform form submission logic here (e.g., send data to server)
    };
  return (
    <div>  <Box
    className="test"
    sx={{
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      color: "black !important",
      width: "300px",
      position: "fixed",
      left: 0,
      top: 85,
      height: "80%",
      bgcolor: "background.paper",
      p: 2,
      boxShadow: 3,
    }}
  >
    <Typography variant="h1" gutterBottom sx={{ color: "#black", fontSize: "50px" }}>
      Plant Form
    </Typography>
    <Typography
      variant="body1"
      gutterBottom
      sx={{ color: "#fff", width: "100%" }}
    >
      Welcome! Enter the name of your plant below.
    </Typography>
    <form onSubmit={handleSubmit}>
      <TextField
        label="Plant Name"
        variant="filled"
        value={plantName}
        onChange={(event) => setPlantName(event.target.value)}
        sx={{ width: "50%" }}
        required
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  </Box>

    </div>
  )
}

const UserMediaCard = ({ title, description, imageUrl, children }) => {
  return (
    <Card
      sx={{
        width: '300px', // Adjust the width as needed
        margin: 'auto',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
        backdropFilter: 'blur(1px)', // Apply blur effect
        borderRadius: '10px', // Optional: Add rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow for depth
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        sx={{
          borderRadius: '10px', // Optional: Make the image corners rounded
        }}
      />
      <CardContent>
        {SocialMediaFeed}
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {children} {/* Render children components here */}
    </Card>
  );
};

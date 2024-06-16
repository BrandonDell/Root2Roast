// import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';

export const PlantIdCard = ({ title, imageURL }) => {
    // const [isSubmitting, setIsSubmitting] = useState(false);


    return (
        <Card sx={{
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
                image={imageURL}
                alt={title}
                sx={{
                    borderRadius: '10px', // Optional: Make the image corners rounded
                }}
            />

            <CardContent>
                {/* Your content here */}
                {title}
            </CardContent>
        </Card>
    );
}

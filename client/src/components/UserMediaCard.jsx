// import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import SocialMediaFeed from './SocialMediaFeed';
// import notifications from './notification'

const UserMediaCard = ({ title, description, imageUrl, children }) => {
    return (
        <>
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
                    <SocialMediaFeed />
                    {/* {notifications} */}
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                {/* {children} Render children components here */}
            </Card>
            <Card
                sx={{
                    width: '300px', // Adjust the width as needed
                    margin: 'auto',
                    padding: '20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent background
                    backdropFilter: 'blur(1px)', // Apply blur effect
                    borderRadius: '10px', // Optional: Add rounded corners
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadow for depth
                    marginTop: '20px', // Add margin between the cards
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
                    <SocialMediaFeed />
                    {/* {notifications} */}
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                {/* {children} Render children components here */}
            </Card>
        </>
    );
};

export default UserMediaCard;

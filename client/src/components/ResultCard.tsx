import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const ResultCard = (props) => {
  const { title, scientificName, wateringInfo, sunlightInfo, img } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Scientific Name: {scientificName[0]}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Watering: {wateringInfo}
          </Typography>
          <Box display="flex">
            <Typography variant="subtitle2" color="text.secondary">
              Sunlight:
            </Typography>
            {sunlightInfo?.map((info, index) => {
              return (
                <Typography
                  key={index}
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {info}
                </Typography>
              );
            })}
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResultCard;

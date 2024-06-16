import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const PlantResultCard = (props) => {
  const { title, scientificName, wateringInfo, sunlightInfo, img } = props;

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="plant result"
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Scientific Name: {scientificName[0]}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Watering: {wateringInfo}
          </Typography>
          {sunlightInfo && (
            <Box display="flex">
              <Typography variant="caption" color="text.secondary">
                Sunlight:
              </Typography>
              {sunlightInfo?.map((info, index) => {
                return (
                  <Typography
                    key={index}
                    variant="caption"
                    color="text.secondary"
                    gutterBottom
                  >
                    {info}
                  </Typography>
                );
              })}
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlantResultCard;

import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const IngredientResultCard = (props) => {
  const { title, img, ingredients, url } = props;
  return (
    <Card>
      <CardMedia sx={{ height: 140 }} image={img} title="ingredient result" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box component="ul" sx={{ m: 0 }}>
          {ingredients.map((item, index) => {
            return (
              <Typography variant="caption" component="li" key={index}>
                {item}
              </Typography>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

export default IngredientResultCard;

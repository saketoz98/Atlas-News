import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const NewsContainer = ({ article: { id, title, url, description, urlToImage } }) => {
  const truncatedDescription = description.slice(0, 300);
  const openArticleInNewTab = () => {
    // Use window.open() to open the URL in a new tab
    console.log(url);
    window.open(url, "_blank");
  };
  return (
    <Grid item key={id} xs={12} sm={6} md={4} onClick={openArticleInNewTab}>
      <Card
        raised
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          ":hover": {
            boxShadow: 20, // theme.shadows[20]
          },
          cursor: 'pointer'
        }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: "56.25%",
          }}
          image={urlToImage}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">{truncatedDescription} {description.length > 300 && '...'}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NewsContainer;

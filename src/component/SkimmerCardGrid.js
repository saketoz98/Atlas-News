import { Card, Container, Grid, Skeleton } from "@mui/material";
import React from "react";

const SkimmerCardGrid = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {cards.map((card) => {
          return (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Skeleton variant="rectangular" height={300} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }}/>
                <Skeleton variant="rectangular" height={70} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default SkimmerCardGrid;

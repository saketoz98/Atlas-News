import React, { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import NewsContainer from "./NewsContainer";
import { Container, Grid } from "@mui/material";
import SkimmerCardGrid from "./SkimmerCardGrid";

const NewsList = () => {
  const { news, error, loading, fetchAllNewsArticles } = useNewsContext();
  useEffect(() => {
    fetchAllNewsArticles();
  }, []);

  if (loading) {
    return <SkimmerCardGrid />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const newsList =
    news.length > 0 ? (
      news.map((article) => {
        return <NewsContainer key={article.id} article={article} />;
      })
    ) : null;

  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {newsList}
      </Grid>
    </Container>
  );
};

export default NewsList;

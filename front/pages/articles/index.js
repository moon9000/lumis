"use client";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Stack } from "@mui/material";
import { ArticleCard } from "../../components/ArticleCard";

export default function Articles({ articles }) {
  return (
    <Stack spacing={15} direction={"column"}>
        {articles?.map((article) => {
          return <ArticleCard key={article.id} article={article} />;
        })}
    </Stack>
  );
}

const ARTICLES_QUERY = gql`
  query ARTICLES_QUERY {
    articles {
      data {
        id
        attributes {
          title
          description
          content
          date
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "http://127.0.0.1:1337/graphql",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: ARTICLES_QUERY,
  });

  const pageData = data;

  return {
    props: {
      articles: pageData.articles.data,
    },
  };
}

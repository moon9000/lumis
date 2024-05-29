"use client";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Stack } from "@mui/material";
import { ArticleCard } from "../../components/ArticleCard";
import { getStrapiURL } from "../../utils/utils";

export default function Article(article) {
  return (
    <Stack spacing={15} direction={"row"}>
        {article?.article && <ArticleCard article={article.article} showContent />}
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

export async function getStaticPaths() {
    const baseUrl = getStrapiURL();
    const client = new ApolloClient({
        uri: `${baseUrl}/graphql`,
        cache: new InMemoryCache(),
      });

    const dataStatic = await client.query({
        query: ARTICLES_QUERY,
    });


    return {
      paths: dataStatic.data.articles.data.map(article => ({
        params: { id: article.id.toString() },
      })),
      fallback: false
    }
  }

export async function getServerSideProps(ctx) {
  const baseUrl = getStrapiURL();
  const client = new ApolloClient({
    uri: `${baseUrl}/graphql`,
    cache: new InMemoryCache(),
  });

    const { data } = await client.query({
        query: ARTICLES_QUERY,
        variables: { id: ctx.params.id }
    });

  const pageData = data;
  const currentArticle = pageData.articles.data.find((article) => article.id === ctx.params.id)
  return {
    props: {
      article: currentArticle,
    },
  };
}

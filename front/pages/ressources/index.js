"use client";

import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Button } from "@mui/material";
import { initializeApollo } from "../../lib/apolloClient";

export default function Articles({ articles, toto }) {
  return (
    <div>
      TEST PAGE RESSOURCES <Button href='/articles'>文章專區</Button> <Button href='/videos'>影片專區</Button>
    </div>
  );
}

const HOME_QUERY = gql`
  query HOME_QUERY {
    articles {
      data {
        id
        attributes {
          title
          description
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  /* 
  const client = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: HOME_QUERY
  });
  */
  const pageResponse = await apolloClient.query({ query: HOME_QUERY });
  const pageData = pageResponse;
  return {
    props: {
      toto: "test",
      articles: pageData,
    },
  };
}

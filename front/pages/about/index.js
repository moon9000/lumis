"use client";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Stack, Typography } from "@mui/material";

export default function About({ content, image }) {
  return (
    <div>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        圓你の法國留學夢
        <br />
        找留法學姊Cynthia
      </Typography>

      <Stack
        spacing={3}
        direction="row"
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: '25px'
        }}
      >
        <img
          src={`http://localhost:1337${image.data.attributes.url}`}
          alt=""
          height="350"
          width="350"
        />
        <Typography sx={{paddingRight: '300px'}} style={{ wordWrap: "break-word"}}>TODO CONTENT</Typography>
      </Stack>
    </div>
  );
}

const ABOUT_QUERY = gql`
  query ABOUT_QUERY {
    about {
      data {
        attributes {
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
    query: ABOUT_QUERY,
  });

  const pageData = data;
  return {
    props: {
      //content: pageData.about.data.attributes.content,
      image: pageData.about.data.attributes.image,
    },
  };
}

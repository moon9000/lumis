"use client";

import { Stack } from "@mui/material";
import { ArticleCard } from "../../components/ArticleCard";
import { VideoCard } from "../../components/VideoCard";

export default function Videos({ videos }) {
  return (
    <Stack sx={{display: 'flex', alignItems: 'center'}}>
      <VideoCard videoUrl={'https://www.youtube.com/embed/C0DPdy98e4c?si=dkjZADSxG4ei5eYB'} />
      <VideoCard videoUrl={'https://www.youtube.com/embed/C0DPdy98e4c?si=dkjZADSxG4ei5eYB'} />
      <VideoCard videoUrl={'https://www.youtube.com/embed/C0DPdy98e4c?si=dkjZADSxG4ei5eYB'} />
      <VideoCard videoUrl={'https://www.youtube.com/embed/C0DPdy98e4c?si=dkjZADSxG4ei5eYB'} />
    </Stack>
  )
}

/*
const VIDEOS_QUERY = gql`
  query VIDEOS_QUERY {
    videos {
      data {
        id
        attributes {
          title
          description
          content
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

export async function getServerSideProps() {
  //const apolloClient = initializeApollo()

  console.log("in getServerSideProps");
  const client = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: VIDEOS_QUERY,
  });

  //const pageResponse = await apolloClient.query({ query: HOME_QUERY })
  console.log("data :");
  console.log(data);
  const pageData = data;
  console.log("pageData :");
  console.log(pageData);
  return {
    props: {
      videos: pageData.videos.data,
    },
  };
}
 */
import { Box, Button, Stack, Typography } from "@mui/material";
import { bgColor } from "../../constants/constants";
import Markdown from "markdown-to-jsx";

export function ArticleCard({ article, showContent = false }) {
  const imageUrl = article.attributes.image?.data?.attributes?.url;

  const renderFullArticleHeader = () => {
    return (
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        {imageUrl && <img src={imageUrl} width={300} height={300} />}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6">
            {new Date(article.attributes.date).toLocaleDateString("fr")} {"-"}
          </Typography>
          <Typography variant="h6">{article.attributes.title}</Typography>
        </Box>
      </Stack>
    );
  };

  const renderFullArticle = () => {
    return (
      <Stack
        direction={"column"}
        sx={{
          display: "flex",
          alignItems: "center",
          paddingX: "20px",
        }}
      >
        {renderFullArticleHeader()}
        {/* <Markdown>{article.attributes.content}</Markdown> */}
      </Stack>
    );
  };

  const renderPreviewArticle = () => {
    return (
      <Stack sx={{ display: "flex", maxWidth: "800px" }}>
        <Stack sx={{ display: "flex", width: '100%', justifyContent: "center" }} direction="row">
          {imageUrl && <img src={imageUrl} width={150} height={150} />}
          <Stack
            direction={"column"}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: '40px'
            }}
          >
            <Typography variant="h6">
              {new Date(article.attributes.date).toLocaleDateString("fr")}{" "}
              {showContent ? "-" : null}{" "}
            </Typography>
            <Typography variant="h6">{article.attributes.title}</Typography>
          </Stack>
        </Stack>
        <Box sx={{ paddingTop: '10px', paddingX: '20px', justifyContent: "center", alignItems: "center" }}>
          <Markdown>{article.attributes.description}</Markdown>
        </Box>
        <Button sx={{ marginTop: "auto" }} href={`/articles/${article.id}`}>
          See more
        </Button>
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: showContent ? undefined : "350px",
        width: showContent ? undefined : "350px",
        flexDirection: showContent ? "column" : null,
        borderStyle: "dashed solid",
        borderColor: bgColor,
      }}
    >
      {showContent ? renderFullArticle() : renderPreviewArticle()}
    </Box>
  );
}

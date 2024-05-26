import {
  AppBar,
  Box,
  Container,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Logo } from "../../public/Logo";

export function Layout({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack spacing={3}>
      <AppBar position="static" sx={{ backgroundColor: "#D896F6" }}>
        <Container>
          <Toolbar disableGutters>
            <Grid
              container
              spacing={25}
              columns={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/about"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  關於
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  服務
                </Typography>
              </Grid>
              <Grid item>
                <Logo />
              </Grid>
              <Grid item>
                <div>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  id="fade-button"
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} 
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  資源
                </Typography>
                <Menu  
                anchorEl={anchorEl} 
                MenuListProps={{
                'aria-labelledby': 'fade-button',
                }}
                id="fade-menu"
                onClose={handleClose}
                open={open}>
                  <MenuItem as="a" href="/articles">
                    <Typography>文章</Typography>
                  </MenuItem>
                  <MenuItem as="a" href="/videos">
                    <Typography>影片</Typography>
                  </MenuItem>
                </Menu>
                </div>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  聯絡
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{paddingX: '100px'}}>
      {children}
      </Box>
      <Box
        sx={{
          backgroundColor: "#D896F6",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            textAlign: "center",
            fontFamily: "monospace",
            color: "white",
          }}
        >
          Copyright © 2023 留法學姊 Cynthia ┃ Lumia Consulting. All rights
          reserved. 版權所有
        </Typography>
      </Box>
    </Stack>
  );
}

function isMatchingUrl(currentUrl, urlToCompare = "/") {
  const fullUrlToCompare = urlToCompare.startsWith("/")
    ? urlToCompare
    : "/" + urlToCompare;

  return `/${currentUrl.split("/")[1] || ""}` === fullUrlToCompare;
}

function getCurrentPageIndex(pages, currentUrl) {
  return pages.findIndex((page) =>
    isMatchingUrl(currentUrl, page.genericData.url)
  );
}

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#384e1d",
        color: "#fff",
      }}
    >
      <Container maxWidth="md" sx={{ display: "flex", gap: "20px" }}>
        <Typography variant="body1">Stephen Jastrow</Typography>
        <Link
          rel="noopener"
          target="_blank"
          href="https://github.com/sjastrow92"
          color="#fff"
        >
          <GitHubIcon />
        </Link>
        <Typography variant="body1">Jeovon Mills</Typography>
        <Link
          rel="noopener"
          target="_blank"
          href="https://github.com/jmacker101"
          color="#fff"
        >
          <GitHubIcon />
        </Link>
        <Typography variant="body1">Lora Lainio</Typography>
        <Link
          rel="noopener"
          target="_blank"
          href="https://github.com/l-lainio"
          color="#fff"
        >
          <GitHubIcon />
        </Link>
        <Typography variant="body1">Brandon Del Cioppa</Typography>
        <Link
          rel="noopener"
          target="_blank"
          href="https://github.com/brandondell"
          color="#fff"
        >
          <GitHubIcon />
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;

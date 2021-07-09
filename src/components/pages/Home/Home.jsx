import React from "react";
import "./Home.scss";
import CustomInput from "../../atoms/CustomInput";
import Container from "../../layouts/Container";
import { ThemeProvider } from "styled-components";
import { StyledSearch } from "../../organims/Search";
import Button from "../../atoms/Button";


const theme = {
  fg: "palevioletred",
  bg: "white",
};

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg,
});


export default function Home() {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div style={{ width: "100vw", height: "90vh" }}>
          <Button>ThemedButton</Button>
          <ThemeProvider theme={invertTheme}>
            <Button>Inverted Theme</Button>
          </ThemeProvider>
        </div>
      </ThemeProvider>
      <br />
      <p>Custom input standard (500px)</p>
      <CustomInput placeholder="Type here" />
      <br />
      <p>Custom input with fullWidth prop</p>
      <CustomInput fullWidth placeholder="Type here" />

      <p>Search component</p>
      <StyledSearch />
      <Button>Click here</Button>
    </Container>
  );
}

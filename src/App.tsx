import { useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
// import reactLogo from './assets/react.svg'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;

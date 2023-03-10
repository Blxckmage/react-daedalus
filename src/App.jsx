import { Box, Container } from "@chakra-ui/react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box className="App">
      <Container maxW="container.md">
        <Navbar />
        <Home />
      </Container>
    </Box>
  );
}

export default App;

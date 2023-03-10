import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p={8} maxW="container.lg" boxShadow="md" borderRadius="md">
      <Box mb={8}>
        <Heading>Welcome to our Fashion Store</Heading>
        <Text mt={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat massa ut blandit tristique. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Sed
          condimentum justo a luctus bibendum. Integer malesuada commodo ipsum
          nec ultrices.
        </Text>
      </Box>
      <Box mb={8}>
        <Heading size="md" mb={4}>
          Featured Products
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={{ base: 4, md: 8 }}
        >
          <GridItem
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Image
              src="https://via.placeholder.com/300x300"
              alt="Product Image"
            />
            <Heading size="sm" mt={2}>
              Product Name
            </Heading>
            <Text mt={1}>$10.00</Text>
          </GridItem>
          <GridItem
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Image
              src="https://via.placeholder.com/300x300"
              alt="Product Image"
            />
            <Heading size="sm" mt={2}>
              Product Name
            </Heading>
            <Text mt={1}>$10.00</Text>
          </GridItem>
          <GridItem
            _hover={{
              transform: "scale(1.05)",
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <Image
              src="https://via.placeholder.com/300x300"
              alt="Product Image"
            />
            <Heading size="sm" mt={2}>
              Product Name
            </Heading>
            <Text mt={1}>$10.00</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;

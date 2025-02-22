import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box textAlign="center" py={20} px={4}>
        <Heading as="h1" size="2xl" mb={4}>
          Welcome to My Store
        </Heading>
        <Text fontSize="xl" mb={8}>
          Discover amazing products at great prices
        </Text>
        <Button as={RouterLink} to="/products" colorScheme="blue" size="lg">
          Browse Products
        </Button>
      </Box>
    </>
  );
};

export default Home;

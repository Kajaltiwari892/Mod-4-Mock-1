import { Badge, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <>
      <Flex p={4} gap={4}>
        <Button as={Link} to="/">
          Home
        </Button>
        <Button as={Link} to="/products">
          Products
        </Button>
        <Button as={Link} to="/cart">
          Cart <Badge ml={2}>{cartItems.length}</Badge>
        </Button>
      </Flex>
    </>
  );
};

export default Navbar;

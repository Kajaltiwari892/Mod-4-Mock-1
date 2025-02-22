import { Card ,Image ,Stack , CardBody, Heading , Text, Button} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/actions/cartActions";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card maxW="sm">
        <Image
          src={product.image}
          alt={product.title}
          objectFit="contain"
          height="200px"
          pt={4}
        />
        <CardBody>
          <Stack spacing={3}>
            <Heading size="md">{product.title}</Heading>
            <Text color="blue.600" fontSize="2xl">
              ${product.price}
            </Text>
            <Button
              colorScheme="teal"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default ProductCard;

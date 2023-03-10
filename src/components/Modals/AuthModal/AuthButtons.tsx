import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const AuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image
          src="/images/googlelogo.png"
          alt="google login"
          height="20px"
          mr={1}
        />{" "}
        Continue with Google
      </Button>
      <Button variant="oauth">Other Provider</Button>
    </Flex>
  );
};

export default AuthButtons;

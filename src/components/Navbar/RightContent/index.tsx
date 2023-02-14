import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modals/AuthModal";
import AuthButtons from "./AuthButtons";

const RightBar: React.FC = () => {
  return (
    <>
      <AuthModal />
      <Flex align="center" justify="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightBar;

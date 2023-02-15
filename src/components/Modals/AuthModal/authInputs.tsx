import { Flex } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/src/atoms/authModalState";
import AuthLogin from "./authLogin";
import AuthSignUp from "./authSignup";

const AuthInput: React.FC = () => {
  const modalStateValue = useRecoilValue(authModalState);

  return (
    <Flex direction="column" mt={4} align="center" width="100%">
      {modalStateValue.default === "login" && <AuthLogin />}
      {modalStateValue.default === "signup" && <AuthSignUp />}
    </Flex>
  );
};

export default AuthInput;

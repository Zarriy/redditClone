import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalState";

type LoginProps = {};

const AuthLogin: React.FC<LoginProps> = () => {
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <form>
      <Input
        name="email"
        placeholder="email"
        type="email"
        required
        mb={2}
        bg="gray.50"
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
          outline: "none",
        }}
        value={loginValues.email}
        onChange={handleLoginInput}
      />
      <Input
        mb={2}
        name="password"
        type="password"
        placeholder="enter password"
        bg="gray.50"
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
          outline: "none",
        }}
        value={loginValues.password}
        onChange={handleLoginInput}
      />
      <Button type="submit" width="100%" mb={2} height="36px" mt={2}>
        Login
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>New Here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, default: "signup" }))
          }
        >
          Sign UP
        </Text>
      </Flex>
    </form>
  );
};

export default AuthLogin;

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalState";

const AuthSignUp: React.FC = () => {
  const [signUpValues, setSignUpValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setAuthModalState = useSetRecoilState(authModalState);

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        value={signUpValues.email}
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
        value={signUpValues.password}
        onChange={handleLoginInput}
      />
      <Input
        mb={2}
        name="confirmPassword"
        type="password"
        placeholder="confirm password"
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
        value={signUpValues.confirmPassword}
        onChange={handleLoginInput}
      />
      <Button type="submit" width="100%" mb={2} height="36px" mt={2}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justify="center">
        <Text mr={1}>Alread a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({ ...prev, default: "login" }))
          }
        >
          Log In
        </Text>
      </Flex>
    </form>
  );
};

export default AuthSignUp;

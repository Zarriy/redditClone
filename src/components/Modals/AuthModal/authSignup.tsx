import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { authModalState } from "@/src/atoms/authModalState";
import { auth } from "../../../firebase/clientApp";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthSignUp: React.FC = () => {
  const [signUpValues, setSignUpValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const setAuthModalState = useSetRecoilState(authModalState);
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  const handleLoginInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signUpValues.password !== signUpValues.confirmPassword) {
      setError("Password do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpValues.email, signUpValues.password);
  };

  return (
    <form onSubmit={formSubmitHandler}>
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
      <Text>Error</Text>
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

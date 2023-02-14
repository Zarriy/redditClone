import { authModalState } from "@/src/atoms/authModalState";
import { Button } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";

const AuthButtons: React.FC = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant="outline"
        height="28px"
        mr={2}
        width={{ base: "70px", sm: "110px" }}
        display={{ base: "none", sm: "flex" }}
        onClick={() => setAuthModalState({ open: true, default: "login" })}
      >
        Log In
      </Button>
      <Button
        height="28px"
        mr={2}
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", sm: "110px" }}
        onClick={() => setAuthModalState({ open: true, default: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};

export default AuthButtons;

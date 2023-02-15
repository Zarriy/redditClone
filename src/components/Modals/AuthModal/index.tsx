import { authModalState } from "@/src/atoms/authModalState";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthButtons from "./AuthButtons";
import AuthInput from "./authInputs";

const AuthModal: React.FC = () => {
  const [modalView, setModalView] = useRecoilState(authModalState);

  const handleModalClose = () => {
    setModalView((prev) => ({ ...prev, open: false }));
  };
  return (
    <>
      <Modal isOpen={modalView.open} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {modalView.default === "login" && "Login"}
            {modalView.default === "signup" && "Sign Up"}
            {modalView.default === "reset" && "Reset Password"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              direction="column"
              width="70%"
              align="center"
              justify="center"
            >
              <AuthButtons />
              <Text color="gray.500" fontWeight={700}>
                OR
              </Text>
              <AuthInput />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

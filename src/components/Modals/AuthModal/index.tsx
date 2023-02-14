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
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>This is Modal Body</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthModal;

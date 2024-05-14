import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  color: blue;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledModal = styled.div`
  width: 500px;
  height: 350px;
  color: blue;
  background-color: #eee;
  display: block;
  position: absolute;
  border-radius: 10px;
  top: 20%;
  left: 35%;
  padding: 30px;
`;

export default function Modal({ children, isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    isOpen && (
      <StyledModalBackground>
        <StyledModal ref={modalRef}>{children}</StyledModal>
      </StyledModalBackground>
    )
  );
}

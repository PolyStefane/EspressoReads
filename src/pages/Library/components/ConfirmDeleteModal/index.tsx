// External dependencies
import React from "react";

// Styles
import {
  Icon,
  Modal,
  SubText,
  Message,
  Overlay,
  ButtonRow,
  CancelButton,
  ConfirmButton,
} from "./styles";
import { WarningIconSVG } from "../../../../assets/icons/WarningIcon";

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <Overlay>
      <Modal>
        <Icon>
          <WarningIconSVG />
        </Icon>
        <Message>
          Are you sure you want to delete this book from your library?
        </Message>
        <SubText>The comment history will be deleted together</SubText>
        <ButtonRow>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={onConfirm}>Yes</ConfirmButton>
        </ButtonRow>
      </Modal>
    </Overlay>
  );
};

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useContactData from "./hooks/useContacts";

export default function ModalC({ show, onHide, contactId }) {
  const navigate = useNavigate();
  const { data, loading, error } = useContactData();
  const contacts = data?.results;
  const [info] = contacts?.filter((contact) => contact.id === contactId);
  console.log(info);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Modal C</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Country Id: {info?.country?.id}</p>
        <p>Country Name: {info?.country?.name}</p>
        <p>Country Name: {info?.phone}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{
            background: "white",
            border: "1px solid #46139f",
            color: "black",
          }}
          onClick={() => {
            onHide();
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

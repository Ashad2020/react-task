import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import useContactData from "./hooks/useContacts";

export default function ModalA({
  show,
  onHide,
  setModalShowC,
  setModalShowB,
  setContactId,
}) {
  const navigate = useNavigate();
  const { data, loading, error } = useContactData();
  const [onlyEven, setOnlyEven] = useState(false);
  const contacts = data?.results;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal A | All Contacts
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {contacts?.map(
          (contact) =>
            (!onlyEven || (onlyEven && contact.id % 2 === 0)) && (
              <div
                onClick={() => {
                  setModalShowC(true);
                  setContactId(contact.id);
                }}
                key={contact.id}
              >
                <p>Id: {contact.id}</p>
                <p>Phone: {contact.phone}</p>
                <p>Country Name: {contact?.country?.name}</p>
                <hr />
              </div>
            )
        )}
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
            navigate("/problem-2");
          }}
        >
          Close
        </Button>
        <Button
          style={{ backgroundColor: "#ff7f50" }}
          onClick={() => {
            setModalShowB(true);
            onHide();
            navigate("modalB");
          }}
        >
          US Contact
        </Button>
        <label>
          <input
            type="checkbox"
            checked={onlyEven}
            onChange={() => setOnlyEven(!onlyEven)}
          />
          Only even
        </label>
      </Modal.Footer>
    </Modal>
  );
}

import React from "react";
import ModalA from "./ModalA";
import ModalB from "./ModalB";
import { Link } from "react-router-dom";
import ModalC from "./ModalC";

const Problem2 = () => {
  const [modalShowA, setModalShowA] = React.useState(false);
  const [modalShowB, setModalShowB] = React.useState(false);
  const [modalShowC, setModalShowC] = React.useState(false);
  const [contactId, setContactId] = React.useState(null);
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <Link to={"modalA"}>
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              onClick={() => setModalShowA(true)}
            >
              All Contacts
            </button>
          </Link>

          <Link to={"modalB"}>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              onClick={() => setModalShowB(true)}
            >
              US Contacts
            </button>
          </Link>
        </div>
      </div>
      <ModalA
        show={modalShowA}
        onHide={() => setModalShowA(false)}
        setModalShowB={setModalShowB}
        setModalShowC={setModalShowC}
        setContactId={setContactId}
      />
      <ModalB
        show={modalShowB}
        onHide={() => setModalShowB(false)}
        modalShowA={modalShowA}
        setModalShowA={setModalShowA}
        setModalShowC={setModalShowC}
        setContactId={setContactId}
      />
      <ModalC
        show={modalShowC}
        onHide={() => setModalShowC(false)}
        contactId={contactId}
      />
    </div>
  );
};

export default Problem2;

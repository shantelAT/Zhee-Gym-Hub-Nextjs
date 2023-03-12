import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from "next/router";

function StaticExample() {
    const router = useRouter();

  function refreshPage() {
    router.reload();
  }

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Upload successful</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Your submission was successful!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={refreshPage}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default StaticExample;
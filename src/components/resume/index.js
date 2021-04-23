import { Button, Modal } from "react-bootstrap";
import './style.css';

function Resume(props) {

    return (
        <Modal
          {...props}
          size="lg"
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header className="py-1" closeButton >
                <Modal.Title as="h5" id="modal-title">
                    Résumé
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center" bsPrefix>
                <img className="resume img-fluid" src="images/Sebastian_Arrazola_IT_v4.JPG" alt="Sebastian's Resume"/>
            </Modal.Body>
            <Modal.Footer className="py-1">
                <a className="btn btn-primary" href="images/Sebastian_Arrazola_IT_v2.pdf" download="Sebastian_Arrazola.pdf">
                    <i className="fa fa-download"></i> Download
                </a>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}
  
export default Resume;
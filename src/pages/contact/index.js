import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Card, Col, Container, Form } from "react-bootstrap";
import './style.css';

const initState = {
    nameError: "",
    emailError: "",
    messageError: ""
};

const Contact = () => {

    const [errorState, setErrorState] = useState(initState);
    const [sentState, setSentState] = useState(false);

    const validate = (event) => {
        event.preventDefault();
        let nameErr="";
        let emailErr="";
        let messageErr="";
        if (event.target.name_first.value === "" && event.target.name_last.value === "") {
            nameErr="please enter name";
        };
        if (!event.target.email.value.includes('@')) {
            emailErr="invalid email";
        };
        if (event.target.message.value === "") {
            messageErr="please type a message";
        };
        if (nameErr || emailErr || messageErr) {
            setErrorState({ 
                nameError: nameErr,
                emailError: emailErr,
                messageError: messageErr
            })
        }else{
            setErrorState(initState);
            sendEmail(event);
        };
    };
    
    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('sebas_portfolio', 'template_iy1dije', event.target, 'user_shuOeJtSBrjuBIrzFDaCo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            setSentState(true);
    }

    return (
        <Container>
            <Col md={12}>
                <Card className="mt-4">
                    <Card.Body id="grad1">
                        <Card.Title className="card-text">Contact</Card.Title>
                        {/* line divider between heading and image */}
                        <div className="line"/>
                        {sentState
                        ?
                        <div className="text-center my-4 dunce">
                            <h2 className="thankYou">Thanks, You!</h2>
                            <p className="font-weight-bold">Your message has been sent! I will be in contact with you in 1-2 business days.</p>
                            <Button type="button" className="btn btn-primary" onClick={()=>{window.location.reload()}}>New Message</Button>
                        </div>
                        :
                        <Form onSubmit={validate}>
                            <Form.Group className="form-group-1">
                                    <Form.Label className="card-text">Name
                                    {errorState.nameError ? <div className="errorMsg">{errorState.nameError}</div> : null}
                                    </Form.Label>
                                <Form.Row>
                                    <Col>
                                        <Form.Control placeholder="First name" name="name_first"/>
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" name="name_last"/>
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="card-text">Email
                                {errorState.emailError ? <div className="errorMsg">{errorState.emailError}</div> : null}
                                </Form.Label>
                                <Form.Control aria-describedby="emailHelp" placeholder="Enter email" name="email"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="card-text">Message
                                {errorState.messageError ? <div className="errorMsg">{errorState.messageError}</div> : null}
                                </Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Type message here" name="message"></Form.Control>
                            </Form.Group>
                            <Button type="submit" value="Send" className="btn btn-primary">Submit</Button>
                        </Form>
                        }
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    );
}
  
export default Contact;
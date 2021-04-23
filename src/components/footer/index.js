import React, { useState } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import Resume from "../resume";
import './style.css';

function Footer() {

    const [show, setShow] = useState(false);

    const popover = (
        <Popover id="popover">
            <Popover.Title as="h5"><i class="fa fa-info-circle"></i> Contact Info</Popover.Title>
            <Popover.Content>
                <div>
                    Email: <a href="mailto:sebastianarrazola@gmail.com">sebastianarrazola@gmail.com</a>
                </div>
                <div>
                    Phone: <a href="tel:+13139380626">+1 (313) 938-0626</a>
                </div>
            </Popover.Content>
        </Popover>
    );

    return (
        <>
            <footer className="footer mt-auto bg-dark">
                <div className="footer-container d-flex justify-content-between align-items-center">
                    {/* <!-- Button trigger modal --> */}
                    <div type="button" className="foot-link" onClick={() => {setShow(true)}}>
                        <i className="fas fa-file-pdf fa-2x"></i>
                    </div>
                    {/* <!-- Git Hub Profile Link --> */}
                    <a className="foot-link" href="https://github.com/SeaBa55"><i className="fab fa-github fa-2x"></i></a>
                    {/* <!-- Site version info --> */}
                    <span className="my-foot-text bangers-font-small">© 2021 v 4.3 - updated: 04/21</span>
                    {/* <!-- LinkedIn Profile Link --> */}
                    <a className="foot-link" href="https://www.linkedin.com/in/sebastian-arrazola-b92571b8/"><i className="fab fa-linkedin fa-2x"></i></a>
                    {/* <!-- Email info popover --> */}
                    <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                        <div type="button" className="foot-link">
                            <i className="far fa-envelope fa-2x"></i>
                        </div>
                    </OverlayTrigger>
                </div>
            </footer>
            <Resume
                show={show}
                onHide={() => {setShow(false)}}
            />
        </>
    );
}

export default Footer;
import "./OffcanvasInfo.css";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Oval } from "react-loader-spinner";

const OffcanvasInfo = () => {
  const navigate = useNavigate();

  //Offcanvas state
  const [show, setShow] = useState(false);

  const [resetMsg, setResetMsg] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClose = () => {
    setResetMsg(null);
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleResetDB = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/reset"
      );
      if (response.status === 200) {
        setResetMsg(response.data.msg);
        setShowSpinner(false);
      }
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        variant="custom"
        className="custom-btn floatingRightNavigation"
        onClick={handleShow}
      >
        About this project
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header
          style={{
            borderBottom: "1px solid var(--third-color)",
            paddingBottom: "1.35rem",
          }}
          closeButton
        >
          <Offcanvas.Title>
            <span className="tx-third-color" style={{ fontWeight: "300" }}>
              About this project
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Offcanvas.Title
            className="tx-third-color"
            style={{ fontWeight: "300" }}
          >
            Summary
          </Offcanvas.Title>
          <p>
            HackMusic is an e-commerce site created as the final project of Hack
            Academy's Coding Bootcamp. It was developed in 3 weeks by 4
            students. <br></br>Click below for more information!
          </p>
          <Button variant="custom" className="custom-btn mt-2">
            <a href="https://hackmusic.vercel.app/about-us">
              <span className="tx-fourth-color" onClick={handleClose}>
                About us
              </span>
            </a>
          </Button>
          <hr></hr>
          <Offcanvas.Title
            className="tx-third-color"
            style={{ fontWeight: "300" }}
          >
            Important note
          </Offcanvas.Title>
          <p>
            Someone may have added, edited or deleted some resources before you
            came in. Consider reseting the database for a better exeperience.
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <Button
              variant="secondary"
              onClick={() => {
                setShowSpinner(true);
                handleResetDB();
              }}
            >
              Reset Database
            </Button>
            {showSpinner && (
              <Oval
                className="spinner"
                color="#ff5a00"
                secondaryColor="#f2f2f2"
                height={30}
                width={30}
                id="spinner"
                style={{ margin: "0 auto" }}
              />
            )}

            {resetMsg && (
              <p
                role="alert"
                className="mb-0 custom-alert"
                style={{ backgroundColor: "rgb(240,240,240)" }}
              >
                {resetMsg}
                <FontAwesomeIcon
                  icon={faCheck}
                  className="form-icon ps-2 tx-third-color"
                />
              </p>
            )}
          </div>

          <hr></hr>
          <Offcanvas.Title
            className="tx-third-color"
            style={{ fontWeight: "300" }}
          >
            Navigation Guide
          </Offcanvas.Title>
          <p>
            Feel free to navigate the website, add products to your cart, and
            finish your purchase logging in with User's credentials:
          </p>
          <div
            className="d-flex justify-content-between align-items-center p-2 tx-size-md"
            style={{ backgroundColor: "rgb(240,240,240)" }}
          >
            <div>
              <span className="d-block">Email: user@user.com</span>
              <span className="d-block">Password: user</span>
            </div>

            <Button
              variant="custom"
              className="tx-third-color"
              style={{
                backgroundColor: "rgb(240,240,240)",
                color: "var(--third-color)",
              }}
              onClick={handleClose}
            >
              <a href="https://hackmusic.vercel.app/login">
                <span className="tx-third-color" onClick={handleClose}>
                  Go to Login
                </span>
              </a>
            </Button>
          </div>
          <p className="pt-3">
            If you want to play around with the website resources such as
            categories and products you can accces the Admin Dashboard using
            these credentials:
          </p>
          <div
            className="d-flex justify-content-between align-items-center p-2 tx-size-md"
            style={{ backgroundColor: "rgb(240,240,240)" }}
          >
            <div>
              <span className="d-block">Email: admin@admin.com</span>
              <span className="d-block">Password: admin</span>
            </div>

            <Button
              variant="custom"
              className="tx-third-color"
              style={{
                backgroundColor: "rgb(240,240,240)",
                color: "var(--third-color)",
              }}
              onClick={handleClose}
            >
              <Link to="/">
                <span className="tx-third-color" onClick={handleClose}>
                  Go to Dashboard
                </span>
              </Link>
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasInfo;

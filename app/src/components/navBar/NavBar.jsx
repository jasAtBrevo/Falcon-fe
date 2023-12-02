import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PropTypes from "prop-types";

function NavBar({ setCurrentPg }) {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ padding: "1.5rem" }}
      >
        <Container style={{ flex: 10 }}>
          <Navbar.Brand href="/">
            <img
              src="src/assets/logo.png"
              width="80"
              height="30"
              className="d-inline-block align-top"
              alt="Falcons"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => {}}>Home</Nav.Link>
              <Nav.Link onClick={() => {}}>Link</Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCurrentPg("createTeam");
                }}
              >
                Teams
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  setCurrentPg("addProject");
                }}
              >
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <NavDropdown title="User" id="basic-nav-dropdown" style={{ flex: 2 }}>
          <NavDropdown.Item onClick={() => {}}>Profile</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {}}>Setting</NavDropdown.Item>
          <NavDropdown.Item onClick={() => {}}>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => {}}>Log out</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
    </>
  );
}

export default NavBar;

NavBar.defaultProps = {
  setCurrentPg: () => {},
};
NavBar.propTypes = {
  setCurrentPg: PropTypes.func,
};

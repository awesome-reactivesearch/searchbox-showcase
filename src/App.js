import { Container, Nav, Navbar, Tab, Tabs } from "react-bootstrap";

import "./App.css";
import FloatingOverlayButton from "./FloatingOverlayButton";
import showcaseData from "./showcaseData";

function App() {
  return (
    <div className="App">
      <Navbar bg="primary" expand="lg">
        <Container>
          <Navbar.Brand className="text-white">Reactivesearch</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-2 h-100">
        <Tab.Container
          className="mb-3 visible-md hidden-sm"
          mountOnEnter
          defaultActiveKey={showcaseData.demos[0].label}
        >
          <Nav variant="tabs hidden-sm">
            {showcaseData.demos.map(({ label }, idx) => (
              <Nav.Item>
                <Nav.Link eventKey={label}>{label}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
          <Tab.Content className="mt-2">
            {showcaseData.demos.map(({ label, description, iframeLink }) => (
              <Tab.Pane
                className="h-100vh position-relative"
                eventKey={label}
                title={label}
              >
                <iframe
                  src={iframeLink}
                  style={{ width: "100%", height: "100%" }}
                  title="searchbox-voice-search"
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
                <FloatingOverlayButton
                  title={label}
                  description={description}
                />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App;

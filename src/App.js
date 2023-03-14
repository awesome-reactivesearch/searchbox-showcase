import { Container, Navbar, Tab, Tabs } from "react-bootstrap";

import "./App.css";
import FloatingButton from "./FloatingButton";
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
        <Tabs className="mb-3" mountOnEnter>
          {showcaseData.demos.map(({ label, iframeLink }) => (
            <Tab
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
              <FloatingButton />
            </Tab>
          ))}
        </Tabs>
      </Container>
    </div>
  );
}

export default App;

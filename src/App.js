import { Container, Nav, Navbar, Tab, Tabs } from "react-bootstrap";

import "./App.css";

function SayItLoud() {
  return (
    <>
      <h1>Hello</h1>
      <div>How are you?</div>
    </>
  );
}

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
          <Tab className="h-100vh" eventKey="home" title="Home">
            <iframe
              src="https://codesandbox.io/embed/github/appbaseio/reactivesearch/tree/next/packages/web/examples/SearchBoxWithVoiceSearch?fontsize=14&hidenavigation=1&theme=dark"
              style={{ width: "100%", height: "100%" }}
              title="searchbox-voice-search"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <SayItLoud />
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <SayItLoud />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default App;

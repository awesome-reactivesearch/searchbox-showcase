import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Tab } from "react-bootstrap";

import "./custom.scss";

import "./App.css";
import "./utility.css";
import styles from "./App.module.css";

import FloatingOverlayButton from "./FloatingOverlayButton";
import { BreakpointProvider, useBreakpoint } from "./useBreakpoint";
import showcaseData from "./showcaseData";

function Main({ library = "react" }) {
  const breakpoint = useBreakpoint();
  const demos = showcaseData[library];
  const defaultActiveTab = demos[0].label;
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  return (
    <div>
      <Navbar bg="white" className="shadow mb-5" expand="lg">
        <Container>
          <Navbar.Brand>Reactivesearch</Navbar.Brand>
          <span className={`text-white ${styles.headingTag}`}>
            Search Showcase
          </span>
        </Container>
      </Navbar>
      <Container className="mt-2 h-100">
        <Tab.Container
          className="mb-3 visible-md hidden-sm"
          mountOnEnter
          defaultActiveKey={defaultActiveTab}
        >
          {breakpoint !== "xs" && breakpoint !== "sm" ? (
            <Nav className="flex-nowrap overflow-x-auto" variant="pills">
              {demos.map(({ label }, idx) => (
                <Nav.Item>
                  <Nav.Link className="text-nowrap" eventKey={label}>
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          ) : null}
          {breakpoint === "xs" || breakpoint === "sm" ? (
            <NavDropdown
              title={activeTab}
              className={"searchShowcaseTabDropdown"}
            >
              {demos.map(({ label }, idx) => (
                <NavDropdown.Item
                  onClick={() => setActiveTab(label)}
                  eventKey={label}
                >
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          ) : null}
          <Tab.Content className="mt-2">
            {demos.map(({ label, description, iframeLink }) => (
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

const App = ({ library }) => (
  <BreakpointProvider>
    <Main library={library} />
  </BreakpointProvider>
);

export default App;

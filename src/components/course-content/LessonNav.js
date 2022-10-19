import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Chapter from './Chapter.js';
import './LessonNav.css';

function LessonNav() {
  return (
    <Tabs
      defaultActiveKey="Book"
      id="justify-tab-example"
      className="mb-3 center"
      
    >
      <Tab className='center' eventKey="Book" title="Book" >
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={0} className="center-book">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Pinyin</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Chinese</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <Chapter />
              <Chapter />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <Chapter />
              <Chapter />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
      </Tab>
      <Tab className='center'eventKey="Assignment" title="Assignment">
        <Chapter />
      </Tab>
      <Tab className='center'eventKey="Exam" title="Exam">
        <Chapter />
      </Tab>
      <Tab className='center'eventKey="Forum" title="Forum">
        <Chapter />
      </Tab>
      <Tab className='center'eventKey="Class" title="Class">
        <Chapter />
      </Tab>
    </Tabs>
  )
}

export default LessonNav

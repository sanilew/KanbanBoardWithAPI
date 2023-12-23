import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function UpdateToast() {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Welcome to Kanban Board</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>
     <p>Please assign task to team member!</p>
     <input placeholder='Task Name' type='text' />
     <input placeholder='Assign role' type='text' />
     <Col xs={1} style={{marginLeft:"38rem"}}>
        <Button onClick={() => setShow(true)} style={{marginLeft:"-36rem",marginTop:"1rem"}}>Assign</Button>
      </Col>



          </Toast.Body>
        </Toast>
      </Col>
      <Col xs={1} style={{marginLeft:"38rem",marginTop:"-2rem"}}>
        <Button onClick={() => setShow(true)}>Add Task</Button>
      </Col>
    </Row>
  );
}

export default UpdateToast;
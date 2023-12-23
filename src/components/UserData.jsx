import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name } = curUser;
        return (
          <>
            <Card>
      <Card.Header>Task Name</Card.Header>
      <Card.Body>
        <Card.Title>Status</Card.Title>
        <Card.Text>
          Task Assigned
        </Card.Text>
        <Button variant="primary">{name}</Button>
      </Card.Body>
    </Card>
          </>
        );
      })}
    </>
  );
};

export default UserData;

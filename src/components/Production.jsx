import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'; // Import your Navbar component
import Sidebar from './Sidebar'; // Import your Sidebar component

// Define the component as an anonymous arrow function
export default () => {
  const productionData = [
    {
      productionId: 1,
      machineId: 'Machine001',
      timestamp: '2024-02-27T08:00:00',
      productionOutput: 100,
      productionStatus: 'Running'
    },
    {
      productionId: 2,
      machineId: 'Machine002',
      timestamp: '2024-02-27T10:30:00',
      productionOutput: 150,
      productionStatus: 'Idle'
    },
    // Add more production data objects as needed
  ];

  const cardStyle = {
    borderRadius: '0.5rem', // Rounded edges
    marginBottom: '0.5rem', // Add margin bottom for spacing between cards
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
        <Col xs="auto"> {/* Set xs prop to "auto" */}
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>Production Data</Card.Title>
              {productionData.map((data, index) => (
                <div key={index}>
                  <p><strong>Production ID:</strong> {data.productionId}</p>
                  <p><strong>Machine ID:</strong> {data.machineId}</p>
                  <p><strong>Timestamp:</strong> {data.timestamp}</p>
                  <p><strong>Production Output:</strong> {data.productionOutput}</p>
                  <p><strong>Production Status:</strong> {data.productionStatus}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto"> {/* Set xs prop to "auto" */}
          <Card style={cardStyle}>
            <Card.Body>
              <Card.Title>Production Data</Card.Title>
              {productionData.map((data, index) => (
                <div key={index}>
                  <p><strong>Production ID:</strong> {data.productionId}</p>
                  <p><strong>Machine ID:</strong> {data.machineId}</p>
                  <p><strong>Timestamp:</strong> {data.timestamp}</p>
                  <p><strong>Production Output:</strong> {data.productionOutput}</p>
                  <p><strong>Production Status:</strong> {data.productionStatus}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

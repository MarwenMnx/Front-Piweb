import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

// Define the component as an anonymous arrow function
export default () => {
  return (
    <Container fluid>
      <Row className="mt-4"> {/* Adding margin top */}
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Machine 1</Card.Title>
              <Card.Text>
                <strong>Cost ID:</strong> 12345 <br />
                <strong>Timestamp:</strong> 2024-02-28 10:30 AM <br />
                <strong>Machine ID:</strong> ABC123 <br />
                <strong>Energy Consumption:</strong> 500 kWh <br />
                <strong>Cost Calculation Details:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Machine 2</Card.Title>
              <Card.Text>
                <strong>Cost ID:</strong> 67890 <br />
                <strong>Timestamp:</strong> 2024-02-28 12:45 PM <br />
                <strong>Machine ID:</strong> XYZ789 <br />
                <strong>Energy Consumption:</strong> 700 kWh <br />
                <strong>Cost Calculation Details:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Machine 3</Card.Title>
              <Card.Text>
                <strong>Cost ID:</strong> 98765 <br />
                <strong>Timestamp:</strong> 2024-02-28 2:00 PM <br />
                <strong>Machine ID:</strong> DEF456 <br />
                <strong>Energy Consumption:</strong> 900 kWh <br />
                <strong>Cost Calculation Details:</strong> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </Container>
  );
}

import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';



const SamplePage = () => {
  return (
    <React.Fragment>
      <Row>
      <Col>
        <Card>
            <Card.Header>
              <Card.Title as="h5">Mentees</Card.Title>
              <span className="d-block m-t-5">
                All Mentees
              </span>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
              <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                  </tr>
                </thead>
              <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mr.Saman Kumara</td>
                    <td>Undergtaduate</td>
                    <td>ShehalHerath@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Mrs.Shashini Nisansala</td>
                    <td>A/L Student</td>
                    <td>NimeshShaminda@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Liyathambara Gagamini</td>
                    <td>Undergraduate</td>
                    <td>LiyathambaraGagamini@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lishani Chamathka</td>
                    <td>A/L Student</td>
                    <td>LishaniChamathka@gmail.com</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col> 
  
      </Row>
    </React.Fragment>
  );
};

export default SamplePage;

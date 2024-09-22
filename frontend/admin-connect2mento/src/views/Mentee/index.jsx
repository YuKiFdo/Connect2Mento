import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenteePage = () => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    fetchMentees();
  }, []);

  const fetchMentees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/mentees');
      setMentees(response.data);
    } catch (error) {
      console.error('Error fetching mentees:', error);
    }
  };

  const handleRemove = async (id) => {
    try {
      console.log(`Removing mentee with id ${id}`);
      await axios.delete(`http://localhost:8080/mentees/${id}`);
      fetchMentees();
    } catch (error) {
      console.error('Failed to remove mentee', error);
    }
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Mentees</Card.Title>
              <span className="d-block m-t-5">All Mentees</span>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Email</th>
                    <th>Date Joined</th>
                    <th>Action</th> 
                  </tr>
                </thead>
                <tbody>
                  {mentees.map((mentee, index) => (
                    <tr key={mentee.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{mentee.name}</td>
                      <td>{mentee.position}</td>
                      <td>{mentee.email}</td>
                      <td>{new Date(mentee.dateJoined).toLocaleDateString()}</td>
                      <td>
                        <Link
                          className="label text-white f-12"
                          onClick={() => handleRemove(mentee.id)}
                          style={{
                            height: '25px',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0 10px',
                            background: 'linear-gradient(to right, red, orange)'
                          }}
                        >
                          Remove
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default MenteePage;

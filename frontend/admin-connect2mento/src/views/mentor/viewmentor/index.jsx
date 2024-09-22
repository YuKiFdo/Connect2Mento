import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import axios from 'axios';

const SamplePage = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mentors');
        setMentors(response.data);
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Mentors</Card.Title>
              <span className="d-block m-t-5">All Mentors</span>
            </Card.Header>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job Title</th> 
                    <th>Expertise Area</th>
                    <th>Rate per Hour <br></br>LKR</th>
                    <th>Date Joined</th>
                    <th>Rating</th>
                    <th>Description</th>
                    <th>Profile Picture</th>
                  </tr>
                </thead>
                <tbody>
                  {mentors.map((mentor, index) => (
                    <tr key={mentor.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{mentor.name}</td>
                      <td>{mentor.jobTitle}</td>
                      <td>{mentor.expertiseArea}</td>
                      <td>{mentor.rate}</td>
                      <td>{new Date(mentor.dateJoined).toLocaleDateString()}</td>
                      <td>{'⭐'.repeat(Math.round(mentor.rating))}</td>
                      <td>{mentor.description}</td> 
                      <td>
                        <img src={mentor.profilePicture} alt={`${mentor.name}'s profile`} style={{ width: '50px', borderRadius: '50%' }} /> {/* Display profile picture */}
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

export default SamplePage;

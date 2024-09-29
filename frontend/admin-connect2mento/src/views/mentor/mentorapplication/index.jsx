import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';

const Mentorapplication = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/applications');
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching mentor applications:', error);
    }
  };

  const handleApprove = async (applicationId) => {
    const token = localStorage.getItem('jwtToken');

    try {
      await axios.post(`http://localhost:8080/applications/${applicationId}/approve`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchApplications();
    } catch (error) {
      console.error('Error approving application:', error);
    }
  };

  const handleReject = async (applicationId) => {
    const token = localStorage.getItem('jwtToken');

    try {
      await axios.post(`http://localhost:8080/applications/${applicationId}/reject`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchApplications();
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  const handleView = (app) => {
    setSelectedApplication(app);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedApplication(null);
  };

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card className="Recent-Users widget-focus-lg">
            <Card.Header>
              <Card.Title as="h5">Mentor Applications</Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-2">
              <Table responsive hover className="recent-users">
                <thead className="text-center">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Submitted Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td>
                        <img
                          className="rounded-circle"
                          style={{ width: '40px' }}
                          src={app.gender === 'male' ? avatar2 : avatar1}
                          alt="activity-user"
                        />
                        {app.name}
                      </td>
                      <td className="text-center">{app.email}</td>
                      <td className="text-center">{app.status}</td>
                      <td className="text-center">{new Date(app.applicationDate).toLocaleDateString()}</td>
                      <td className="text-center">
                        {app.status === 'PENDING' && (
                          <>
                            <Link
                              className="label text-white"
                              onClick={() => handleReject(app.id)}
                              style={{
                                height: '1.6rem',
                                width: '5rem',
                                borderRadius: '20px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0 1.2rem',
                                background: 'linear-gradient(to right, red, orange)'
                              }}
                            >
                              Reject
                            </Link>
                            <Link
                              className="label text-white"
                              onClick={() => handleApprove(app.id)}
                              style={{
                                height: '1.6rem',
                                width: '5rem',
                                borderRadius: '20px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0 0.9rem',
                                background: 'linear-gradient(to right, lightgreen, green)'
                              }}
                            >
                              Approve
                            </Link>
                          </>
                        )}
                        <Link
                          className="label text-white"
                          style={{
                            height: '1.6rem',
                            width: '4rem',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '0 1rem',
                            background: 'linear-gradient(to right, blue, lightblue)'
                          }}
                          onClick={() => handleView(app)}
                        >
                          View
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

      {/* Modal for Application Details */}
      {selectedApplication && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Application Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={4}>
                <img
                  className="rounded-circle"
                  style={{ width: '100px' }}
                  src={selectedApplication.gender === 'male' ? avatar2 : avatar1}
                  alt="Profile"
                />
              </Col>
              <Col md={8}>
                <h5>{selectedApplication.name}</h5>
                <p>
                  <strong>Email: </strong>
                  {selectedApplication.email}
                </p>
                <p>
                  <strong>Status: </strong>
                  {selectedApplication.status}
                </p>
                <p>
                  <strong>Job Title: </strong>
                  {selectedApplication.jobTitle}
                </p>
                <p>
                  <strong>Expertise Area: </strong>
                  {selectedApplication.expertiseArea}
                </p>
                <p>
                  <strong>LinkedIn: </strong>
                  <a href={selectedApplication.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    {selectedApplication.linkedinUrl}
                  </a>
                </p>
                <p>
                  <strong>Company: </strong>
                  {selectedApplication.company}
                </p>
                <p>
                  <strong>Location: </strong>
                  {selectedApplication.location}
                </p>
                <p>
                  <strong>Bio: </strong>
                  {selectedApplication.bio}
                </p>
                <p>
                  <strong>Why Mentor: </strong>
                  {selectedApplication.whyMentor}
                </p>
                {selectedApplication.introvideo && (
                  <div>
                    <strong>Intro Video: </strong>
                    <video width="100%" controls>
                      <source src={selectedApplication.introvideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default Mentorapplication;

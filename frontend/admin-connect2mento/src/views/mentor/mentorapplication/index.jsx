import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import axios from 'axios';

const SamplePage = () => {
  const [applications, setApplications] = useState([]);

  // useEffect(() => {
  //     const fetchApplications = async () => {
  //         try {
  //             const response = await axios.get('http://localhost:8080/applications');
  //             setApplications(response.data);
  //         } catch (error) {
  //             console.error('Error fetching mentor applications:', error);
  //         }
  //     };

  //     fetchApplications();
  // }, []);

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
    const token = localStorage.getItem('jwtToken'); // Replace 'jwtToken' with the actual key you use

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
                          to={`/application/${app.id}`}
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
    </React.Fragment>
  );
};

export default SamplePage;

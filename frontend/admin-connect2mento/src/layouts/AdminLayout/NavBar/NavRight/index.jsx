import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import ChatList from './ChatList';
import axios from 'axios';
import main_logo from '../../../../assets/images/iconc2m.png';

const NavRight = () => {
  const [listOpen, setListOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const notiData = [
    {
      name: 'Update Alert ⚠️',
      image: main_logo,
      details: 'New update has been released for Mentor applications',
      activity: '30 min'
    }
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        try {
          const response = await axios.get('http://localhost:8080/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setUser(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    console.log('Logout');
    localStorage.removeItem('jwtToken');
    setRedirect(true);
  };

  if (redirect) {
    navigate('/login');
  }

  return (
    <React.Fragment>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown align="end">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <i className="feather icon-bell icon" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="notification notification-scroll">
              <div className="noti-head">
                <h6 className="d-inline-block m-b-0">Notifications</h6>
                <div className="float-end">
                  <Link to="#" className="me-2">
                    mark as read
                  </Link>
                  <Link to="#">clear all</Link>
                </div>
              </div>
              <PerfectScrollbar>
                <ListGroup as="ul" bsPrefix=" " variant="flush" className="noti-body">
                  <ListGroup.Item as="li" bsPrefix=" " className="n-title">
                    <p className="m-b-0">NEW</p>
                  </ListGroup.Item>
                  <ListGroup.Item as="li" bsPrefix=" " className="notification">
                    {notiData.map((data, index) => (
                      <Card
                        key={index}
                        className="d-flex align-items-center shadow-none mb-0 p-0"
                        style={{ flexDirection: 'row', backgroundColor: 'unset' }}
                      >
                        <img className="img-radius" src={data.image} alt="Generic placeholder" />
                        <Card.Body className="p-0">
                          <p>
                            <strong>{data.name}</strong>
                            <span className="n-time text-muted">
                              <i className="icon feather icon-clock me-2" />
                              {data.activity}
                            </span>
                          </p>
                          <p>{data.details}</p>
                        </Card.Body>
                      </Card>
                    ))}
                  </ListGroup.Item>
                </ListGroup>
              </PerfectScrollbar>
              <div className="noti-footer">
                <Link to="#">show all</Link>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown align={'end'} className="drp-user">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <i className="icon feather icon-settings" />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="profile-notification">
              <div className="pro-head">
                {user && user.avatar && <a href="https://ibb.co/VSwNC5v"><img src={user.avatar} className="img-radius" alt="User Profile" /> </a>}
                <span>{user ? user.name : 'Loading...'}</span>
                <Link to="#" className="dud-logout" title="Logout" onClick={handleLogout}>
                  <i className="feather icon-log-out" />
                </Link>
              </div>
              <ListGroup as="ul" bsPrefix=" " variant="flush" className="pro-body">
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item">
                    <i className="feather icon-user" /> Profile
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item">
                    <i className="feather icon-settings" /> Settings
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </React.Fragment>
  );
};

export default NavRight;

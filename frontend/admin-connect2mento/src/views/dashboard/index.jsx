import React, {useEffect, useState} from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GroupedColumnChart from 'views/charts/nvd3-chart/chart/GroupedChart';
import axios from 'axios';



const DashDefault = () => {
  const [membersCount, setmembersCount] = useState(0);
  const [mentorsCount, setmentorsCount] = useState(0);

  useEffect(() => {
    const fetchMenteeCount = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mentees/count');
        const response2 = await axios.get('http://localhost:8080/mentors/count');
        setmembersCount(response.data + response2.data);
        setmentorsCount(response2.data);
      } catch (error) {
        console.error('Error fetching mentee count:', error);
      }
    };
    fetchMenteeCount();
  }, []);

  const dashSalesData = [
    { title: 'Total Mentor Count', amount: mentorsCount, icon: 'icon-arrow-up text-c-green' },
    { title: 'Total Members Count', amount: membersCount, icon: 'icon-arrow-down text-c-red'},
    { title: 'Monthly Revenue', amount: 'LKR. 24,000.00', icon: 'icon-arrow-up text-c-green' }
  ];

  return (
    <React.Fragment>
      <Row>
        {dashSalesData.map((data, index) => {
          return (

            <Col key={index} xl={6} xxl={4}>
              <Card>
                <Card.Body>
                  <h6 className="mb-4">{data.title}</h6>
                  <div className="row d-flex align-items-center">
                    <div className="col-9">
                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                        <i className={`feather ${data.icon} f-30 m-r-5`} />{data.amount}
                      </h3>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}



          <GroupedColumnChart/>


        <Col>
        <Card>
            <Card.Header>
              <Card.Title as="h5">Rating</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="row align-items-center justify-content-center m-b-20">
                <div className="col-6">
                  <h2 className="f-w-300 d-flex align-items-center float-start m-0">
                    4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow" />
                  </h2>
                </div>
                <div className="col-6">
                  <h6 className="d-flex  align-items-center float-end m-0">
                    0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10" />
                  </h6>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-12">
                  <h6 className="align-items-center float-start">
                    <i className="fa fa-star f-10 m-r-10 text-c-yellow" />5
                  </h6>
                  <h6 className="align-items-center float-end">384</h6>
                  <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-start">
                    <i className="fa fa-star f-10 m-r-10 text-c-yellow" />4
                  </h6>
                  <h6 className="align-items-center float-end">145</h6>
                  <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: '35%' }}
                      aria-valuenow="35"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-start">
                    <i className="fa fa-star f-10 m-r-10 text-c-yellow" />3
                  </h6>
                  <h6 className="align-items-center float-end">24</h6>
                  <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: '25%' }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-start">
                    <i className="fa fa-star f-10 m-r-10 text-c-yellow" />2
                  </h6>
                  <h6 className="align-items-center float-end">1</h6>
                  <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: '10%' }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <h6 className="align-items-center float-start">
                    <i className="fa fa-star f-10 m-r-10 text-c-yellow" />1
                  </h6>
                  <h6 className="align-items-center float-end">0</h6>
                  <div className="progress m-t-30  m-b-5" style={{ height: '6px' }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: '0%' }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      

      </Row>
    </React.Fragment>
  );
};

export default DashDefault;

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  projectname,
  projectdesc,
  projectrole,
  projecttime,
  projecttag
} from "./data/projectdata";


import playmart1 from "./image/playmart0.png";
import playmart2 from "./image/playmart1.png";


export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col>
            <h3 className="color_sec py-4">{projectname}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{projectdesc.desc}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Contributor: Rossi Kamal (rossikamal@gmail.com)</p>
            </div>
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          <Row>
          
           
            <Col lg="10">
              <div className="po_item">
                <img src={playmart1} alt="" />
                <div className="content">
                  <p>PlayMart Slider, Feature, Product</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>



  
            <Col lg="10">
              <div className="po_item">
                <img src={playmart2} alt="" />
                <div className="content">
                  <p>PlayMart Genre, Deals</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>
















          </Row>
        </div>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Roles</h3>
          </Col>
          <Col lg="7">
            {projectrole.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.desc}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Software stack</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {projecttag.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.tag1}</td>
                      <td>{data.tag2}</td>
                      <td>{data.tag3}</td>
                      <td>{data.tag4}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {projecttime.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.from}</td>
                      <td>{data.to}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};

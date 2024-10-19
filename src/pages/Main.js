import React from 'react'
import Header from '../components/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Pages.css"
import { FaAngleRight } from "react-icons/fa6";


const Main = () => {
    const link = [
        {
            "tx": "Go to Wix.com > Subscriptions > Domains"
        },
        {
            "tx": "Click Use a Domain You Already Own"
        },
        {
            "tx": "Follow the steps to connect your domain to your website"
        }
    ]
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col sm={12} md={6} lg={6} className='plft  pb-0'>
                        <p className='fs-2 ps-5 pt-5 mt-3'>Looks like this domain isn't
                            connected to a website yet</p>
                        <p className='ps-5 ffp fs-5 mt-4'>Is this your domain?<br />
                            Connect it to your Wix website in just a few easy steps:</p>

                        <ol className='ps-5'>{
                            link.map((v, i) => {
                                return (
                                    <li className='ffp fs-5' key={i}>{v.tx}</li>
                                )
                            })
                        }</ol>
                        <p className='ps-5 ffp mt-4 pt-5 fs-6 mb-0'>Need more help?</p>
                        <p className='ffp ps-5 fs-6 mb-0'>Please contact our <a className='text-decoration-none clr fs-5' href='#'>Support Team <FaAngleRight className='fs-6' /></a></p>
                    </Col>
                    <Col sm={12} md={6} lg={6} >
                        <div className='bg'></div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Main
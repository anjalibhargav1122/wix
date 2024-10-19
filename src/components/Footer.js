import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import "./Components.css"

const Footer = () => {
    return (
        <div>
            <Container className=' pb-4'>
                <Row>
                    <Col sm={12} md={7} lg={7} className='fs-4 pt-4'>
                        <div className='dname'> <FaFacebook className='me-3  d' /><div className='nam border-top border-start border-dark ps-1'>Facebook</div></div>
                        <div className='dname'>  <FaYoutube className='me-3 d ' /><div className='nam border-top border-start border-dark ps-1'>Youtube</div></div>
                        <div className='dname'>
                            <FaInstagram className='me-3 d' /><div className='nam border-top border-start border-dark ps-1'>Instagram</div></div>
                        <div className='dname'>
                            <FaTiktok className='me-3 d' /><div className='nam border-top border-start border-dark ps-1'>Tiktok</div></div>
                        <div className='dname'>
                            <FaPinterest className='me-3 d' /><div className='nam border-top border-start border-dark ps-1'>Pinterest</div></div>
                        <div className='dname'>
                            <BsTwitterX className='me-3 d' /><div className='nam border-top border-start border-dark ps-1'>Twitter</div></div>
                        <div className='dname'>

                            <FaLinkedin className='d' /><div className='nam border-top border-start border-dark ps-1 '>Linkedin</div></div>

                    </Col>
                    <Col sm={12} md={5} lg={5} className='pt-4'>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <a className='text-dark text-decoration-none lo fpf' href='#'>Terms of Use</a></Col>
                            <Col sm={6} md={3} lg={3}>
                                <a className='text-dark text-decoration-none lo fpf' href='#'>Privacy Policy</a></Col>
                            <Col sm={12} md={6} lg={6}><p className='fpf mt-1'>© 2006-2024 Wix.com, Inc</p></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
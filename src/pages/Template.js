import React from 'react'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { IoIosSearch } from "react-icons/io";
import MainNav from '../components/MainNav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import one from "../assets/one.webp"
import two from "../assets/two.webp"
import three from "../assets/three.webp"
import four from "../assets/four.webp"
import five from "../assets/five.webp"
import six from "../assets/six.webp"
import seven from "../assets/seven.webp"
import eight from "../assets/eight.webp"
import nine from "../assets/nine.webp"
import ten from "../assets/ten.webp"
import eleven from "../assets/eleven.webp"
import twelfth from "../assets/twelfth.webp"
import { HiDotsHorizontal } from "react-icons/hi";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Links from '../components/Links';

const Template = () => {

    const cad = [
        {
            "img": one,
            "tx": "Coming Soon Landing Page"
        },
        {
            "img": two,
            "tx": "Beauty Salon"
        },
        {
            "img": three,
            "tx": "Business Consultant"
        },
        {
            "img": four,
            "tx": "Restaurant"
        },
        {
            "img": five,
            "tx": "Coming Soon Landing Page"
        },
        {
            "img": six,
            "tx": "Construction Company"
        },
        {
            "img": seven,
            "tx": "AI Company"
        },
        {
            "img": eight,
            "tx": "Cleaning Company"
        },
        {
            "img": nine,
            "tx": "Tech Company"
        },
        {
            "img": ten,
            "tx": "Business Consulting Company"
        },
        {
            "img": eleven,
            "tx": "Coaching Professional"
        },
        {
            "img": twelfth,
            "tx": "Photographer"
        }
    ]



    return (
        <div><Navbar />
            <Container className='d-flex flex-column align-items-center pt-5 pb-5'>
                <h2 className='fs-1 text-center'>Pick the Website Template You Love</h2>
                <div className='wdinp '> <InputGroup className="mt-5 ">
                    <InputGroup.Text id="basic-addon1" className='rou bg-white'><IoIosSearch className='text-primary fs-4' /></InputGroup.Text>
                    <Form.Control
                        placeholder="Search all templates..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className='rou1'
                    />
                </InputGroup></div>

            </Container>

            <MainNav />

            <Container fluid className='bg-light pt-5 pb-5'><div className='d-flex justify-content-between align-items-center'><p className='mb-0 fs-5'>All Website Templates</p><div className='d-flex align-items-center'><p className='mb-0'>Sort by:
            </p><div class="dropdown ">
                    <button class="btn lo dropdown-toggle fw-bold border-0 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Recommended
                    </button>
                    <ul class="dropdown-menu border-0 shadow-sm" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item lo" href="#">Recommended</a></li>
                        <li><a class="dropdown-item lo" href="#">Newest</a></li>
                        <li><a class="dropdown-item lo" href="#">Top Templates</a></li>
                    </ul>
                </div></div>
            </div>
                <Row className='mt-4'>
                    {
                        cad.map((v, i) => {
                            return (
                                <Col sm={12} md={4} lg={4} key={i} className='mb-5'>
                                    <Card className='border-0 '>
                                        <div className="bgd "><HiDotsHorizontal className='text-white fs-3 ps-2' /></div>
                                        <div className='pos'>  <Card.Img variant="top" src={v.img} className='rounded-0 image ' />
                                            <div className="bg-white d-flex justify-content-center align-items-center flex-column pt-5 dvimg w-100 h-100">
                                                <Button variant='primary' className='rounded-pill ps-4 pe-4'>Edit</Button>
                                                <Button variant='outline-primary' className='rounded-pill ps-4 mt-4 pe-4'>View</Button>
                                                <a href='#' className='text-dark align-self-start ps-4 pb-3 mt-2'>Info</a>
                                            </div></div>
                                        <Card.Body className='bg-light ps-0'>
                                            <Card.Text>
                                                {v.tx}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }

                </Row>
                <div className='d-flex justify-content-center align-items-center pt-5 pb-5 gap-4 fs-3 mb-4 mt-3'>
                    <FaAnglesLeft className='text-secondary' /><FaAngleLeft className='text-secondary' /> <span className='text-secondary'>1</span> <span className='lo'>2</span><span className='lo'>3</span><span className='lo'>4</span><span className='lo'>5</span> <HiDotsHorizontal className='mt-4' /> <span className='lo'>70</span> <FaAngleRight className='lo' /><FaAnglesRight className='lo' />
                </div>
            </Container>
            <Container className='bg-success pt-5 pb-5 text-center text-white ps-0 pe-0' fluid>
                <h2 className='display-4 mt-5 fw-bold'>Want Help Picking a Template?</h2><p className='fs-4 mt-4'>Get tips for finding the template that’s right for you.</p><Button variant="light" className='mb-5 rounded-pill ps-4 p-3 mt-4 pe-4'>Help Me Choose</Button>
            </Container>

            <Links />
            <Footer />
        </div>
    )
}

export default Template
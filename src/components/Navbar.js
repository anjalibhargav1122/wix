import React from 'react'
import "./Components.css"
import Container from 'react-bootstrap/Container'
import { CiGlobe } from "react-icons/ci";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaRightLong } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <div>
            <Container fluid className='p-0 border-bottom '>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <a class="navbar-brand fw-bold fs-1" href="/wix">WIX</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle  ffa ms-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Product
                                    </a>
                                    <ul class="dropdown-menu wdpr border-0 shadow-sm" aria-labelledby="navbarDropdown">
                                        <Container>
                                            <Row className='border-bottom m-0 text-secondary pt-3 pb-2'>
                                                <Col sm={4} md={4} lg={4}>CREATION
                                                </Col>
                                                <Col sm={8} md={8} lg={8}>BUSINESS</Col>
                                            </Row>
                                            <Row className='pb-5'>      <Col sm={4} md={4} lg={4} ><div className='clh'>
                                                <li><a class="dropdown-item fw-bold nc mt-4" href="#">Website design<FaLongArrowAltRight className='icn lf18' /></a></li>
                                                <li><p class="dropdown-item text-secondary mb-0" >
                                                    Create your site with </p></li>
                                                <li><p class="dropdown-item text-secondary" >intuitive design features.</p></li></div>
                                                <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">
                                                    Website templates <FaLongArrowAltRight className='icn lf8' /></a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">
                                                        Choose from 900+ website  </a></li>

                                                    <li><a class="dropdown-item text-secondary" href="#">templates.</a></li></div><div className='clh'>
                                                    <li><a class="dropdown-item nc fw-bold mt-5" href="#">



                                                        AI website builder<FaLongArrowAltRight className='icn lf8' /></a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">Create your site in no time </a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#"> with AI.</a></li></div>
                                            </Col>
                                                <Col sm={8} md={8} lg={8} className='ps-0'>
                                                    <Row>
                                                        <Col sm={5} md={5} lg={5} ><div className='clh'>
                                                            <li><a class="dropdown-item fw-bold nc mt-4" href="#">eCommerce <FaLongArrowAltRight className='icn lf19' /></a></li>
                                                            <li><p class="dropdown-item text-secondary mb-0" >Run & grow your </p></li>
                                                            <li><p class="dropdown-item text-secondary" >
                                                                eCommerce website.
                                                            </p></li></div>
                                                            <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">
                                                                Scheduling<FaLongArrowAltRight className='icn lf19' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Manage appointments,</a></li>

                                                                <li><a class="dropdown-item text-secondary" href="#"> staff & clients.</a></li></div><div className='clh'>
                                                                <li><a class="dropdown-item nc fw-bold mt-5" href="#">
                                                                    Restaurant <FaLongArrowAltRight className='icn lf19' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Manage your menus,</a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">


                                                                    orders, and reservations.</a></li></div>
                                                        </Col>
                                                        <Col sm={7} md={7} lg={7}><div className='clh'>
                                                            <li><a class="dropdown-item fw-bold nc mt-4" href="#">Blog<FaLongArrowAltRight className='icn lf14' /></a></li>
                                                            <li><p class="dropdown-item text-secondary mb-0" >Share ideas & grow your </p></li>
                                                            <li><p class="dropdown-item text-secondary" >traffic. </p></li></div>
                                                            <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">Portfolio<FaLongArrowAltRight className='icn lf20' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Showcase your work with </a></li>

                                                                <li><a class="dropdown-item text-secondary" href="#"> an online portfolio.</a></li></div></Col>

                                                    </Row></Col>


                                            </Row>
                                        </Container>
                                        <Container className='pt-4 pb-4 bg-light ' fluid>
                                            <Container className='border-bottom border-2 pb-3'>
                                                ESSENTIALS
                                            </Container><Container >
                                                <Row>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">

                                                            Domain names<FaLongArrowAltRight className='icn lf18' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Buy & register a domain for  </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#"> your website.</a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">




                                                            Web hosting<FaLongArrowAltRight className='icn lf11' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Get secure & reliable website   </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">hosting.</a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">




                                                            Website security<FaLongArrowAltRight className='icn lf21' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Get enterprise-grade security for </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">your site. </a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3}></Col>
                                                </Row>
                                            </Container>
                                        </Container>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown ffa ms-3">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Solutions
                                    </a>
                                    <ul class="dropdown-menu wdso border-0 shadow-sm" aria-labelledby="navbarDropdown">
                                        <Container>
                                            <Row className='border-bottom m-0 text-secondary pt-3 pb-2'>
                                                <Col sm={8} md={8} lg={8}>MANAGEMENT</Col>
                                                <Col sm={4} md={4} lg={4}>GROWTH</Col>
                                            </Row>
                                            <Row className='pb-5'>
                                                <Col sm={8} md={8} lg={8}>
                                                    <Row>
                                                        <Col sm={5} md={5} lg={5} ><div className='clh'>
                                                            <li><a class="dropdown-item fw-bold nc mt-4" href="#">Payment solutions <FaLongArrowAltRight className='icn lf8' /></a></li>
                                                            <li><p class="dropdown-item text-secondary mb-0" >Accept & manage</p></li>
                                                            <li><p class="dropdown-item text-secondary" >payments online.</p></li></div>
                                                            <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">Mobile app<FaLongArrowAltRight className='icn lf9' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Run your business on the</a></li>

                                                                <li><a class="dropdown-item text-secondary" href="#">go from your mobile.</a></li></div><div className='clh'>
                                                                <li><a class="dropdown-item nc fw-bold mt-5" href="#">All business features <FaLongArrowAltRight className='icn lf10' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Explore all business</a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">management features.</a></li></div>
                                                        </Col>
                                                        <Col sm={7} md={7} lg={7}><div className='clh'>
                                                            <li><a class="dropdown-item fw-bold nc mt-4" href="#">CRM system<FaLongArrowAltRight className='icn lf11' /></a></li>
                                                            <li><p class="dropdown-item text-secondary mb-0" >Build & manage customer </p></li>
                                                            <li><p class="dropdown-item text-secondary" >relationships.</p></li></div>
                                                            <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">Website analytics <FaLongArrowAltRight className='icn lf12' /></a></li>
                                                                <li><a class="dropdown-item text-secondary" href="#">Get reports with actionable </a></li>

                                                                <li><a class="dropdown-item text-secondary" href="#">data & insights.</a></li></div></Col>

                                                    </Row></Col>
                                                <Col sm={4} md={4} lg={4} className='ps-0'><div className='clh'>
                                                    <li><a class="dropdown-item fw-bold nc mt-4" href="#">Email marketing <FaLongArrowAltRight className='icn lf13' /></a></li>
                                                    <li><p class="dropdown-item text-secondary mb-0" >
                                                        Create email marketing </p></li>
                                                    <li><p class="dropdown-item text-secondary" >campaigns.</p></li></div>
                                                    <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">
                                                        SEO tools <FaLongArrowAltRight className='icn lf14' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">
                                                            Optimize your website for </a></li>

                                                        <li><a class="dropdown-item text-secondary" href="#">search engines.</a></li></div><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-5" href="#">




                                                            All marketing features<FaLongArrowAltRight className='icn lf15' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Explore all growth and </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">marketing Features.</a></li></div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className='pt-4 pb-4 bg-light ' fluid>
                                            <Container className='border-bottom border-2 pb-3'>
                                                WIX STUDIO
                                            </Container><Container >
                                                <Row>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">

                                                            Agencies & freelancers<FaLongArrowAltRight className='icn lf2' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Deliver exceptional client </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#"> websites at scale.</a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">




                                                            Developers<FaLongArrowAltRight className='icn lf16' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Build sites & apps and offer  </a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">dev services.</a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3} className='p-0'><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-4" href="#">




                                                            Enterprise<FaLongArrowAltRight className='icn lf17' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Discover solutions for large-</a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">scale businesses. </a></li></div></Col>
                                                    <Col sm={12} md={3} lg={3}></Col>
                                                </Row>
                                            </Container>
                                        </Container>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle ffa ms-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul class="dropdown-menu wdre border-0 shadow-sm" aria-labelledby="navbarDropdown">
                                        <Container>
                                            <Row className='border-bottom m-0 text-secondary pt-3 pb-2'>
                                                <Col sm={4} md={4} lg={4}>EXPLORE</Col>
                                                <Col sm={4} md={4} lg={4}>SUPPORT</Col>
                                                <Col sm={4} md={4} lg={4}>TOOLS</Col>
                                            </Row>
                                            <Row className='pb-5'>
                                                <Col sm={4} md={4} lg={4} ><div className='clh'>
                                                    <li><a class="dropdown-item fw-bold nc mt-4" href="#">Wix Blog <FaLongArrowAltRight className='icn' /></a></li>
                                                    <li><p class="dropdown-item text-secondary mb-0" >Read the latest industry</p></li>
                                                    <li><p class="dropdown-item text-secondary" >tips and trends.</p></li></div>
                                                    <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">Wix Learn <FaLongArrowAltRight className='icn lf' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Upskill with on-demand</a></li>

                                                        <li><a class="dropdown-item text-secondary" href="#">video lessons.</a></li></div><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-5" href="#">Web design inspiration <FaLongArrowAltRight className='icn lf2' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Explore designs by other</a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">Wix users.</a></li></div>
                                                </Col>

                                                <Col sm={4} md={4} lg={4} ><div className='clh'>
                                                    <li><a class="dropdown-item fw-bold nc mt-4" href="#">Help Center <FaLongArrowAltRight className='icn lf3' /></a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">Find the answers and</a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">
                                                        support you need.
                                                    </a></li></div>
                                                    <div className='clh '> <li><a class="dropdown-item fw-bold nc mt-5" href="#">Hire a Professional <FaLongArrowAltRight className='icn lf4' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">



                                                            Get expert help with your</a></li>

                                                        <li><a class="dropdown-item text-secondary" href="#">site & business</a></li></div>
                                                </Col>

                                                <Col sm={4} md={4} lg={4}><div className='clh'>
                                                    <li><a class="dropdown-item fw-bold nc mt-4" href="#">Logo Maker
                                                        <FaLongArrowAltRight className='icn lf5' /></a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">Create a custom logo for </a></li>
                                                    <li><a class="dropdown-item text-secondary" href="#">your brand.</a></li></div>
                                                    <div className='clh'> <li><a class="dropdown-item fw-bold nc mt-5" href="#">
                                                        Business Name Generator <FaLongArrowAltRight className='icn lf6' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">
                                                            Get name ideas for your</a></li>

                                                        <li><a class="dropdown-item text-secondary" href="#"> business.</a></li></div><div className='clh'>
                                                        <li><a class="dropdown-item nc fw-bold mt-5" href="#">


                                                            Free business tools <FaLongArrowAltRight className='icn lf7' /></a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">


                                                            Explore tools to help you</a></li>
                                                        <li><a class="dropdown-item text-secondary" href="#">run & grow your business..</a></li></div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <Container className='pt-4 pb-4 bg-light ' fluid>
                                            <Container className='border-bottom border-2 pb-3'>
                                                FEATURED ARTICLE
                                            </Container><Container className='pt-3 fw-bold lo '>
                                                Learn how to create a website <FaRightLong className='ms-2' />
                                            </Container>
                                        </Container>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ffa ms-3" aria-current="page" href="#">Pricing</a>
                                </li>

                                <li class="nav-item">
                                    <span class="nav-link ms-3 text-secondary" aria-current="page" href="#">|</span>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link ffa ms-3" aria-current="page" href="#">Wix Studio</a>
                                </li> <li class="nav-item">
                                    <a class="nav-link ffa ms-3" aria-current="page" href="#">Enterprise</a>
                                </li>
                            </ul>
                            <form class="d-flex align-items-center"> <CiGlobe className='me-3 fs-4 lo ' />|
                                <a className='ms-3 me-3 text-dark lo' href='#'>Log in</a>
                                <button class="btn btn-primary rounded-pill ps-4 pe-4" type="submit">Get Started</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    )
}

export default Navbar
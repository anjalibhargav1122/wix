import React from 'react'
import "./Components.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import wix from "../assets/wix.png"

const Links = () => {

    const lk = [

        {
            "tx": "Website Templates"
        },
        {
            "tx": "Website Builder"
        },
        {
            "tx": "Website Design"
        },
        {
            "tx": "Wix Features"
        },
        {
            "tx": "App Market"
        },
        {
            "tx": "Web Hosting"
        },
        {
            "tx": "Domain Names"
        },
        {
            "tx": "Website Accessibility"
        },
        {
            "tx": "Mobile App Builder"
        }
    ]

    const lkk = [

        {
            "tx": "Logo Maker"
        },
        {
            "tx": "Professional Tools"
        },
        {
            "tx": "Student Website"
        },
        {
            "tx": "Enterprise Solutions"
        },
        {
            "tx": "Wix Studio"
        },
        {
            "tx": "eCommerce Website"
        },
        {
            "tx": "Portfolio Website"
        },
        {
            "tx": "Blog Website"
        },
        {
            "tx": "Restaurant Website"
        },
        {
            "tx": "Online Booking"
        },
        {
            "tx": "Online Store"
        }
    ]

    const ll = [

        {
            "tx": "About"
        },
        {
            "tx": "Contact Us"
        },
        {
            "tx": "About"
        },
        {
            "tx": "Contact Us"
        },
        {
            "tx": "Press & Media"
        },
        {
            "tx": "Investor Relations"
        },
        {
            "tx": "Wix Capital"
        },
        {
            "tx": "Accessibility Statement"
        },
        {
            "tx": "Patent Notice"
        },
        {
            "tx": "Sitemap"
        },
        {
            "tx": "Careers"
        }
    ]

    const lkl = [

        {
            "tx": "Wix Blog"
        },
        {
            "tx": "Privacy and Security Hub"
        },
        {
            "tx": "SEO Learning Hub"
        },
        {
            "tx": "Wix Encyclopedia"
        }
    ]

    const kk = [

        {
            "tx": "Help Center"
        },
        {
            "tx": "Hire a Professional"
        },
        {
            "tx": "Report Abuse"
        },
        {
            "tx": "System Status"
        }
    ]

    return (
        <div>
            <Container fluid className='border-bottom'><Container className=' pb-5 ' >
                <Row>
                    <Col sm={6} md={2} lg={2} className='pt-5'>
                        <h5 className='mb-3'>Product</h5>
                        {
                            lk.map((v, i) => {
                                return (<div key={i} className='mb-2'>
                                    <a className='text-dark text-decoration-none lo ' href='#'>{v.tx}</a></div>
                                )
                            })
                        }
                    </Col>
                    <Col sm={6} md={2} lg={2} className='pt-5'>  <h5 className='mb-3'>Solutions</h5>
                        {
                            lkk.map((v, i) => {
                                return (<div key={i} className='mb-2'>
                                    <a className='text-dark text-decoration-none lo ' href='#'>{v.tx}</a></div>
                                )
                            })
                        }</Col>
                    <Col sm={6} md={2} lg={2} className='pt-5'> <h5 className='mb-3'>Learn</h5>
                        {
                            lkl.map((v, i) => {
                                return (<div key={i} className='mb-2'>
                                    <a className='text-dark text-decoration-none lo ' href='#'>{v.tx}</a></div>
                                )
                            })
                        }</Col>
                    <Col sm={6} md={2} lg={2} className='pt-5'> <h5 className='mb-3'>Support</h5>
                        {
                            kk.map((v, i) => {
                                return (<div key={i} className='mb-2'>
                                    <a className='text-dark text-decoration-none lo ' href='#'>{v.tx}</a></div>
                                )
                            })
                        }</Col>
                    <Col sm={12} md={2} lg={2} className='pt-5'> <h5 className='mb-3'>Company</h5>
                        {
                            ll.map((v, i) => {
                                return (<div key={i} className='mb-2'>
                                    <a className='text-dark text-decoration-none lo ' href='#'>{v.tx}</a></div>
                                )
                            })
                        }</Col>
                    <Col sm={12} md={2} lg={2} className='pt-5'><div className='wdwx mb-4 '>
                        <img src={wix} className='w-100 h-100' /></div>
                        <p className='fpf lh-lg'>The Wix website builder offers a complete solution from enterprise-grade infrastructure and business features to advanced SEO and marketing tools–enabling anyone to create and grow online.</p>
                        <div className='mb-2 mt-4'>
                            <a className='text-dark text-decoration-none lo ' href='#'>About</a></div><div>
                            <a className='text-dark text-decoration-none lo ' href='#'>Contact Us</a></div>
                    </Col>
                </Row>
            </Container>
            </Container>
        </div>
    )
}

export default Links
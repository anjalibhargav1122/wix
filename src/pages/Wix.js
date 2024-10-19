import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ss from "../assets/ss.png"
import "./Pages.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaRightLong } from 'react-icons/fa6'
import glore from "../assets/glore.webp"
import port from "../assets/port.png"
import future from "../assets/seven.webp"
import fashion from "../assets/fashion.png"
import fox from "../assets/fox.png"
import yuza from "../assets/yuza.png"
import home from "../assets/home.png"
import blog from "../assets/blog.png"
import wash from "../assets/wash.webp"
import ear from "../assets/ear.webp"
import shave from "../assets/shave.webp"
import brook from "../assets/brook.webp"
import tea from "../assets/tea.webp"
import cycle from "../assets/cycle.webp"
import v1 from "../assets/v1.webp"
import v2 from "../assets/v2.webp"
import v3 from "../assets/v3.webp"
import tra from "../assets/tr.png"
import tr2 from "../assets/tr2.png"
import tr3 from "../assets/tr3.png"
import tr4 from "../assets/tr4.png"
import Accordion from 'react-bootstrap/Accordion';
import Footer from '../components/Footer'
import Links from '../components/Links'
import file from '../assets/file.mp4'
import Form from 'react-bootstrap/Form';

const Wix = () => {

  const images = [
    v1, v2, v3
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);


    return () => clearInterval(intervalRef.current);
  }, [images.length]);


  const con2 = [
    {
      "tx": "Sign up for a secure, reliable and powerful website builder.",
      "tit": "Choose a platform."
    },
    {
      "tx": "Choose from 900+ fully-functional templates or use the AI website builder.",
      "tit": "Start creating."
    },
    {
      "tx": "Use the drag-and-drop editor and tailor your site to fit your brand.",
      "tit": "Customize your website."
    },
    {
      "tx": "Increase your site’s visibility with a suite of built-in SEO tools.",
      "tit": "Optimize for search engines."
    },
    {
      "tx": "Register and connect a custom domain name and go live.",
      "tit": "Publish your website."
    },
    {
      "tx": "Use built-in marketing tools to grow and expand your reach.",
      "tit": "Promote and drive traffic."
    }
  ]

  const accor = [
    {
      "tit": "Is it easy to build a website?",
      "bod": "Yes. Wix offers a few different ways to create your own website, so you can choose the creation process that works best for you. Pick from 900+ designer-made templates, or use our AI website builder to create a business-ready site in no time using a conversational interface. You can also start from scratch using Wix’s drag-and-drop website builder. Whichever way you choose, you can always continue customizing in the Editor for total website design freedom."
    },
    {
      "tit": "How much does it cost to build a website?",
      "bod": "The cost of building a website varies depending on the features you need and whether you opt to build it yourself with a website builder or pay a developer to build it for you. On a website builder such as Wix, you can build as many websites as you want for free, however, you’ll have to upgrade to a Premium plan to connect a custom domain, accept payments and get advanced business features. The cost of building a website is significantly higher if you don’t opt for an all-inclusive platform like Wix."
    },
    {
      "tit": "What types of websites can you build on Wix?",
      "bod": "With our website creator, you have the freedom to design a site that perfectly fits your needs. You can build business websites for any industry with a whole host of different features. You can sell products with an online store, sell services and take bookings, share your thoughts on a blog, showcase your work with a beautiful portfolio, and much more. Our solutions are built not only for a variety of industries but also for businesses of all sizes, from a personal brand to an enterprise corporation."
    },
    {
      "tit": "How do I create a website?",
      "bod": "Here’s how to create your own website in 6 steps:", "bod2": "By following these steps, you'll be able to build a powerful online presence that drives business growth."
    },

    {
      "tit": "Can I create a website without knowing how to code?",
      "bod": "Absolutely. Wix is an intuitive HTML website builder that makes it possible to create a high-quality website without knowing how to code. In the Wix Editor, you can drag and drop any feature you want and customize it to match the look and feel of your site. Of course, you have the option to add advanced functionality with code as well."
    },
    {
      "tit": "Should I use a website builder or hire a developer?",
      "bod": "Wix’s no-code website builder is intuitive to use and will cost you significantly less than hiring a developer. However, if you are looking for expert help, you can hire a freelance web developer through the Wix Marketplace at a cost that suits your budget."
    },
    {
      "tit": "Does my free website come with hosting?",
      "bod": "When you create a website with Wix, you not only get reliable, scalable multi-cloud web hosting that ensures 99.98% uptime, but also automatic disaster recovery and worldwide CDN coverage. Your site also comes with 2 layers of DDoS protection against potential vulnerabilities. Plus, with 24/7 security monitoring and HTTPS and SSL protection, your website is always safe and secure—giving you peace of mind."
    },
    {
      "tit": "How can I make sure my data and my visitors’ data is secure?",
      "bod": "At Wix, we take care of security for you. With every site you get enterprise-grade security. From threat prevention to real-time detection and rapid response, security is fully managed by our dedicated team of experts—24/7. This includes data encryption in transit using HTTPS, TLS 1.2+ and an automatic SSL certificate."
    },
    {
      "tit": "How do I create a free website with a custom domain?",
      "bod": "You can create a free website with Wix that comes with a Wix domain. To instantly look more professional online, get a custom domain name. It adds credibility to your brand and helps visitors find you online. You can start building your brand by using your domain in a custom email address (info@mystunningwebsite.com), your social channels, email marketing campaigns and more. For inspiration use our Business Name Generator."
    },
    {
      "tit": "How can I optimize my site for SEO on Wix?",
      "bod": "All Wix sites are designed with SEO best practices in mind and come with a suite of built-in SEO tools and guidance to give you everything you need to take on SEO confidently. Customize your SEO settings, use AI to generate meta tags and descriptions, get instant homepage indexing and more. In addition, your site comes with an SEO assistant that analyzes your pages and gives recommendations on ways to improve your search performance. You’ll also get key integrations like Google Search Console and Semrush, to help you compete in organic search.Check out this Google case study for more on Wix SEO."
    },
    {
      "tit": "Can I use a website builder to create a landing page?",
      "bod": "Yes, you can create any kind of landing page with Wix, including a landing page or one-page website. Explore beautiful HTML landing page templates and get started with the landing page builder."
    },
    {
      "tit": "Can I use 3rd party apps with my website?",
      "bod": "Yes, there are hundreds of Wix-made and 3rd party integrations available through your dashboard and the Wix App Market. These apps integrate seamlessly with your site and can help you with website creation, business management, marketing and so much more. Popular integrations include Google Analytics, Facebook Pixel and Zapier, just to name a few."
    },
    {
      "tit": "How can I design a logo for my website for free?",
      "bod": "You can design your own logo for free with the intuitive Wix Logo Maker. Any logo you create is ready to go in high resolution for digital or print so your brand stays consistent."
    }
  ]

  const accor2 = [
    {
      "tit": "Publish and promote your website.",
      "tx": "Once you’re happy with your site, you’re ready to hit ‘publish’ and start gaining traffic. Now’s the time to promote your site with built-in marketing tools and streamline your customer management processes with a smart CRM system."
    },
    {
      "tit": "Optimize for search engines.",
      "tx": "Use a suite of advanced SEO tools to help you optimize your site and increase organic traffic."
    },
    {
      "tit": "Get a domain name. ",
      "tx": "When trying to come up with the perfect domain name, you can use Wix to search and register available names, or connect an existing one to your new site."
    },
    {
      "tit": "Customize your website.",
      "tx": "Whether you start with AI or a template, you can use our intuitive drag and drop editor to customize every aspect of your site to match your brand. Your site will also be automatically optimized for mobile, but in the editor you have the option to make changes and customize your site’s mobile view."
    },
    {
      "tit": "Build with AI or choose a template.",
      "tx": "Chat with our AI website builder about your business and preferences to instantly get a fully functional and customizable website built for you. You can also start by choosing from a variety of templates, all professionally designed with the best site practices in mind."
    },
    {
      "tit": "Plan your website.",
      "tx": "First, think about the type of site you’re creating and your target audience. With that in mind, you can start mapping out the pages you want to incorporate like the “About” and “Contact” pages, perhaps a blog or a photo gallery, and a page for products or services."
    }
  ]

  const para = [
    {
      "tx": "When you create a website using our website builder, everything is there to build your business the way you want. Run it with total peace of mind knowing that there’s enterprise-grade infrastructure built into every site with free reliable web hosting, around-the-clock maintenance and fully managed security."
    },
    {
      "tx": "Use our tailor-made, customizable templates, AI capabilities and 1000s of design features to help bring your vision to life. You can also add your own code for total design control."
    },
    {
      "tx": "Bring more people to your site and convert visitors with a wide range of built-in eCommerce and business solutions like SEO and marketing tools. Plus, you’ll always have the support you need with 27/4 customer care."
    },
    {
      "tx": "You can start by creating a free website with Wix. Over 250 million people worldwide have chosen us to grow online. You can, too."
    }
  ]


  const cads = [
    {
      "tx": "Design with a full suite of intuitive tools and powerful AI to create the site you want.",
      "title": "Build a website"
    },
    {
      "tx": "Streamline your day-to-day with built-in business solutions, tailored to your needs.",
      "title": "Manage your business"
    },
    {
      "tx": "Expand your reach and monetize your website with integrated tools built for your success.",
      "title": "Grow online"
    }
  ]

  const txs = [
    {
      "tx": "Intuitive drag and drop website editor"
    },
    {
      "tx": "1000’s of advanced web design capabilities"
    },
    {
      "tx": "Powerful AI features for smart customization"
    },
    {
      "tx": "Full-stack web dev tools for custom functionality"
    }
  ]

  const txs2 = [
    {
      "tx": "Complete SEO solution"
    },
    {
      "tx": "Google, FB & IG ads"
    },
    {
      "tx": "AI powered email campaigns"
    },
    {
      "tx": "Social posts and more"
    }
  ]

  const imgcad = [
    {
      "img": cycle,
      "tit": "eCommerce",
      "tx": "Sell online and manage your business with powerful eCommerce solutions.",
      "a1": "Create Your eCommerce Site",
      "a2": "Learn How"
    },
    {
      "img": tea,
      "tit": "Blog",
      "tx": "Create a free blog, grow a loyal audience and monetize your content.",
      "a1": "Create Your Own Blog",
      "a2": "Learn How"
    },
    {
      "img": shave,
      "tit": "Scheduling",
      "tx": "Offer services and deliver a seamless booking experience for your clients.",
      "a2": "Learn More"
    },
    {
      "img": brook,
      "tit": "Portfolio",
      "tx": "Showcase your work and attract new clients with an online portfolio.",
      "a2": "Create Your Portfolio"
    },
    {
      "img": ear,
      "tit": "Domain and hosting",
      "tx": "Get scalable, free web hosting when you create your own website, and connect a professional domain name.",
      "a2": "Create a site"
    },
    {
      "img": wash,
      "tit": "Branding tools",
      "tx": "Establish a strong brand identity with a customizable logo, color and text themes, and more.",
      "a2": "Learn More"
    }
  ]

  const CadBod = [
    {
      "tit": "Faster loading",
      "tx": "Wix is designed for performance so your site loads faster."
    },
    {
      "tit": "Built with SEO in mind",
      "tx": "Get the SEO capabilities you need to optimize your site for search visibility."
    },
    {
      "tit": "Enterprise-grade security",
      "tx": "We keep your site and visitors’ data protected, 24/7."
    },
    {
      "tit": "Resilient infrastructure",
      "tx": "Multi-cloud hosting ensures 99.9% uptime, even during traffic spikes."
    },
    {
      "tit": "Accessible for everyone",
      "tx": "Make your own website inclusive with built-in accessibility tools."
    }
  ]

  const imgs = [
    {
      "pic": tra
    },
    {
      "pic": tr2
    },
    {
      "pic": tr3
    },
    {
      "pic": tr4
    },
  ]

  const cad3 = [
    {
      "tit": "Get answers",
      "tx": "Watch tutorials and read detailed articles in the Wix Help Center.",
      "link": "Go to Help Center"
    },
    {
      "tit": "Contact us",
      "tx": "Get support by chat or schedule a call with a Customer Care Expert.",
      "link": "Chat with Us"
    },
    {
      "tit": "Hire a pro",
      "tx": "Get help at any stage—from site creation to online growth.",
      "link": "Browse All Services"
    }
  ]

  return (
    <div>
      <Navbar />

      <Container className='bg-primary d-flex flex-column align-items-center justify-content-center pt-5 pb-5 text-white' fluid>
        <h2 className='display-1 text-center '>Create a website without limits</h2><p className='text-center mt-3'>Build and scale with confidence. From a powerful website builder to<br /> advanced business solutions—we’ve got you covered.</p>
        <Form>
          <Form.Group className="mb-2 mt-3 emeldnt" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter your email address" className='bg-email border-0 rounded-pill' />
            <Form.Text className='text-white'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>


        </Form>
        <Button variant='light' className='rounded-pill p-2 ps-4 pe-4 mt-3 mb-2 fs-5 sgbtn d-flex align-items-center'>Get Started <FaRightLong className='dpn ms-2' /></Button><p>Start for free. No credit card required.</p><div className='w-75 mt-4 mb-3'>
          <img src={ss} className='w-100 h-100' /></div>
      </Container>
      <Container className='pt-5 pb-5'>
        <h1 className='display-3  fwh mt-5 mb-5'>One platform,<br />
          infinite possibilities</h1>
        <Row>
          {
            cads.map((v, i) => {
              return (
                <Col sm={12} md={4} lg={4} key={i}> <Card className='border-0 border-dark border-top rounded-0'>
                  <Card.Body className='ps-0'>
                    <Card.Title>{v.title}</Card.Title>
                    <Card.Text className='text-secondary'>
                      {v.tx}
                    </Card.Text>
                  </Card.Body>
                </Card></Col>
              )
            })
          }

        </Row>
        <Button variant='dark' className='rounded-pill btnver ps-4 pe-4 p-2 mt-4 fs-5 mb-5'>Get Started</Button>
      </Container>

      <Container className='pt-5 pb-5 bg-dark text-white d-flex flex-column align-items-center justify-content-center' fluid>
        <h2 className='display-2 text-center fwh mt-5'>Website templates that set <br /> you up for success</h2>
        <p className='mt-4 fs-5'>Get a headstart on your journey with 900+ free, customizable <a className='text-white' href='#'>website templates</a>, strategically<br /> researched and tailored for every industry — or start from a blank canvas on our website builder.</p>
        <Button variant='light' className='rounded-pill p-2 ps-4 pe-4 dnbtn2 mt-4 fs-4 mb-5'>Get Started</Button>

        <Container className='d-flex  gap-4 overx'>

          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={glore} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Store <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={future} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Technology <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={blog} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Blog <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={yuza} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Restaurant <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={fashion} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Fashion <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={port} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Portfolio <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={home} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Business <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
          <Card style={{ width: '45%', cursor: 'pointer', flexShrink: "0" }} className='border-0 cadwdg'>
            <Card.Img variant="top" src={fox} className='w-100 h-100' />
            <Card.Body className='ps-0 bg-dark text-white'>
              <Card.Text className='text-decoration-underline'>
                Fitness <FaRightLong />
              </Card.Text>

            </Card.Body>
          </Card>
        </Container>

      </Container>

      <Container className='pt-5 pb-5'>
        <Row>
          <Col sm={12} md={6} lg={6} className='display-2 fwh pt-5 pb-5'>Build more than a website</Col>
          <Col sm={12} md={6} lg={6} className='pt-5 pb-5'><p className='text-secondary mt-3 fs-5'>Get secure web hosting, a custom domain and a full business solution tailored to your needs. So whether you’re selling online, starting a blog, building a community or anything else—your site will do more than just look good, it will be the core of your business.</p><a className='text-dark dnbtn2 atg mt-5' href='#'>Get Started <FaRightLong /></a></Col>
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Col sm={12} md={5} lg={5} className='ps-5 bg-light pt-5 pb-5'><h3 className='fwh display-3 mb-5'>Customize<br /> it your way</h3>
            {
              txs.map((v, i) => {
                return (
                  <li key={i} className='mb-2'>{v.tx}</li>
                )
              })
            }
            <Button variant='dark' className='rounded-pill dnbtn2  ps-4 pe-4 p-2 mt-4 fs-5 '>Get Started</Button>
          </Col>
          <Col sm={12} md={7} lg={7} className=' p-0' ><div className='bgvido '>
            <div className='overflow-hidden w-75 h-75'> <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              src={file}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            ></video></div>
          </div></Col>
        </Row>
      </Container>
      <Container fluid className='bgclrwix pt-5 pb-5'>
        <Container className='pt-5 pb-5'>
          <h2 className='fwh display-2 mb-5'>A website builder<br />
            engineered for growth</h2>
          <Row>
            {
              CadBod.map((v, i) => {
                return (
                  <Col sm={12} md={4} lg={4} key={i} className='mb-4'>
                    <Card className='border-0'>
                      <Card.Body className='bgclrwix'>
                        <Card.Title>{v.tit}</Card.Title>
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

          <Button variant='dark' className='rounded-pill btnver dnbtn2 ps-4 pe-4 p-2  fs-5 '>Get Started</Button>
        </Container>
      </Container>
      <Container className='pt-5 pb-5'>
        <h2 className='display-2 fwh mt-5 mb-5 text-center'>Take your business where<br /> it needs to go</h2>
        <Row>
          {
            imgcad.map((v, i) => {
              return (
                <Col sm={12} md={6} lg={6} key={i} className='mb-5'>
                  <Card className='border-0'>
                    <Card.Img variant="top" src={v.img} />
                    <Card.Body className='ps-0'>
                      <Card.Title className='fs-3'>{v.tit}</Card.Title>
                      <Card.Text>
                        {v.tx}
                      </Card.Text>
                      {i === 0 || i === 1 ?
                        <a href='#' className='text-dark  lo'>{v.a1} <FaRightLong className='ms-2' /></a> : null}
                      <a href='#' className={i === 0 || i === 1 ? 'text-dark lo ms-4' : 'text-dark lo '}>{v.a2} <FaRightLong className='ms-2' /></a>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Container fluid >
        <Row>
          <Col sm={12} md={5} lg={5} className='bg-dark mdqry pt-5 pb-5 text-white ps-5'><h3 className='fwh mt-5 display-3 mb-5'>Drive traffic <br />that converts</h3><p className='fs-5 mb-4'>Promote your business and<br /> reach the right audience:</p>
            {
              txs2.map((v, i) => {
                return (
                  <li key={i} className='mb-2 fs-6 ps-3'>{v.tx}</li>
                )
              })
            }
            <Button variant='light' className='rounded-pill dnbtn2 mb-5 ps-4 pe-4 p-2 mt-4 fs-5 '>Get Started</Button></Col>
          <Col sm={12} md={7} lg={7} className='p-0'>
            <div className='bgtxdv'></div>
          </Col>
        </Row>
      </Container>
      <Container className='pt-5 pb-5  mb-5' >
        <Row>
          <Col sm={12} md={5} lg={5} className='pdvdo mt-5'>
            <div className='bgvido2'>   <div className='overflow-hidden hwiv2 '> <img
              src={images[currentImageIndex]}
              alt="Slideshow"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%'
              }}
            /></div></div>
          </Col>
          <Col sm={12} md={7} lg={7} className='d-flex  align-items-center mt-5'><div>
            <h2 className='display-2 fwh'>Manage your business like a pro</h2><p className='fs-5 mt-5'>Capture leads, get reports and insights, automate your business, and more from desktop or on the go from your phone with the <a href='#' className='text-dark'>Wix Owner app</a>.</p><p className='fs-5 mt-4'>
              Everything is synced for seamless management experience.</p>
            <Button variant='dark' className='rounded-pill btnver dnbtn2 ps-4 pe-4 p-2 mt-4 fs-5 '>Get Started</Button></div></Col>
        </Row>
      </Container>
      <Container fluid className='pt-5 bgclrwix pb-5 d-flex flex-column align-items-center'>
        <h2 className='fwh display-2 mt-5'>How to create a website for free</h2><p className='fw-bold fs-4 mt-4'>Follow these 6 simple steps to create a website today</p>
        <ol className='mt-5'>
          {
            con2.map((v, i) => {
              return (
                <li key={i} className='fs-5 mb-4'><span className='fw-bold'>{v.tit}</span> {v.tx}</li>
              )
            })
          }
        </ol><div className='d-flex align-items-center mb-5'>
          <Button variant='dark' className='rounded-pill btnver dnbtn2 ps-4 pe-4 p-2 mt-4 fs-5 '>Get Started</Button><a href='#' className='text-dark ms-4 fs-5'>Learn More <FaRightLong /></a></div>
      </Container>
      <Container className='bg-dark pt-5 pb-5' fluid>
        <Container className=' pb-5'>
          <Row>
            <Col sm={12} md={5} lg={5} className='pt-5'>
              <h2 className='text-white display-2 fwh'>Get inspired, gain new skills and see what’s trending</h2>

              <Button variant='light' className='rounded-pill  ps-4 pe-4 p-2 mt-5 fs-5 '>Explore the Blog</Button>
            </Col>
            <Col sm={12} md={7} lg={7} className='pt-5'>
              <Row>
                {
                  imgs.map((v, i) => {
                    return (
                      <Col sm={12} md={6} lg={6} key={i} className='mb-5'><img className='w-100 h-100 imgovertra' src={v.pic} />
                      </Col>
                    )
                  })
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className='pt-5 pb-5'>
        <Row>
          <Col sm={12} md={6} lg={6} className='fwh display-2'>Why the Wix website builder is the best choice for you</Col>
          <Col sm={12} md={6} lg={6} className='pt-3'>
            {
              para.map((v, i) => {
                return (
                  <p key={i} className='fs-5 mb-4'>{v.tx}</p>
                )
              })
            }

            <Button variant='dark' className='rounded-pill btnver dnbtn2 ps-4 pe-4 p-2 mt-4 fs-5 mb-5'>Get Started</Button>
          </Col>
        </Row>
      </Container>
      <Container fluid className='bgclrwix pt-5 pb-5'>
        <Container className='pt-5 pb-5'>
          <h2 className='display-2 fwh'>We’re here for you</h2>
          <Row className='mt-5'>{
            cad3.map((v, i) => {
              return (
                <Col sm={12} md={4} lg={4} key={i}>
                  <Card className='border-0 border-dark border-top rounded-0'>
                    <Card.Body className='bgclrwix'>
                      <Card.Title>{v.tit}</Card.Title>
                      <Card.Text>{v.tx}
                      </Card.Text>
                      <a className='text-dark lo' href='#'>{v.link} <FaRightLong /></a>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }</Row>
        </Container>
      </Container>

      <Container className='pt-5 pb-5 mt-5 mb-5'>
        <h2 className='fwh display-2'>FAQs</h2>
        <Row className='mt-5'>
          {
            accor.map((v, i) => {
              return (
                <Col sm={12} md={12} lg={12} key={i}>
                  <Accordion >
                    <Accordion.Item eventKey={i} className='rounded-0 '>
                      <Accordion.Header ><span className='fs-4 fw-bold pt-4 pb-4 ps-4'>{v.tit}</span></Accordion.Header>
                      <Accordion.Body className='p-5'>
                        {
                          i === 3 ? <div> <span className='fs-5 '> {v.bod}</span>
                            <ol className='mt-4 mb-5'>
                              {
                                accor2.map((v, i) => {
                                  return (
                                    <li key={i} className='fs-5'><span className='fw-bold lh-lg'>{v.tit}</span> {v.tx}</li>
                                  )
                                })
                              }
                            </ol>
                            <span className='fs-5 '> {v.bod2}</span>
                          </div>
                            : <span className='fs-5'> {v.bod}</span>
                        }
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Container fluid className='bgclrlast pt-5 pb-5 text-center'>
        <h2 className='fwh display-2 mttxcon'>Tomorrow’s success starts today.</h2>

        <Button variant='dark' className='rounded-pill dnbtn2 ps-4 pe-4 p-2 mt-5 mb-5 fs-5 '>Get Started</Button>
      </Container>
      <Links />
      <Footer />
      <div className='bg-white shadow-sm p-2  pb-3 pt-3 posbtn '>Created with <span className='fw-bold'>Wix</span></div>
    </div>
  )
}

export default Wix
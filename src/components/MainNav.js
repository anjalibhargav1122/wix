// import React from 'react'
// import Container from 'react-bootstrap/Container'
// import "./Components.css"
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// const MainNav = () => {
//   return (
//     <div>
//       <Container fluid className='p-0 border-top shadow-sm'>
//         <nav class="navbar navbar-expand-lg navbar-light ">
//           <div class="container-fluid">

//             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul class="navbar-nav me-auto mb-2 mb-lg-0">


//                 <li class="nav-item open">
//                   <a class="nav-link dropdown-toggle loh" href="#" role="button" >
//                     Business & Services
//                   </a>
//                   <ul class=" wdht border-0 shadow-sm" >
//                     <Row>
//                       <Col sm={12} md={3} lg={3} className='border-end '>
//                         <li><a class="dropdown-item fw-bold lo mt-4" href="#">Business</a></li>
//                         <li><a class="dropdown-item lo" href="#">Consulting & Coaching</a></li>

//                         <li><a class="dropdown-item lo" href="#">Services & Maintenance</a></li>
//                         <li><a class="dropdown-item lo" href="#">Advertising & Marketing</a></li>
//                         <li><a class="dropdown-item lo " href="#">Technology & Apps</a></li>
//                         <li><a class="dropdown-item lo" href="#">Real Estate</a></li>
//                         <li><a class="dropdown-item lo" href="#">Finance & Law</a></li>
//                         <li><a class="dropdown-item lo" href="#">Automotive & Cars</a></li>
//                         <li><a class="dropdown-item lo" href="#">Farming & Gardening</a></li>
//                         <li><a class="dropdown-item lo" href="#">Pets & Animals</a></li>
//                       </Col>
//                       <Col sm={12} md={3} lg={3} className='border-end pb-5'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Health & Wellness</a></li>
//                         <li><a class="dropdown-item lo" href="#">Health</a></li>

//                         <li><a class="dropdown-item lo" href="#">Wellness</a></li>
//                         <li><a class="dropdown-item lo" href="#">Sports & Fitness</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Beauty & Hair</a></li>
//                         <li><a class="dropdown-item lo" href="#">Makeup & Cosmetics</a></li>
//                         <li><a class="dropdown-item lo" href="#">Hair</a></li>
//                         <li><a class="dropdown-item lo mt-4 fw-bold" href="#">Fashion & Style</a></li>
//                         <li><a class="dropdown-item lo" href="#">Fashion</a></li>
//                         <li><a class="dropdown-item lo" href="#">Accessories</a></li>

//                       </Col>
//                       <Col sm={12} md={3} lg={3} className='border-end'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Travel & Tourism</a></li>
//                         <li><a class="dropdown-item lo" href="#">Hotels & B&Bs</a></li>

//                         <li><a class="dropdown-item lo" href="#">Apartments & Hostels</a></li>
//                         <li><a class="dropdown-item lo" href="#">Travel Services</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Restaurants & Food</a></li>
//                         <li><a class="dropdown-item lo" href="#">Catering & Chef</a></li>
//                         <li><a class="dropdown-item lo" href="#">Restaurant</a></li>
//                         <li><a class="dropdown-item lo" href="#">Cafe & Bakery</a></li>
//                         <li><a class="dropdown-item lo" href="#">Bar & Club</a></li>
//                         <li><a class="dropdown-item lo" href="#">Food & Drinks</a></li>

//                       </Col>
//                       <Col sm={12} md={3} lg={3}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">One Page</a></li>
//                         <li><a class="dropdown-item lo" href="#">Coming Soon</a></li>

//                         <li><a class="dropdown-item lo" href="#">Landing Pages</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Professional CV</a></li>

//                       </Col>
//                     </Row>
//                   </ul>
//                 </li>

//                 <li class="nav-item open ms-3">
//                   <a class="nav-link dropdown-toggle loh " href="#" role="button" >
//                     store
//                   </a>
//                   <ul class=" hp border-0 shadow-sm" >
//                     <li><a class="dropdown-item fw-bold lo mt-4" href="#">eCommerce</a></li>
//                     <li><a class="dropdown-item lo" href="#">Fashion & Clothing</a></li>
//                     <li><a class="dropdown-item lo" href="#">Jewelry & Accessories</a></li>

//                     <li><a class="dropdown-item lo" href="#">Arts & Crafts</a></li>
//                     <li><a class="dropdown-item lo" href="#">Home & Decor</a></li>
//                     <li><a class="dropdown-item lo" href="#">Beauty & Wellness</a></li>
//                     <li><a class="dropdown-item lo" href="#">Food & Drinks</a></li>
//                     <li><a class="dropdown-item lo" href="#">Sports & Outdoors</a></li>
//                     <li><a class="dropdown-item lo" href="#">Electronics</a></li>
//                     <li><a class="dropdown-item lo" href="#">Kids & Babies</a></li>
//                     <li><a class="dropdown-item lo" href="#">Books & Publishers</a></li>
//                     <li><a class="dropdown-item lo" href="#">Pets & Animales</a></li>
//                     <li><a class="dropdown-item lo" href="#">CBD</a></li>
//                   </ul>
//                 </li>

//                 <li class="nav-item open ms-3">
//                   <a class="nav-link dropdown-toggle loh" href="#" role="button" >
//                     Creative
//                   </a>
//                   <ul class=" whh border-0 shadow-sm" >
//                     <Row>
//                       <Col sm={4} md={4} lg={4} className='border-end pb-5'>
//                         <li><a class="dropdown-item fw-bold lo mt-4" href="#">Photography</a></li>
//                         <li><a class="dropdown-item lo" href="#">Events & Portraits</a></li>

//                         <li><a class="dropdown-item lo" href="#">Commercial & Editorial</a></li>
//                         <li><a class="dropdown-item lo" href="#">Travel & Documentary</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Design</a></li>
//                         <li><a class="dropdown-item lo" href="#">Architecture</a></li>
//                         <li><a class="dropdown-item lo" href="#">Art & Illustration</a></li>
//                         <li><a class="dropdown-item lo" href="#">Branding</a></li>
//                         <li><a class="dropdown-item lo" href="#">Fashion Design</a></li>
//                         <li><a class="dropdown-item lo" href="#">Graphic & Web</a></li>
//                       </Col>
//                       <Col sm={4} md={4} lg={4} className='border-end'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Music</a></li>
//                         <li><a class="dropdown-item lo" href="#">Singer & Musician</a></li>

//                         <li><a class="dropdown-item lo" href="#">Band</a></li>
//                         <li><a class="dropdown-item lo" href="#">DJ & Producer</a></li>
//                         <li><a class="dropdown-item lo" href="#">Music Industry</a></li>
//                         <li><a class="dropdown-item lo" href="#">Music Promotion</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Creative Arts</a></li>
//                         <li><a class="dropdown-item lo" href="#">Performing Arts</a></li>
//                         <li><a class="dropdown-item lo" href="#">Literary Arts</a></li>
//                         <li><a class="dropdown-item lo" href="#">Visual Arts</a></li>

//                       </Col>
//                       <Col sm={4} md={4} lg={4}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">Portfolio & CV</a></li>
//                         <li><a class="dropdown-item lo" href="#">Portfolios</a></li>

//                         <li><a class="dropdown-item lo" href="#">Resumes & CVs</a></li>
//                         <li><a class="dropdown-item lo" href="#">Personal</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Video</a></li>
//                         <li><a class="dropdown-item lo" href="#">Film & TV</a></li>
//                         <li><a class="dropdown-item lo" href="#">Online Education</a></li>
//                         <li><a class="dropdown-item lo" href="#">Vlog</a></li>

//                       </Col>
//                     </Row>
//                   </ul>
//                 </li>

//                 <li class="nav-item open ms-3">
//                   <a class="nav-link dropdown-toggle loh" href="#" role="button" >
//                     Community
//                   </a>
//                   <ul class=" wh border-0 shadow-sm" >
//                     <Row>
//                       <Col sm={6} md={6} lg={6} className='border-end pb-5'>
//                         <li><a class="dropdown-item fw-bold lo mt-4" href="#">Education</a></li>
//                         <li><a class="dropdown-item lo" href="#">Schools & Univercities</a></li>

//                         <li><a class="dropdown-item lo" href="#">Online Education</a></li>
//                         <li><a class="dropdown-item lo" href="#">Classes & Courses</a></li>
//                         <li><a class="dropdown-item lo fw-bold mt-4" href="#">Communities</a></li>
//                         <li><a class="dropdown-item lo" href="#">Religion</a></li>
//                         <li><a class="dropdown-item lo" href="#">Non-Profit</a></li>
//                         <li><a class="dropdown-item lo" href="#">Online Forum</a></li></Col>
//                       <Col sm={6} md={6} lg={6}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">Events</a></li>
//                         <li><a class="dropdown-item lo" href="#">Weddings</a></li>

//                         <li><a class="dropdown-item lo" href="#">Holidays & Celebrations</a></li>
//                         <li><a class="dropdown-item lo" href="#">Event Production</a></li>
//                         <li><a class="dropdown-item lo" href="#">Conferencens & Meetups</a></li>
//                         <li><a class="dropdown-item lo" href="#">Venues</a></li></Col>
//                     </Row>
//                   </ul>
//                 </li>

//                 <li class="nav-item open ms-3">
//                   <a class="nav-link dropdown-toggle loh" href="#" role="button" >
//                     Blog
//                   </a>
//                   <ul class=" ht border-0 shadow-sm" >
//                     <li><a class="dropdown-item fw-bold lo pt-4" href="#">Blog</a></li>
//                     <li><a class="dropdown-item lo" href="#">Personal Blog</a></li>

//                     <li><a class="dropdown-item lo" href="#">Food & Travel</a></li>
//                     <li><a class="dropdown-item lo" href="#">News & Business</a></li>
//                     <li><a class="dropdown-item lo" href="#">Arts</a></li>
//                     <li><a class="dropdown-item lo" href="#">Fashion & Beauty</a></li>
//                     <li><a class="dropdown-item lo" href="#">Sports & Wellness</a></li>
//                     <li><a class="dropdown-item lo" href="#">Podcast</a></li>
//                   </ul>
//                 </li>

//               </ul>
//               <ul class="d-flex list-unstyled mb-0">  <li class="nav-item">
//                 <a class="nav-link me-4 text-primary loh" href="#">All Templates</a>
//               </li>  <li class="nav-item">
//                   <span class="nav-link me-4 text-secondary" >|</span>
//                 </li>
//                 <li class="nav-item ">
//                   <a class="nav-link me-4 loh" href="#">Blank Templates</a>
//                 </li>
//                 <li class="nav-item ">
//                   <span class="nav-link me-4 text-secondary" >|</span>
//                 </li>

//                 <li class="nav-item open pe-5 me-3">
//                   <a class="nav-link dropdown-toggle loh" href="#" role="button" >
//                     Collections
//                   </a>
//                   <ul class="cl border-0 shadow-sm" >
//                     <li><a class="dropdown-item lo mt-3" href="#">New Templates</a></li>
//                     <li><a class="dropdown-item lo" href="#">Most Popular</a></li>
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </Container>
//     </div>
//   )
// }

// export default MainNav

import React from 'react'
import Container from 'react-bootstrap/Container'
import "./Components.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainNav = () => {
  return (
    <div>
      <Container fluid className='pt-3 pb-3 border-top shadow-sm '>
        <div className='d-flex justify-content-between dvnavbarwd'>
          <ul class="d-flex list-unstyled mb-0">


            <li class="nav-item open">
              <a class="nav-link dropdown-toggle loh" href="#" role="button" >
                Business & Services
              </a>
              <ul class=" wdht border-0 shadow-sm" >
                <Row>
                  <Col sm={12} md={3} lg={3} className='border-end '>
                    <li><a class="dropdown-item fw-bold lo mt-4" href="#">Business</a></li>
                    <li><a class="dropdown-item lo" href="#">Consulting & Coaching</a></li>

                    <li><a class="dropdown-item lo" href="#">Services & Maintenance</a></li>
                    <li><a class="dropdown-item lo" href="#">Advertising & Marketing</a></li>
                    <li><a class="dropdown-item lo " href="#">Technology & Apps</a></li>
                    <li><a class="dropdown-item lo" href="#">Real Estate</a></li>
                    <li><a class="dropdown-item lo" href="#">Finance & Law</a></li>
                    <li><a class="dropdown-item lo" href="#">Automotive & Cars</a></li>
                    <li><a class="dropdown-item lo" href="#">Farming & Gardening</a></li>
                    <li><a class="dropdown-item lo" href="#">Pets & Animals</a></li>
                  </Col>
                  <Col sm={12} md={3} lg={3} className='border-end pb-5'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Health & Wellness</a></li>
                    <li><a class="dropdown-item lo" href="#">Health</a></li>

                    <li><a class="dropdown-item lo" href="#">Wellness</a></li>
                    <li><a class="dropdown-item lo" href="#">Sports & Fitness</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Beauty & Hair</a></li>
                    <li><a class="dropdown-item lo" href="#">Makeup & Cosmetics</a></li>
                    <li><a class="dropdown-item lo" href="#">Hair</a></li>
                    <li><a class="dropdown-item lo mt-4 fw-bold" href="#">Fashion & Style</a></li>
                    <li><a class="dropdown-item lo" href="#">Fashion</a></li>
                    <li><a class="dropdown-item lo" href="#">Accessories</a></li>

                  </Col>
                  <Col sm={12} md={3} lg={3} className='border-end'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Travel & Tourism</a></li>
                    <li><a class="dropdown-item lo" href="#">Hotels & B&Bs</a></li>

                    <li><a class="dropdown-item lo" href="#">Apartments & Hostels</a></li>
                    <li><a class="dropdown-item lo" href="#">Travel Services</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Restaurants & Food</a></li>
                    <li><a class="dropdown-item lo" href="#">Catering & Chef</a></li>
                    <li><a class="dropdown-item lo" href="#">Restaurant</a></li>
                    <li><a class="dropdown-item lo" href="#">Cafe & Bakery</a></li>
                    <li><a class="dropdown-item lo" href="#">Bar & Club</a></li>
                    <li><a class="dropdown-item lo" href="#">Food & Drinks</a></li>

                  </Col>
                  <Col sm={12} md={3} lg={3}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">One Page</a></li>
                    <li><a class="dropdown-item lo" href="#">Coming Soon</a></li>

                    <li><a class="dropdown-item lo" href="#">Landing Pages</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Professional CV</a></li>

                  </Col>
                </Row>
              </ul>
            </li>

            <li class="nav-item open ms-3">
              <a class="nav-link dropdown-toggle loh " href="#" role="button" >
                store
              </a>
              <ul class=" hp border-0 shadow-sm" >
                <li><a class="dropdown-item fw-bold lo mt-4" href="#">eCommerce</a></li>
                <li><a class="dropdown-item lo" href="#">Fashion & Clothing</a></li>
                <li><a class="dropdown-item lo" href="#">Jewelry & Accessories</a></li>

                <li><a class="dropdown-item lo" href="#">Arts & Crafts</a></li>
                <li><a class="dropdown-item lo" href="#">Home & Decor</a></li>
                <li><a class="dropdown-item lo" href="#">Beauty & Wellness</a></li>
                <li><a class="dropdown-item lo" href="#">Food & Drinks</a></li>
                <li><a class="dropdown-item lo" href="#">Sports & Outdoors</a></li>
                <li><a class="dropdown-item lo" href="#">Electronics</a></li>
                <li><a class="dropdown-item lo" href="#">Kids & Babies</a></li>
                <li><a class="dropdown-item lo" href="#">Books & Publishers</a></li>
                <li><a class="dropdown-item lo" href="#">Pets & Animales</a></li>
                <li><a class="dropdown-item lo" href="#">CBD</a></li>
              </ul>
            </li>

            <li class="nav-item open ms-3">
              <a class="nav-link dropdown-toggle loh" href="#" role="button" >
                Creative
              </a>
              <ul class=" whh border-0 shadow-sm" >
                <Row>
                  <Col sm={4} md={4} lg={4} className='border-end pb-5'>
                    <li><a class="dropdown-item fw-bold lo mt-4" href="#">Photography</a></li>
                    <li><a class="dropdown-item lo" href="#">Events & Portraits</a></li>

                    <li><a class="dropdown-item lo" href="#">Commercial & Editorial</a></li>
                    <li><a class="dropdown-item lo" href="#">Travel & Documentary</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Design</a></li>
                    <li><a class="dropdown-item lo" href="#">Architecture</a></li>
                    <li><a class="dropdown-item lo" href="#">Art & Illustration</a></li>
                    <li><a class="dropdown-item lo" href="#">Branding</a></li>
                    <li><a class="dropdown-item lo" href="#">Fashion Design</a></li>
                    <li><a class="dropdown-item lo" href="#">Graphic & Web</a></li>
                  </Col>
                  <Col sm={4} md={4} lg={4} className='border-end'>   <li><a class="dropdown-item fw-bold lo mt-4 " href="#">Music</a></li>
                    <li><a class="dropdown-item lo" href="#">Singer & Musician</a></li>

                    <li><a class="dropdown-item lo" href="#">Band</a></li>
                    <li><a class="dropdown-item lo" href="#">DJ & Producer</a></li>
                    <li><a class="dropdown-item lo" href="#">Music Industry</a></li>
                    <li><a class="dropdown-item lo" href="#">Music Promotion</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Creative Arts</a></li>
                    <li><a class="dropdown-item lo" href="#">Performing Arts</a></li>
                    <li><a class="dropdown-item lo" href="#">Literary Arts</a></li>
                    <li><a class="dropdown-item lo" href="#">Visual Arts</a></li>

                  </Col>
                  <Col sm={4} md={4} lg={4}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">Portfolio & CV</a></li>
                    <li><a class="dropdown-item lo" href="#">Portfolios</a></li>

                    <li><a class="dropdown-item lo" href="#">Resumes & CVs</a></li>
                    <li><a class="dropdown-item lo" href="#">Personal</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Video</a></li>
                    <li><a class="dropdown-item lo" href="#">Film & TV</a></li>
                    <li><a class="dropdown-item lo" href="#">Online Education</a></li>
                    <li><a class="dropdown-item lo" href="#">Vlog</a></li>

                  </Col>
                </Row>
              </ul>
            </li>

            <li class="nav-item open ms-3">
              <a class="nav-link dropdown-toggle loh" href="#" role="button" >
                Community
              </a>
              <ul class=" wh border-0 shadow-sm" >
                <Row>
                  <Col sm={6} md={6} lg={6} className='border-end pb-5'>
                    <li><a class="dropdown-item fw-bold lo mt-4" href="#">Education</a></li>
                    <li><a class="dropdown-item lo" href="#">Schools & Univercities</a></li>

                    <li><a class="dropdown-item lo" href="#">Online Education</a></li>
                    <li><a class="dropdown-item lo" href="#">Classes & Courses</a></li>
                    <li><a class="dropdown-item lo fw-bold mt-4" href="#">Communities</a></li>
                    <li><a class="dropdown-item lo" href="#">Religion</a></li>
                    <li><a class="dropdown-item lo" href="#">Non-Profit</a></li>
                    <li><a class="dropdown-item lo" href="#">Online Forum</a></li></Col>
                  <Col sm={6} md={6} lg={6}>   <li><a class="dropdown-item fw-bold lo mt-4" href="#">Events</a></li>
                    <li><a class="dropdown-item lo" href="#">Weddings</a></li>

                    <li><a class="dropdown-item lo" href="#">Holidays & Celebrations</a></li>
                    <li><a class="dropdown-item lo" href="#">Event Production</a></li>
                    <li><a class="dropdown-item lo" href="#">Conferencens & Meetups</a></li>
                    <li><a class="dropdown-item lo" href="#">Venues</a></li></Col>
                </Row>
              </ul>
            </li>

            <li class="nav-item open ms-3">
              <a class="nav-link dropdown-toggle loh" href="#" role="button" >
                Blog
              </a>
              <ul class=" ht border-0 shadow-sm" >
                <li><a class="dropdown-item fw-bold lo pt-4" href="#">Blog</a></li>
                <li><a class="dropdown-item lo" href="#">Personal Blog</a></li>

                <li><a class="dropdown-item lo" href="#">Food & Travel</a></li>
                <li><a class="dropdown-item lo" href="#">News & Business</a></li>
                <li><a class="dropdown-item lo" href="#">Arts</a></li>
                <li><a class="dropdown-item lo" href="#">Fashion & Beauty</a></li>
                <li><a class="dropdown-item lo" href="#">Sports & Wellness</a></li>
                <li><a class="dropdown-item lo" href="#">Podcast</a></li>
              </ul>
            </li>

          </ul>  <ul class="d-flex list-unstyled mb-0">  <li class="nav-item">
            <a class="nav-link me-4 text-primary alltemp loh" href="#">All Templates</a>
          </li>  <li class="nav-item">
              <span class="nav-link me-4 text-secondary" >|</span>
            </li>
            <li class="nav-item ">
              <a class="nav-link me-4 loh" href="#">Blank Templates</a>
            </li>
            <li class="nav-item ">
              <span class="nav-link me-4 text-secondary" >|</span>
            </li>

            <li class="nav-item open pe-5 me-3">
              <a class="nav-link dropdown-toggle loh" href="#" role="button" >
                Collections
              </a>
              <ul class="cl border-0 shadow-sm" >
                <li><a class="dropdown-item lo mt-3" href="#">New Templates</a></li>
                <li><a class="dropdown-item lo" href="#">Most Popular</a></li>
              </ul>
            </li>
          </ul></div>
      </Container>
    </div>
  )
}

export default MainNav
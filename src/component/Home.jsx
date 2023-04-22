import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    
    return (
        <>
            {/* <!-- top-header --> */}
            {/* 
            <div id="top-header">
                <div className="govt-india my-2">
                    <h6>भारत सरकार<br />
                        Government of India</h6>
                </div>
                <div className="govt-india1 my-2">
                    <h6> इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्रालय, भारत सरकार<br />
                        Ministry of Electronics & Information Technology, Government of India</h6>
                </div>
                <div className="login-page my-5">
                    <p><Link to="/">Skip to login page</Link></p>
                </div>
            </div>
             */}

            {/* <!-- header --> */}

            <div id="header">
                <div className="img-logo">
                    <img className="logo" src="https://logopeople.in/wp-content/uploads/2013/01/government-of-india-1.jpg"
                        alt="indian Government log" />
                    <div className="header-content">
                        <h6>
                            राष्ट्रीय सूचना विज्ञान केन्द्र<br />National Informatics Centre
                        </h6>
                    </div>

                    <div className="heading-block">
                        <h4 className="heading" style={{ marginLeft: '60px' }}>Scholar Connect</h4>
                        <h6 className="heading-content">Ministry of Electronics & Information Technology, Government of India<br />
                            <span className="color">(For Academic Year 2022-23)</span>
                        </h6>
                    </div>
                    <img className="logo1"
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
                        alt="logo" />
                </div>
            </div>

            {/* <!-- image and infomation --> */}

            <div className="info-main justify-content text-center">
                <h6 className="info">Please check the Announcement corner regularly for latest updates and information.
                    For any technical queries, please contact<br /> <span className="info-part justify-content text-center">
                        from 8 AM to 8 PM on all days, excluding holidays</span> </h6>
            </div>

            {/* carousal */}

            <img src="" alt="" />



            {/* <!-- cards --> */}


            {/* <div id="card">
                <div className="card1">
                    <div className="card-body">
                        <h4 className="card-title"> About Us</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">About NSP</li>
                        <li className="list-group-item">Schemes on NSP</li>
                        <li className="list-group-item">Operational manual on functionalities of NSP</li>
                        <li className="list-group-item">Standard Operating </li>
                    </ul>

                </div>

                <div className="card1">
                    <div className="card-body">
                        <h4 className="card-title"> Applicant Corner</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">New Registration</li>
                        <li className="list-group-item">Fresh Application</li>
                        <li className="list-group-item">Application Submission for AY 2022-23</li>
                        <li className="list-group-item">Renewal Application</li>
                    </ul>

                </div>

                <div className="card1" >
                    <div className="card-body">
                        <h4 className="card-title"> Officer's Corner</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">login</li>
                        <li className="list-group-item">District Login</li>
                        <li className="list-group-item">State / Board login for new users</li>
                        <li className="list-group-item">Ministry login</li>

                    </ul>

                </div>

                <div className="card1">
                    <div className="card-body">
                        <h4 className="card-title"> Public Corner</h4>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Dashboard</li>
                        <li className="list-group-item">Search for Institutes on NSP</li>
                        <li className="list-group-item">List of Applicants processed for scholarships</li>
                        <li className="list-group-item">Schemes' Nodal Officers</li>
                    </ul>
                </div>


            </div> */}
            {/* TABLE */}

            <ul>

                <li><h4 className="table-heading mx-3 my-5">NATIONAL SCHOLARSHIP FOR MINORITY</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Pre Matric Scholarships Scheme for Minorities</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post Matric Scholarships Scheme for Minorities</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Merit Cum Means Scholarship For Professional and Technical Courses CS</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>

                        <tr>
                            <th scope="row">2</th>
                            <td>BEGUM HAZRAT MAHAL NATIONAL SCHOLARSHIP</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>

                    </tbody>
                </table>


                <li><h4 className="table-heading mx-3 my-5"> NATIONAL SCHOLARSHIP FOR PERSON WITH DISABILITIES</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Pre-matric Scholarship for Students with Disabilities</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post-matric Scholarship for Students with Disabilities</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Scholarships for Top Class Education for students with disabilities.</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>

                    </tbody>
                </table>

                <li><h4 className="table-heading mx-3 my-5">STATE SCHOLARSHIP FOR M.P STUDENT</h4></li>

                <table className="table table-striped table-hover text-center ">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Scheme Name</th>
                            <th scope="col">Scheme closing Date</th>
                            <th scope="col">Institute Verification</th>
                            <th scope="col">Guidelines / Apply</th>


                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <th scope="row">1</th>
                            <td>Mukhya Mantri Jan Kalyan (Shiksha Protsahan Yojna)</td>
                            <td>Closed on 15-11-2022</td>
                            <td>Closed on 30-11-2022</td>
                            <td><button className="btn btn-success">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Post-matric Scholarship Scheme (OBC Students)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Post-matric Scholarship Scheme (SC / ST Student)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>

                        <tr>
                            <th scope="row">4</th>
                            <td>Mukhya Mantri Medhavi Vidhyarti (MMVY) Yojna (MMVY)</td>
                            <td>Closed on 30-11-2022</td>
                            <td>Closed on 31-12-2022</td>
                            <td><button className="btn btn-success ">Apply</button></td>
                            <td><button className="btn btn-success " id="viewBtn">View</button></td>
                        </tr>

                    </tbody>
                </table>

            </ul>

            {/* FOOTER */}


            <footer className="page-footer font-small special-color-dark pt-4">


                <div className="container">

                    <div className="row">


                        <div className="col-md-6 mb-4">


                        </div>

                        <div className="col-md-6 mb-4">



                        </div>


                    </div>


                </div>

                <h6 className="justify-content text-center">This site is designed, developed and hosted by Team Thunder ,
                    content provided by Scholar Connect.</h6>
                <p className="justify-content text-center my-3">Last Updated on 17th May 2022</p>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <img className="footer-img1" src="https://presentations.gov.in/wp-content/uploads/2020/06/2.png?x19336" alt="" />
                    <img className="footer-img2" src="https://presentations.gov.in/presgov_new/wp-content/uploads/2020/06/nic-logo-nic-logo-1-bilingual-sans-01.jpg?x91911" alt="" />
                </div>


            </footer>




        </>
    )
}

export default Home;

const Signup = () => {
    return (
        <>

            {/* INSTRUCTION */}

            <div className="signupheading1 text-justify text-center my-3">
                <h4><b>Academic Year 2022-23<br />
                    Guidelines for Registration on Scholar Connect</b><br />
                    Welcome to Scholar Connect</h4>
                <hr />
            </div>
            <div className="content text-left mx-4">
                <h5>How to Apply?</h5>
                <p>Students applying for scholarship for the first time <span className="span1" > (Fresh Students) </span> need to <span className="span1">"Register"</span> on the portal as fresh applicant by providing accurate and authenticated information as printed on their documents in the <span className="span1" > "Student Registration Form"</span> .</p>
                <p>The registration form is required to be filled by parents / guardian of students who are below the age of 18 years on the date of registration.</p>
                <p>Before initiating registration process, students / Parents / guardian are advised to keep the following documents handy</p>
            </div>
            <div className="listcomponent mx-5">
                <ol>
                    <li>Educational documents of student</li>
                    <li>Student's Bank account number and IFSC code of the bank branch</li>
                    <li> Aadhaar number of the Student</li>
                    <li>If Aadhaar is not available, then Bonafide student certificate from Institute / School and</li>
                    <li>Aadhaar Enrolment ID and Scanned copy of Bank passbook</li>
                    <li>If Institute/School is different from domicile state of the applicant, then Bonafide student certificate from Institute / School.</li>
                </ol>
            </div>
            <h6 className="instruction mx-4">Brief instructions for filling up the online Application Form are given below (Fields marked with * are Mandatory fields):</h6>

            <div className="impnote my-4">
                <h5 className="signupheading1 mx-4 ">Important Note:</h5>
                <ol>
                    <li >. After submitting the application, the default login id and password to log into NSP portal will be sent to the provided mobile number. In case the password is not received, the option for forgot password at login page shall be used.</li>
                    <li className="list my-3">Students are advised to provide "Annual Family Income" as per the Income Certificate issued by competent authority in their scholarship application.</li>
                </ol>
            </div>

            {/* CREATE ACCOUNT */}


            <br /><div className="signup-heading text-center my-5 "><h4><b>Fresh Registration For Academic Year 2022-23</b></h4><br />
                <form className="form-element mx-4 " action="#">

                    <div className="formelements1">
                        <label className="labelelement1 mx-2 my-2 text-center" htmlFor="State of Domicile">State of Domicile/ अधिवासित राज्य</label><br />
                        <select name="dropdowns" id="dropdown1">
                            <option value="select">Select a State</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Delhi">Delhi</option>
                        </select>

                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  "/> */}
                    </div>
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="State of Domicile">Name of Student/ अभ्यर्थी का नाम</label><br />

                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />
                    </div>


                    <div className="formelements1 " id="scheme">
                        <label className="labelelement1 mx-5 my-2 " htmlFor="State of Domicile">Scholarship Category/ छात्रवृत्ति श्रेणी</label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="dropdowns" id="dropdown1">
                            <option value="select">Select your category</option>
                            <option value="SC / ST">SC / ST</option>
                            <option value="OBC">OBC</option>
                            <option value="EWS">EWS</option>
                        </select>
                    </div>
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="State of Domicile">Date of Birth (DD/MM/YYYY)/ जन्म तिथि</label><br />
                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />

                    </div>



                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="State of Domicile">Scheme Type/ योजना का प्रकार</label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="dropdowns" id="dropdown1">
                            <option value="select">Select a Scheme</option>
                            <option value="Medhavi">Medhavi</option>
                            <option value="For SC/ST">For SC/ST</option>
                            <option value="OBC">For OBC</option>
                        </select>
                    </div>
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="State of Domicile">Mobile Number/ मोबाइल नंबर</label><br />
                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />

                    </div>



                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="State of Domicile">Gender/ लिंग </label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="dropdowns" id="dropdown1">
                            <option value="select">Select your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="State of Domicile">Email Id/ ईमेल आईडी</label><br />
                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />
                    </div>


                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="State of Domicile"> Bank IFSC Code/ बैंक आई. एफ. एस. सी.</label><br />
                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />
                    </div>
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="State of Domicile">Bank A/C Number/ बैंक खाता संख्या</label><br />
                        <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " />
                    </div>

                    <button className="btn btn-md btn-success my-5">REGISTER</button>

                </form>

            </div>



        </>
    )
}

export default Signup;
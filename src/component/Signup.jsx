import { useState } from "react";

const Signup = () => {
    const [data, setData] = useState({
        domicile: "",
        name: "",
        category: "",
        DOB: "",
        schemeType: "",
        mobile: 0,
        gender: "",
        email: "",
        IFSC: "",
        account: 0,
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleClick = async () => {
        console.log(data)
        const response = await fetch('http://localhost:8080/demo' , {
            method:'POST',
            body:JSON.stringify(data),
            headers: {
                'content-Type' : 'application/json'
            }
            
        })
        const result = await response.json(); 
        console.log(result)
    }


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

                    {/* STATE OF DOMICILE */}

                    <div className="formelements1">
                        <label className="labelelement1 mx-2 my-2 text-center" htmlFor="State of Domicile">State of Domicile/ अधिवासित राज्य</label><br />
                        <select name="domicile" onChange={(e) => { handleChange(e) }} id="dropdown1">
                            <option name="domicile" value="select">Select a State</option>
                            <option name="domicile" value="Madhya Pradesh">Madhya Pradesh</option>
                            <option name="domicile" value="Uttar Pradesh">Uttar Pradesh</option>
                            <option name="domicile" value="Bihar">Bihar</option>
                            <option name="domicile" value="Rajasthan">Rajasthan</option>
                            <option name="domicile" value="Maharashtra">Maharashtra</option>
                            <option name="domicile" value="Delhi">Delhi</option>
                        </select>

                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  "/> */}
                    </div>

                     {/* NAME OF STUDENT */}

                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="name">Name of Student/ अभ्यर्थी का नाम</label><br />


                        <input type="text" size="40" value={data.name} onChange={(e) => { handleChange(e) }} name="name" className="stateOfDomicile  mx-2 my-1  " />
                    </div>

                     {/* CATEGORY */}

                    <div className="formelements1 " id="scheme">
                        <label className="labelelement1 mx-5 my-2 " htmlFor="category">Scholarship Category/ छात्रवृत्ति श्रेणी</label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="category" onChange={(e) => { handleChange(e) }} id="dropdown1">
                            <option name="category" value="select">Select your category</option>
                            <option name="category" value="SC / ST">SC / ST</option>
                            <option name="category" value="OBC">OBC</option>
                            <option name="category" value="EWS">EWS</option>
                        </select>
                    </div>

                     {/* DOB */}
                     
                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="DOB">Date of Birth (DD/MM/YYYY)/ जन्म तिथि</label><br />
                        <input type="text" size="40" value={data.DOB} onChange={(e) => { handleChange(e) }} name="DOB" className="stateOfDomicile  mx-2 my-1  " />

                    </div>

                     {/* SCHEME TYPE */}

                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="scheme type">Scheme Type/ योजना का प्रकार</label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="schemeType" onChange={(e) => { handleChange(e) }} id="dropdown1">
                            <option name="schemeType" value="select">Select a Scheme</option>
                            <option name="schemeType" value="Medhavi">Medhavi</option>
                            <option name="schemeType" value="For SC/ST">For SC/ST</option>
                            <option name="schemeType" value="OBC">For OBC</option>
                        </select>
                    </div>

                     {/* MOBILE NUMBER */}

                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="mobile">Mobile Number/ मोबाइल नंबर</label><br />
                        <input type="text" size="40" value={data.mobile} onChange={(e) => { handleChange(e) }} name="mobile" className="stateOfDomicile  mx-2 my-1  " />

                    </div>

                     {/* GENDER */}

                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="gender">Gender/ लिंग </label><br />
                        {/* <input type="text" size="40" className="stateOfDomicile  mx-2 my-1  " /> */}
                        <select name="gender" onChange={(e) => { handleChange(e) }} id="dropdown1">
                            <option name="gender" value="select">Select your Gender</option>
                            <option name="gender" value="Male">Male</option>
                            <option name="gender" value="Female">Female</option>
                            <option name="gender" value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>

                     {/* EMAIL */}

                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="email">Email Id/ ईमेल आईडी</label><br />
                        <input type="text" size="40" value={data.email} onChange={(e) => { handleChange(e) }} name="email" className="stateOfDomicile  mx-2 my-1  " />
                    </div>

                    {/* IFSC */}

                    <div className="formelements1 ">
                        <label className="labelelement1 mx-2 my-2 " htmlFor="IFSC code"> Bank IFSC Code/ बैंक आई. एफ. एस. सी.</label><br />
                        <input type="text" size="40" value={data.IFSC} onChange={(e) => { handleChange(e) }} name="IFSC" className="stateOfDomicile  mx-2 my-1  " />
                    </div>

                    {/* ACCOUNT NUMBER */}

                    <div className="formelements2 mx-5">
                        <label className="labelelement2 mx-2 my-2 " htmlFor="account">Bank A/C Number/ बैंक खाता संख्या</label><br />
                        <input type="text" size="40" value={data.account} onChange={(e) => { handleChange(e) }} name="account" className="stateOfDomicile  mx-2 my-1  " />
                    </div>

                    <button className="btn btn-md btn-success my-5" onClick={() => {handleClick()}}>REGISTER</button>

                </form>

            </div>



        </>
    )
}

export default Signup;
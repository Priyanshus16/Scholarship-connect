import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [data ,setdata] = useState({
        applicationId:"",
        password:"",
    })
    const handleChange=(e)=>{
        const {value,name} = e.target;
        (setdata({...data,[name]:value}));
    }


    const validateButton = () => {
        if (data.password !== "" && data.applicationId !== "") {
            alert("login successful");
            navigate('/Home')
        }
        else {
            alert("login unsuccessful");
        }
    }


    return (
        <>  

        {/*        HEADER         */}

        <div className="header">
                <div className="mx-3 my-2">
                    <img className="logox mx-5" src="https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india-1.jpg"
                        alt="indian Government log"></img>
                </div>
                {/* heading */}

                <div className="right-align">
                    <h2><b>Scholar Connect</b></h2>
                    <p> Ministry Of Electronics & Information Technology,
                        Government of India
                    </p>
                </div>
                <img className="logo2"
                src="https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Digital_India_logo.svg/1200px-Digital_India_logo.svg.png"
                alt="logo"/>
            </div>


         <section className="formx vh-100 gradient-custom ">    
            <div className="container py-5  ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12">
                        <div className="card bg-dark text-white"  >
                            <div className="card-body p-5 text-center h-1" style={{height:'50%'}}>

                                <div className="mb-md-5 mt-md-4 pb-5">

                                    <h2 className="fw-bold mb-2 text-uppercase">Login for Fresh Application</h2>
                                    <p className="text-white-50 mb-5">Please provide your Application and password!</p>

                                    <div className="form-outline form-white mb-4">

                                        <label className="form-label" >Application Id. . .</label><br></br>
                                        <input value={data.applicationId} onChange={(e)=>handleChange(e)} type="text" name="applicationId" className="form-control form-control-lg" style={{width:'60%',marginLeft:'20%'}} />
                                    </div>

                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="typePasswordX">Password</label>
                                        <input value={data.password} onChange={(e)=>handleChange(e)} name="password" type="password" id="typePasswordX" className="form-control form-control-lg" style={{width:'60%',marginLeft:'20%'}} />

                                    </div>

                                    <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                    <button onClick={() => {
                                        validateButton();

                                    }} className="btn btn-outline-light btn-lg px-5" style={{marginLeft:'100px'}}  type="submit">Login</button> 

                                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                        <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                        <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                                    </div>

                                </div>

                                <div>
                                    <p className="mb-0">New Student? <Link to ="/Signup">Register Here</Link>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>

    )
}

export default Login;
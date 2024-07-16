import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()

    function savedata(data) {
        axios.post("http://localhost:8080/student", data)
        alert("data added")
        navigate("/show")
        reset()
    }
    return (
        <>
            <form onSubmit={handleSubmit(savedata)}>
                <section className="h-100 bg-info bg-gradient ">
                    <div className="container h-100 ">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div className="card card-registration my-4 mb-0 mt-3">
                                    <div className="row g-0 mb-0 bg-info">

                                        <div className="col-xl-6 mb-0 bg-secondary bg-gradient">
                                            <div className="card-body  text-black">
                                                <h3 className="mb-3 text-uppercase">Student</h3>


                                                <div className="row">
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('name')} />
                                                            <label className="form-label" for="form3Example1m">Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('lastname')} />
                                                            <label className="form-label" for="form3Example1n">Last name</label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="row">
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="email" id="form3Example1m1" className="form-control form-control-lg" {...register('email')} />
                                                            <label className="form-label" for="form3Example1m1">Enter Email</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-3">
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example1n1" className="form-control form-control-lg" {...register('role')} />
                                                            <label className="form-label" for="form3Example1n1">Employee Role</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <div className="form-outline">
                                                            <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('contact')} />
                                                            <label className="form-label" for="form3Example8">Contact No</label>
                                                        </div>
                                                    </div>
                                                    <div className='col-6'>
                                                        <div className="d-md-flex justify-content-start align-items-center mb-1 py-2">


                                                            <h6 className="mb-0 me-4">Gender: </h6>


                                                            <div className="form-check form-check-inline mb-0 me-4">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                                    value="female" {...register('gender')} />
                                                                <label className="form-check-label" for="femaleGender">Female</label>
                                                            </div>


                                                            <div className="form-check form-check-inline mb-0 me-4">
                                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                                    value="male" {...register('gender')} />
                                                                <label className="form-check-label" for="maleGender">Male</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center pt-1 row">
                                                    <div className='col-6 r'>
                                                        <input type="reset" value="RESET ALL" className="btn btn-danger btn-lg " />
                                                    </div>
                                                    <div className='col-6 '>
                                                        <button type="submit" className="btn btn-warning btn-lg ms-2 ">Submit form</button>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        </>
    )
}
export default Home;
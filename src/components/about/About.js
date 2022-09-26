import React from 'react';
import Slider from '../common/slider/Slider';
import doctorList from '../../data/about.json';

const About = () => {
    return (
        <div>
            <div>
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
                                    <h1 className="display-4">Best Health Care For Yourself and Your Family</h1>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                <div className="row g-3 pt-3">
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-user-md text-primary mb-3" />
                                            <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-procedures text-primary mb-3" />
                                            <h6 className="mb-0">Emergency<small className="d-block text-primary">Services</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-microscope text-primary mb-3" />
                                            <h6 className="mb-0">Accurate<small className="d-block text-primary">Testing</small></h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-6">
                                        <div className="bg-light text-center rounded-circle py-4">
                                            <i className="fa fa-3x fa-ambulance text-primary mb-3" />
                                            <h6 className="mb-0">Free<small className="d-block text-primary">Ambulance</small></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-primary my-5 py-5">
                    <div className="container py-5">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                            <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">Find A Doctor</h5>
                            <h1 className="display-4 mb-4">Search A Healthcare Professionals</h1>
                            <h5 className="text-white fw-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</h5>
                        </div>
                        <div className="mx-auto" style={{ width: '100%', maxWidth: 600 }}>
                            <div className="input-group">
                                <select className="form-select border-primary w-25" style={{ height: 60 }}>
                                    <option selected>Department</option>
                                    <option value={1}>Department 1</option>
                                    <option value={2}>Department 2</option>
                                    <option value={3}>Department 3</option>
                                </select>
                                <input type="text" className="form-control border-primary w-50" placeholder="Keyword" />
                                <button className="btn btn-dark border-0 w-25">Search</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Doctors</h5>
                            <h1 className="display-4">Qualified Healthcare Professionals</h1>
                        </div>
                        <Slider data={doctorList}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
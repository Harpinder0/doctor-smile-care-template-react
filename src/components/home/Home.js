import React from 'react';
import Card from '../common/card/Card'
import servicesList from '../../data/service.json';

const Home = () => {
    return (
        <div>
            {/* About Start */}
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
            {/* About End */}
            {/* Services Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Services</h5>
                        <h1 className="display-4">Excellent Medical Services</h1>
                    </div>
                    <div className="row g-5">
                    {
                        servicesList.map((service)=> 
                            <Card data={service} />
                        )
                    }
                </div>
                </div>
            </div>
            {/* Services End */}
        </div>
    )
}

export default Home
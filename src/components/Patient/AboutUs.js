import React from 'react'
import '../css/AboutUs.css'

function AboutUs() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                        <div class="row align-items-center">
                            <div class="col-lg-6 col-md-6 col-6">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="./images/night-view.jpg" class="img-fluid" alt="Image" />
                                            <div class="img-overlay bg-dark"></div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="mt-4 pt-2 text-right">
                                            <a href="javascript:void(0)" class="btn btn-primary">Read More <i class="mdi mdi-chevron-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-6">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="./images/hospital.jpg" class="img-fluid" alt="Image" />
                                            <div class="img-overlay bg-dark"></div>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12 mt-4 pt-2">
                                        <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                            <img src="./images/night-view.jpg" class="img-fluid" alt="Image" />
                                            <div class="img-overlay bg-dark"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                        <div class="section-title ml-lg-5">
                            <h5 class="text-custom font-weight-normal mb-3">About Us</h5>
                            <h4 class="title mb-4">
                            For health and well-being across the lifespan
                            <br />    
                            </h4>
                            <p class="text-muted mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?
                            </p>

                            <div class="row">
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-play h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Best Facilities</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-hospital h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Best Infrastructure</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-medkit h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Support</a></h6>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4 pt-2">
                                    <div class="media align-items-center rounded shadow p-3">
                                        <i class="fa fa-user-md  h4 mb-0 text-custom"></i>
                                        <h6 class="ml-3 mb-0"><a href="javascript:void(0)" class="text-dark">Care</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;

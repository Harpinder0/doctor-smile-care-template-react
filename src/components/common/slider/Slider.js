import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const Slider = ({ data }) => {
  return (
    <Carousel variant="dark">
      {
        data.map((item) => {
          return (
            <Carousel.Item>
              <div className="d-flex justify-content-center gap-4 w-100">
                {
                  item.map((doctor) => {
                    return (
                      <div className="team-item">
                        <div className="row g-0 bg-light rounded overflow-hidden">
                          <div className="col-12 col-sm-5 h-100">
                            <img className="img-fluid h-100" src="img/team-3.jpg" style={{ objectFit: 'cover' }} />
                          </div>
                          <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                            <div className="mt-auto p-4">
                              <h3>{doctor.doctor_name}</h3>
                              <h6 className="fw-normal fst-italic text-primary mb-4">{doctor.doctor_position}</h6>
                              <p className="m-0">{doctor.description}</p>
                            </div>
                            <div className="d-flex mt-auto border-top p-4">
                              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href={doctor.social_link.twitter}><i className="fab fa-twitter" /></a>
                              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href={doctor.social_link.facebook}><i className="fab fa-facebook-f" /></a>
                              <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href={doctor.social_link.linkedin}><i className="fab fa-linkedin-in" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }


              </div>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  );
}

export default Slider;
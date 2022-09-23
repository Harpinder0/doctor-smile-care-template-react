import React from 'react';

const Card = ({data}) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div className="service-icon mb-4">
                    <i className={data.iconName} />
                </div>
                <h4 className="mb-3">{data.heading}</h4>
                <p className="m-0">{data.about}</p>
                <a className="btn btn-lg btn-primary rounded-pill" href>
                    <i className="bi bi-arrow-right" />
                </a>
            </div>
        </div>
    )
}

export default Card;
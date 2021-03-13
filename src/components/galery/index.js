import React, { useState } from 'react';

import './galery.css';

// images static 
import galery from './images';

export default function Galery() {

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(null);

    const detail = (open, image) => {
        if (open) {
            setOpen(false);
            setImage(null);
        } else {
            setOpen(true);
            setImage(image);
        }
    }

    return (
        <section id="galery">
            <div className="container">
                <div className="box-galery">
                    <div className="title">
                        <h1 className="text-primary text-uppercase fs-1 fw-bold">galery</h1>
                    </div>
                    <div className="box-images">
                        {
                            galery.map((item, key) => {
                                return (
                                    <div
                                        onClick={() => detail(open, item.image)}
                                        key={key}
                                        className="img">
                                        <img src={item.image} alt="foto-1" className="rounded shadow-sm" />
                                        <div className="caption fs-1 fw-bold text-uppercase text-white">{item.caption}</div>
                                    </div>
                                )
                            })
                        }
                        {open && <div className="detail">
                            <div className="detail-box-img">
                                <div onClick={() => detail(open, null)}>
                                    <i className="bi bi-x-circle-fill fs-1 fw-bold text-danger close"></i>
                                </div>
                                <img src={image} alt="detail-foto" className="detail-image" />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}
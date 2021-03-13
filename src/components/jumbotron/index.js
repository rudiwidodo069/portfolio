import React from 'react';

import './jumbotron.css';

// images
import profile from '../../assets/images/profile.png';

export default function Jumbotron() {
    return (
        <section id="home">
            <div className="jumbotron position-relative" id="#home">
                <div className="row p-4 m-0 h-100">
                    <div className="col-lg jumb-left d-flex justify-content-center text-uppercase flex-column align-items-center fw-bold">
                        <h1>hallo saya rudi widodo</h1>
                        <h3>mahasiswa</h3>
                    </div>
                    <div className="col-lg jumb-right d-flex justify-content-center align-items-center">
                        <div className="box-profile">
                            <img src={profile} className="img-thumbnail" alt="Rudi Widodo" />
                            <ul className="fs-3 bg-white d-flex justify-content-between align-items-center icons p-2 mt-2 shadow">
                                <li className="mx-2">
                                    <a href="https://www.instagram.com/rudhi_wid098/">
                                        <i className="bi bi-instagram icon-instagram"></i>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://web.facebook.com/ruditjah.ploskulcomunity/">
                                        <i className="bi bi-facebook icon-facebook"></i>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://github.com/rudiwidodo069">
                                        <i className="bi bi-github icon-github"></i>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="https://wa.me/085718813840">
                                        <i className="bi bi-whatsapp icon-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <svg className="position-absolute bottom-0 waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0d6efd" fillOpacity="1" d="M0,0L60,10.7C120,21,240,43,360,90.7C480,139,600,213,720,213.3C840,213,960,139,1080,112C1200,85,1320,107,1380,117.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    )
}
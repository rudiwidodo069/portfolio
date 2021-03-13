import './hobby.css';

export default function Hobby() {
    return (
        <section id="hobby" className="bg-primary">
            <div className="container">
                <div className="box-hobby">
                    <div className=" title">
                        <h1 className="fw-bold text-uppercase text-white fs-1">Hobby</h1>
                    </div>
                    <div className="row">
                        <div className="col-md d-flex justify-content-center">
                            <div className="box-col bg-white p-5 d-flex align-items-center flex-column rounded">
                                <div className="box-icon bg-primary d-flex justify-content-center align-items-center">
                                    <i className="bi bi-music-note-beamed fs-1 fw-bold text-white"></i>
                                </div>
                                <div className="p-4 m-2 text-center box-text">
                                    <h3>music</h3>
                                    <div className="text-center">
                                        <p>mencari ketenangan dengan bermain atau mendengarkan musik sejenak untuk bersantai.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md p-2 d-flex justify-content-center">
                            <div className="box-col bg-white p-5 d-flex align-items-center flex-column rounded">
                                <div className="box-icon bg-primary d-flex justify-content-center align-items-center">
                                    <i className="bi bi-controller fs-1 fw-bold text-white"></i>
                                </div>
                                <div className="p-4 m-2 text-center box-text">
                                    <h3>game</h3>
                                    <div className="text-center">
                                        <p>melepas kan penat dengan bermain game sendiri atau dengan teman - teman.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md p-2 d-flex justify-content-center">
                            <div className="box-col bg-white p-5 d-flex align-items-center flex-column rounded">
                                <div className="box-icon bg-primary d-flex justify-content-center align-items-center">
                                    <i className="bi bi-camera-fill fs-1 fw-bold text-white"></i>
                                </div>
                                <div className="p-4 m-2 text-center box-text">
                                    <h3>fotografi</h3>
                                    <div className="text-center">
                                        <p>meluangkan waktu unutuk treveling memanjakan diri.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
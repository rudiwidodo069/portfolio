import './project.css';
import project from './project.components';

export default function Project() {
    return (
        <section id="project">
            <div className="box-project bg-primary mt-2">
                <div className="container">
                    <h1 className="fs-1 fw-bold text-white text-uppercase title">project</h1>
                    <div className="row">
                        {
                            project.map(items => {
                                return (
                                    <div
                                        key={items.id}
                                        className="col-6 p-2">
                                        <a href={items.link} className="link" target={items.target}>
                                            <div className="card bg-dark">
                                                <div className="card-header">
                                                    <div className="card-title text-center text-uppercase fw-bold fs-4 text-white">{items.title}</div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="card-img">
                                                        <img src={items.project} alt="project-01" className="img-project" />
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <p className="text-muted fw-bold fs-5">
                                                        {items.caption}
                                                    </p>
                                                    <p className="text-muted fw-bold fs-5">** {items.note}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary fixed-top shadow">
            <div className="container-fluid mx-3">
                <a className="navbar-brand fw-bold fs-1 text-white text-uppercase" href="#home">portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase fs-4 fw-bold" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase fs-4 fw-bold" aria-current="page" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase fs-4 fw-bold" aria-current="page" href="#hobby">Hobby</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase fs-4 fw-bold" aria-current="page" href="#galery">Galery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white text-uppercase fs-4 fw-bold" aria-current="page" href="#project">Project</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
import './about.css';

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="about py-5 bg-dark-gray d-flex justify-content-center align-items-center">
                    <div className="box-about bg-primary shadow-lg p-5 rounded text-white">
                        <h1 className="text-center text-uppercase fw-bold fs-1 border-bottom py-2">About</h1>
                        <p>halo nama rudi widodo, asal dari solo jawa tengah. lahir pada tanggal 05-06-1998 di karanganyar. dan sekarang tinggal di jakarta bersama orang tua untuk melanjutkan pendidikan di salah satu peguruan tinggi swasta di jakarta.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
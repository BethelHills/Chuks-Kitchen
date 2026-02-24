import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function Account() {
  return (
    <div className="app">
      <Navbar active="home" />
      <main className="page">
        <section className="section">
          <h2 className="section-title">Account</h2>
          <div className="panel" style={{ maxWidth: 400, margin: "0 auto" }}>
            <label className="field">
              <span>Email</span>
              <input placeholder="name@gmail.com" readOnly />
            </label>
            <label className="field">
              <span>Phone</span>
              <input placeholder="+234..." readOnly />
            </label>
            <button className="btn btn-primary w100">Update Profile</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

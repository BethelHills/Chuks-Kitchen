import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function MyOrders() {
  return (
    <div className="app">
      <Navbar active="home" />
      <main className="page">
        <section className="section">
          <h2 className="section-title">My Orders</h2>
          <div className="panel" style={{ textAlign: "center", padding: "40px 20px" }}>
            <p className="muted">You haven't placed any orders yet.</p>
            <p className="muted" style={{ marginTop: 8 }}>Start exploring our menu to order your favorite Nigerian dishes!</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

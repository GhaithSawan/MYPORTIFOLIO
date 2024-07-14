import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './component/navbar/MyNavbar';
import Homepage from "./pages/Homepage/HomePage";
import ScalesPage from './pages/ScalesPage';
import ServicesPage from './pages/ServicesPage';
import Footer from './component/footer/Footer';

function App() {

  return (

    <div style={{ minHeight: "100vh" }}>
      <MyNavbar />
      <Homepage />
      <ScalesPage />
      <ServicesPage />
      <Footer />
    </div>

  )
}

export default App

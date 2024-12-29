import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import CarCategory from './pages/car-category/CarCategory';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';

// Add error boundary component
const ErrorBoundary = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="mb-4">Please try refreshing the page or navigate back home.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700">
        Return to Home
      </a>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<CarCategory />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} /> {/* Fixed capitalization */}
            <Route path="*" element={<ErrorBoundary />} /> {/* Catch-all route for 404s */}
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
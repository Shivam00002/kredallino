import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PricingPlans from './components/PricingPlans';
import FAQSection from './components/FAQSection';
import Testimonials from './components/Testimonials';
import SdFooter from './components/SdFooter';
import ContactForm from './components/ContactForm';
import CompanyShowcase from './components/CompanyShow';
import { ThemeProvider, useTheme } from "./context/ThemeContext";



const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen w-full md:px-2 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Navbar />
      <Dashboard />
      <CompanyShowcase />
      <PricingPlans />
      <FAQSection />
      <Testimonials />
      <ContactForm />
      <SdFooter />

    </div>
  );
};

const App = () => {
  return (

    <ThemeProvider>
      <AppContent />
    </ThemeProvider>

  );
};

export default App;
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import EventPage from './Pages/EventPage';
import MemberPage from './Pages/MemberPage';
import HelpPage from './Pages/HelpPage';
import GalleryPage from './Pages/GalleryPage';
import AdminPannel from './AdminPannel/AdminPannel';
import PageNotFound from './Pages/PageNotFound';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { useState } from 'react';
import './App.css'
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage/>;
      case 'about':
        return <AboutPage />;
      case 'events': 
        return <EventPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'members':
        return <MemberPage />;
      case 'help':
        return <HelpPage/>;
      case 'admin':
        return <AdminPannel />;
      case '404':
        return <PageNotFound/>;
      default:
        return <PageNotFound />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      <main className="min-h-screen">
        {renderPage()}
      </main>
      
      <Footer/>
    </div>
  )
}

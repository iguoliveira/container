import './App.css'
import Navbar from './components/navbar/Navbar'
import ChatSection from './components/chat-section/ChatSection';

function App() {
  return (
    <div className="section">
      <Navbar />
      <div className="chat-section">
        <ChatSection />
      </div>
    </div>
  );
}

export default App;
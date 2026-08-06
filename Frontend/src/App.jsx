
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCard from "./components/FeatureCard";
import Counter from "./components/Counter";
import InterviewSelector from "./components/InterviewSelector";

function App() {
  return (
    <>
    <Navbar />
     <Hero />
     <Counter />0
     <InterviewSelector />

     <FeatureCard 
     icon=""
     title="Technical Interviews"
     description="Practice HR Interview questions"
     />

    <FeatureCard 
     icon=""
     title="HR Interviews"
     description="Practice HR Interview questions"
     />

     <FeatureCard 
     icon=""
     title="Aptitude Test"
     description="Practice logical reasoning questions"
     />
     </>
  );
}

export default App;
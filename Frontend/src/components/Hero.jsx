import "./Hero.css";

function Hero() {
    function handleClick() {
  alert("Welcome to AI Interview Coach!");
}
    return(
        <div className="container">
            <h1 className="title"> 
                AI Interview Coach 
                 </h1>

            <p className="subtitle">
            Ace Your Next Interview with AI
             </p>

             <p className="description">
             Practice Technical ,HR Behavioural Interviews
                </p>

            <button 
            className="button"
            onClick={handleClick}
            >
                Start Interview
                </button>
        </div>
    );
    

}
export default Hero;
import "./FeatureCard.css";
function FeatureCard(props) {
    return(
        <div  className="card"> 
             <span className="icon">{props.icon}</span> 
                <h2>{props.title}</h2>
            <P> {props.description }</P>
           
        
        </div>
       
    );
}
export default FeatureCard;
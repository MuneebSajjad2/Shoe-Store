import { connect } from "react-redux";
import { useParams } from "react-router";
import Store from "../../Store/Store"
import Styles from "../../Components/About/About.module.css"


 function About ({dataReducer}){
     console.log(dataReducer);
let {shoeDetails} = useParams();
let obj = dataReducer.find(o => o.name === shoeDetails);
    return <div className={Styles.container}>
        <div className={Styles.card_container}>
        <h2>{obj.name}</h2>
        <img src={obj.src} />
        <h2>{obj.description}</h2>
        </div>
    </div>
}


let newAbout = connect((Store)=>{
    return Store
})(About)

export default newAbout;
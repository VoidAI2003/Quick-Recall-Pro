// import { useState } from "react";
import  PropTypes  from "prop-types";
function Entry(props){
//    const [name, setName] = useState("");

   return(<>
   
   <div className="form-floating">
      <input type={props.type} className="entry form-control" id={props.id} placeholder={props.placeholder}/>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
   </>);
}


Entry.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    id:PropTypes.string
}
Entry.defualtProps ={
    label: "LABEL",
    type: "text",
    placeholder: "Place Holder Text"
}
export default Entry
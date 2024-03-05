import  PropTypes  from "prop-types";
function Button(props) {
  return (
    <>
        <button className="btn" type="submit">{props.text}</button>
    </>
  )
}

Button.propTypes = {
  text : PropTypes.string
}


export default Button
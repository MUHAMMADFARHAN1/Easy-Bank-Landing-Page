let styling = {
  backgroundColor: "red",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
};

function Button(props) {
  return <button style={styling}>{props.text}</button>;
}

export default Button;

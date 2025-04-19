// let styling = {
//   backgroundColor: "red",
//   color: "white",
//   padding: "10px 20px",
//   border: "none",
//   borderRadius: "5px",
// };

// function Button(props) {
//   return <button style={styling}>{props.text}</button>;
// }

function Button(props) {
  return (
    <button className=" bg-green-600 pt-[5px] pb-[5px] pr-[15px] pl-[15px] rounded-[50px]">
      {props.text}
    </button>
  );
}

export default Button;

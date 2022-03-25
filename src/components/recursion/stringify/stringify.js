const stringify = (props) => {
  console.log(props.data);
  if (props.next) {
    return stringify(props.next);
  } else {
    return null;
  }
};

export default stringify;

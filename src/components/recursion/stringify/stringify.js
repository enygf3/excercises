export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const stringify = (props) => {
  console.log(props.data);
  if (props.next) {
    return stringify(props.next);
  } else {
    return null;
  }
};

export default stringify;

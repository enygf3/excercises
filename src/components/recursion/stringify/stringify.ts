export class Node {
  data: number;
  next: any;
  constructor(data: number, next: any = null) {
    this.data = data;
    this.next = next;
  }
}

const stringify = (props: any): any => {
  console.log(props.data);
  if (props.next) {
    return stringify(props.next);
  } else {
    return null;
  }
};

export default stringify;

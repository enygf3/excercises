class Singleton {
  static instance: any;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    } else {
      return Singleton.instance;
    }
  }
}

export default Singleton;

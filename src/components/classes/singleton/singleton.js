class Singleton {
  static instance;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    } else {
      return Singleton.instance;
    }
  }
}

export default Singleton;

interface Sub {
  addObserver: (ob: Observer) => void;
  removeObserver: (ob: Observer) => void;
  clear: () => void;
  notify: () => void;
}

interface ObFun {
  update: () => void;
}

class Observer implements ObFun {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update() {
    console.log(`${this.name}该起床了`);
  }
}

class Subject implements Sub {
  subs: Observer[] = [];
  addObserver(ob: Observer) {
    if (!this.subs.includes(ob)) {
      this.subs.push(ob);
    }
  }
  removeObserver(ob: Observer) {
    const obIndex = this.subs.findIndex((o) => o === ob);
    if (obIndex !== -1) {
      this.subs.splice(obIndex, 1);
    }
  }
  clear() {
    this.subs = [];
  }
  notify() {
    this.subs.forEach((o: Observer) => {
      o.update();
    });
  }
}

const ob1 = new Observer('骚风');
const ob2 = new Observer('董洁');
const ob3 = new Observer('蓝胖子');

const subject = new Subject();
subject.addObserver(ob1);
subject.addObserver(ob2);
subject.addObserver(ob3);
subject.notify();

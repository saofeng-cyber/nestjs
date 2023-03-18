type EmitterHandler = (...args: any) => any;
interface Emitter {
  on(eventName: string, callback: EmitterHandler): void;
  emit(eventName: string, data: any): void;
  remove(eventName: string): void;
}
class EventEmitter implements Emitter {
  events = new Map<string, Array<EmitterHandler>>();
  on(eventName: string, callback: EmitterHandler): void {
    let e = this.events.get(eventName);
    if (!e) {
      this.events.set(eventName, (e = []));
    }
    e.push(callback);
  }
  emit(eventName: string, data: any): void {
    const e = this.events.get(eventName);
    if (e.length !== 0) {
      e.forEach((callback) => {
        callback(data);
      });
    }
  }
  remove(eventName: string): void {
    const e = this.events.has(eventName);
    if (e) {
      this.events.delete(eventName);
    }
  }
}

const center = new EventEmitter();
center.on('love', (data) => {
  console.log('data1', data);
});
center.on('love', (data) => {
  console.log('data2', data);
});
center.on('love', (data) => {
  console.log('data3', data);
});
center.emit('love', '风风想要了');

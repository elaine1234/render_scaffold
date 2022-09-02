import { interpolate } from 'd3-interpolate';
import SampleWorker from './sample.worker';

export default interpolate;

export function add(a: number, b: number) {
  const worker = new SampleWorker();
  worker.postMessage({ a: 1 });
  worker.onmessage = (event: any) => {
    console.log(event);
  };
  return a + b
}
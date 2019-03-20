import { WorkerMessage, WORKER_TOPIC } from '../worker-message.model';
import { CpuIntensiveWorker } from './cpu-intensive.worker';

export class AppWorkers {
    workerCtx: any;
    created: Date;
    constructor (workerCtx: any) {
        this.workerCtx = workerCtx;
        this.created = new Date();
    }
    workerBroker($event: MessageEvent): void {
        const { topic, data } = $event.data as WorkerMessage;
        const workerMessage = new WorkerMessage(topic, data);
        switch (topic) {
            case WORKER_TOPIC.cpuIntensive:
                this.returnWorkResults(CpuIntensiveWorker.doWork(workerMessage));
                break;
            default:  // Add support for other workers here
                console.error('Topic Does Not Match');
        }
    }
    private returnWorkResults(message: WorkerMessage): void {
        this.workerCtx.postMessage(message);
    }
}

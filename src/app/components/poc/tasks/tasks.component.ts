import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorkerService } from '../../providers/worker-service.service';
import { WorkerMessage, WORKER_TOPIC } from '../../../worker/worker-message.model';
import { Subscription } from 'rxjs';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  workerServiceSubscription: Subscription;
  closeResult: string;

  timerInstance = 30;
  constructor (private workerService: WorkerService, private modalService: NgbModal) {

  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    this.listenForWorkerResponse();
  }

  ngOnDestroy(): void {
    if (this.workerServiceSubscription) {
      this.workerServiceSubscription.unsubscribe();
    }
  }

  processInWorker() {
    const workerMessage = new WorkerMessage(WORKER_TOPIC.cpuIntensive, { duration: this.timerInstance * 100 });
    this.workerService.doWork(workerMessage);
  }

  private listenForWorkerResponse() {
    this.workerServiceSubscription = this.workerService.workerUpdate$
      .subscribe(data => this.workerResponseParser(data));
  }
  workerResponseParser(message: WorkerMessage): void {
    if (message.topic === WORKER_TOPIC.cpuIntensive) {
      console.log('done');
    }
  }

}

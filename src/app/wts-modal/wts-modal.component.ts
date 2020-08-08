import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbs-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Work Term Skills</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-body text-center">
      <div class="list-group">
        <div class="list-group-item  flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <h5>Interteam communication</h5>
            <small class="text-muted">Skill #1</small>
          </div>
          <p>Oftentimes, communication to and from other teams was needed due to the multifaceted nature of the product to make sure issues were escalated to the right people or to confirm whether an issue was a feature or a bug.</p>
          <small class="text-muted">The communication aspect was learned from class during collaborative projects, with tweaks coming from experience on the job to better adjust to company environment.</small>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <h5>Knowledge of the testing workflow</h5>
            <small class="text-muted">Skill #2</small>
          </div>
          <p>A large portion of the job focussed on testing a product; therefore knowledge of how to conduct tests properly by covering edge cases, making a note of input and output, etc. was essential.</p>
          <small class="text-muted">Like above, the theoretical portion of the skill came from learning about testing in class, with experience on the job in the form of detailed Jira test cases and feedback for teammates allowing the task to be streamlined.</small>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <h5>Written communication skills</h5>
            <small class="text-muted">Skill #3</small>
          </div>
          <p>The primary way to report an issue that comes up in testing is via a bug ticket in Jira: the devs rely on this ticket to solve the issue, so being concise and to the point in as much detail as possible when describing the issue and giving issue reproduction steps is important to make the job easier for everyone. Additionally, direct communication is often required with the client to clarify issues or to report testing results, making a professional tone a necessity on the job.</p>
          <small class="text-muted">As I had never written a bug report before starting this job, the bug report portion was definitely learned on the job, while the professional communication aspect came from life experience through interacting with other people.</small>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close()">Close</button>
    </div>
  `
})

export class NgbsModalContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbs-wts-modal',
  templateUrl: './wts-modal.component.html'
})
export class WtsModalComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalOptions: NgbModalOptions = { size: 'xl' };
    const modalRef = this.modalService.open(NgbsModalContent, modalOptions);
  }
}
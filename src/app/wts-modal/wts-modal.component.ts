import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbs-modal-content',
  template: `
    <div class="modal-header">
      <p class="modal-title title">Work Term Skills</p>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-body text-center">
      <div class="list-group">
        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Being to work independently efficiently</p>
            <small class="text-muted">Skill #1</small>
          </div>
          <p class="content">Because I was given control over the automation feature, it was expected that I would complete most of the work associated with it, with other developers focussing on the client facing changes to the product. As such, while there was some team coding involved, most of the work involved knowing how to work alone efficiently and searching for help alone.</p>
          <p class="text-muted outcome">Both the working alone efficiently and looking for help aspects of the skill came from previous experience, mainly with large project related courses such as CIS*2750, although a portion of it also comes from previous co-op experience.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Knowledge of the source control workflow</p>
            <small class="text-muted">Skill #2</small>
          </div>
          <p class="content">The everyday of the job consisted of taking automation related tasks off the ready pile, completing the task, and then merging the completed work back into the develop branch in source control. As such, it was essential to learn how to write commit messages and pull request descriptions.</p>
          <p class="text-muted outcome">Having written detailed commit messages and pull request descriptions before as part of another co-op placement, this skill consisted of adapting what I had previously learned and making it work with the new source control platform.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Presentation skills</p>
            <small class="text-muted">Skill #3</small>
          </div>
          <p class="content">Since the automation feature was a rather new thing, I was tasked with demoing the associated work a few times for different audiences, ranging from the partners with related work experience to senior leadership at Rocket Innovation Studio.</p>
          <p class="text-muted outcome">I had done demos before as part of the Software Design II course and at another co-op placement, so this skill consisted of applying what I had learned and experienced before with new contextual info that I had on the job to improve the demos as much as possible.</p>
        </div>
      </div>
    </div>
    
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close()">Close</button>
    </div>
  `,
  styleUrls: ['./wts-modal.component.css']
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
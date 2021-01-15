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
            <p class="skill">Intrateam communication</p>
            <small class="text-muted">Skill #1</small>
          </div>
          <p class="content">Communication within the team was often needed to clarify the nature of a bug or feature and was also needed when conducting solution reviews to make sure everyone was on the same page.</p>
          <p class="text-muted outcome">The communication aspect was learned from class during collaborative projects, with tweaks coming from experience on the job to better adjust to company environment (tone, order, etc.). It also came from experience from interacting with people outside the job in everyday life.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Knowledge of the development workflow</p>
            <small class="text-muted">Skill #2</small>
          </div>
          <p class="content">The everyday of the job consisted of taking tasks off the ready pile, completing the task, and then merging the completed work back into the master branch in source control. As such, it was essential to learn how to write commit messages and pull request descriptions.</p>
          <p class="text-muted outcome">While I have written commit messages before, this job was the first time I had to follow a strict guideline for them. That combined with the fact that I had never used pull requests in source control before meant that this skill was definitely learned on the job.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Presentation skills</p>
            <small class="text-muted">Skill #3</small>
          </div>
          <p class="content">The company has a monthly internal demo to introduce new features of the product to employees. Since I worked on a new feature, I was given the opportunity to take the wheel and demo the feature I coded.</p>
          <p class="text-muted outcome">I had done a demo before as part of the Software Design II course, so this skill consisted applying what I had learned and experienced before with new contextual info I had on the job to improve the demo as much as possible.</p>
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
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
            <p class="skill">Being able to work independently efficiently, seeking help as required</p>
            <small class="text-muted">Skill #1</small>
          </div>
          <p class="content">As is typical of a software developer position, it was expected that I could complete the taks I was assigned independently, especially if they were small in size. As such, while there was some team coding involved (mostly if I was assigned a large task using technologies I was not familiar with), most of the work involved knowing how to work alone efficiently and searching for help alone.</p>
          <p class="text-muted outcome">Both the working alone efficiently and looking for help aspects of the skill came from previous experience, mainly with large project related courses such as CIS*2750, although a portion of it also comes from previous co-op experience.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Being able to pick up new skills quickly</p>
            <small class="text-muted">Skill #2</small>
          </div>
          <p class="content">The technology stack used at work included a plethora of new technologies I had not been previously exposed to, so it was a requirement to fill in any gaps for things I was not familiar with quickly lest I would be left behind once the work started piling up.</p>
          <p class="text-muted outcome">Having had to learn new technologies like new programming languages both at school (for example, Perl in Softwarre Design II) and at work, this skill consisted of applying strategies previously learned to speed up the process of learning the new technologies that I was required to use while on the job.</p>
        </div>

        <div class="list-group-item flex-column align-items-start">
          <div class="d-flex justify-content-between">
            <p class="skill">Meeting hosting skills</p>
            <small class="text-muted">Skill #3</small>
          </div>
          <p class="content">There were several occasions where I had to lead team meetings due to team member unavailability. These meetings were generally limited to be intra-team, meaning everyone was on the same page. They varied in range from being quick daily stand-ups to more complex iteration planning meetings.</p>
          <p class="text-muted outcome">Having previous lead meetings before both at school as part of group projects and at other co-op placements, this skil mostly consisted of applying my previous experiences to the current siuation to make the meetings as streamlined as they could be.</p>
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
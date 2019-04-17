import { Component, OnInit } from '@angular/core';
import { LinkList } from './link-list.model';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subject, Subscription, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';

function customStartWithValidator(control: AbstractControl): ValidationErrors {
  if (!control.value.match(/^123/)) {
    return { invalidCustom: true };
  }
}

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.scss']
})
export class LinkListComponent implements OnInit {
  links: LinkList[] = [];
  vmLinkForm: FormGroup;
  constructor (private fb: FormBuilder) { }
  private textChanged = new Subject<string>();
  private subscription = new Subscription();

  ngOnInit() {
    // this.vmLink = new FormGroup({
    //   title: new FormControl('Enter title', [Validators.required]),
    //   link: new FormControl('Enter link', [Validators.required, Validators.minLength(3)]),
    // });
    this.vmLinkForm = this.fb.group({
      'title': ['test', Validators.required],
      'link': ['', Validators.compose([Validators.required, customStartWithValidator])]
    });

    // this.vmLinkForm.controls['link'].valueChanges
    //   .subscribe((val) => {
    //     this.textChanged.next(val);
    //   });

    this.subscription = this.vmLinkForm.controls['link'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      mergeMap(searchValue => this.search(searchValue)))
      .subscribe(
        (values) => {
          console.log(values);
        }
      );
  }
  search(searchValue: string): Observable<string[]> {
    return of(['a', 'b', searchValue]);
  }

  addLink(): boolean {

    // this.links.push({ title: title.value, link: link.value });
    console.log(this.vmLinkForm.valid);
    return false;
  }

  linkSelected(event) {
    console.log(event);
  }
  isSelected(link: LinkList) {
    return link.title === 'a';
  }
}




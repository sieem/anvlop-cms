import { Directive, HostListener, ElementRef, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { SlugService } from '../services/slug.service';
import { ActivatedRoute } from '@angular/router';

@Directive({
  selector: '[anvlopSlug]'
})
export class SlugDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private ngControl: NgControl,
    private slugService: SlugService,
    private route: ActivatedRoute,
    ) { }
  @Input() anvlopSlug: string;

  @HostListener('input', ['$event']) onEvent($event) {
    if (this.anvlopSlug === 'output') {
      this.ngControl.control.setValue(this.slugService.toSlug(this.el.nativeElement.value));
      return;
    }

    this.route.params.subscribe((params) => {
      if (!params.id) {
        this.slugService.titleChanged.next(this.el.nativeElement.value);
      }
    });
  }

  ngOnInit(): void {
    if (this.anvlopSlug === 'output') {
      this.slugService.titleChanged.subscribe((title) => {
        if (!this.ngControl.control.touched) {
          this.ngControl.control.setValue(this.slugService.toSlug(title));
        }
      });
    }
  }
}

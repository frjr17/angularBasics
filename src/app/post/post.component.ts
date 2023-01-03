import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  OnChanges,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit,OnChanges,
AfterContentChecked,
AfterContentInit,
AfterViewInit,
AfterViewChecked,
DoCheck,OnDestroy {
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg);
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg);
  }

  ngOnChanges() {
    console.log('ngOnChanges() called');
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
  }

  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
  }

  ngAfterContentInit(): void {
     console.log('ngAfterContentInit() called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
  }
  
  ngAfterViewChecked(): void {
     console.log('ngAfterViewChecked() called');
    }
    ngOnDestroy(): void {
      console.log('ngOnDestroy() called');
      
  }
}

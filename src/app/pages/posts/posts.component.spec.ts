import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';



import { PostsComponent } from './posts.component';
import {routes} from './posts-routing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostsComponent, PostListComponent, PostViewComponent],
      imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

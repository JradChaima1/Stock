import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdFrsArticleComponent } from './detail-cmd-frs-article.component';

describe('DetailCmdFrsArticleComponent', () => {
  let component: DetailCmdFrsArticleComponent;
  let fixture: ComponentFixture<DetailCmdFrsArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailCmdFrsArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailCmdFrsArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

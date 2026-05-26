import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MyContainerComponent } from './my-container.component';

describe('MyContainerComponent', () => {
  let component: MyContainerComponent;
  let fixture: ComponentFixture<MyContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 9 image blocks', () => {
    expect(component.collections.length).toBe(9);
  });

  it('should have a dummy block at the end initially', () => {
    expect(component.collections[8].isDummy).toBe(true);
  });
});

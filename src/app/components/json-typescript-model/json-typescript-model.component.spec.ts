import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonTypescriptModelComponent } from './json-typescript-model.component';

describe('JsonTypescriptModelComponent', () => {
  let component: JsonTypescriptModelComponent;
  let fixture: ComponentFixture<JsonTypescriptModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonTypescriptModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonTypescriptModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

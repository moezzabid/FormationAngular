import { TestBed } from '@angular/core/testing';

import { DetailProductGuard } from './detail-product.guard';

describe('DetailProductGuard', () => {
  let guard: DetailProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DetailProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

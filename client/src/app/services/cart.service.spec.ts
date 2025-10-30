import { TestBed } from '@angular/core/testing';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ NzNotificationModule ]
    });
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

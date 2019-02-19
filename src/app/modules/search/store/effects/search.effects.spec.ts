import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SearchEffects } from './search.effects';

describe('SearchEffects', () => {
  let actions$: Observable<any>;
  let effects: SearchEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(SearchEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

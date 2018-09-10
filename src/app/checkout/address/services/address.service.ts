import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Address } from '../../../core/models/address';
import { map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from '../../../interfaces';
import { Order } from '../../../core/models/order';
import { CheckoutActions } from '../../actions/checkout.actions';
import { User } from '../../../core/models/user';

@Injectable()
export class AddressService {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toastrService: ToastrService
  ) { }

  initAddressForm() {
    return this.fb.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'address_line_1': ['', Validators.required],
      'address_line_2': ['', Validators.required],
      'city': ['', Validators.required],
      'phone': ['', Validators.required],
      'zip_code': ['', Validators.required],
      'state_name': ['', Validators.required],
      'country_name': ['', Validators.required]
    });
  }

  initEmailForm() {
    return this.fb.group({
      email: ['', Validators.required]
    });
  }

  createAddresAttributes(address) {
    return {
      order: {
        bill_address_attributes: address,
        ship_address_attributes: address
      }
    };
  }

  createGuestAddressAttributes(address, email) {
    return {
      order: {
        email: email,
        bill_address_attributes: address,
        ship_address_attributes: address
      }
    };
  }

  saveUserAddress(address: Address): Observable<Address> {
    const user: User = JSON.parse(localStorage.getItem('user'))
    const params = this.buildAddressJson(address, user.id);
    return this.http.post<Address>(`api/v1/addresses`, params).pipe(
      map(resp => {
        return resp;
      }), tap(_ => { this.toastrService.success('Address added successfully!', 'Success!') },
        _ => { this.toastrService.error('Could not save address!', 'Failed!') }
      )
    )
  }

  bindAddressToOrder(address: Address, orderId: number): Observable<Order> {
    const params = this.buildSelectAddressJson(orderId, address);
    return this.http.post<Order>(`api/v1/orders/${orderId}/select_address/`, params).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  buildAddressJson(address: Address, userId: string) {
    const params = {
      'data':
      {
        'type': 'address',
        'attributes':
          address
        , 'relationships':
        {
          'user':
          {
            'data':
            {
              'id': userId
            }
          }
        }
      }
    };
    return params;
  }

  buildSelectAddressJson(orderId: number, shipAddress: Address) {
    const params = {
      data: {
        'id': orderId,
        'type': 'order',
        'attributes': {
          // for now billing address is addeded as shipping address. 
          'billing_address': shipAddress,
          'shipping_address': shipAddress
        }
      }
    }
    return params;
  }
}

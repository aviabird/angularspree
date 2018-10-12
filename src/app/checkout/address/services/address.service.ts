import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Address } from '../../../core/models/address';
import { map, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../../../core/models/order';
import { User } from '../../../core/models/user';
import { Country } from '../../../core/models/country';
import { CState } from '../../../core/models/state';

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
      'address_line_2': ['', Validators.required],
      'address_line_1': ['', Validators.compose([Validators.required, Validators.minLength(10)])],
      'city': ['', Validators.required],
      'phone': ['', Validators.compose([
        Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern('[0-9]{10}')])],
      'zip_code': ['', Validators.required],
      'state_id': ['', Validators.required],
      'country_id': ['', Validators.required]
    });
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

  deleteAddress(addressId: string) {
    return this.http.delete(`api/v1/addresses/${addressId}`).pipe(
      tap(_ => this.toastrService.success('Address deleted', 'Success!')))
  }

  getUserAddresses(): Observable<Array<Address>> {
    return this.http.get<Array<Address>>(`api/v1/addresses`)
  }

  getCountires(): Observable<Array<Country>> {
    return this.http.get<any>(`api/v1/countries`)
  }

  getAllStates(countryId: string): Observable<Array<CState>> {
    return this.http.get<Array<CState>>(`api/v1/countries/${countryId}/states`)
  }

  updateUserAddress(address: Address, addressId: string) {
    const params = this.buildUpdateAddressJson(address, addressId);
    return this.http.put<Address>(`api/v1/addresses/${addressId}`, params).pipe(
      tap(_ => this.toastrService.success('Address updated!', 'Success!'))
    )
  }

  private buildAddressJson(address: Address, userId: string) {
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

  private buildUpdateAddressJson(address: Address, addressId: string) {
    const params = {
      'data': {
        'type': 'address',
        'id': addressId,
        'attributes': address
      }
    }
    return params;
  }

  private buildSelectAddressJson(orderId: number, shipAddress: Address) {
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

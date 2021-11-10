import {Injectable} from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

interface Dato {
  id: string;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  dato :Dato;

  public baseUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(public httpClient: HttpClient) { 
      console.log('Esto funciona')
  }

  getDatos(){
      return this.httpClient.get(this.baseUrl);
  }

  getDatosUserId(id){
    let stringUrl = this.baseUrl + 'detalleId = ' +id;
    alert("--->"+stringUrl);
    return this.httpClient.get(stringUrl);
  }

  getDatosProfe(id):Observable<Dato>{
    let stringUrl = this.baseUrl + '/'+id;
    alert("--->"+stringUrl);
    return this.httpClient.get<Dato>(stringUrl);
  }
}


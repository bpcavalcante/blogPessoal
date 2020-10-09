import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) {
    return this.http.post('http://localhost:8080/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario){
    return this.http.post('http://localhost:8080/usuarios/cadastrar',usuario)
  }

  btnSair(){
    let ok = false;
    let token = environment.token;

    if(token != ''){
      ok = true;
    }

    return ok
  }

  btnLogin(){
    let ok = false;
    let token = environment.token

    if(token == ''){
      ok = true;
    }

    return ok
  }
}


import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Authservice } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(Authservice);
  const router = inject(Router);

  const token = authService.getToken();
  if (!token) {
    router.navigate(['/login']);
    return false;
  }
  try{
    //funcion para decodificar el token obtenido por el rol
  const payload =JSON.parse(atob(token.split('.')[1]));
  const userRole = payload.role;
  //verificar si el rol es admin para permitir acceso al dashboard
  const requiredRole = 'admin';
  if (userRole !== requiredRole){
    alert('No cuentas con los permisos necesarios para acceder a esta seccion.')
    router.navigate(['/login']);
    return false;
  }
  return true;
  }catch (e){
    router.navigate(['login']);
    return false;
  }  
};

export interface Roles {
    // Poner ? para que el campo pueda ser no requerido

    id?: number;
    tipoRol?: string;

}
export enum Role {
    usuario = 'usuario',
    admin = 'admin'
  }

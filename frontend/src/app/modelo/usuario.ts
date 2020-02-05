export interface Usuario {
    // Poner ? para que el campo pueda ser no requerido
    id?: number;
    email?: string;
    password?: string;
    telefono?: string;
    idRol?: number;
    user_session_token?: string;
}


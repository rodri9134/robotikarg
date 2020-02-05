export interface Articulo {
    // Poner ? para que el campo pueda ser no requerido

    id?: number;
    titulo?: string;
    descripcion?: string;
    referencia?: string;
    coste?: number;
    imagen?: string;
    categoria?: string;
    idTienda?: number;

}


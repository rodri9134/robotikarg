export interface Torneo {
    // Poner ? para que el campo pueda ser no requerido

    id?: number;
    nombre?: string;
    fecha?: Date;
    ubicacion?: string;
    latitud?: string;
    longitud?: string;
    costeEquipo?: number;
    idProvincia?: number;
    idRangoEdad?: number;
}


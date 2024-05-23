export interface Imagen {
  _id: string;
  imagePath: string;
  __v: number;
  url?: string;
}

export interface Event {
  _id: string;
  titulo: string;
  descripcion: string;
  contenido: string;
  fecha_acto: string;
  fecha_publicacion: Date;
  imagenPrincipal: string;
  imagenUrl?: string;
}

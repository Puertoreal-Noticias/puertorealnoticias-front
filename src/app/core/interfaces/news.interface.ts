export interface Imagen {
  _id: string;
  imagePath: string;
  __v: number;
  url?: string;
}

export interface ImagenUrl {
  url: string;
  id: string;
}

export interface News {
  _id: string;
  titulo: string;
  subtitulo?: string;
  contenido: string;
  categoria: string;
  destacado?: string;
  fecha_publicacion: Date;
  autor: string;
  imagenes: string[]; // Ahora 'imagenes' es un array de 'Imagen'
  __v: number;
  imagenPrincipal: string;
  imagenUrl?: string;
  imagenesUrl?: ImagenUrl[];
}
export interface AddNews {
  titulo: string;
  subtitulo?: string;
  contenido: string;
  autor: string;
  categoria: string;
  destacado?: string;
  imagen?: File | null; // Cambia 'string' a 'File | null'
}

export interface Categoria {
  id: number;
  categoria: string;
}

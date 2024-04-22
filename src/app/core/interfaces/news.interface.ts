export interface Imagen {
  _id: string;
  imagePath: string;
  __v: number;
  url?: string;
}

export interface News {
  _id: string;
  titulo: string;
  contenido: string;
  categoria: string;
  autor: string;
  imagenes: Imagen[]; // Ahora 'imagenes' es un array de 'Imagen'
  __v: number;
  imagenPrincipal: string;
  imagenUrl?: string;
}

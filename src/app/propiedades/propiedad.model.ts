export class Propiedad {
  public categoria: string;
  public subcategoria: string;
  public direccion: string;
  public precio: string;
  public descripcion: string;

  constructor(categoria: string, subcategoria: string, direccion: string, precio: string, descripcion: string) {
    this.categoria = categoria;
    this.subcategoria = subcategoria;
    this.direccion = direccion;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}

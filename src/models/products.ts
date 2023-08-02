export class Product {
    nombre: string;
    precio: number;
    stock: number;
    token:string;
    constructor(nombre: string, precio: number, stock: number, token:string) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
      this.token=token;
    }
  
    // Métodos adicionales de la clase, si es necesario
    // Por ejemplo, métodos para calcular el valor total o actualizar el stock.
  }
export class Producto {
    nombre: string;
    precio: number;
    stock: number;
  
    constructor(nombre: string, precio: number, stock: number) {
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
  
    // Métodos adicionales de la clase, si es necesario
    // Por ejemplo, métodos para calcular el valor total o actualizar el stock.
  }
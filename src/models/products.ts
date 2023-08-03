export class Product {
    Name: string;
    Price: number;
    Stock: number;
    Token:string;
    constructor(nombre: string, precio: number, stock: number, token:string) {
      this.Name = nombre;
      this.Price = precio;
      this.Stock = stock;
      this.Token=token;
    }
  
    // Métodos adicionales de la clase, si es necesario
    // Por ejemplo, métodos para calcular el valor total o actualizar el stock.
  }
// 9. Exporta una funcion, una constante y una clase desde una carpeta

export function multi(a, b) {
  return a * b;
}

export class Video {
  constructor(title, genero, descripcion) {
    this.title = title;
    this.genero = genero;
    this.descripcion = descripcion;
  }

  titulo() {
    return `El titulo del video es ${this.title}`;
  }
  gener() {
    return `El genero del video es de ${this.genero}`;
  }
  descrip() {
    return `Descripcion del video: ${this.descripcion}`;
  }
  bet() {
    console.log(`${this.titulo()}, ${this.gener()}, ${this.descrip()}`);
  }
}

let video = new Video(
  "Mi primer vlog",
  "Comedia",
  "Relata su vida en un video con emocion de ser su primer vlog"
);

video.bet();

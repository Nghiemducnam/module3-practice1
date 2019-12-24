export class Movie {
  public id: number;
  public name: string;
  public author: string;
  public link: string;


  constructor(id: number, name: string, author: string, link: string) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.link = link;
  }
}

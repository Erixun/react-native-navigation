class Category {
  constructor(id: string, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

interface Category {
  id: string;
  title: string;
  color: string;
}

export default Category;

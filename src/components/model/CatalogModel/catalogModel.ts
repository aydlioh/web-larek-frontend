import { IProduct, IProductAPI } from '../../../types';
import { ICatalogModel } from './catalogModel.types';

export class CatalogModel implements ICatalogModel {
  products: IProduct[];

  constructor(private api: IProductAPI) {}

  async load() {
    const { items } = await this.api.getProducts();
    this.products = items;
  }

  getAll() {
    return this.products;
  }

  getPreviewById(id: string) {
    return this.products.find((p) => p.id === id);
  }
}
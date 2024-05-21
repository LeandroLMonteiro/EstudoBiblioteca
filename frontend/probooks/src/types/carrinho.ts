export interface ItemDTO {
    isbn: string;
    quantity: number;
    total: number;
}

export interface ICarrinho {
      total: number;
      items: ItemDTO[];
}

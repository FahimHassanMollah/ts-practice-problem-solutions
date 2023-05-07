
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}


const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10.99, category: 'Category 1' },
    { id: 2, name: 'Product 2', price: 5.50, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 2.99, category: 'Category 1' },
    { id: 4, name: 'Product 4', price: 8.75, category: 'Category 3' },
    { id: 5, name: 'Product 5', price: 15.00, category: 'Category 2' }
];

function print<T extends Product, Y extends keyof T>(products: T[],type:Y,value:T[Y]): T[] {
    return products.filter(p => p[type] === value);
}

const res = print(products,'category','Category 1');
console.log(res);

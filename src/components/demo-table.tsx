import { withTableActions, withTableSorting, Table, TableProps, TableDataItem, Link, Button, Icon, } from "@gravity-ui/uikit";
import { ShoppingCart } from "@gravity-ui/icons"

export default function ExampleGravityTable() {
    const MyTable = withTableActions(withTableSorting(Table));
    const data = [
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
                "rate": 3.9,
                "count": 120
            },

        },
        {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, light weight & soft fabric for breathable and comfortable wearing.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            "rating": {
                "rate": 4.1,
                "count": 259
            },

        },
        {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "Great outerwear jackets for Spring/Autumn/Winter. Suitable for many occasions, like daily wear or work.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            "rating": {
                "rate": 4.7,
                "count": 500
            },

        },
        {
            "id": 4,
            "title": "Mens Casual Slim Fit",
            "price": 15.99,
            "description": "The color could be slightly different between on the screen and in practice.",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
            "rating": {
                "rate": 2.1,
                "count": 430
            },

        }
    ];

    const columns: TableProps<TableDataItem>['columns'] = [
        {
            id: "image", name: "Изображение", template: (item) => {
                return <img src={item.image} alt={item.title} width={80} height={80} style={{
                    objectFit: 'contain'
                }} />
            }
        },
        {
            id: 'title',
            name: "Наименование",
            meta: { sort: true },
            template: (item) => {
                return <Link href='#'>{item.title}</Link>
            }
        },
        {
            id: 'price',
            name: "Ваша цена",
            meta: { sort: true }
        },
        {
            id: 'rating.rate',
            name: "Рейтинг",
            meta: { sort: true }
        }
    ];

    const handlePurchase = (title: string) => {
        alert(title)
    }
    return <MyTable data={data} columns={columns} renderRowActions={({ item }) => {
        return <Button size='xl' onClick={() => handlePurchase(item.title)}><Icon data={ShoppingCart} /></Button>
    }} />
}
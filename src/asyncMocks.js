const products = [
    {
        id: 1,
        name: 'plato 1',
        price: 250,
        category: 'Colombiana',
        img: 'https://picsum.photos/650/650?random=',
        stock: 20,
        description: 'Plato 1 Colombiano, rico y delicioso'
    },
    {
        id: 2,
        name: 'plato 2',
        price: 300,
        category: 'Peruana',
        img: 'https://picsum.photos/650/650?random=',
        stock: 5,
        description: 'Plato 2 Peruano, rico y delicioso'
    },
    {
        id: 3,
        name: 'plato 3',
        price: 450,
        category: 'Colombiana',
        img: 'https://picsum.photos/650/650?random=',
        stock: 10,
        description: 'Plato 3 Colombiano, rico y delicioso'
    },
    {
        id: 4,
        name: 'plato 4',
        price: 120,
        category: 'Colombiana',
        img: 'https://picsum.photos/650/650?random=',
        stock: 8,
        description: 'Plato 4 Colombiano, rico y delicioso'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 3000);
    })
}
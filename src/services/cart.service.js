
export const cartService = {
    query,
    calcPrice,
}

function query() {

    return [{
        name: 'Smoked Pastrami',
        thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814202/Deli%20QR/meat/19_r3kg9m.png',
        type: 'meat',
        pricePerKg: 50,
        weight: 0.5
    },
    {
        name: 'Honey Mustard Turkey Brest',
        thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814204/Deli%20QR/meat/15_ds9lmn.png',
        type: 'meat',
        pricePerKg: 80,
        weight: 0.6
    },
    {
        name: 'Gorgonzola',
        thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854246/Deli%20QR/dairy/24_fmwezw.png',
        type: 'dairy',
        pricePerKg: 65,
        weight: 0.4
    },
    {
        name: 'Mozzarella',
        thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854245/Deli%20QR/dairy/22_ny1e4l.png',
        type: 'dairy',
        pricePerKg: 100,
        weight: 0.5
    }]
}

function calcPrice(cart = query()) {
    return cart.reduce((acc, item) => {
        return acc + (item.weight * item.pricePerKg)
        // return acc + (item.weight * (item.pricePerKg / 1000))
    }, 0)
}



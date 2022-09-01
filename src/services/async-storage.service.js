
export const storageService = {
    query,
    get,
    post,
    put,
    remove,
    postMany
}

function query(entityType, delay = 600) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    if (!entities.length) {
        entities = _createProducts()
        _save(entityType, entities)
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // reject('OOOOPs')
            resolve(entities)
        }, delay)
    })
    // return Promise.resolve(entities)
}


function get(entityType, entityId) {
    return query(entityType)
        .then(entities => entities.find(entity => entity._id === entityId))
}

function post(entityType, newEntity) {
    newEntity._id = _makeId()
    return query(entityType)
        .then(entities => {
            entities.push(newEntity)
            _save(entityType, entities)
            return newEntity
        })
}

function put(entityType, updatedEntity) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
            entities.splice(idx, 1, updatedEntity)
            _save(entityType, entities)
            return updatedEntity
        })
}

function remove(entityType, entityId) {
    return query(entityType)
        .then(entities => {
            const idx = entities.findIndex(entity => entity._id === entityId)
            entities.splice(idx, 1)
            _save(entityType, entities)
        })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function postMany(entityType, newEntities) {
    return query(entityType)
        .then(entities => {
            newEntities = newEntities.map(entity => ({ ...entity, _id: _makeId() }))
            entities.push(...newEntities)
            _save(entityType, entities)
            return entities
        })
}

function _createProducts() {
    return [
        {
            name: 'Baloney',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814202/Deli%20QR/meat/22_clvaeu.png',
            type: 'meat',
            pricePerKg: 88
        },
        {
            name: 'Smoked Pastrami',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814202/Deli%20QR/meat/19_r3kg9m.png',
            type: 'meat',
            pricePerKg: 50,
        },
        {
            name: 'Honey Mustard Turkey Brest',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814204/Deli%20QR/meat/15_ds9lmn.png',
            type: 'meat',
            pricePerKg: 80,
        },
        {
            name: 'Salami',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814204/Deli%20QR/meat/10_euylyo.png',
            type: 'meat',
            pricePerKg: 44
        },
        {
            name: 'German sausage',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814204/Deli%20QR/meat/11_sdhamk.png',
            type: 'meat',
            pricePerKg: 91
        },
        {
            name: 'Finocchiona Salami',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814203/Deli%20QR/meat/4_vlwocq.png',
            type: 'meat',
            pricePerKg: 60
        },
        {
            name: 'Pepperoni',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814203/Deli%20QR/meat/2_rs6wxn.png',
            type: 'meat',
            pricePerKg: 55
        },
        {
            name: 'Peppered Salame',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661814203/Deli%20QR/meat/1_qoqqtc.png',
            type: 'meat',
            pricePerKg: 55
        },
        {
            name: 'Blue Cheese',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854246/Deli%20QR/dairy/23_ch6fx9.png',
            type: 'dairy',
            pricePerKg: 33 
        },
        {
            name: 'Bocconcini',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854246/Deli%20QR/dairy/50_bguqzw.png',
            type: 'dairy',
            pricePerKg: 38
        },
        {
            name: 'Brie',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854246/Deli%20QR/dairy/24_fmwezw.png',
            type: 'dairy',
            pricePerKg: 40
        },
        {
            name: 'Burrata',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854245/Deli%20QR/dairy/22_ny1e4l.png',
            type: 'dairy',
            pricePerKg: 60
        },
        {
            name: 'Cheddar',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854246/Deli%20QR/dairy/26_tvszrj.png',
            type: 'dairy',
            pricePerKg: 65
        },
        {
            name: 'Colby',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854245/Deli%20QR/dairy/17_enf3ct.png',
            type: 'dairy',
            pricePerKg: 56
        },
        {
            name: 'Camembert',
            thumbnail: 'https://res.cloudinary.com/guy12/image/upload/v1661854245/Deli%20QR/dairy/16_fkhtsv.png',
            type: 'dairy',
            pricePerKg: 70
        },
    ]
}


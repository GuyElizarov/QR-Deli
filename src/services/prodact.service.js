
import {storageService} from './async-storage.service.js'

export const productService = {
    query,
    // getById,
    // save,
    // remove,
}

async function query(type) {
    const products = await storageService.query('products')
    return products.filter(p=>p.type===type)
}

// async function getById(boardId) {
//     return await storageService.get(`board/${boardId}`)
// }

// async function remove(boardId) {
//     return await storageService.delete(`board/${boardId}`)
// }

// async function save(board) {
//     var savedBoard
//     if (board._id) {
//         savedBoard = await storageService.put(`board/`, board)
//         // boardChannel.postMessage(getActionUpdateBoard(savedBoard))
//     } else {
//         savedBoard = await storageService.post(`board/`, board)
//         // boardChannel.postMessage(getActionAddBoard(savedBoard))
//     }
//     return savedBoard
// }
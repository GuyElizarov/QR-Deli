import { utilService } from "./util.service"


export const orderService = {
    login,
    getLoggedinUser
}

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

function login(credentials) {
    credentials.orderNum = utilService.makeId()

    _saveLocalUser(credentials)
    return new Promise((resolve, reject) => {
        resolve('success')
    })
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
}
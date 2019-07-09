export const objIsEmpty = (object) => {
    return Object.entries(object).length === 0 && object.constructor === Object
}

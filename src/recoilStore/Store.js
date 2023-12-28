import { atom, selector } from "recoil";

export const storeData = atom({
    key: 'data',
    default: []
})
export const storeColumns = atom({
    key: 'columns',
    default: []
})

export const storeURL = atom({
    key: 'url',
    default: 'https://theotesteng.000webhostapp.com/API/api'
})


export const filterSelect = selector({
    key: 'filter',
    get: ({ get }) => {
        const data = get(storeData)
        const column = get(storeColumns)
        return data, column
    }
})
class Storage {
    constructor() {

    }

    get(key: string) {
        let data = localStorage.getItem(key)
        return JSON.parse(data ? data : "")
    }

    set(key: string, value: Object) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export { Storage }
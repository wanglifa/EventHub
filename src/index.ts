class EventHub {
    // cache = {
    // 'update': [fn, fn1, fn2],
    // 'dlete': [fn, fn1]    
    //}
    cache = {}
    on(eventName: string, fn) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName: string, data?: any) {
        this.cache[eventName]?.forEach(fn => fn(data))
    }
    off(eventName: string, fn) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].splice(indexOf(this.cache[eventName], fn), 1)
    }
}
export default EventHub
function indexOf(array, item) {
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i
            break
        }
    }
    return index
}
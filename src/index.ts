type Data = ((data?: unknown) => void);
class EventHub {
    // cache = {
    // 'update': [fn, fn1, fn2],
    // 'dlete': [fn, fn1]    
    //}
    private cache: { [key: string]: Data[]} = {}
    on(eventName: string, fn: Data) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].push(fn)
    }
    emit(eventName: string, data?: unknown) {
        this.cache[eventName]?.forEach(fn => fn(data))
    }
    off(eventName: string, fn: Data) {
        this.cache[eventName] = this.cache[eventName] || []
        this.cache[eventName].splice(indexOf(this.cache[eventName], fn), 1)
    }
}
export default EventHub
function indexOf(array: Data[], item: Data) {
    let index = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            index = i
            break
        }
    }
    return index
}
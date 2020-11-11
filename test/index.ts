import EventHub from '../src/index'

const test1 = (message) => {
    const eventHub = new EventHub()
    console.assert(eventHub instanceof Object === true, 'eventHub 是个对象')
    console.log(message)
}

const test2 = (message) => {
    const eventHub = new EventHub()
    let called = false
    eventHub.on('xxx', (info) => {
        called = true
        console.assert(info === '你真美')
    })
    eventHub.emit('xxx', '你真美')
    setTimeout(() => {
        console.assert(called === true)
        console.log(message)
    }, 1000)
}

const test3 = (message) => {
    const eventHub = new EventHub()
    let called = false
    const fn1 = () => {
        called = true
    }
    eventHub.on('yyy', fn1)
    eventHub.off('yyy', fn1)
    eventHub.emit('yyy')
    setTimeout(() => {
        console.assert(called === false)
        console.log(message)
    }, 1000)
}

test1('EventHub 可以创建对象')
test2('.on之后 .emit会触发 .on里的回调函数')
test3('.off可以解除事件订阅')
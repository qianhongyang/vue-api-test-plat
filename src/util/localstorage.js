/*
  * 封装localstorage，设置过期时间
  * @author hugo
*/
class LocalStorage {
    // 过期时间，默认30分钟
    constructor(_age = 30 * 60 * 1000) {
        this.age = _age
    }

    /**
     * 设置过期时间
     * @param age
     * @returns {exports}
     */
    setAge(age) {
        this.age = age
        return this
    }

    /**
     * 设置 localStorage
     * @param key
     * @param value
     */
    set(key, value) {
        localStorage.removeItem(key)
        let isObject = value instanceof Object && !(value instanceof Array)
        let _time = new Date().getTime()
        let _age = this.age

        let _v = {}
        _v.value = value
        // 如果不是对象，新建一个对象把 value 存起来
        // if (!isObject) {
        //   let b = value
        //   value = {}
        //   value._value = b
        // }
        // 加入时间
        _v._time = _time
        // 过期时间
        _v._age = _time + _age
        // 是否一个对象
        _v._isObject = isObject
        localStorage.setItem(key, JSON.stringify(_v))
        return this
    }

    /**
     * 判断一个 localStorage 是否过期
     * @param key
     * @returns {boolean}
     */
    isExpire(key) {
        let isExpire = true
        let value = localStorage.getItem(key)
        let now = new Date().getTime()

        if (value) {
            value = JSON.parse(value)
            // 当前时间是否大于过期时间
            isExpire = now > value._age
        } else {
            // 没有值也是过期
        }
        return isExpire
    }

    /**
     * 获取某个 localStorage 值
     * @param key
     * @returns {*}
     */
    get(key) {
        let isExpire = this.isExpire(key)
        let value = null
        if (!isExpire) {
            value = localStorage.getItem(key)
            value = JSON.parse(value)
            // if (!value._isObject) {
            //   value = value._value
            // }
            value = value.value
        } else {
            localStorage.removeItem(key)
        }
        return value
    }

    // 删除
    remove(key) {
        localStorage.removeItem(key)
    }
}

export default LocalStorage

const log = console.log.bind(console)
const e = function (selector) {
    return document.querySelector(selector)
}
const eAll = function (selector) {
    return document.querySelectorAll(selector)
}
const bindEvent = function (element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

// 新增一条描述输入框
const addDetail = function (btn) {
    // let btn = e('.button-add-detail')
    let p = btn.parentElement
    let detailBar = p.querySelector('.info-bar-detail')
    // btn.remove()
    let dupNode = detailBar.cloneNode(true);
    // log(p)
    p.appendChild(dupNode)
}

// 删除一条描述输入框
const deleteDetail = function (btn) {
    let p = btn.parentElement.querySelector('.info-bar-detail')
    p.remove()
}

// 新增一条 section bar
const addSection = function (btn) {
    // let btn = e('.button-add-section')
    let p = btn.parentElement.parentElement
    let dupNode = p.cloneNode(true)
    let pp = p.parentElement
    // btn.remove()
    pp.appendChild(dupNode)
}

// 删除一条 section bar
const deleteSection = function (btn) {
    // log('btn ', btn)
    let p = btn.parentElement.parentElement
    p.remove()
}

// 给所有的 info-section 绑定事件
const bindALlSection = function () {
    let mainBar = e('.main-container')
    bindEvent(mainBar, 'click', function (event) {
        let self = event.target
        // log('self', self)
        if (self.classList.contains('button-add-section')) {
            addSection(self)
        } else if (self.classList.contains('button-add-detail')) {
            addDetail(self)
        } else if (self.classList.contains('button-delete')) {
            deleteSection(self)
        } else if (self.classList.contains('button-delete-detail')) {
            deleteDetail(self)
        }
    })
}

const __main = function() {
    bindALlSection()
}

__main()
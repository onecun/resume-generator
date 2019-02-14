const oldData = {
    "self-name": [],
    "self-job": [],
    "self-contact": [],
    "edu-time": [],
    "edu-school": [],
    "edu-experience": [],
    "exp-type": [],
    "exp-name": [],
    "exp-detail": [],
    "skill-type": [],
    "skill-name": [],
    "skill-detail": [],
    "other-type": [],
    "other-name": [],
    "other-detail": [],
}

const newData = {
    // 个人信息
    "self" : {
        "self-name" : [],
        "self-job" : [],
        "self-contact" : [],
    },
    // 教育经历
    "education" : {
        "edu-time" : [],
        "edu-school" : [],
        "edu-experience" : [],
    },
    // 项目与工作经验
    "experience" : {
        "exp-type" : [],
        "exp-name" : [],
        "exp-detail" : [],
    },
    // 技能
    "skill" : {
        "skill-type" : [],
        "skill-name" : [],
        "skill-detail" : [],
    },
    // 其他
    "other" : {
        "other-type" : [],
        "other-name" : [],
        "other-detail" : [],
    },
}

const formatData = function () {
    let inputs = document.querySelectorAll('.input-info-content')
    for (let i = 0; i < inputs.length; i++) {
        let a = inputs[i]
        oldData[a.name].push(a.value)
    }
}

// 对数据分类
const sort = function (obj1, obj2) {
    let keys = Object.keys(obj1)
    for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        obj1[k] = obj2[k]
    }
}

const data2NewData = function(newData, oldData) {
    let keys = Object.keys(newData)
    for (let i = 0; i < keys.length; i++) {
        let k = keys[i]
        sort(newData[k], oldData)
    }
}

const __start = function() {
    formatData()
    data2NewData(newData, oldData)
}


// // 个人信息
// const self = {
//     "self-name": [],
//     "self-job": [],
//     "self-contact": [],
// }
// // 教育经历
// const education = {
//     "edu-time": [],
//     "edu-school": [],
//     "edu-experience": [],
// }
// const experience = {
//     "exp-type": [],
//     "exp-name": [],
//     "exp-detail": [],
// }
// // 技能
// const skill = {
//     "skill-type": [],
//     "skill-name": [],
//     "skill-detail": [],
// }
// // 其他
// const other = {
//     "other-type": [],
//     "other-name": [],
//     "other-detail": [],
// }
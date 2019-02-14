const templet = {
    // self: {
    "contact-list": `<li class="contact-li">${contact}</li>`,
    "info-name": `<div class="info-name">${name}</div>`,
    "info-job": `<div class="info-job">${job}</div>`,
    // },
    // other: {
    "item-header": `<div class="item-header">${header}</div >`,
    "item-title": `<div class="item-title">${title}</div>`,
    "item-contennt": `<div class="item-contennt">${contennt}</div>`,
    // },
}

let self = newData.self
let education = newData.education
let experience = newData.experience
let skill = newData.skill
let other = newData.other


let info = `
<div class="resume-info">
    <div class="info-contact">
        <div class="contact-list p-vertical-center">
            <li class="contact-li"><span>手机:</span> 13534070105</li>
        </div>
    </div>
    <div class="info-main p-vertical-center">
        <div class="info-name">${self["self-name"][0]}</div>
        <div class="info-job">前端工程师</div>
    </div>
</div>
`


const html =
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>resume</title>
    <link rel="stylesheet" href="./resume.css">
</head>
<body>
    <div class="resume-main">
        <header class="resume-header">
            ${info}
        </header>
        <div class="resume-container">
            <div class="resume-section-wrapper column-6 float-left">
                <div class="wrapper-title">教育经历</div>
                <div class="wrapper-list-item">
                    <div class="item-header">2016-2019</div >
                    <div class="item-title">科院</div>
                    <div class="item-list">
                        <div class="item-contennt">力学</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!--  -->
    <footer></footer>
</body>
</html>
`
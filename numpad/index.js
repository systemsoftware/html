const els = document.getElementsByTagName('numpad')
const border = '2px solid black'

window.onload = () => {
for (const el of els){
const numDisplay = document.createElement("label")
numDisplay.style.textAlign = 'center'
el.appendChild(numDisplay)
el.appendChild(document.createElement('br'))

setInterval(() => {
numDisplay.innerHTML = el.getAttribute('value')
}, 200)

let i = 0 

const newBttn = () => {


    const b = document.createElement('button')
    b.setAttribute('v',i.toString())
    b.innerHTML = i
    b.style.textAlign = 'center'
    b.style.padding = '20px'
    b.style.border = '0px'
    b.style.backgroundColor = 'lightgray'
    b.onmouseenter = () => {
    b.style.backgroundColor = 'gray'
    }
    b.onmouseleave = () => {
        b.style.backgroundColor = 'lightgray'
        }

        b.style.borderTop = border
        b.style.borderBottom = border

        if(b.innerHTML == '0'){
        b.style.borderLeft = border
        }


            b.onclick = () => {

            if(!el.getAttribute('value')){
            el.setAttribute('value',b.getAttribute('v'))
            }else{
                if(el.getAttribute('value').length < parseInt(el.getAttribute('max'))){
                el.setAttribute('value',el.getAttribute('value')+b.getAttribute('v'))
            }
        }
            }

    el.appendChild(b)
    i++
        
}

while (i < 10) {
    newBttn()
        }

        const c = document.createElement('button')
        c.style.border = '0px'
        c.style.borderLeft = border
        c.style.borderTop = border
        c.style.borderBottom = border
        c.className = 'NUMPAD_BTTN'

        c.style.backgroundColor = 'lightgray'
        c.innerHTML = 'X'
        c.className = 'NUMPAD_DELETE'
        c.style.padding = '20px'
        c.onmouseenter = () => {
            c.style.backgroundColor = 'red'
            }
            c.onmouseleave = () => {
                c.style.backgroundColor = 'lightgray'
                }
                c.onclick = () => {
                    if(el.getAttribute("value")){
                    let str = el.getAttribute("value").substring(0,el.getAttribute("value").length -1)
                    el.setAttribute('value',str)
                    }else{
                    alert("No numbers inputted")
                    }
                }
        el.appendChild(c)
if(el.getAttribute('allowTypeIn').toLowerCase() == 'true'){
const t = document.createElement('button')
t.innerHTML = 'T'
t.style.textAlign = 'center'
t.style.padding = '20px'
t.style.border = '0px'
t.style.borderTop = border
t.style.borderBottom = border
t.className = 'NUMPAD_BTTN'
t.style.backgroundColor = 'lightgray'
t.onmouseenter = () => {
    t.style.backgroundColor = 'gray'
    }
    t.onmouseleave = () => {
        t.style.backgroundColor = 'lightgray'
        }
t.addEventListener('click', () =>{
let p = prompt("Enter numbers")
if(parseInt(p)){
el.setAttribute('value',p.substring(0,el.getAttribute('max')))
}
})
el.appendChild(t)
}
const b = document.createElement('button')
b.innerHTML = '&rightarrow;'
b.id = 'submitNumpadValueButton'
b.style.textAlign = 'center'
b.style.padding = '20px'
b.style.border = '0px'
b.style.borderRight = border
b.style.borderTop = border
b.style.borderBottom = border
b.style.backgroundColor = 'lightgray'
b.className = 'NUMPAD_SUBMIT'
b.onclick = el.onsubmit
b.onmouseenter = () => {
    b.style.backgroundColor = 'green'
    }
    b.onmouseleave = () => {
        b.style.backgroundColor = 'lightgray'
        }
el.appendChild(b)
}
}
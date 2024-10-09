let btn1 = document.querySelector('.btn-1')
let btn2 = document.querySelector('.btn-2')

const bubble = document.querySelector('.bubble')
const avatar = document.querySelector('.avatar')
const h3 = document.querySelector('h3')
const p = document.querySelector('.date')
const a = document.querySelector('a.btn2')
const text = document.querySelector('.text')
const textP = document.querySelector('.paragraph')
let initialWidth = window.innerWidth;

let helper = 0;

window.addEventListener("resize", function(){
    btn1 = document.querySelector('.btn-1')
    btn2 = document.querySelector('.btn-2')
    initialWidth = window.innerWidth;
    console.log(initialWidth)
    if(initialWidth >= 376){
        btn1.addEventListener('mouseover', function () {
            bubble.style.display = 'flex';
            text.style.zIndex = '-1'
            textP.style.zIndex = '-1'
            console.log('cos')
        })
        
        btn1.addEventListener('mouseleave', function () {
            bubble.style.display = 'none';
            text.style.zIndex = '1'
            textP.style.zIndex = '1'
            console.log('cos2')
        })
    }else if(initialWidth <= 375){
        btn2.addEventListener('click', function () {
            if(helper % 2 === 0){
                console.log(helper)
                bubble.style.display = 'flex'
                avatar.style.display = 'none';
                h3.style.display = 'none';
                p.style.display = 'none';
                bubble.style.zIndex = '1';
                a.style.paddingLeft = '210px'
                console.log('cos3')
                helper += 1
            }else if( helper % 2 != 0){
                console.log(helper)
                bubble.style.display = 'flex'
                avatar.style.display = 'flex';
                h3.style.display = 'flex';
                p.style.display = 'flex';
                bubble.style.zIndex = '-1';
                a.style.paddingLeft = '20px'
                console.log('cos4')
                helper += 1
            }
        })
    }
});


if(initialWidth >= 376){
    btn1.addEventListener('mouseover', function () {
        bubble.style.display = 'flex';
        console.log('cos')
    })
    
    btn1.addEventListener('mouseleave', function () {
        bubble.style.display = 'none';
        console.log('cos2')
    })
}else if(initialWidth <= 375){
    btn2.addEventListener('click', function () {
        if(helper % 2 === 0){
            avatar.style.display = 'none';
            h3.style.display = 'none';
            p.style.display = 'none';
            bubble.style.zIndex = '0';
            a.style.paddingLeft = '210px'
            console.log('cos3')
            helper += 1
        }else if( helper % 2 != 0){
            avatar.style.display = 'flex';
            h3.style.display = 'flex';
            p.style.display = 'flex';
            bubble.style.zIndex = '-1';
            a.style.paddingLeft = '20px'
            console.log('cos4')
            helper += 1
        }
    })
}

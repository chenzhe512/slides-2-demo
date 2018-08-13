let n 
Init()
setInterval(function(){
    makeLeave(getImage(n))
    .one('transitionend',function(e){
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
},1000)







function x(n){
    if(n>5){
        n = n%5
        if (n === 0){
            n = 5
        }
    }
    return n
}

function Init(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')

}

function makeCurrent($node){
    $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
    $node.removeClass('enter current').addClass('leave')
    return $node
}

function makeEnter($node){
    $node.removeClass('leave current').addClass('enter')
}

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}





/* 第一次构思初实现
setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},3000)
setTimeout(function(){
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},6000)
setTimeout(function(){
    $('.images>img:nth-child(3)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(3)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},9000)
setTimeout(function(){
    $('.images>img:nth-child(1)').css({
        transform:'translateX(-200%)'
    })
    $('.images>img:nth-child(2)').css({
        transform:'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').one('transitionend',function(e){
        $(e.currentTarget).addClass('right').css({transform: 'none'})
    })
},12000)
*/



/* 第二次构思发现三个状态current、leave、enter
$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')

setTimeout(function(){
    $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images > img:nth-child(2)').removeClass('enter').addClass('current')
},3000)

setTimeout(function(){
    $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images > img:nth-child(3)').removeClass('enter').addClass('current')
},6000)

setTimeout(function(){
    $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $('.images > img:nth-child(1)').removeClass('enter').addClass('current')
},9000)
...
*/

/* 未优化版本
$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')
let n = 1
setInterval(function(){
    
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')   //不能直接写n，需要用ES6的插值法`
    .one('transitionend',function(e){
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n += 1
},1000)
function x(n){
    if(n>5){
        n = n%5
        if (n === 0){
            n = 5
        }
    }
    return n
}
*/



    //element(要执行动画的元素)
    //target(要移动到的目标位置)
    //speed(移动的速度)
    function animate(element, target, callback){
        clearInterval(element.timer);
        element.timer = setInterval(()=>{
            if(element.offsetLeft == target){
                clearInterval(element.timer);
                callback && callback();
            }
            if((target - element.offsetLeft) > 0){
                element.speed = Math.ceil((target - element.offsetLeft) / 10);
            }else{
                element.speed = Math.floor((target - element.offsetLeft) / 10);
            }
            element.style.left = element.offsetLeft + element.speed + 'px';
        },15);
    }

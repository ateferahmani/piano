

function _piano(event){
        $('.piano>div').css('background', 'transparent')
        $('.piano>span').css('background-image', 'linear-gradient(rgb(23, 23, 23), black)')
    
        if(event.keyCode == 65){
            $('.piano>div:nth-of-type(1)').css('background', '#b36a6a')
            $('#a').attr('src')
            document.querySelector('#a').play()
        }else if(event.keyCode == 75){
            $('.piano>div:nth-of-type(2)').css('background', '#b36a6a')
            $('#k').attr('src')
            document.querySelector('#k').play()
        }else if(event.keyCode == 78){
            $('.piano>div:nth-of-type(3)').css('background', '#b36a6a')
            $('#n').attr('src')
            document.querySelector('#n').play()
        }else if(event.keyCode == 76){
            $('.piano>div:nth-of-type(4)').css('background', '#b36a6a')
            $('#l').attr('src')
            document.querySelector('#l').play()
        }else if(event.keyCode == 70){
            $('.piano>div:nth-of-type(5)').css('background', '#b36a6a')
            $('#f').attr('src')
            document.querySelector('#f').play()
        }else if(event.keyCode == 89){
            $('.piano>div:nth-of-type(6)').css('background', '#b36a6a')
            $('#y').attr('src')
            document.querySelector('#y').play()
        }else if(event.keyCode == 79){
            $('.piano>div:nth-of-type(7)').css('background', '#b36a6a')
            $('#o').attr('src')
            document.querySelector('#o').play()
        }else if(event.keyCode == 80){
            $('.piano>div:nth-of-type(8)').css('background', '#b36a6a')
            $('#p').attr('src')
            document.querySelector('#p').play()
        }else if(event.keyCode == 68){
            $('.piano>div:nth-of-type(9)').css('background', '#b36a6a')
            $('#d').attr('src')
            document.querySelector('#d').play()
        }else if(event.keyCode == 87){
            $('.piano>div:nth-of-type(10)').css('background', '#b36a6a')
            $('#w').attr('src')
            document.querySelector('#w').play()
        }else if(event.keyCode == 69){
            $('.piano>div:nth-of-type(11)').css('background', '#b36a6a')
            $('#e').attr('src')
            document.querySelector('#e').play()
        }else if(event.keyCode == 73){
            $('.piano>div:nth-of-type(12)').css('background', '#b36a6a')
            $('#i').attr('src')
            document.querySelector('#i').play()
        }else if(event.keyCode == 81){
            $('.piano>div:nth-of-type(13)').css('background', '#b36a6a')
            $('#q').attr('src')
            document.querySelector('#q').play()
        }else if(event.keyCode == 88){
            $('.piano>div:nth-of-type(14)').css('background', '#b36a6a')
            $('#x').attr('src')
            document.querySelector('#x').play()
        }else if(event.keyCode == 49){
            $('.piano>span:nth-of-type(1)').css('background', 'rgb(231 180 180)')
            $('#l').attr('src')
            document.querySelector('#l').play()
        }else if(event.keyCode == 50){
            $('.piano>span:nth-of-type(2)').css('background', 'rgb(231 180 180)')
            $('#a').attr('src')
            document.querySelector('#a').play()
        }else if(event.keyCode == 51){
            $('.piano>span:nth-of-type(3)').css('background', 'rgb(231 180 180)')
            $('#w').attr('src')
            document.querySelector('#w').play()
        }else if(event.keyCode == 52){
            $('.piano>span:nth-of-type(4)').css('background', 'rgb(231 180 180)')
            $('#e').attr('src')
            document.querySelector('#e').play()
        }else if(event.keyCode == 53){
            $('.piano>span:nth-of-type(5)').css('background', 'rgb(231 180 180)')
            $('#o').attr('src')
            document.querySelector('#o').play()
        }else if(event.keyCode == 54){
            $('.piano>span:nth-of-type(6)').css('background', 'rgb(231 180 180)')
            $('#l').attr('src')
            document.querySelector('#l').play()
        }else if(event.keyCode == 55){
            $('.piano>span:nth-of-type(7)').css('background', 'rgb(231 180 180)')
            $('#q').attr('src')
            document.querySelector('#q').play()
        }else if(event.keyCode == 56){
            $('.piano>span:nth-of-type(8)').css('background', 'rgb(231 180 180)')
            $('#x').attr('src')
            document.querySelector('#x').play()
        }else if(event.keyCode == 57){
            $('.piano>span:nth-of-type(9)').css('background', 'rgb(231 180 180)')
            $('#d').attr('src')
            document.querySelector('#d').play()
        }else if(event.keyCode == 48){
            $('.piano>span:nth-of-type(10)').css('background', 'rgb(231 180 180)')
            $('#f').attr('src')
            document.querySelector('#f').play()
        }

}


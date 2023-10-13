 /*
        menu
        menu
         두줄주석
        */
        // 한줄주석
        console.log("안녕")
        // alert('hello')

        // menu
        $('.nav>ul>li').mouseover(function(){
            console.log($(this))
            $(this).find('.submenu').stop().slideDown();
        });

        $('.nav>ul>li').mouseout(function(){
            $(this).find('.submenu').stop().slideUp();
        });

        // banner 입니당
        // 변수(int): 변하는 값 이라는 의미
        //  ex) let 변수이름 = 값
        //   let 주머니 = 100;
        // console.log(주머니 + 1);
        let currentIndex = 0;
        // setInterval(할일, 시간);
        // setInterval(function)(){},시간(1초); == 1초마다 실행
        // setInterval(function (){}, 3000); == 3초마다 실행
        // if(){
        //     조건이 만족하면 실행
        // }
        // else{
        //     조건이 만족하지 않으면 실행
        // }

        setInterval(function (){
            if(currentIndex < 2){
                currentIndex++;
            }

            else{
                currentIndex=0;
            }
            // console.log(currentIndex);

            let slidePosition = currentIndex * (-378) + "px";
            console.log(slidePosition);

            // $('slidelist').animate({실행문}, 시간)
            $('.slidelist').animate({
                top:slidePosition
            }, 400);
        }, 3000);

        // tab메뉴
        // .find() => css에서 띄워쓰기(하위요소)와 동일, 자손
        // .hide() => display: none; 과 동일
        // .show() => display: block; 과 동일
        // .next() => 형제중 바로 밑 동생 
        //  ex) 둘째라면 셋째를 호출
        // .parent() => 바로 위 상위요소(부모요소를 호출)
        // .siblings() => 나를 제외한 나머지 형제요소

        let tabMenu = $('.notice');

        tabMenu.find('ul>li>ul').hide();
        tabMenu.find('ul>li.active>ul').show();

        tabMenu.find('ul>li>a').click(function(e){
            e.preventDefault(); // #때문에 튕기는현상 막기
            // $(this).parent('li').addClass('active');
            // $(this).parent('li').siblings('li').removeClass('active');
            // $(this).parent('li').siblings('li').find('ul').hide();

            $(this).parent('li').addClass('active');
            $(this).parent('li').siblings('li').removeClass('active')
            .find('ul').hide();

            $(this).next().show()
        });

        // 팝업창 입니당
        $('.ad').click(function(){
            //$('.layer-bg').show();
            //$('.layer-bg').slideDown();
            $('.layer-bg').fadeIn();
        });

        $('.layer .close').click(function(){
            //$('.layer-bg').slideUp
            //$('.layer-bg').hide();
            $('.layer-bg').fadeOut();
        });


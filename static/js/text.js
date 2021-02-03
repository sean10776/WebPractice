let s1 = "農產品銷售履歷<br>"
let s2 = "認識茶園<br>"
let s3 = "More<br>"
let upper = false //判斷機型

function Area_resize() {
    upper = ($("#upper-xl").css('display') !== 'none')

    let Area = $("#Area span")
    let news = $("#news span")
    let news_content = $("#news_content span")
    Area.removeAttr('class')
    news.removeAttr('class')
    news_content.removeAttr('class')
    if (upper === true) {
        news.addClass('display-5 featurette-heading')
        Area.addClass("display-5")
        news_content.addClass('display-5 mb-2')
        $("#news_content p").addClass('h3')
        $("#Area a").addClass("h3")
    } else {
        news.addClass("h2")
        Area.addClass("h4")
        news_content.addClass('h2 mb-2')
        $("#Area a").removeClass('h3')
        $("#news_content p").removeClass('h3')
    }
}

function text_init(){
    $("#tea_park span").html(s2)
    $("#tea_park p").html(s4)
}

function img_init(){
    $("#tea_park img").attr("src", "img/Tea_park.jpg")
}

function news_init(a){
    let title = []
    let content = []
    let img_src = []
    let total = 0
    switch(a){
        case "Resume_news":
            title = s1
            break
        case "Tea_news":
            total = 2
            title = ["東方美人", "擁有好的茶"]
            // content = [s4, s4]
            img_src = ["img/Tea_park_card.jpg", "img/Tea_park2_card.jpg"]
            break
        case "More_news":
            title = s3
            break
    }
    let item = $('#tid-0').clone().removeAttr('style')
    for(var i = 0; i < total;i++){
        item.removeAttr('id').attr('id', 'tid-'+ i).addClass('item').appendTo("#"+a)
        $('#tid-' + i + ' .text-inherit').html(title[i])
        $('#tid-' + i + ' p').html(content[i])
        $('#tid-' + i + ' img').attr("src", img_src[i])
        $('#tid-' + i + ' a').attr("onclick", "show_news_content("+i+')')
        item = item.clone()
    }
}

function News_showup(){
    $('#Area a').click(a=>{
        let N_id = a.target.id + "_news"
        let dis = $('#news').attr('display')
        async ()=>{
            await Promise((res, rej)=>{
                if($('#news_content').attr('display') !== 'none'){
                    $('#news_content').slideUp()
                    res;
                }
                else{
                    rej;
                }
            })
        }
        
        
        if($('#news div').first().attr('id') === N_id && dis !== 'none'){ //已打開再按同一個關閉
            $('#news').slideUp('slow')
            $('#news_content').slideUp()
            $('#news div').first().removeAttr('id')
        }else if($('#news div').first().attr('id') !== N_id ){             //已打開按不同個
            $('#news div').remove('.item')
            $('#news').slideUp('slow')
            $('#news_content').slideUp()
            $('#news div').first().removeAttr('id').attr("id", N_id)
            news_init(N_id)
            $('#news').slideDown(50)
            $('html, body').animate({scrollTop:$('#news').offset().top}, 'slow')
        }else{                                                              //打開
            $('#news div').first().removeAttr('id').attr("id", N_id)
            news_init(N_id)
            $('#news').slideDown(20)
            $('#news_content').slideUp()
            $('html, body').animate({scrollTop:$('#news').offset().top}, 'fast')
        }
        return false
    })
}

let s4= " * 擁有醉人香檳風味的東方美人茶，又名膨風茶、白毫烏龍茶、椪風茶<br>"
    +   " * 功效： 東方美人茶含有大量的茶多酚，可以提高脂肪分解酶的作用，降低血液中的膽固醇含量<br>"
    +   " * 香氣： 熟果香和蜂蜜香<br>"
    +   " * 味道： 蜜糖甘甜<br>"
    +   " 東方美人茶擁有獨特的熟果味和蜜香，此香氣來自於小綠葉蟬，被它叮咬過的茶樹會啟用防禦機制釋放出以茉莉酸，為基礎的一系列香味物質。"
    +   " 故東方美人茶在生產過程絕不使用農藥，藉此吸引小綠葉蟬的叮咬，增加被害蟲咬的機會。有蟲害的東方美人茶才是最高級之極品，是真正的有機茶！生產較為不易，也更顯其珍貴。"
    +   " 也因為他擁有濃濃的蜂蜜香熟果味，西方飲茶人士譽之為東方美人（Oriental Beauty）。"

let s5= "要擁有好的茶，不只要天時地利人和，還要受溫度、雨量、光照、風力與土壤等自然環境的支配。<br>"
    +   "小茶苗如何長大呢？<br>"
    +   "剛從苗圃移栽到大田的茶苗比較經受不起強光照射，對光的適應性差，耐陰性極強，植株幼嫩需要搭建遮蔭棚讓幼齡小苗避免燒傷。<br>"
    +   "對於小茶苗們來說，擁有一片好的茶園土壤是很重要的！首需排水良好、表土深、土質疏鬆，富含腐植質及礦物質之砂石壤土或砂質黏土為佳，日光照射強度、時數皆會影響茶葉生育之遲速，也關乎品質之優劣。<br>"
    +   "再來一定得加強水分管理，除了要視天氣適量淋水灌溉，還要及時做好排水，不能長時間積水。<br>"
    +   "土壤濕度也是要點之一，能夠控制在75~80%，不僅有利於茶樹生長，更能提高茶葉品質。如果能加上緩緩的微風就更好了，能促進葉面之蒸發，以助體中養分之運行，以助葉面之呼吸，搖動枝幹則各部組織因之堅強。<br>"
    +   '最後在茶農們日復一日的照料下，從小小樹苗長成至能更採收，約略需要三年才可輕度擦採摘，而新梢是不採摘的！駐芽經過短期休止後，繼續生長。這樣能重複生長2—3次。<br>'
    +   "所以好的茶苗如果沒有好的茶園跟細心照料的茶農是無法擁有好喝的茶的，看似簡單卻又不易的生成，讓你能感受到香、韻、滑，等等..這就是好茶，一品滿是幸福。<br>"


function show_news_content(index){
    let img_src= ["img/Tea_park.jpg", "img/Tea_park2.jpg"]
    let title = ["東方美人", "擁有好的茶"]
    let content = [s4, s5]
    $('#news').slideUp(20)
    $('#news_content').slideDown(20)
    $('#news_content img').attr('src', img_src[index])
    $('#news_content span').html(title[index])
    $('#news_content p').html(content[index])
    return false
}
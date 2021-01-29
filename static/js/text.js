let s1 = "農產品銷售履歷<br>"
let s2 = "認識茶園<br>"
let s3 = "More<br>"
let upper = false //判斷機型


function Area_resize() {
    upper = ($("#upper-xl").css('display') !== 'none')

    let Area = $("#Area span")
    let news = $("#news span")
    Area.removeAttr('class')
    news.removeAttr('class')
    if (upper === true) {
        news.addClass('display-5 featurette-heading')
        Area.addClass("display-5")
        $("#Area p").addClass("h3")
    } else {
        news.addClass("h2")
        Area.addClass("h4")
        $("#Area p").removeAttr('class')
    }
}

let s4= " * 擁有醉人香檳風味的東方美人茶，又名膨風茶、白毫烏龍茶、椪風茶<br>"
    +   " * 功效： 東方美人茶含有大量的茶多酚，可以提高脂肪分解酶的作用，降低血液中的膽固醇含量<br>"
    +   " * 香氣： 熟果香和蜂蜜香<br>"
    +   " * 味道： 蜜糖甘甜<br>"
    +   " 東方美人茶擁有獨特的熟果味和蜜香，此香氣來自於小綠葉蟬，被它叮咬過的茶樹會啟用防禦機制釋放出以茉莉酸，為基礎的一系列香味物質。"
    +   " 故東方美人茶在生產過程絕不使用農藥，藉此吸引小綠葉蟬的叮咬，增加被害蟲咬的機會。有蟲害的東方美人茶才是最高級之極品，是真正的有機茶！生產較為不易，也更顯其珍貴。"
    +   " 也因為他擁有濃濃的蜂蜜香熟果味，西方飲茶人士譽之為東方美人（Oriental Beauty）。"

function text_init(){
    $("#tea_park span").html(s2)
    $("#tea_park p").html(s4)
}

// 時間間隔を設定
// appearクラスを付け替える関数

// setInterval(function関数, 時間) => 繰り返し関数が実行される
// setTimeout(関数, 時間) => 1回だけ関数が実行される

let i = 0
const slideShow = () => {
    // ノードの取得
    const imgs = document.getElementsByClassName("pig-img")
    // ノードにクラスを付け替える処理(classlistを使う。)
    if (i < 2) {
        imgs[i].classList.remove("appear")
        i++
        imgs[i].classList.add("appear")
    } else {
        imgs[i].classList.remove("appear")
        i = 0
        imgs[i].classList.add("appear")
    }
}



setInterval(slideShow, 2000);

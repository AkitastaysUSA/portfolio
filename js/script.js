// ローディング画面
const loading = document.querySelector("#loading");

window.addEventListener("load", () => {
    loading.classList.add("loading");
});

// バーガーメニュー
const burger = document.querySelector(".burger");
const nav = document.querySelector(".header-nav");
// const navLinks = document.querySelectorAll(".header-nav li");

// console.log(headerNav);

burger.addEventListener("click", () => {
    // ナビゲーションメニューにactiveクラス追加
    nav.classList.toggle("nav-active");
    // バーガーメニューにtoggleクラス追加
    burger.classList.toggle("toggle");

    // nav.style.animation = "navFade 0.5s "

    // navLinks.forEach((link, index) => {
    //     console.log(link);

    //     link.style.animation = "navFade 0.5s ease forwards ${index}s";
    // });
});


// 流れる文字
// const marqueeTexts = document.querySelectorAll('.marquee-inner');

// marqueeTexts.forEach((a, marqueeText) => {
//     marqueeText.animate(
//         {
//             translate: [0, 'calc(-100% - 1rem)']
//         },
//         {
//             duration: 20000,
//             iterations: Infinity
//         }
//     );
// });


// const a = document.querySelector("#a");
// console.log(parent);

// 画像を配列でまとめる
const imagesList = [
    "setouchioyster.png",
    "isara.png",
    "setouchi.png",
    "isara.png"
];
// console.log(imagesList[0]);

// const content = '<img src="images / ${imagesList[0]} " alt="setouchi">';
// console.log(content);
// parent.insertAdjacentHTML("beforeend", content);
// a.insertAdjacentHTML("beforeend", content);


// サイドメニュー
for (let i = 1; i <= 4; i++) {
    const img = document.getElementById("img-" + i);
    // 画像のalt取得
    const alt = img.getAttribute("alt");

    document.querySelector("#li-" + i).textContent = alt;

}

// const img1 = document.getElementById("img-1");
// 画像のalt取得
// const alt = img1.getAttribute("alt");
// console.log(alt);

// document.querySelector("#li-1").textContent = alt;


// スライド画像

// parent要素を取得
const parent = document.querySelector("#parent");

const btnBack = document.querySelector(".btnBack");
const btnNext = document.querySelector(".btnNext");


//戻るボタンを押したときの関数
btnBack.addEventListener("click", () => {
    //アニメーション発火
    parent.classList.add("back");
    //要素の順番を入れ替え
    parent.insertBefore(parent.children[parent.children.length - 1], parent.children[0]);
    //アニメーション完了時のイベントリスナ
    parent.addEventListener("animationend", backEnd, { once: true });
});

//進むボタンを押した時の関数
btnNext.addEventListener("click", () => {
    //アニメーション発火
    parent.classList.add("next");
    //アニメーション完了時のイベントリスナ
    parent.addEventListener("animationend", nextEnd, { once: true });
});


//進むアニメーション完了時の関数
function nextEnd() {
    //要素の順番を入れ替え
    parent.appendChild(parent.children[0]);
    //アニメーションのCSSを削除
    parent.classList.remove("next");
}

//戻るアニメーション完了時の関数
function backEnd() {
    //アニメーションのCSSを削除
    parent.classList.remove("back");
}


// モーダルウィンドウ
const open1 = document.querySelector('.open1');
const open2 = document.querySelector('.open2');
const open3 = document.querySelector('.open3');
const close1 = document.querySelector('#close1');
const close2 = document.querySelector('#close2');
const close3 = document.querySelector('#close3');
const modal1 = document.querySelector('#modal1');
const modal2 = document.querySelector('#modal2');
const modal3 = document.querySelector('#modal3');
const mask = document.querySelector('#mask');
// console.log(close);
const showKeyframes = {
    opacity: [0, 1],
    visibility: 'visible',
};

const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
};

const options = {
    duration: 800,
    easing: 'ease',
    fill: 'forwards',
};

// モーダルウィンドウを開く
open1.addEventListener('click', () => {
    modal1.animate(showKeyframes, options);
    mask.animate(showKeyframes, options);
});
open2.addEventListener('click', () => {
    modal2.animate(showKeyframes, options);
    mask.animate(showKeyframes, options);
});
open3.addEventListener('click', () => {
    modal3.animate(showKeyframes, options);
    mask.animate(showKeyframes, options);
});

// モーダルウィンドウを閉じる
close1.addEventListener('click', () => {
    modal1.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
});
close2.addEventListener('click', () => {
    console.log(close);
    modal2.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
});
close3.addEventListener('click', () => {
    modal3.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
});

// マスクをクリックしてモーダルウィンドウを閉じる
mask.addEventListener('click', () => {
    close1.click();
    close2.click();
    close3.click();
});
const { morningSetTime, noonSetTime, nightSetTime, midnightSetTime } = require("./timeBot");

//朝に表示される言葉の変数の作成
let morningDialogues = [
    "朝ご飯は食べましたか？今日1日は今から始まるですよ‼ちゃんと朝ご飯を食べて、力をつけておきましょう。",
    "朝の用事はすみましたか？ちゃんと歯を磨きましたか？朝ご飯は食べましたか？ちゃんとやることを考えて行動してくださいね。",
    "今日の天気はいいですね。今後の天気予報をしっかり確認して、外に出ましょう。好きな者を見るのもよし。遊びに行くのもよし。まぁとりあえず外に出ましょう。",
    "今日の予定はありますか？あるならパパっとやって自由時間を増やしましょう！そう簡単でなくてもあなたならできます。だって今のあなたがあるのですから。"
];

//昼に表示される言葉の変数制作
let noonDialogues = [
    "昼食は食べましたか？もうこんな時間ですよ。しっかり昼食を食べないと、午後が大変ですよ",
    "仕事が大変ですか？学校が大変ですか？それでもお腹はすきます。どんなに嫌なことでも、とりあえずご飯は食べましょう。",
    "いまあなたは何をしていますか？私は・・・特に何もしてないですねwまぁのんびり過ごしてるでしょう。たまに休んだっていんですよ？",
    "お腹空いたぁ～あ!そこのあなた、今ご飯を食べようとしていますね？少し・・・分けてくれませんか？お願いします！一生のお願いです！"
];

//夜に表示される言葉の関数制作
let nightDialogues = [
    "あぁもう1日が終わっちゃいますね。もうこんな時間なんだし、ささっとやることすまして寝ましょう!楽しい明日が待っています。",
    "",
    "",
    ""
];

//深夜に表示される言葉の変数制作
let midnightDialogues = [
    "なにやってるんですか⁉もう12時過ぎてますよ!!早く寝ましょう、そして明日朝早く起きてパパっとやるべきことをやりましょう。",
    "深夜に起きているあなたはきっとゲームをよくしますね？（探偵風）ゲーム、楽しいですよね～",
    "",
    "",
];

//朝の時ランダムで表示される言葉の関数（朝）
function  morningRandom() {
    
}

//昼
function noonRandom() {

}


//夜
function nightRandom() {

}


//深夜
function midnightRandom() {

}

//実行場所

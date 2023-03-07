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
    "お腹空いたなぁ～、あ!そこのあなた、今ご飯を食べようとしていますね？少し・・・分けてくれませんか？お願いします！一生のお願いです！"
];

//夜に表示される言葉の関数制作
let nightDialogues = [
    "あぁもう1日が終わっちゃいますね。もうこんな時間なんだし、ささっとやることすまして寝ましょう!楽しい明日が待っています。",
    "夜だ！夜だ！夜だ！やっと夜になった。これから好きな配信者が配信をするんですよ。え⁉あなたも好きなんですか!?じゃあ、一緒に見ましょう!!",
    "",
    ""
];

//深夜に表示される言葉の変数制作
let midnightDialogues = [
    "なにやってるんですか⁉もう12時過ぎてますよ!!早く寝ましょう、そして明日朝早く起きてパパっとやるべきことをやりましょう。",
    "深夜に起きているあなたはきっとゲームをよくしますね？（探偵風）ゲーム、楽しいですよね～僕も好きです！一緒に遊びます？",
    "",
    "",
];

//朝の時ランダムで表示される言葉の変数（朝）
const morningRandom = Math.floor( Math.random() * morningDialogues.length ); 

//昼
const noonRandom = Math.floor( Math.random() * noonDialogues.length );

//夜
const nightRandom = Math.floor( Math.random() * nightDialogues.length );

//深夜
const midnightRandom = Math.floor( Math.random() * midnightDialogues );

//エラー時に表示されるメッセージの変数
const ErrorMessage = ('エラーが発生しました。再読み込み、またはブラウザを再起動してください');

//時間によって表示が変わるメッセージのIf文
function TimeMessage() {

    if (now < morningSetTime) {
        document.write(morningDialogues[morningRandom]);
    } else if (now < noonSetTime) {
        document.write(noonDialogues[noonRandom]);
    } else if (now < nightSetTime) {
        document.write(nightDialogues[nightRandom]);
    } else if (now < midnightSetTime) {
        document.write(midnightDialogues[midnightRandom]);
    } else {
        document.write(ErrorMessage);
    }
}

//実行場所
TimeMessage();
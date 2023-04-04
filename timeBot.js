//TimeBot.jsにて時間の変更をすればテストしたいときに時間が違ってもランダムに表示することが可能
//現在時刻の設定
let now = new Date();

//朝の時間設定
//正午
let morningSetTime = new Date();      //新しい時間の設定
morningSetTime.setHours(12);          //何時
morningSetTime.setMinutes(00);        //何分
morningSetTime.setSeconds(00);        //何秒

//昼の時間設定
//午後6時
let noonSetTime = new Date();
noonSetTime.setHours(18);
noonSetTime.setMinutes(00);
noonSetTime.setSeconds(00);

//夜の時間設定
//深夜0時
let nightSetTime = new Date();
nightSetTime.setHours(24);
nightSetTime.setMinutes(00);
nightSetTime.setSeconds(00);

//深夜の時間設定
//午前6時
let midnightSetTime = new Date();
midnightSetTime.setHours(6);
midnightSetTime.setMinutes(00);
midnightSetTime.setSeconds(00);

//時間によって返答が変わる表示の処理
let TimeBotCode = function () {

    if (now < morningSetTime) {
        document.write("おはようございます");
    } else if (now < noonSetTime) {
        document.write("こんにちは");
    } else if (now < nightSetTime) {
        document.write("こんばんは")
    } else if (now < midnightSetTime) {
        document.write("今深夜ですよ⁉何してるんですか早く寝てください!!");
    }
}

//実行場所
TimeBotCode();
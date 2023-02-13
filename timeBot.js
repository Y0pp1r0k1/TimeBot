//現在時刻の設定
let now = new Date();

//朝の時間設定
//現在の日時 +　午前11時59分59秒
let morningSetTime = new Date();
morningSetTime.setHours(11);          //何時
morningSetTime.setMinutes(59);        //何分
morningSetTime.setSeconds(59);        //何秒

//昼の時間設定
//現在の日時　+　午後5時59分59秒
let noonSetTime = new Date();
noonSetTime.setHours(17);
noonSetTime.setMinutes(59);
noonSetTime.setSeconds(59);

//夜の時間設定
//現在の日時　+　午後23時59分59秒
let nightSetTime = new Date();
nightSetTime.setHours(23);
nightSetTime.setMinutes(59);
nightSetTime.setSeconds(59);

//深夜の時間設定
//現在の日時　+　午前5時59分59秒
let midnightSetTime = new Date();
midnightSetTime.setHours(5);
midnightSetTime.setMinutes(59);
midnightSetTime.setSeconds(59);

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

//TimeBot(HTML)への介入
let TimeBot = document.getElementById('TimeBot');


//実行場所
console.log(now);
TimeBot.innerHTML = TimeBotCode();

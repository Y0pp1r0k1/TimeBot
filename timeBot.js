//現在時刻の設定
let now = new Date();

//朝の時間設定
//現在の日時 +　午前11時59分59秒
let morningSetTime = new Date();
morningSetTime.setHours(12);          //何時
morningSetTime.setMinutes(00);        //何分
morningSetTime.setSeconds(00);        //何秒

//昼の時間設定
//現在の日時　+　午後5時59分59秒
let noonSetTime = new Date();
noonSetTime.setHours(18);
noonSetTime.setMinutes(00);
noonSetTime.setSeconds(00);

//夜の時間設定
//現在の日時　+　午後23時59分59秒
let nightSetTime = new Date();
nightSetTime.setHours(24);
nightSetTime.setMinutes(00);
nightSetTime.setSeconds(00);

//深夜の時間設定
//現在の日時　+　午前5時59分59秒
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

//公開場所
module.exports = { morningSetTime, noonSetTime, nightSetTime, midnightSetTime };

//実行場所
console.log(now);
TimeBotCode();
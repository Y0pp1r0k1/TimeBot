//現在時刻の設定
let now = new Date();
let hour = now.getHours();
let min = now.getMinutes();
let sec = now.getSeconds();

//朝の時間設定
//現在の日時 +　午前11時59分59秒
let morningSetTime = new Date();
morningSetTime.setHours(11);
morningSetTime.setMinutes(59);
morningSetTime.setSeconds(59);

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

//時間によって返答が変わる表示の処理
if (now < morningSetTime) {
    document.write("おはようございます");
} else if (now < noonSetTime) {
    document.write("こんにちは");
} else if (now < nightSetTime) {
    document.write("こんばんは")
}





//実行場所
console.log(morningSetTime);
console.log(noonSetTime);
console.log(nightSetTime);
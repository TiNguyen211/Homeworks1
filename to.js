let vatly = prompt("Nhập điểm vật lý");
let hoahoc = prompt("Nhập điểm hoá học");
let sinhhoc = prompt("Nhập điểm sinh học");

let tongdiem = vatly + sinhhoc + hoahoc;
let trungbinh = tongdiem / 3

document.write("Tổng điểm: " + tongdiem + "<br>");
document.write("Điểm trung bình: " + trungbinh);
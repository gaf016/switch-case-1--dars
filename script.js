let soni = Number(prompt("Nechta Qiyqiriq set zakaz qilmoqchisiz? (1-5 gacha)"));
let narx = 45000; // 1ta set narxi
let jami;

switch (soni) {
  case 1:
    jami = narx * 1;
    break;
  case 2:
    jami = narx * 2;
    break;
  case 3:
    jami = narx * 3;
    break;
  case 4:
    jami = narx * 4;
    break;
  case 5:
    jami = narx * 5;
    break;
  default:
    alert("Faqat 1 dan 5 gacha buyurtma bera olasiz!");
}

if (jami) {
  let tasdiq = confirm(`${soni} ta Qiyqiriq set jami ${jami} so'm. Tasdiqlaysizmi?`);
  if (tasdiq) {
    alert(" Zakazingiz qabul qilindi!");
  } else {
    alert(" Zakaz bekor qilindi.");
  }
}

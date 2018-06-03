//Soal 1
// Competencies: Functions + Loopings + Conditional

// ==============
// Three Cols Box
// ==============

// Instruksi
// =========
// Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.
// Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:

// contoh 1 (drawThreeColsBox(3)):
// 1 2 3
// 4 5 6
// 7 8 9

// contoh 2 (drawThreeColsBox(5)):
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12
// 13 14 15
 
// contoh 3 (drawThreeColsBox(1)):
// 1 2 3

// Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
// Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!

// tinggi kotak sesuai dengan nilai variable height!
 function drawThreeColsBox(height){
  var BoxAngka =[1,2,3] ;
  for(var a = 0; a < height; a++){
    if(a == 0){ 
    var BoxPolaBaris= String(BoxAngka[0]) +' ' + String(BoxAngka[1]) + ' ' +  String(BoxAngka[2]);
    } else {    
      BoxAngka[0] = BoxAngka[0] + 3;
      BoxAngka[1] = BoxAngka[1] + 3;
      BoxAngka[2] = BoxAngka[2] + 3;
    var BoxPolaBaris= String(BoxAngka[0]) +' ' + String(BoxAngka[1]) + ' ' +  String(BoxAngka[2]);}
    console.log(BoxPolaBaris);
  }
}
drawThreeColsBox(3);
//1 2 3
//4 5 6
//7 8 9

drawThreeColsBox(5);
//1 2 3
//4 5 6
//7 8 9
//10 11 12
//13 14 15
 
drawThreeColsBox(1);
//1 2 3



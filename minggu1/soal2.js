// -------------------
// The Number Cruncher
// -------------------

// PROBLEM
// ========
// Disediakan sebuah function numberCruncher yang bertugas untuk menerima sebuah parameter
// berupa array of number, dan mengembalikan array baru yang merupakan hasil penambahan angka di
// index array sebelumnya dengan dua angka yang berada di kiri dan kanannya. Apabila tidak ada
// angka di kiri atau kanan, maka dianggap sebagai 0. Kemudian, dari setiap nilai di dalam array tersebut,
// ambil yang nilainya ganjil, kemudian tambahkan semua nilai ganjil tersebut dan return nilai total ganjilnya.

// Pola
// ----
// input: [x, y, z, a, b]
// proses:
// [
//   (x + 0 + kanan dari x)
//   (y + kiri dari y + kanan dari y)
//   (z + kiri dari z + kanan dari z)
//   (a + kiri dari a + kanan dari a)
//   (b + kiri dari b + 0)
// ]

// Contoh
// -------
// Input: [ 2 , 5 , 1 , 3 ]
// Proses:
// => [ (2 + 0 + 5) , (5 + 2 + 1), (1 + 5 + 3), (3 + 1 + 0) ]
// => [ 7, 8, 9, 4 ]
// => nilai ganjil: 7 dan 9
// => 7 + 9
// Output: 16


// Input: [2, 3, 1, 4, 1, 5, 0, 3]
// Proses:
// => [ 5, 6, 8, 6, 10, 6, 8, 3 ]
// => nilai ganjil: 5 dan 3
// => 5 + 3
// Output: 8

// Input: [3, 6, 8, 9, 1, 2, 3]
// Proses:
// => [ 9, 17, 23, 18, 12, 6, 5 ]
// => nilai ganjil: 9, 17, 23, 5
// => 9 + 17 + 23 + 5
// Output: 54

// RULES
// =====

// - Wajib menggunakan pseudocode sebelum memulai kode

/*
	Pseudodecode program
	
	1. Store arrnumber 
	2. Store TGanj = 0
	3. Store x=0
	4. While "x" < length of arrnumber
			- Store number = arrnumber dengan x 
			- Store nomorkiri = number dengan x sebelum
			- If nomorkiri != undefined
				nomorkiri = nomorkiri
				Else
				nomorkiri = 0
			- Store nomorkanan = arrnumber dengan x after
			- If nomorkanan != undefined
				nomorkanan equals nomorkanan
				Else
				nomorkanan= 0
			- Store Tarrnumber = number + nomorkiri +nomorkanan
			- If TGanj mod 2 = 1
				 TGanj + Tarrnumber
			- Return TGanj
 */

 function numberCruncher (arrnumber) {
	var TGanj= 0;
	for ( x = 0; x < arrnumber.length; x++) {
		number = arrnumber[x];
		nomorkiri = arrnumber[x-1] 
          != undefined ? 
          arrnumber[x-1] : 0;
		nomorkanan = arrnumber[x+1] 
          != undefined ? 
          arrnumber[x+1] : 0;
		Tarrnumber = number + nomorkiri + nomorkanan;
		if (Tarrnumber % 2 == 1) {
			TGanj += Tarrnumber;
		} }
		return TGanj;
}

console.log(numberCruncher([2, 5, 1, 3])); // 16
console.log(numberCruncher([2, 3, 1, 4, 1, 5, 0, 3])); // 8
console.log(numberCruncher([3, 6, 8, 9, 1, 2, 3])); // 54
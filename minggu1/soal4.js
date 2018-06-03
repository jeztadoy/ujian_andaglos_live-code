// ---------------
// Students Report
// ---------------

// PROBLEM
// =======
// Diberikan sebuah function bernama getReport.
// Function akan menerima sebuah parameter array of object dengan format:

// [
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   { name: <nama student>, score: <score student>, classCode: <kode kelas>},
//   ...
// ]

// Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

// Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

// [
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
//   ...
// ]

// Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
// Standard kelulusan adalah minimum 70.
// */

function getReport(grades) {
    var report = [
    { classCode: 'A', passed: [], failed: [] },
    { classCode: 'B', passed: [], failed: [] },
    { classCode: 'C', passed: [], failed: [] },];

  for(var a = 0; a < report.length; a++) {
    for(var b = 0; b < grades.length; b++) {
      var grade = grades[b];
      if(grade.classCode === report[a].classCode) { 
        if(grade.score >=70 ){
          report[a].passed.push(grade.name)
        }else{
          report[a].failed.push(grade.name)
        }
      }
    }
  }
  return report;
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));
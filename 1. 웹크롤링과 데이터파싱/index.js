// const parse = require('csv-parse/lib/sync');
// const fs = require('fs');

// const csv = fs.readFileSync('csv/data.csv');
// csv.toString('utf-8')
// const records = parse(csv.toString('utf-8'))

// console.log(records);

// records.forEach((r,i) => {
//     console.log(i,r);
    
// });

const xlsx = require('xlsx');

const workbook = xlsx.readFile('xlsx/data.xlsx');

// console.log(Object.keys(workbook.Sheets));
// 엑셀시트 "영화목록"

const ws = workbook.Sheets.영화목록
// console.log(ws);

const records = xlsx.utils.sheet_to_json(ws)
// console.log(records);

for(const [i,r] of records.entries()){
    console.log(i,r.제목, r.링크);
    
}








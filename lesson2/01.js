function converter (path) {
    const fs = require('fs');
    const XLSX = require('xlsx');

    const jsonString = fs.readFileSync(path, (err) => {
        if (err) {
            return console.error('File read failed:', err);
        }
    })

    const jsonObj = JSON.parse(jsonString);
    console.log(jsonObj); 

    const wb = XLSX.utils.book_new();
    wb.SheetNames.push("Xlsx from json");
    const ws_data = jsonObj;
    const ws = XLSX.utils.json_to_sheet(jsonObj);
    wb.Sheets["Xlsx from json"] = ws;
    const wbOut = XLSX.write(wb, {bookType:'xlsx',  type: 'buffer'});
    fs.writeFile('xlsxFromJson.xlsx', wbOut, 'utf8', (err) => {
        if (err) {
            return console.error('File write failed: ', err);
        }
    });
}

converter ('jsonToXlsx.json');
// module system (tidak bisa interaksi dengan cara biasa, setiap file independent)
// node . = index.js

// tidak bisa mengakses secara bebas file lainnya
// tidak mengenal object window (karena sudah bukan di browser)

// require() untuk memanggil file lainnya
// untuk file di folder sama ./nama file
// untuk file di folder atas ../nama file || ../../nama file
// untuk file di folder dalam ./nama folder/nama file

// module.exports untuk mengekspor function agar bisa digunakan dimana require()dipanggil
// harus ditangkap dalam variabel

class nodeku{
	constructor(){
		this.indexNode2 = require('./indexNode2.js');

	}
	namaku(nama){
		return this.indexNode2.thisNama(nama);
	}
	prodiku(prodi){
		return this.indexNode2.thisProdi(prodi);
	}

// console.log(thisNama("foo"));
// console.log("Hello World");	
}
let panggil = new nodeku();
console.log(panggil.namaku("foo"));
console.log(panggil.prodiku("Informatics Management"));
new panggil.indexNode2.indexNode2();
console.log(panggil.indexNode2);

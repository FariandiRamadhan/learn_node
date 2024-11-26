// module = sekumpulan kode yang dapat digunakan kembali dengan antar muka yang terdefinisi
// core modules
// local modules
// third party modules "node_modules"
// untuk mengeksport lebih dari 1 properti/method 
// bisa didefinisikan setelah exports .nama properti object
// nanti akan berbentuk object

function thisNama(nama){
	return `nama saya ${nama}`;
}

function thisProdi(prodi){
	return `Saya dari prodi ${prodi}`;

}

const arr = [1,2,3,4];

class indexNode2{
	constructor(){
		console.log("instansi object indexNode2");
	}
}

// module.exports.thisNama = thisNama;
// module.exports.thisProdi = thisProdi;
// module.exports.arr = arr;
// module.exports.indexNode2 = indexNode2;

// mengirim object
// ES6 object notation, jika properti == value boleh tulis value saja
module.exports = {thisNama, thisProdi, arr, indexNode2};
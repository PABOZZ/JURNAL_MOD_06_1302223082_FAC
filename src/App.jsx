function App() {
  const NAMA_PANGGILAN = "PABOZZ"
  const N = 82
//   const dataawal = [
// { id : 1, nama: `nasi ayam geprek `, harga : 13700 = N * 100,kategori: `makanan` },
// { id : 2, nama: `Es teh Lemon `, harga : 6000 = N * 100,kategori: `Minuman` },
// { id : 3, nama: `Mie Goreng Telur`, harga : 12000 = N * 100,kategori: `makanan` },
// { id : 4, nama: `Jus Alpukat`, harga : 14000 = N * 100,kategori: `Minuman` },  
// { id : 5, nama: `Bakso urat `, harga : 15000 = N * 100,kategori: `makanan` },
// ]  

  return (
    <>
      <h1>Kantin {NAMA_PANGGILAN}</h1>
      <p>Selamat Pagi </p>
      <p>saldo awal kartu kantin Rp.{N * 1000 } </p>
      <button disabled>  Bayar  </button>
    </>
  )
}

export default App

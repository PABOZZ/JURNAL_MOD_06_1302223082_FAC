function CardMahasiswa(props) {
return (
<div className="KartuMenu">
<h3>{props.nama}</h3>
<p>NIM: {props.nim}</p>
</div>
);
}
export default CardMahasiswa;
// src/App.jsx
import CardMahasiswa from "./components/CardMahasiswa";
function App() {
return (
<div>
<CardMahasiswa nama="Ani" nim="10121001" />
<CardMahasiswa nama="Budi" nim="10121002" />
</div>
);
}
export default App;
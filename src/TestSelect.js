import {useState , useEffect} from "react";
import "./App.css";
import "./TestSelect.css";
const TestSelect = () => {
    const [selected, setSelected] = useState('') //primer estado para la opcion seleccionada
    const [options, setOptions]= useState([]) //segundo estado para recibir los datos de cada opcion)
    
    const dataApi = [
        {
            id:1,
            name: "pedro",
        },
        {
            id:2,
            name: "asd",
        },
        
    ]
    useEffect(() => {
        setOptions(dataApi)
    }, [])
    return (
        <div className="container">
            <h1>Test de select</h1>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="">-</option>
                {options.map((opt, index ) => ( //en el caso de que no se pueda conseguir un id podemos usar index
                    <options key={index}> {opt.name}</options>
                ))}
            </select>
        </div>
    )

}
export default TestSelect();
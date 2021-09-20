import { Link } from 'react-router-dom';
import cars from '../data/cars.json'
const CarsList = () => {
    console.log(cars);
    return (
        <div className="grid">
            {cars.map(elt => <ul key={elt.id}>
                <li>{elt.car_name}</li>
                <li> <Link to={`/cars1/${elt.id}`}>See Details from func Component</Link> </li>
                <li> <Link to={`/cars/${elt.id}`}>See Details from Class Component</Link> </li>
            </ul>)}
        </div>
    );
}

export default CarsList;
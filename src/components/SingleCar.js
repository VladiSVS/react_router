import { useParams } from 'react-router-dom'
import cars from '../data/cars.json'
const SingleCar = (props) => {
    // console.log('test', props.match.params.id)
    console.log(useParams())
    // Classic JS
    const id1 = useParams().id
    console.log(id1)
    // Deconstruction
    const { id } = useParams()
    console.log(id) // String
    let singleCar = cars.filter(elt => elt.id === Number(id))
    console.log(singleCar)
    return (
        <div>
            Single Car component:
            <ul>
                <li>{singleCar[0].car_name}</li>
                <li>{singleCar[0].car_model}</li>
                <li>{singleCar[0].car_year}</li>

            </ul>

        </div>
    );
}

export default SingleCar;
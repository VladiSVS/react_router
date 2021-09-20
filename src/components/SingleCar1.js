import React from 'react';
// import { useParams } from 'react-router-dom'
// console.log(useParams())
// Works only in Functional Component
import cars from '../data/cars.json'

class SingleCar1 extends React.Component {
    state = {
        singleCar: cars.filter(elt => elt.id === Number(this.props.match.params.id))
    }
    render() {
        console.log(this.props.match.params.id)
        return <div>
            <ul>
                <li>{this.state.singleCar[0].car_name}</li>
                <li>{this.state.singleCar[0].car_model}</li>
                <li>{this.state.singleCar[0].car_year}</li>

            </ul>
        </div>;
    }
}

export default SingleCar1;
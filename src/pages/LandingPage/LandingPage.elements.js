import styled from 'styled-components';
import carImg from "../../imgs/car.jpg"


export const HomeImage = styled.div`
    background-color: red;
    min-height: 60vh;
    width: 100%;
    background-image: url(${carImg});
    background-position: center;
    background-size: cover;
`
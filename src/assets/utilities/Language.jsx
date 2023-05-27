import SPAIN from '../img/SPAIN.svg'
import EEUU from '../img/EEUU.svg'

export function EeUuWave() {
    return (
        <img className='w-8 h-8 rounded-full flex justify-center items-center' src={EEUU} alt='EEUU'></img>
    );
}

export function SpainWave() {
    return (
        <img className='w-8 h-8 rounded-full flex justify-center items-center' src={SPAIN} alt='esp'></img>
    );
}
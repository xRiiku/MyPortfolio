import SunIcon from '../img/sun.svg'
import MoonIcon from '../img/moon.svg'

export function Sun() {
    return (
        <img className='w-12 h-12 rounded-full flex justify-center items-center' src={SunIcon} alt='Sun Icon'></img>
    );
}

export function Moon() {
    return (
        <img className='w-12 h-12 rounded-full flex justify-center items-center' src={MoonIcon} alt='Moon Icon'></img>
    );
}
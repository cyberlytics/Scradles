import PropTypes from 'prop-types';
import './selection.css';
import Schere from '../images/scissors.svg';
import Stein from '../images/rock.svg';
import Papier from '../images/paper.svg';
//import Papier from '../images/hand-scissors.png';

// function Selection(props) {

//     return (
//         <div className='selection'>
//             <button onClick={() => props.onSelectionChange(Stein)}>Stein</button>
//             <button onClick={() => props.onSelectionChange(Papier)}>Papier</button>
//             {/* <button onClick={() => props.onSelectionChange("Schere")}>Schere</button>
//             <button onClick={() => props.onSelectionChange("Stein")}>Stein</button>
//             <button onClick={() => props.onSelectionChange("Papier")}>Papier</button> */}
//         </div>
//     );
// }

function Selection(props) {

    return (
        <div className='selection'>
            <button onClick={() => props.onSelectionChange(props === "Papier" ? <img src={Papier} alt="Papier"></img> : "Papier")}>Papier</button>
            <button onClick={() => props.onSelectionChange(props === "Schere" ? <img src={Schere} alt="Schere"></img> : "Schere")}>Schere</button>
            <button onClick={() => props.onSelectionChange(props === "Stein" ? <img src={Stein} alt="Stein"></img> : "Stein")}>Stein</button>
            {/* <button onClick={() => props.onSelectionChange("Schere")}>Schere</button>
            <button onClick={() => props.onSelectionChange("Stein")}>Stein</button>
            <button onClick={() => props.onSelectionChange("Papier")}>Papier</button> */}
        </div>
    );
}



export default Selection;
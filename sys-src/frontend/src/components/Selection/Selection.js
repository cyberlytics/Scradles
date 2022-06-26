import PropTypes from 'prop-types';
import './selection.css';
import { ReactComponent as Schere } from '../images/scissors.svg';
import { ReactComponent as Stein } from '../images/rock.svg';
import { ReactComponent as Papier } from '../images/paper.svg';

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
        <div className='selection' data-testid='selection'>
            <button className="round-btn" onClick={() => props.onSelectionChange(props === "Papier" ? <Papier /> : "Papier")}><Papier /></button>
            <button className="round-btn" onClick={() => props.onSelectionChange(props === "Schere" ? <Schere /> : "Schere")}><Schere /></button>
            <button className="round-btn" onClick={() => props.onSelectionChange(props === "Stein" ? <Stein /> : "Stein")}><Stein /></button>
        </div>
    );
}

export default Selection;
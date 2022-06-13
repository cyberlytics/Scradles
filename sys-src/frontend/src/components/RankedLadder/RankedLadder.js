import RankedLadderElement from '../RankedLadderElement/RankedLadderElement';
import './RankedLadder.css';

function RankedLadder(props) {

    return(
        <div className='RankedLadder'>
            <div className='RankedLadderItem'><RankedLadderElement number={1} score={3412} player='Olaf' /></div>
            <div className='RankedLadderItem'><RankedLadderElement number={2} score={2341} player='Franz' /></div>
            <div className='RankedLadderItem'><RankedLadderElement number={3} score={1234} player='Reiner' /></div>
        </div>
    );    
}


export default RankedLadder;
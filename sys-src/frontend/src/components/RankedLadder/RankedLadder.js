import { useEffect, useState } from 'react';
import RankedLadderElement from '../RankedLadderElement/RankedLadderElement';
import './RankedLadder.css';

function RankedLadder(props) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/leaderboard/all')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    return(
        <div className='RankedLadder'>
            {data.map((args, i) => {
                return(
                    <div key={args._id} className='RankedLadderItem'>
                        <RankedLadderElement number={i + 1} score={args.points} player={args.name} />
                    </div>
                );
            })}
        </div>
    );    
}


export default RankedLadder;
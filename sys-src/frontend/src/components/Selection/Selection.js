import './selection.css';

function Selection(props) {

    return(
        <div className='selection'>
            <button onClick={() => props.onSelectionChange("Schere")}>Schere</button>
            <button onClick={() => props.onSelectionChange("Stein")}>Stein</button>
            <button onClick={() => props.onSelectionChange("Papier")}>Papier</button>
        </div>
    );    
}

export default Selection;
import { useEffect, useState } from 'react';
import LeaderboardElement from '../LeaderboardElement/LeaderboardElement';
import './Leaderboard.css';

function Leaderboard(props) {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/leaderboard/bulk/' + page)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    }, [page]);

    const PageUp = () => {
        setPage(page + 1);
    }

    const PageDown = () => {
        if (page != 0) {
            setPage(page - 1);
        }
    }

    return (
        <div className='Leaderboard'>
            <div className='LeaderboardGrid'>
                {data.map((args, i) => {
                    return (
                        <div key={args._id} className='LeaderboardItem'>
                            <LeaderboardElement number={(10 * page) + i + 1} score={args.points} player={args.name} />
                        </div>
                    );
                })}
            </div>
            <div className='Pagination'>
                <a onClick={PageDown} href="#">&laquo;</a>
                <a className='Page'>{page}</a>
                <a onClick={PageUp} href="#">&raquo;</a>
            </div>
        </div>
    );
}


export default Leaderboard;
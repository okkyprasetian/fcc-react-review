import CDetail from './CDetail'
import CFooter from './CFooter'

function Card({ reviewer, decNum, incNum, ranNum }) {
    return (
        <div className="card">
            <CDetail reviewer={reviewer} />
            <CFooter decNum={decNum} incNum={incNum} ranNum={ranNum} />
        </div>
    );
}

export default Card;
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Button from './Button'

function CFooter({ decNum, incNum, ranNum }) {
    return (
        <div className="cfooter">
            <div className="manufer">
                <FaAngleLeft className="arrow" onClick={decNum} /> <FaAngleRight className="arrow" onClick={incNum} />
            </div>
            <Button ranNum={ranNum} />
        </div>
    );
}

export default CFooter;
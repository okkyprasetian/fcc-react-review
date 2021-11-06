import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'
import Button from './Button'

function CFooter({ decNum, incNum, ranNum }) {
    return (
        <div className="cfooter">
            <div className="manufer">
                <AiOutlineDoubleLeft onClick={decNum} /> <AiOutlineDoubleRight onClick={incNum} />
            </div>
            <Button ranNum={ranNum} />
        </div>
    );
}

export default CFooter;
import { useRecoilValue } from "recoil";
import { charCountState } from "../store/selector";
const CharacterCount = () => {
    const count = useRecoilValue(charCountState);
    
    return (
        <div>
            문자의 수: {count}
        </div>
    );
}

export default CharacterCount;
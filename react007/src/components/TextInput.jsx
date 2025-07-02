import { useRecoilState } from "recoil";
import { textState } from "../store/atom";

const TextInput = () => {
    

    const [text, setText] = useRecoilState(textState);

    return (
        <div>
            <input type="text" onChange={e => setText(e.target.value)}/>
            <br />
            Echo: {text}
        </div>
    );
}

export default TextInput;
import TextInput from "./TextInput";
import CharacterCount from "./CharacterCount";
const CharacterCounter = () => {
    return (
        <div>
            문자 카운터입니다.
            <TextInput />
            <CharacterCount />
        </div>
    );
}

export default CharacterCounter;
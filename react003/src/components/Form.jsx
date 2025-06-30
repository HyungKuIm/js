import { useState } from "react";

const Form = () => {
    const [city, setCity] = useState("");

    return (
        <form>
            <input type="text" name="city" placeholder="도시명을 입력하세요" onChange={e => setCity(e.target.value)}/>
            {city}
            <button type="submit">Get Weather</button>
        </form>
    )
}

export default Form;
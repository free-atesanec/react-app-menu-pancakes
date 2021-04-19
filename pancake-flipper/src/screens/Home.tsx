
import React, {ChangeEventHandler, FormEventHandler, useState} from "react";
import CSS from 'csstype';
import PancakeFlipService from "../services/PancakeFlipService";

const errorStyle: CSS.Properties = {
    color: "red"
};

function Home() {
    const pancakeFlipService = new PancakeFlipService();

    const [getInputData, setInputData] = useState("");
    const [getResultText, setResultText] = useState("");
    const [isError, setIsError] = useState(false);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setResultText("");
        setIsError(false);
        setInputData(event.target.value as string);
    };

    const handleSubmit: FormEventHandler<HTMLFormElement>  = (event) => {
        let result = pancakeFlipService.processPancakeInput(getInputData.trim());
        if (result instanceof Error) {
            let error = result as Error;
            setIsError(true);
            setResultText(error.message);
        } else {
            let resultText = result.map((item, i) => `Case #${i}: ${item.toString()}`)
                .join(" ");
            setIsError(false);
            setResultText(resultText);
        }

        event.preventDefault();
    };

    let resultTextStyle = isError ? errorStyle : {};
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Pancake Input:
                    <input type="text" value={getInputData} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <h4 style={resultTextStyle}>{getResultText}</h4>
        </div>
    );
}

export default Home;

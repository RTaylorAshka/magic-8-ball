import { useState } from "react";
function Ball({ answers }) {
    const getRandom = () => { return (Math.floor(Math.random() * answers.length)) };
    const [answer, getAnswer] = useState({ msg: "Ask me a question", color: "blue" });
    return (
        <>
            <div className="Ball-outer" onClick={() => getAnswer(answers[getRandom()])}>
                <div className={`Ball-inner ${answer.color}`}>
                    <p className="Ball-answer">{answer.msg}</p>
                </div>
            </div>
        </>
    )
}

export default Ball;
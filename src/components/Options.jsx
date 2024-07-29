const Options = ({updateFeedback, totalOPinion}) => {
    return (
        <div>
            <button type="button" onClick={() => updateFeedback("good")}>Good</button>
            <button type="button" onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button type="button" onClick={() => updateFeedback("bad")}>Bad</button>
            {
                totalOPinion > 0 && <button type="button" onClick={() => updateFeedback("reset")}>Reset</button>
            }
            
        </div>
    )
}

export default Options
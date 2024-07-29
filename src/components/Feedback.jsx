const Feedback = ({good, neutral, bad, total, positive}) => {
    return (
        <div>
            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>total: {total}</p>
            <p>positive: {positive}%</p>
        </div>
    )
}

export default Feedback
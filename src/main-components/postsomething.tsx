const Postsomething = () => {
    return (
        <div className="Postsomething-container">
            <h1>Post Something</h1>
            <div className="postsomething-input">
                <textarea placeholder="Type Something..."></textarea>
            </div>
            <div className="postsomething-submit">
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Postsomething
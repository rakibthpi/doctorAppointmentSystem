

const Head = (title, content) => {
    return (
        <div className="headArea">
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
};

export default Head;
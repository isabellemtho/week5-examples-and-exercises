const Ingredient = (props) => {
    return(
        <>
            <u>{props.label}</u>
            {props.options.map(
                option => <li>{option}</li>
            )}
            <br />
        </>
    )
};

export default Ingredient;
export default function Main() {
	const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    function handleOnSubmit(e) {        
        e.preventDefault()
        console.log("Form submitted!")
    }

    const listIncredients = ingredients.map((item) => (
        <li key={item}>{item}</li>
    ))

	return (
		<main>
			<form className="add-ingredient-form" onSubmit={handleOnSubmit}>
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
				/>
				<button>Add ingredient</button>
			</form>

            <ul>
                {listIncredients}
            </ul>
		</main>
	);
}

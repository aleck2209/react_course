export default function Main() {
	const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    const listIncredients = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ))
	return (
		<main>
			<form className="add-ingredient-form">
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

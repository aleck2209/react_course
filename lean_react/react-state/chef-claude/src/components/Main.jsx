export default function Main() {
	const ingredients = ["Chicken", "Oregano", "Tomatoes"];

    const listIncredients = ingredients.map((item) => (
        <li key={item}>{item}</li>
    ))

    function handleOnSubmit(e) {        
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const ingredient = formData.get("ingredient");
        
        listIncredients.push(ingredient);
        console.log(listIncredients)
    }


	return (
		<main>
			<form className="add-ingredient-form" onSubmit={handleOnSubmit}>
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
                    name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>

            <ul>
                {listIncredients}
            </ul>
		</main>
	);
}

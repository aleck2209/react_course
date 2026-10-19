import { useState } from "react";

export default function Main() {
	const [ingredients, setIngredients] = useState([]);

	const listIncredients = ingredients.map((item) => <li key={item}>{item}</li>);

	function handleAction(formData) {
		const ingredient = formData.get("ingredient");

		setIngredients((ingredients) => [...ingredients, ingredient]);
	}

	return (
		<main>
			<form action={handleAction} className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
					name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>

			<ul>{listIncredients}</ul>
		</main>
	);
}

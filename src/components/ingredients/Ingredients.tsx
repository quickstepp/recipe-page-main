export function Ingredients() {
	return (
		<>
			<h2>Ingredients</h2>
			<div className="ml-14 mr-20">
				<ul className="list-outside indent-2">
					<li className="list-['2-3']">
						<b>large eggs</b>
					</li>
					<li className="list-['1tbs']">
						<b>butter/ oil</b>
					</li>
					<li className="list-none">
						<b>Salt</b>, to taste
					</li>
					<li className="list-none">
						<b>Pepper</b>, to taste
					</li>
				</ul>
				<div className="mt-3 -indent-10">
					<b>Optional fillings:</b>
					<br />cheese, diced vegetables, cooked meats, herbs
				</div>
			</div>
		</>
	)
}

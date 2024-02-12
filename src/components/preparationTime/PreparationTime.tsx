export function PreparationTime() {
	return (
		<div className="rounded-md bg-rose-white p-5 ">
			<h3 className="text-lg font-bold text-dark-raspberry ">
				Preparation time
			</h3>
			<div className="ml-5 mt-3 grid auto-cols-min grid-cols-2 gap-y-1">
				<div className="font-semibold ">Total:</div>{' '}
				<div className="text-right">~10 min</div>
				<div className="font-semibold ">Preparation:</div>{' '}
				<div className="text-right">5 min </div>
				<div className="font-semibold ">Cooking:</div>{' '}
				<div className="text-right">5 min </div>
			</div>
		</div>
	)
}

export function PreparationTime() {
	return (
		<div className="rounded-md bg-rose-white p-5">
			<h3 className="text-lg text-center font-bold text-dark-raspberry ">
				Preparation time
			</h3>
			<div className="mx-auto mt-3 grid auto-cols-min grid-cols-2 gap-y-1 max-w-fit">
				<div className="font-bold ">Total:</div>{' '}
				<div className="text-right">~10 min</div>
				<div className="font-bold ">Preparation:</div>{' '}
				<div className="text-right">5 min </div>
				<div className="font-bold ">Cooking:</div>{' '}
				<div className="text-right">5 min </div>
			</div>
		</div>
	)
}

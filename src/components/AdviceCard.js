const AdviceCard = ({ randomData, searchData, setRandomFetch }) => {
	const handleOnClick = () => {
		setRandomFetch(true);
	};

	return (
		<div className='card shadow-lg max-w-5xl border border-opacity-10'>
			<div className='card-body flex flex-col items-center justify-center'>
				<div className='card-title text-2xl lg:text-4xl'>
					{searchData ? searchData : randomData.advice}
				</div>

				{!searchData && (
					<button
						onClick={handleOnClick}
						className='btn btn-primary text-sm mt-4'
					>
						Random Advice
					</button>
				)}
			</div>
		</div>
	);
};

export default AdviceCard;

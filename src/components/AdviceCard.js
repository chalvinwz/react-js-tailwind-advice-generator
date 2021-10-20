const AdviceCard = ({ randomData, searchData, setRandomFetch }) => {
	const handleOnClick = () => {
		setRandomFetch(true);
	};

	return (
		<section className='container mx-auto px-4 text-center flex flex-col items-center pt-12'>
			<div className='card shadow-lg max-w-5xl border border-opacity-10'>
				<div className='card-body flex flex-col items-center'>
					<div className='card-title text-2xl lg:text-4xl'>
						{searchData ? searchData.advice : randomData.advice}
					</div>

					{!searchData && (
						<button
							onClick={handleOnClick}
							className='btn btn-primary btn-sm text-sm w-44 h-12 mt-4'
						>
							Random Advice
						</button>
					)}
				</div>
			</div>
		</section>
	);
};

export default AdviceCard;

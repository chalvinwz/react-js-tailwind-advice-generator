import { useRef } from 'react';

const SearchBar = ({ setSearchTerm, setSearchFetch, searchQuotes }) => {
	const inputRef = useRef();

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setSearchTerm(inputRef.current.value);
		setSearchFetch(true);
		inputRef.current.value = '';
	};

	return (
		<section className='container mx-auto px-4 text-center py-4'>
			<form
				onSubmit={handleOnSubmit}
				className='flex justify-center items-center'
			>
				<input
					type='text'
					placeholder='Search for advice here...'
					ref={inputRef}
					className='input input-bordered input-sm mr-4 w-64 h-10'
					required
				/>
				<button className='btn btn-primary btn-outline btn-sm text-xs w-20'>
					Search
				</button>
			</form>
		</section>
	);
};

export default SearchBar;

import { Movie } from '../../types';
import Image from 'next/image';
import { baseURL } from '@/url';
import { useRef, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, movieState } from '@/recoil/globalAtom';
import { BounceLoader } from 'react-spinners';

interface Props {
	title: string;
	movies: Movie[];
}

interface ScrollProps {
	scrollLeft: number | null;
	clientWidth: number | null;
}

const List: FunctionComponent<Props> = ({ movies, title }) => {
	const [Loaded, setLoaded] = useState<boolean>(false);
	const listFrame = useRef<HTMLUListElement>(null);
	const [ShowModal, setShowModal] = useRecoilState(modalState);
	const [MovieInfo, setMovieInfo] = useRecoilState(movieState);

	const handleClick = (direction: string) => {
		const scrollValue: ScrollProps | null = listFrame.current;
		const scrollLeft = scrollValue?.scrollLeft || 0;
		const clientWidth = scrollValue?.clientWidth || 0;
		const targetPos = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
		listFrame.current?.scrollTo({ left: targetPos, behavior: 'smooth' });
	};

	return (
		<article className='relative z-[5] pl-7  group'>
			<h2 className='mb-2 text-lg md:text-xl lg:text-2xl'>{title}</h2>
			<ul
				ref={listFrame}
				className=' overflow-x-auto mb-4 flex   scrollbar-thin scrollbar-thumb-[transparent] scrollbar-track-[transparent] md:mb-8 lg:mb-10  group-hover:scrollbar-thumb-[red]'>
				{movies.map((movie, idx) => {
					return (
						<li
							key={movie.id}
							className='min-w-[180px] min-h-[80px] relative cursor-pointer md:min-w-[200px] md:min-h-[100px] lg:min-w-[240px] lg:min-h-[120px] opacity-50 hover:opacity-100 '
							onClick={() => {
								setShowModal(true);
								setMovieInfo(movie);
							}}>
							<Image
								src={`${baseURL}w300${movie.backdrop_path}`}
								alt={`${movie.title || movie.name}`}
								fill
								className='object-cover'
								onLoadingComplete={() => setLoaded(true)}
							/>
							<BounceLoader
								color={'orange'}
								cssOverride={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
								loading={!Loaded}
							/>
						</li>
					);
				})}
			</ul>

			<FaAngleLeft
				className='top-0 absolute  bottom-0 left-2 z-[5] m-auto h-12 cursor-pointer opacity-0 transition-opacity duration-[.5s] group-hover:opacity-100'
				onClick={() => handleClick('left')}
			/>
			<FaAngleRight
				className='absolute top-0 bottom-0 right-2 z-[5] m-auto h-12 cursor-pointer opacity-0 transition-opacity duration-[.5s] group-hover:opacity-100'
				onClick={() => handleClick('right')}
			/>
		</article>
	);
};

export default List;

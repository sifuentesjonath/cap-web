import { useRef, useState, useEffect, LegacyRef } from 'react'

export interface IUseElementOnScreenOptions {
	root: Element | Document;
	rootMargin: string;
	threshold: number | number[];
}
const useElementOnScreen = (options?: IUseElementOnScreenOptions) => {
	const containerRef = useRef(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const callbackFunction = (entries) => {
		const [ entry ] = entries;
		setIsVisible(entry.isIntersecting);
	}

	const getOptions = ():IUseElementOnScreenOptions => {
		if(options) return options;
		return {
			root: null,
			rootMargin: '0px',
			threshold: 1
		}
	}

	useEffect(() => {
		const observer = new IntersectionObserver(callbackFunction, getOptions());
		if(containerRef.current) observer.observe(containerRef.current);

		return () => {
			if(containerRef.current) observer.unobserve(containerRef.current);
		}
	},[])

	return [containerRef, isVisible];
}

export default useElementOnScreen;
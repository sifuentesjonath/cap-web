import { useState, useEffect } from 'react'
import useElementOnScreen, { IUseElementOnScreenOptions } from '../useElementOnScreen'

interface IUseAnimationOnce extends IUseElementOnScreenOptions {}
const useAnimationOnce = (options?: IUseAnimationOnce) => {
	const [elementRef, isVisible] = useElementOnScreen(options && options);
	const [canAnimateFlag, setCanAnimateFlag] = useState<boolean>(false);

	useEffect(() => {
		if(canAnimateFlag) return;

		const isElementVisible = !!isVisible;
		const isElementVisibleAndAnimateFlagIsDown = isElementVisible && !canAnimateFlag;
		if(isElementVisibleAndAnimateFlagIsDown) setCanAnimateFlag(true);
	}, [isVisible]);

	return [
		elementRef,
		canAnimateFlag,
	]
}

export default useAnimationOnce;
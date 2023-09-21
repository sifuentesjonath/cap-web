import { NextRouter } from "next/router";
import SetupSteps from "./setupSteps";
import { getTitleholders } from "@/service/api";
import { updateProfileStep } from "@/service/useApi";
import { UserProfileType } from "@/service/apiTypes";

const SETUP_STEP_URL = `/setup?step=`;

export const handleGoNextStep = async (profile: UserProfileType, router: NextRouter) => {
	const nexStep = getSetupStep(router) + 1;
	await updateStepAndRoute(router, nexStep);
}

export const handleGoPreviousStep = async (profile: UserProfileType, router: NextRouter) => {
	let previousStep = getSetupStep(router) - 1;
	if(previousStep < 0) previousStep = 0;
	previousStep = await checkSkippedStepAndRelocate(previousStep) ?? previousStep;
	await updateStepAndRoute(router, previousStep);
}

export const handleRelocateUserInStep = (profile: UserProfileType, router: NextRouter) => {
	if(!profile || !profile?.Step) {
		router.replace(SETUP_STEP_URL + SetupSteps.setupInformation);
		return;
	}
	const 
		routerStep = getSetupStep(router),
		profileStep = getProfileStep(profile);
	const needToRelocate = profileStep != routerStep;
	if(needToRelocate) router.replace(SETUP_STEP_URL + profileStep);
}

/** Between 0 - 10 */
export const handleJumpToStep = async (router: NextRouter, step: number) => await updateStepAndRoute(router, step);

export const getSetupStep = (router: NextRouter) => {
	//@ts-ignore
	const step:string = router.query.step || "0";
	return parseInt(step)
}

/** 
 * Check if the plaid step was skipped and relocate the step to the beginning of the plaid step 
 * if there will be more skippable steps support them here
*/
const checkSkippedStepAndRelocate = async (currentGoingStep: number) => { 
	if(currentGoingStep !== SetupSteps.informationSuccessfulMessage) return currentGoingStep;
	const userTitleHolderPlaid = await getTitleholders()[0]?.Plaid;
	if(!userTitleHolderPlaid) return SetupSteps.bankAccountMessage;
}

export const getProfileStep = (profile: UserProfileType) => parseInt(profile?.Step) ?? 0;

const updateStepAndRoute = async (router: NextRouter, step: number) => {
	if(isNaN(step)) return;
	try {
		// console.log(`Going to step ${step}`)
		const data = await updateProfileStep(step); 
		await router.replace(SETUP_STEP_URL + step);
	} catch(err) { }
}


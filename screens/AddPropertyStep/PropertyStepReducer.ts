import { TitleHolderType } from '@/service/apiTypes';
import { IOptionsProps } from '@/src/components/StyledSelect/SelectOnly';
import { ViewPortType } from '@components/block/CondooMapGL'

export interface PropertyStepState { 
	canContinue: boolean;
	isLoading: boolean;
	titleHolders: TitleHolderType[];
	titleHolderOptions: IOptionsProps[];
	selectedTitleHolder: IOptionsProps;
	viewport: ViewPortType;
}

export type PropertyStepAction = 
	| { type: "ENABLE_NEXT_STEP" }
	| { type: "SET_IS_LOADING", payload: boolean }
	| { type: "SET_TITLEHOLDERS", payload: TitleHolderType[] }
	| { type: "SET_TITLEHOLDER_OPTIONS", payload: IOptionsProps[] }
	| { type: "SET_SELECTED_TITLEHOLDER", payload: IOptionsProps }
	| { type: "SET_VIEWPORT", payload: ViewPortType }
	// | { type: "", payload: any }
;
	
export const getDefaultStatePropertyReducer = ():PropertyStepState => {
	return {
		canContinue: false,
		isLoading: false,
		titleHolders: [],
		titleHolderOptions: [],
		selectedTitleHolder: undefined,
		viewport: {
			latitude: 55.59,
			longitude: -101.55,
			zoom: 2.61,
		}
	}
} 

export default function propertyReducer (
	state: PropertyStepState,
	action: PropertyStepAction,
): PropertyStepState {
	switch(action.type) {
		case 'ENABLE_NEXT_STEP': return { ...state, canContinue: true }
		case 'SET_IS_LOADING': return { ...state, isLoading: action.payload }
		case 'SET_TITLEHOLDERS': return { ...state, titleHolders: action.payload }
		case 'SET_TITLEHOLDER_OPTIONS': return { ...state, titleHolderOptions: action.payload }
		case 'SET_SELECTED_TITLEHOLDER': return { ...state, selectedTitleHolder: action.payload }
		case 'SET_VIEWPORT': {
			const { viewport } = state;
			const { payload } = action;
			const zoom = payload?.zoom ?? viewport.zoom // Ensure zoom is set even if not passed
			return {
				...state,
				viewport: {
					zoom,
					latitude: payload.latitude,
					longitude: payload.longitude
				}
			}
		}
		default: {
			return state;
		}
	}
}
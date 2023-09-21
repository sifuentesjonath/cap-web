import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface ReduxZendeskState {
  isOpen?: boolean;
  onLoaded?: () => void;
}

// Define the initial state using that type
const initialState: ReduxZendeskState = {
  isOpen: false,
  onLoaded: null,
}

export const zendeskSlice = createSlice({
  name: 'zendesk',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setZendeskState: (state, action: PayloadAction<ReduxZendeskState>) => {
      // console.info('[[ Zendesk State Changed ]]', { state, action });
      state.isOpen = action.payload.isOpen;
      state.onLoaded = action.payload.onLoaded;
    },
    resetZendeskState: (state) => {
      state.isOpen = false;
      state.onLoaded = null;
    }
  }
})

export const { setZendeskState, resetZendeskState } = zendeskSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectZendesk = (state: any) => state.zendesk

export default zendeskSlice.reducer

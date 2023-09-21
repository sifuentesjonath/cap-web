import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
export interface ReduxAuthState {
  Email: string;
  Status: "" | "Verified" | "Not verified"
  /** 1 to 10, sometimes `null` */
  Step: string;
}

// Define the initial state using that type
const initialState: ReduxAuthState = {
  Email: "",
  Status: "",
  Step: "", 
}

export const authSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAuthState: (state, action: PayloadAction<ReduxAuthState>) => {
      // console.log({ state, action })
      state.Email = action.payload.Email;
      state.Status = action.payload.Status;
      state.Step = action.payload.Step
    },
    resetAuthState: (state) => {
      state.Email = '',
      state.Status = '',
      state.Step = ''
    }
  }
})

export const isAuthState = (authState: ReduxAuthState) => {
  const { Email, Status, Step } = authState;
  const isAuth = {
    isEmail: Boolean(Email),
    isStatus: Boolean(Status),
    isStep: Boolean(Step)
  }
  const validations = Object.values(isAuth);
  return validations.includes(true);
}

export const { setAuthState, resetAuthState } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectAuth = (state: any) => state.auth

export default authSlice.reducer

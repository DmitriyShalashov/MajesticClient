import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface StageState {
    stage: string
}

const initialState: StageState = {
    stage: "rank",
}

export const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    changeStage:(state, action:PayloadAction<string>)=>{
        state.stage=action.payload
    }
  },
})

export const { changeStage} = stageSlice.actions


export default stageSlice.reducer
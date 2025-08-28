import { createSlice, } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello"}]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            console.log(action.payload+" is added.")
        },
        removeTodo:(state,action)=>{

        }
    }
});

export const {addTodo,removeTodo,updateTodo}=todoSlice.actions;
export default todoSlice.reducer;
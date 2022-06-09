import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {addMsg, readMsgs} from "../api/firebase";


const readMsgsAsync = createAsyncThunk(
    'msgs/readMsgs',
    async () => {
        const data=await readMsgs();
        console.log("RRRRRAAAAAAAA11:"+data);
        //console.log("RRRRRAAAAAAAAP:"+JSON.stringify(data));
        // console.log("SSSSSSSSSSSSS"+state.messeges);
         return data;
    }
 );

 const addMsgsAsync = createAsyncThunk(
    'msgs/readMsgs',
    async ({msg,username,userphoto}) => {
       return await addMsg({msg,username,userphoto});
    }
 );

// Part1: Define Slice (including reducers and actions)
const initialState = {
   messeges: [],
//    login: {
//       hasLogin: false,
//       hasAccount: true,
//    },
   status: 'idle',
   errMsg: '',
};

const msgsSlice = createSlice({
   name: 'msgs',
   initialState,
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
    //   setGeneralAccountInfo: (state, action) => {
    //      state.general = action.payload;
    //   },
    //   signOut: (state) => {
    //      logout();
    //      state.login.hasLogin = false;
    //   },
    //   gotoRegister: (state) => {
    //      state.login.hasAccount = false;
    //   },
    //   gotoLogin: (state) => {
    //      state.login.hasAccount = true;
    //   }
   },
   extraReducers: (builder) => {
      builder
         .addCase(readMsgsAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            console.log("PAST"+JSON.stringify(state.messeges));
            console.log("FUCKING ACTION："+JSON.stringify(action));
            state.messeges=[];
            action.payload.forEach((doc)=>{
                console.log(doc);
                state.messeges.push(doc);
            });
            //state.messeges = { ...state.messeges, ...action.payload};
           // console.log("AFTER"+JSON.stringify(state.messeges));

         })
        //  .addCase(addMsgsAsync.fulfilled, (state, action) => {
        //     state.status = 'idle';
        //     state.messeges = { ...state.messeges, ...action.payload};
        //  })
   },
});

// export state to global
export const selectmsgs = (state) => state.msgs.messeges;
export const selectErrorMsg = (state) => state.msgs.errMsg;
export const selectStatus = (state) => state.msgs.status;

// export actions to global
//export const { setGeneralAccountInfo, gotoRegister, gotoLogin, signOut } = msgsSlice.actions;

// export async function to global
export { readMsgsAsync, addMsgsAsync }

// export reducer to global
export default msgsSlice.reducer;

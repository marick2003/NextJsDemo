import { configureStore } from '@reduxjs/toolkit'
import iconslice from './icon-slice'
import authslice from './auth-slice'
import counterslice from './counter-slice'

const store= configureStore({
    
    reducer: {
        icon: iconslice.reducer,
        auth: authslice.reducer,
        counter: counterslice.reducer,

    }
})

export default store
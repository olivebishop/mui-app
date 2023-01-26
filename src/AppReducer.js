import { Button} from "@mui/material";
// import { Login } from '@mui/icons-material';
// import { Container } from '@mui/system';
import { useReducer } from "react";



function AppReducer() {
    const initialState = { count: 0 };

    const reducer = (state, action) =>{
        switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
        Count: {state.count}
        <Button onClick={() => dispatch({ type: 'decrement' })} variant='outlined'>-</Button>
        <Button onClick={() => dispatch({ type: 'increment' })} variant='outlined'>+</Button>
        </div>

    );
    }
    export default AppReducer; 
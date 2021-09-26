import React from 'react';
import { useHistory } from "react-router-dom";

function ButtonsLayout(){
    const history = useHistory();
    const pastDayOption = () =>{
        history.push('/daily/' );
    }
    const weeklyOption = () =>{
        history.push('/weekly/' );
    }
    const monthlyOption = () =>{
        history.push('/monthly/' );
    }
    const searchOption = () =>{
        history.push('/searchByDate/' );
    }

    return (
        <div className="buttons-container">
          <button className="button"  onClick={pastDayOption}>אתמול</button>
          <button className="button"  onClick={weeklyOption}>השבוע האחרון</button>
          <button className="button"  onClick={monthlyOption}>החודש האחרון</button>
          <button className="button"  onClick={searchOption}>מותאם</button>
        </div>
    );
}
export default ButtonsLayout;
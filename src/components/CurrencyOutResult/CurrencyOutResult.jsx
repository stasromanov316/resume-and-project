import React from "react";

function CurrencyOutResult ({currentRateOut, selectedCurrency}){

    return (
        <div className="currencyOut"> 
            {currentRateOut
            && Object.keys(currentRateOut).map((item) => 
                (selectedCurrency === item ? '' :
                <div key={item}>
                    <div>{item}: {currentRateOut[item]}</div>
                </div>)) 
            }
        </div>
    );
}
    
export default CurrencyOutResult;

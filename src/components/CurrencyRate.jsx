import React from 'react';
import './currencyRate.css';

/*
    currentRate      - текущий курс к 1 единице выбранной валюты
    currentRateOut   - вывод значений (курс к 1 единице выбранной валюты * на количество)
    selectedCurrency - текущая выбранная валюта
    countCurrency    - количество для обмена, введенное в инпуте
*/

function CurrencyRate() {
    const currencyType = ['USD', 'EUR', 'RUB', 'UAH', 'JPY', 'PLN', 'CAD', 'GBP'];
    const [currentRate, setCurrentRate] = React.useState(false);
    const [currentRateOut, setCurrentRateOut] = React.useState(false);
    const [selectedCurrency, setSelectedCurrency] = React.useState('');
    const [countCurrency, setCountCurrency] = React.useState(1);

    React.useEffect(() => {
        getDataRate();
    }, [selectedCurrency]);    
    
    const getRate = (e) => {
        setSelectedCurrency(e.target.value);
    }

    const checkCurrency = () => {
        return localStorage.getItem(selectedCurrency) ? true : false;
    }

    const getDataRate = () => {
        if(checkCurrency()){
            setCurrentRate(JSON.parse(localStorage.getItem(selectedCurrency)));
        } else {
            fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=8b7fa630-2957-11ec-a01b-e14e7d20b6c2&base_currency=${selectedCurrency}`)
                .then(data => {
                    return data.json();
                })
                .then(data => {
                    let result = {};
                    for(let i = 0; i < currencyType.length; i++){
                        result[currencyType[i]] = data.data[currencyType[i]];
                    }
                    
                    setCurrentRate(result);
                    localStorage.setItem(selectedCurrency, JSON.stringify(result));
                });
        }
    }

    React.useEffect(() => {
        let newCurrencyData = {};
    
        for(let i=0; i < currencyType.length; i++) {
            if(currentRate[currencyType[i]] === 1){
                continue;
            } else {
                newCurrencyData[currencyType[i]] = (currentRate[currencyType[i]] * countCurrency).toFixed(2);
            }
        } 

        setCurrentRateOut(newCurrencyData);
    }, [countCurrency, currentRate]);

    const setCount = (e) => {
        setCountCurrency(+e.target.value);
    } 
    
    return (
        <div className="currency">
            <button className="currenсуBtnDisabled" disabled>Получить текущий курс к</button>
            <button onClick={getRate} className="currenсуBtn" value="USD">Доллару США</button>
            <button onClick={getRate} className="currenсуBtn" value="EUR">Евро</button>
            <button onClick={getRate} className="currenсуBtn" value="UAH">Гривне</button>
            <button onClick={getRate} className="currenсуBtn" value="RUB">Рублю</button>
            <button onClick={getRate} className="currenсуBtn" value="PLN">Польская злота</button>
            <div className="exchange"><span>Хочу обменять</span><input type="number" onChange={setCount} /> <span>{selectedCurrency}</span></div>
            <div className="currenсуWrap">
                <div className="currencyOut"> 
                    {currentRateOut
                    && Object.keys(currentRateOut).map((item, index) => 
                        (selectedCurrency === item ? '' :
                        <div key={item}>
                            <div>{item}: {currentRateOut[item]}</div>
                        </div>)) 
                    }
                </div>

                <div className="currencyType">
                    <p>Валюты</p>
                    <div>
                        {currencyType && 
                            Object.keys(currencyType).map((item) => (
                                <div key={item} 
                                    className={currencyType[item] === selectedCurrency ? 'selected' : '' }>{currencyType[item]}
                                </div>
                            ))
                        }
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CurrencyRate;
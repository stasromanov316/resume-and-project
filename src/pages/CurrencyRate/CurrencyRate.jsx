import React from 'react';
import PropTypes from 'prop-types';
import CurrencyOutResult from '../../components/CurrencyOutResult/CurrencyOutResult';

import './CurrencyRate.scss';

/*
    currentRate      - текущий курс к 1 единице выбранной валюты
    currentRateOut   - вывод значений (курс к 1 единице выбранной валюты * на количество)
    selectedCurrency - текущая выбранная валюта
    countCurrency    - количество для обмена, введенное в инпуте
*/

function CurrencyRate() {
    const currencyButtons = {
        'USD' : 'Доллару США', 
        'EUR' : 'Евро', 
        'UAH' : 'Гривне', 
        'RUB' : 'Рублю', 
        'PLN' : 'Польской злоте'
    };

    const currencyType = ['USD', 'EUR', 'RUB', 'UAH', 'JPY', 'PLN', 'CAD', 'GBP'];
    const [currentRate, setCurrentRate] = React.useState({});
    const [currentRateOut, setCurrentRateOut] = React.useState({});
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

    const getVisitDay = () => {
        let date = new Date();
        return `${String(date.getDate())} ${String(date.getMonth())} ${String(date.getFullYear())}`;
    }

    const checkDay = () => {
        return (localStorage.getItem('visiteDay') === getVisitDay()) ? true : false;
    }

    const getDataRate = () => {
        if(checkCurrency() && checkDay()){
            setCurrentRate(JSON.parse(localStorage.getItem(selectedCurrency)));
        } else {
            fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=8b7fa630-2957-11ec-a01b-e14e7d20b6c2&base_currency=${selectedCurrency}`)
                .then(data => {
                    return data.json();
                })
                .then(data => {
                    const result = currencyType.reduce((accumulator, item) => (
                        {...accumulator, [item]: data.data[item] }), '');

                    setCurrentRate(result);
                    localStorage.setItem(selectedCurrency, JSON.stringify(result));
                    localStorage.setItem('visiteDay', getVisitDay());
                });
        }
    }

    React.useMemo(() => {        
        const newCurrencyData = {};
        currencyType.map((item) => { 
            if(currentRate[item]){
                newCurrencyData[item] = (currentRate[item] * countCurrency).toFixed(2);
            } 
        })

        setCurrentRateOut(newCurrencyData);
    }, [countCurrency, currentRate]);

    const setCount = (e) => {
        setCountCurrency(+e.target.value);
    }   

    return (
        <div className="currency">
            <button className="currenсуBtnDisabled" disabled>Получить текущий курс к</button>
            {Object.keys(currencyButtons).map((key) => <button key={key} onClick={getRate} className="currenсуBtn" value={key}>{currencyButtons[key]}</button> )}
            
            <div className="exchange"><span>Хочу обменять</span><input type="number" onChange={setCount} /> <span>{selectedCurrency}</span></div>
            
            <div className="currenсуOutWrap">
                <CurrencyOutResult currentRateOut={currentRateOut} selectedCurrency={selectedCurrency} />

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

CurrencyRate.propTypes = {
    currencyButtons: PropTypes.object,
    currentRate: PropTypes.object,
    currentRateOut: PropTypes.object,
    selectedCurrency: PropTypes.string,
    countCurrency: PropTypes.number
}

export default React.memo( CurrencyRate );

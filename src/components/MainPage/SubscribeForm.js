import React, {useState} from 'react';
import '../../css/_subscribe-form.scss';

const SubscribeForm = ()=>{
    const [emailInput, setEmailInput] = useState('');
    const [isEmailError, setIsEmailError] = useState(false);

    const validateEmail = ()=>{
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validRes = re.test(emailInput);
        
        if(!validRes){
            setIsEmailError(true);
        }else{
            setIsEmailError(false);
        }
    }

    let handleInputChange = (event)=>{
        setEmailInput(event.target.value);
    };
    
    return(
        <div className="subscribe-form">
            <div className="form-header">Находитесь в курсе всех событий!</div>
            <div className="form-desc">Всегда будьте первым, кто получит информацию о всех акциях и специальных предложениях!</div>
            <div className={isEmailError ? "error-label-active" : 'error-label' }>Ошибка, данные введены неправильно!</div>
            <form>
                <div className="search-cont">
                    <input type="text" className="search-input" placeholder="Введите адрес электронной почты" onChange={handleInputChange}/>
                    <div className="search-btn-cont" value = {emailInput} onClick={validateEmail}>
                        <img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-right.png" alt="submit"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SubscribeForm;
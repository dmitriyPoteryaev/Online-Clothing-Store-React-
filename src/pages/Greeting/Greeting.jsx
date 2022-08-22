import React, { useState} from 'react';
import classes from './Greeting.module.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Greeting = () => {
    const [check,setCheck] = useState(false);
    const [Logo_Pass, setLogo_Pass] = useState({
        Logo: "",
        Pass: ""
      });



  const router = useNavigate();

  function TimeAttention() {
    setCheck(true);

    setTimeout(() => {
        setCheck(false);
    }, 3000);
  }
 
    return (
        <div className={classes.greeting}>
        <div className={classes.form}>
            <span className={classes.DataEntry}>Введите данные для тестового входа</span>
            <div className={classes.commonInp}>
                <span className={classes.nameInput}>Логин</span>
                <div className={classes.inpPlusFig}>
                <input className={
                    check&&!Logo_Pass.Logo.trim()
                    ?
                    classes.logAttent
                    :
                    classes.log} 
                 type='text'
                 placeholder='Введите любой логин'
                 name='event'
                 onChange={(event) =>
                    setLogo_Pass({ ...Logo_Pass, Logo: event.target.value })
                  }
                 />
            </div>
               
                </div>
                <div className={classes.commonInp}>
                <span className={classes.nameInput}>Пароль</span>
                <div className={classes.inpPlusFig}>
                <input className={
                  check&&!Logo_Pass.Pass.trim()
                  ?
                  classes.passAttent
                  :
                  classes.pass
                
  
                }
                 type='password'
                 placeholder='Введите любой пароль' 
                 name='event' 
                 onChange={(event) =>
                    setLogo_Pass({ ...Logo_Pass, Pass: event.target.value })
                  }
                 />
            </div>
               
                </div>
          
            <button
             className={classes.NextPage}
             type="submit"
             onClick={()=>
                !!Logo_Pass.Logo.trim()
                &&
                !!Logo_Pass.Pass.trim()
                ?
                router(`/louis_Vuitton/Backpacks`)
                :
                TimeAttention()
            
            }

             
             >Войти</button>
        </div>
    </div>
    );
};

export default Greeting;
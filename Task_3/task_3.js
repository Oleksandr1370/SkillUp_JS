const ADMIN_PASSWORD = "qwerty";
let message;
    let usePW = prompt("Введить пароль:");
    for(usePW !== null;;)  
         if (usePW == null) {
         message = "Скасоване користувачем!";
         break
        } else if (usePW == ADMIN_PASSWORD) {
         message = "Ласкаво просимо!";
         break
        } else {
          message = "Ви не прави, не вірний пароль!";
    }
    alert(message);
    // // console.log(usePW, ADMIN_PASSWORD, message);
    // while(usePW=!null){
    //   let usePW = prompt("Введить пароль ще раз:");
    //    break
    // }
    // // console.log(usePW);
    //    let usePW = prompt("Введить пароль ще раз:");
  }
  // if (usePW == ADMIN_PASSWORD){
  //     message = "Ласкаво просимо!";
  //  break  
  // }
  }
  // else {
  //   message = "Ви не прави, не вірний пароль!";
  //   let usePW = prompt("Введить пароль ще раз:");
  

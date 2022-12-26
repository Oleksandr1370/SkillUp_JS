// const credits = 23580;
// const pricePerDroid = 3000;
// let numeroSity=1111;
    // console.log(typeof (numeroSity));
    // for(numeroSity > 0;;){
      const credits=23580;
      const pricePerDroid=3000;
      console.log(credits, pricePerDroid)
      let message;
      let numeroSity = prompt("Введить кількість дроїдів:");
      let numeroSityN = Number(numeroSity)
      let totalPrice = pricePerDroid * (numeroSityN);
      console.log(message, numeroSity, numeroSityN, totalPrice)   
      if (numeroSity == null) {
              message = "Скасоване користувачем!";}
          else if (numeroSityN > 0 && totalPrice < credits) {
              message = "Ви купили"+String.fromCodePoint(32)+(numeroSity)+String.fromCodePoint(32)+"дроїда"+ String.fromCodePoint(44)+
              String.fromCodePoint(32)+"на рахунку залишилося"+String.fromCodePoint(32)+
              (credits-totalPrice)+String.fromCodePoint(32)+"кредитів";}
          else if (totalPrice > credits){
             message = "Недостатньо коштів на рахунку!";}
       alert(message)     
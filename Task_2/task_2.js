const total=100;
    let ordered = prompt("Вкажить необхідну кількість товару", 0);
            for( Boolean(ordered);;){
        if (ordered > total){
            console.log("На складі недостатньо товарів!");
            let ordered = prompt("Зменьшити кількість товару");
            if(ordered <total){
              console.log("Замовлення прийнято, з Вами зв/'яжиться менеджер."); 
        break; 
            }
        } else{
        console.log("Замовлення прийнято, з Вами зв/'яжиться менеджер."); 
        break;     
            }}
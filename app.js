let text = document.querySelector(".text");
        let numbers = document.querySelectorAll(".numbers");
        let equel = document.querySelector(".equel");
        let del = document.querySelector(".del");
        let oper = document.querySelectorAll(".oper");
        let dellAll = document.querySelector(".del-all");
        

        numbers.forEach(el => {
            el.addEventListener("click", () => {
                text.value += el.innerText;
            });
        });
        del.addEventListener("click", () => {
               if(text.value != "") {
                text.value = text.value.slice(0, text.value.length-1);           
            }
        });

        oper.forEach(el => {
            el.addEventListener("click", ()=> {
                if(text.value != "" && !isNaN(+text.value)) {
                    text.value += el.innerText;
                }
                else {
                    text.value="Введите число";
                    setTimeout(()=>{text.value = "";},3000);
                }
            });
        });

        equel.addEventListener("click", () =>{
            if(text.value != "") {
            text.value = eval(text.value);}
        }); 
        
        dellAll.addEventListener("click", () => {
            text.value = "";
        });
        

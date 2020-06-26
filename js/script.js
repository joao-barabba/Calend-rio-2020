setTimeout(ApresentarModal,5000);
    function ApresentarModal(){
        document.querySelector(".modal").style.display="block";
        document.querySelector(".modal a"). addEventListener ("click",FecharModal);

    }

    function FecharModal(){
        document.querySelector(".modal").style.display="none";
    }


function dateFormat (){
   const currentComplteDate = document.getElementById("currentComplteDate");
   const currentDay = document.getElementById("currentDay");
   const currentDayMonth = document.getElementById("currentDayMonth");

    currentComplteDate.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.textContent = moment().format('dddd');  
    currentDayMonth.textContent = moment().format("MMM Do YY"); 

}

function relativeTime() {
    const inputTime = document.getElementsByTagName('input')[0].value;
    const tempoAnos = document.getElementById('tempoAnos');
    const tempoDias = document.getElementById('tempoDias');
  
    const momentYear = moment(inputTime, "YYYYMMDD").fromNow();
    const momentDay = moment().startOf(inputTime).fromNow(); 
  

    tempoAnos.textContent = momentYear;
    tempoDias.textContent = momentDay;
  
    document.getElementsByTagName('input')[0].value = '';
  }

  function localSupport() {
    const formatLocal = document.getElementById("formatLocal");
    const formatL = document.getElementById("formatL");
    const formatLL = document.getElementById("formatLL");
    const formatLLL = document.getElementById("formatLLL");
    const formatLLLL = document.getElementById("formatLLLL");


    formatLocal.textContent = moment.locale(); 
    formatL.textContent = moment().format('L');
    formatLL.textContent = moment().format('LL');
    formatLLL.textContent = moment().format('LLL');
    formatLLLL.textContent = moment().format('LLLL');
  }

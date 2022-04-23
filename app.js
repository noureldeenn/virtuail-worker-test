// Listen for submit

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
  // UI

  const UIamount = document.getElementById("amount").value;
  const UImedia = document.getElementById("media").value;
  const UIcorp = document.getElementById("corp").value;
  const UIteam = document.getElementById("team").value;

  // Calculate

  const vender = parseFloat(UIamount);
  const add = parseFloat(UImedia);
  const corp = parseFloat(UIcorp);
  const team = parseFloat(UIteam);
  const sum = vender + add + corp + team


  //Compute unlimitedRewards

  const unlimitedRewards = sum * 1.1;

  //Compute Total lifetimeRewards

  const lifetimeRewards = sum * 1.2;

  //Show results

  document.getElementById("unlimitedRewards").innerHTML = "$" + unlimitedRewards;

  document.getElementById("lifetimeRewards").innerHTML = "$" + lifetimeRewards;



  e.preventDefault();
}

function Brex() {

    // UI

    const UIamount = document.getElementById("amount").value;
    const UImedia = document.getElementById("media").value;
    const UIcorp = document.getElementById("corp").value;
    const UIteam = document.getElementById("team").value;
  
    // Calculate
  
    const vender = parseFloat(UIamount);
    const add = parseFloat(UImedia);
    const corp = parseFloat(UIcorp);
    const team = parseFloat(UIteam);
    const sum = vender + add + corp + team

    //Compute unlimitedRewards

    const Brex = sum * 0.3;

    document.getElementById("brex").innerHTML = "$" + Brex;
}


function stripe() {

  // UI

  const UIamount = document.getElementById("amount").value;
  const UImedia = document.getElementById("media").value;
  const UIcorp = document.getElementById("corp").value;
  const UIteam = document.getElementById("team").value;

  // Calculate

  const vender = parseFloat(UIamount);
  const add = parseFloat(UImedia);
  const corp = parseFloat(UIcorp);
  const team = parseFloat(UIteam);
  const sum = vender + add + corp + team

  //Compute unlimitedRewards

  const Brex = sum * 0.29;

  document.getElementById("stripe").innerHTML = "$" + Brex;
}


function amex() {

  // UI

  const UIamount = document.getElementById("amount").value;
  const UImedia = document.getElementById("media").value;
  const UIcorp = document.getElementById("corp").value;
  const UIteam = document.getElementById("team").value;

  // Calculate

  const vender = parseFloat(UIamount);
  const add = parseFloat(UImedia);
  const corp = parseFloat(UIcorp);
  const team = parseFloat(UIteam);
  const sum = vender + add + corp + team

  //Compute unlimitedRewards

  const Brex = sum * 1.3;

  document.getElementById("amex").innerHTML = "$" + Brex;
}
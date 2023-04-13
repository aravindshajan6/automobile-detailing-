function handlesubmit() {
  let message = document.getElementById('message');
  const regNo = document.getElementById('regNo').value;
  const manYear = document.getElementById('manYear').value;
  const modelNo = document.getElementById('modelNo').value;
  const vType = document.getElementById('vType').value;
  let regex = new RegExp(/^[A-Z]{2}[-][0-9]{1,2}[-][A-Z]{1,2}[-][0-9]{3,4}$/);
  message.style.display = 'none';
  if (regNo.length == 0) {
    message.innerText = 'Please enter valid Registration Number!';
    message.style.display = 'block';
    return false;
  }
  // Return true if the registration number matches
  if (regex.test(regNo.toUpperCase()) == false) {
    message.innerText = 'Please enter valid Registration Number!';
    message.style.display = 'block';
    return false;
  }

  if (manYear.length == 0) {
    message.innerText = 'Please enter Manufactured year!';
    message.style.display = 'block';
    return false;
  }
  if (modelNo.length == 0) {
    message.innerText = 'Please enter Model number!';
    message.style.display = 'block';
    return false;
  }
  if (vType.length == 0) {
    message.innerText = 'Please enter vehicle type!';
    message.style.display = 'block';
    return false;
  }

  alert('Booking complete');
  return false;
}

let off10 = document.getElementById('off10');
let off20for2 = document.getElementById('off20for2');
let off20for4 = document.getElementById('off20for4');
let off5 = document.getElementById('off5');

let offerCount = {
  //keeps track of the total no of offers selected
  offeron: 0,
  offerc: 0,
};

//listening for mouse click on offer 1
off10.addEventListener('click', function () {
  if (offerCount.offerc < 2) {
    offerCount = checkoffer(offerCount, off10.value);
    off10.value = offerCount.offeron;
    // alert(offerCount.offeron);
    // alert(offerCount.offerc);
  } else if (offerCount.offerc == 2) {
    if (document.getElementById('off10').checked == false) {
      document.getElementById('off10').checked = false;
      offerCount.offerc--;
      document.getElementById('off10').value = 0;
      // alert(offerCount.offerc);
    } else if (document.getElementById('off10').checked == true) {
      document.getElementById('off10').checked = false;
    }
  }
});

//listening for mouse click on offer 2
off20for2.addEventListener('click', function () {
  if (document.getElementById('vType').value == '2 Wheeler') {
    if (offerCount.offerc < 2) {
      offerCount = checkoffer(offerCount, off20for2.value);
      off20for2.value = offerCount.offeron;
      // alert(offerCount.offeron);
      // alert(offerCount.offerc);
    } else if (offerCount.offerc == 2) {
      if (document.getElementById('off20for4').checked == false) {
        document.getElementById('off20for2').checked = false;
        offerCount.offerc--;
        document.getElementById('off20for2').value = 0;
        // alert(offerCount.offerc);
      } else if (document.getElementById('off20for2').checked == true) {
        document.getElementById('off20for2').checked = false;
      }
    }
  } else {
    document.getElementById('off20for2').checked = false;
    alert('Cannot have this offer!');
  }
});

//listening for mouse click on offer 3
off20for4.addEventListener('click', function () {
  if (document.getElementById('vType').value == '4 Wheeler') {
    if (offerCount.offerc < 2) {
      offerCount = checkoffer(offerCount, off20for4.value);
      off20for4.value = offerCount.offeron;
      // alert(offerCount.offeron);
      // alert(offerCount.offerc);
    } else if (offerCount.offerc == 2) {
      if (document.getElementById('off20for4').checked == false) {
        document.getElementById('off20for4').checked = false;
        offerCount.offerc--;
        document.getElementById('off20for4').value = 0;
        // alert(offerCount.offerc);
      } else if (document.getElementById('off20for4').checked == true) {
        document.getElementById('off20for4').checked = false;
      }
    }
  } else {
    document.getElementById('off20for4').checked = false;
    alert('Cannot have this offer!');
  }
});

//listening for mouse click on offer 4
off5.addEventListener('click', function () {
  if (offerCount.offerc < 2) {
    offerCount = checkoffer(offerCount, off5.value);
    off5.value = offerCount.offeron;
    // alert(offerCount.offeron);
    // alert(offerCount.offerc);
  } else if (offerCount.offerc == 2) {
    if (document.getElementById('off5').checked == false) {
      document.getElementById('off5').checked = false;
      offerCount.offerc--;
      document.getElementById('off5').value = 0;
      // alert(offerCount.offerc);
    } else if (document.getElementById('off5').checked == true) {
      document.getElementById('off5').checked = false;
    }
  }
});

//add or remove offers
function checkoffer(oc, value) {
  if (value == 0) {
    alert('Offer Added!');
    oc.offeron = 1;
    oc.offerc += 1;
  } else if (value == 1) {
    alert('Offer removed');
    oc.offeron = 0;
    oc.offerc -= 1;
  }
  return oc;
}

//calculate final amount with the selected offers
function calcOffers() {
  let vehicleType = document.getElementById('vType').value;
  let discount = 0;
  if (vehicleType == '2 Wheeler') {
    let total = 500;
    if (document.getElementById('off10').checked == true) {
      discount = discount + 10;
    }
    if (document.getElementById('off20for2').checked == true) {
      discount = discount + 20;
    }
    if (document.getElementById('off20for4').checked == true) {
      discount = discount;
    }
    if (document.getElementById('off5').checked == true) {
      discount = discount + 5;
    }
    // alert(discount);
    let totaldiscount = (discount / 100) * total;
    total = total - totaldiscount;
    // alert(total);
    document.getElementById('totala').value = total;
  }

  if (vehicleType == '4 Wheeler') {
    let total = 1500;
    if (document.getElementById('off10').checked == true) {
      discount = discount + 10;
    }
    if (document.getElementById('off20for2').checked == true) {
      discount = discount;
    }
    if (document.getElementById('off20for4').checked == true) {
      discount = discount + 20;
    }
    if (document.getElementById('off5').checked == true) {
      discount = discount + 5;
    }
    // alert(discount);
    let totaldiscount = (discount / 100) * total;
    total = total - totaldiscount;
    // alert(total);
    document.getElementById('totala').value = total;
  }
}

function hitungTotal() {
  var namastr = document.beli.name.value;
  var emailstr = document.beli.email.value;
  var addressstr = document.beli.address.value;
  var optionstr = document.beli.option.value;
  var jumlahstr = parseFloat(document.beli.jumlah.value);
  var ht = 0.0;
  var total = 0.0;

  document.beli.oname.value = namastr;
  document.beli.oemail.value = emailstr;
  document.beli.oaddress.value = addressstr;
  document.beli.ooption.value = optionstr;
  document.beli.ojumlah.value = jumlahstr;

  if (optionstr == 'Cheese Cake') {
    ht = 50000;
  } else if (optionstr == 'Cream Cake') {
    ht = 50000;
  } else if (optionstr == 'Tart Cake') {
    ht = 50000;
  } else if (optionstr == 'Redvelvet Cake') {
    ht = 75000;
  } else if (optionstr == 'Strawberry Cake') {
    ht = 80000;
  } else if (optionstr == 'Manggo Cake') {
    ht = 80000;
  }

  total = jumlahstr * ht;

  document.beli.obarang.value = eval(ht);
  document.beli.ototal.value = eval(total);
}

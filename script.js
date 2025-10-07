    function calculateTip() {
      const bill = parseFloat(document.getElementById('bill').value);
      const tipPercent = parseFloat(document.getElementById('tip').value);
      const people = parseInt(document.getElementById('people').value);

      if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
        document.getElementById('result').innerText = "Please enter valid values.";
        return;
      }

      const tip = bill * (tipPercent / 100);
      const total = bill + tip;
      const perPerson = total / people;

      document.getElementById('result').innerText = `Each person should pay: $${perPerson.toFixed(2)}`;
    }
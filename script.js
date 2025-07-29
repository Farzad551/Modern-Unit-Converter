const toggle = document.getElementById("themeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark", toggle.checked);
});
const units = {
  distance: ["meter", "kilometer", "mile", "yard", "foot"],
  weight: ["gram", "kilogram", "pound", "ounce", "ton"],
  temperature: ["celsius", "fahrenheit", "kelvin"],
  time: ["second", "minute", "hour", "day"],
  speed: ["m/s", "km/h", "mph", "knot"],
  area: ["square meter","square kilometer","square mile","square foot","acre"],
  volume: ["milliliter","liter","cubic meter","cubic inch","cubic foot","gallon"],
  energy: ["joule","kilojoule","calorie","kilocalorie","watt hour","kilowatt hour"],
  power: ["watt", "kilowatt", "horsepower"],
  data: ["bit", "byte", "kilobyte", "megabyte", "gigabyte"],
};
const conversionFunctions = {
  distance: (v, f, t) => {
    const toMeter = {
      meter: 1,
      kilometer: 1000,
      mile: 1609.34,
      yard: 0.9144,
      foot: 0.3048,
    };
    return (v * toMeter[f]) / toMeter[t];
  },
  weight: (v, f, t) => {
    const toGram = {
      gram: 1,
      kilogram: 1000,
      pound: 453.592,
      ounce: 28.3495,
      ton: 1e6,
    };
    return (v * toGram[f]) / toGram[t];
  },
  temperature: (v, f, t) => {
    const c =
      f === "celsius"
        ? v
        : f === "fahrenheit"
        ? ((v - 32) * 5) / 9
        : v - 273.15;
    return t === "celsius"
      ? c
      : t === "fahrenheit"
      ? (c * 9) / 5 + 32
      : c + 273.15;
  },
  time: (v, f, t) => {
    const toSec = { second: 1, minute: 60, hour: 3600, day: 86400 };
    return (v * toSec[f]) / toSec[t];
  },
  speed: (v, f, t) => {
    const toMS = { "m/s": 1, "km/h": 0.277778, mph: 0.44704, knot: 0.514444 };
    return (v * toMS[f]) / toMS[t];
  },
  area: (v, f, t) => {
    const toSM = {
      "square meter": 1,
      "square kilometer": 1e6,
      "square mile": 2.59e6,
      "square foot": 0.092903,
      acre: 4046.86,
    };
    return (v * toSM[f]) / toSM[t];
  },
  volume: (v, f, t) => {
    const toL = {
      milliliter: 0.001,
      liter: 1,
      "cubic meter": 1000,
      "cubic inch": 0.0163871,
      "cubic foot": 28.3168,
      gallon: 3.78541,
    };
    return (v * toL[f]) / toL[t];
  },
  energy: (v, f, t) => {
    const toJ = {
      joule: 1,
      kilojoule: 1000,
      calorie: 4.184,
      kilocalorie: 4184,
      "watt hour": 3600,
      "kilowatt hour": 3.6e6,
    };
    return (v * toJ[f]) / toJ[t];
  },
  power: (v, f, t) => {
    const toW = { watt: 1, kilowatt: 1000, horsepower: 745.7 };
    return (v * toW[f]) / toW[t];
  },
  data: (v, f, t) => {
    const toBit = {
      bit: 1,
      byte: 8,
      kilobyte: 8e3,
      megabyte: 8e6,
      gigabyte: 8e9,
    };
    return (v * toBit[f]) / toBit[t];
  },
};
const categorySelect = document.getElementById("category");
const fromUnitSelect = document.getElementById("fromUnit");
const toUnitSelect = document.getElementById("toUnit");
const valueInput = document.getElementById("value");
const resultDiv = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  const list = units[selected];
  fromUnitSelect.innerHTML = "";
  toUnitSelect.innerHTML = "";
  list.forEach((unit) => {
    const opt1 = document.createElement("option");
    opt1.value = unit;
    opt1.textContent = unit;
    const opt2 = opt1.cloneNode(true);
    fromUnitSelect.appendChild(opt1);
    toUnitSelect.appendChild(opt2);
  });
});
convertBtn.addEventListener("click", () => {
  const category = categorySelect.value;
  const from = fromUnitSelect.value;
  const to = toUnitSelect.value;
  const val = parseFloat(valueInput.value);
  if (isNaN(val) || !from || !to) {
    resultDiv.textContent = "Please enter a valid value and select units.";
    return;
  }
  const result = conversionFunctions[category](val, from, to);
  resultDiv.textContent = `Result: ${result.toFixed(4)}`;
});

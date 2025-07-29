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
import lookup from "country-code-lookup";
export function findCountryCode(id) {
  if (id == "United States of America") {
    return "USA";
  }
  let data = lookup.byCountry(id);
  let code = data?.internet;
  return code;
}
export function timeConvert(n) {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + "min";
}

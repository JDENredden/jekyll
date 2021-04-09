var countries = {
  "UK" : "United Kingdom",
  "US" : "United States of America",
  "AU" : "Australia",
  "HK" : "Hong Kong",
  "DE" : "Germany",
  "RO" : "Romania",
  "JP" : "Japan",
  "FR" : "France",
  "CA" : "Canada",
  "NL" : "Netherlands",
  "BR" : "Brazil",
  "ES" : "Spain",
  "NO" : "Norway",
  "RU" : "Russia",
  "IT" : "Italy",
  "ZA" : "South Africa",
  "IN" : "India",
  "CZ" : "Czech Republic",
  "TR" : "Turkey",
  "PL" : "Poland",
  "TH" : "Thailand",
  "VN" : "Vietnam",
  "LT" : "Lithuania",
  "NZ" : "New Zealand",
  "KR" : "South Korea",
  "AT" : "Austria",
  "FI" : "Finland",
  "IL" : "Israel",
  "AE" : "United Arab Emirates",
  "SE" : "Sweden",
  "CH" : "Switzerland"
}

function countryLookup(countryCode) {
  return countries[countryCode];
}

function serverLookup(val) {
  var result = "";
  
  var data = {
    "UK"    : "London, UK",
    "NY"	: "New York City, US",
    "WA"	: "Seattle, US",
    "SG"	: "Singapore, SG",
    "DE"	: "Frankfurt, DE",
    "TX"	: "Dallas, US",
    "HK"	: "Hong Kong, HK",
    "LA"	: "Los Angeles, US",
    "GA"	: "Atlanta, US",
    "SYD"	: "Sydney, AU",
    "BU"	: "Bucharest, RO",
    "JP"	: "Tokyo, JP",
    "FR"	: "Paris, FR",
    "KC"	: "Kansas City, US",
    "MI"	: "Miami, US",
    "CA"	: "Beauharnois, CA",
    "AMS"	: "Amsterdam, NL",
    "SIL"	: "San Jose, US",
    "BR"	: "Sao Paulo, BR",
    "ES"	: "Madrid, ES",
    "IL"	: "Chicago, US",
    "NO"	: "Oslo, NO",
    "RU"	: "Moscow, RU",
    "IT"	: "Milan, IT",
    "JH"	: "Johannesburg, ZA",
    "IN"	: "Bangalore, IN",
    "CZ"	: "Prague, CZ",
    "TR"	: "Istanbul, TR",
    "PL"	: "Warsaw, PL",
    "CA"	: "Toronto, CA",
    "SLC"	: "Salt Lake City, US",
    "TH"	: "Bangkok, TH",
    "VN"	: "Hanoi, VN",
    "LT"	: "Vilnius, LT",
    "PER"	: "Perth, AU",
    "MEL"	: "Melbourne, AU",
    "AUC"	: "Auckland, NZ",
    "BRB"	: "Brisbane, AU",
    "ASB"	: "Ashburn, US",
    "KR"	: "Seoul, KR",
    "WDC"	: "Washington D.C., US",
    "ADL"	: "Adelaide, AU",
    "MU"	: "Mumbai, IN",
    "AT"	: "Vienna, AT",
    "FI"	: "Helsinki, FI",
    "ISR"	: "Tel Aviv, IL",
    "VA"	: "Vancouver, CA",
    "AE"	: "Dubai, AE",
    "DEN"	: "Denver, US",
    "SE"	: "Stockholm, SE",
    "CH"	: "Zurich, CH",
    "ND"	: "New Delhi, IN"
  };
  
  result = data[val];
  
  return result;
}
  
(function getHeader() {
  var req = new XMLHttpRequest();
  req.open('GET', document.location, false);
  req.send(null);
  var server = req.getResponseHeader("server");
  
  if (server.substr(0,5) == "Bunny") {
    var provider = "BunnyCDN";
    var serverCode = server.substr(9,3).split("1")[0];
    var city = serverLookup(serverCode).split(",")[0];
    var countryCode = serverLookup(serverCode).split(", ")[1];
    var country = countryLookup(countryCode);
    var countryEmoji = countryCode.replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));
    var cdnRequest = req.getResponseHeader("cdn-requestcountrycode").replace(/./g, char => String.fromCodePoint(char.charCodeAt(0)+127397));
    document.getElementById("cdnRequest").innerHTML = "(in " + cdnRequest + ") ";
  } else {
    var provider = "Scaleway";
    var serverCode = "FR-PAR-1";
    var city = "Paris";
    var country = "France"
    var countryEmoji = "🇫🇷 ";
  }
  
  document.getElementById("server").innerHTML = serverCode;
  document.getElementById("city").innerHTML = city;
  document.getElementById("country").innerHTML = country + " " + countryEmoji;
  document.getElementById("provider").innerHTML = provider;
  
})();
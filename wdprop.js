/*
 * Author: John Samuel
 */
function createDivProperties(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " properties";
  properties.appendChild(total);
  for ( const result of results.bindings ) {
    for ( const variable of vars ) {
      var property = document.createElement("div"); 
      property.setAttribute('class', "property");
      var a = document.createElement("a"); 
      a.setAttribute('href', "property.html?property=" + result['property'].value.replace("http://www.wikidata.org/entity/", ""));
      var text = document.createTextNode(result[variable].value.replace("http://www.wikidata.org/entity/", ""));
      a.appendChild(text);
      property.appendChild(a);
      properties.appendChild(property);
    }
  }
}

function createDivClasses(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " classes";
  properties.appendChild(total);

  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Item";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Class label";
  th.appendChild(td);
  table.append(th);

  for ( const result of results.bindings ) {
    tr = document.createElement("tr");

    td = document.createElement("td"); 
    td.setAttribute('class', "property");
    var a = document.createElement("a"); 
    a.setAttribute('href', "class.html?class=" + result['item'].value.replace("http://www.wikidata.org/entity/", ""));
    var text = document.createTextNode(result['item'].value.replace("http://www.wikidata.org/entity/", ""));
    a.append(text);
    td.appendChild(a);
    tr.appendChild(td);
  
    td = document.createElement("td"); 
    text = null;
    if(result.hasOwnProperty("label")) {
      text = document.createTextNode(result['label'].value);
    }
    else {
      text = document.createTextNode(result['item'].value.replace("http://www.wikidata.org/entity/", ""));
    }
    td.appendChild(text);
    tr.appendChild(td);
    table.appendChild(tr);
  }
  properties.appendChild(table);
}

function createDivClassProperties(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " properties";
  properties.appendChild(total);

  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Item";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Property label";
  th.appendChild(td);
  table.append(th);

  for ( const result of results.bindings ) {
    tr = document.createElement("tr");

    td = document.createElement("td"); 
    td.setAttribute('class', "property");
    var a = document.createElement("a"); 
    a.setAttribute('href', "property.html?property=" + result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    var text = document.createTextNode(result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    a.append(text);
    td.appendChild(a);
    tr.appendChild(td);
  
    td = document.createElement("td"); 
    text = null;
  
    if(result.hasOwnProperty("label")) {
      var text = document.createTextNode(result['label'].value);
      a.appendChild(text);
    }
    else {
      var text = document.createTextNode(result['property'].value.replace("http://www.wikidata.org/entity/", ""));
      a.appendChild(text);
    }
    td.appendChild(text);
    tr.appendChild(td);
    table.appendChild(tr);
  }
  properties.appendChild(table);
}

function createDivComparisonResults(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Translation statistics";
  while (properties.hasChildNodes()) {
    properties.removeChild(properties.lastChild);
  }
  properties.appendChild(total);
  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Language";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Property";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Label";
  th.appendChild(td);
  table.appendChild(th);
  var tr = "";
  for ( const result of results.bindings ) {
    tr = document.createElement("tr");

    td = document.createElement("td"); 
    td.innerHTML = result['language'].value;
    tr.appendChild(td);

    var property = document.createElement("th"); 
    property.setAttribute('class', "property");
    var a = document.createElement("a"); 
    a.setAttribute('href', "property.html?property=" + result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    var text = document.createTextNode(result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    a.appendChild(text);
    property.appendChild(a);
    tr.appendChild(property);

    td = document.createElement("td"); 
    td.innerHTML = result['label'].value;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  properties.appendChild(table);
}

function createDivSearchProperties(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " properties";
  while (properties.hasChildNodes()) {
    properties.removeChild(properties.lastChild);
  }
  properties.appendChild(total);
  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Property";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Label";
  th.appendChild(td);
  table.appendChild(th);
  var tr = "";
  for ( const result of results.bindings ) {
    tr = document.createElement("tr");

    var property = document.createElement("th"); 
    property.setAttribute('class', "property");
    var a = document.createElement("a"); 
    a.setAttribute('href', "property.html?property=" + result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    var text = document.createTextNode(result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    a.appendChild(text);
    property.appendChild(a);
    tr.appendChild(property);

    td = document.createElement("td"); 
    td.innerHTML = result['label'].value;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  properties.appendChild(table);
}

function getColor(colors, index, total) {
  var colorCount = colors.length;
  var groupSize = total/colorCount;

  for (i = 0; i * groupSize < total; i ++) {
    if (index >= i * groupSize && index <= (i + 1) * groupSize) {
      return colors[i];
    }
  }
}

function createDivTranslatedAliasesCount(divId, json) {
  const { head: { vars }, results } = json;
  var languages = document.getElementById(divId);
  var colors =  ["#002171", "#004ba0", 
                 "#0069c0", "#2286c3", "#bbdefb"]; 
  var backgroundColors =  ["#ffffff", "#ffffff", 
                 "#000000", "#000000", "#000000"]; 
 
  var count = 0;
  for ( const result of results.bindings ) {
    var language = document.createElement("div"); 
    language.setAttribute('class', "language");

    language.style['background-color'] = getColor(colors, count, results.bindings.length);

    var a = document.createElement("a"); 
    a.setAttribute('href', "language.html?language=" + result['languageCode'].value);
    a.style['color'] = getColor(backgroundColors, count, results.bindings.length);
    var text = document.createTextNode(result['languageCode'].value + " (" + result['total'].value +")");
    a.appendChild(text);
    language.appendChild(a);
    languages.appendChild(language);

    count++;
  }
}

function createDivTranslatedValues(divId, json) {
  const { head: { vars }, results } = json;

  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " properties";
  properties.appendChild(total);

  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Property";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Value";
  th.appendChild(td);
  table.appendChild(th);
  for ( const result of results.bindings ) {
    tr = document.createElement("tr");

    var property = document.createElement("div"); 
    property.setAttribute('class', "property");
    var a = document.createElement("a"); 
    a.setAttribute('href', "https://www.wikidata.org/wiki/Property:" + result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    var text = document.createTextNode(result['property'].value.replace("http://www.wikidata.org/entity/", ""));
    a.appendChild(text);
    property.appendChild(a);
    td = document.createElement("td"); 
    td.appendChild(property);
    tr.appendChild(td);

    td = document.createElement("td"); 
    td.innerHTML = result['label'].value;
    tr.appendChild(td);
    table.appendChild(tr);
  }
  properties.appendChild(table);
}

function createDivTranslatedLabelsCount(divId, json) {
  const { head: { vars }, results } = json;
  var languages = document.getElementById(divId);
  var colors =  ["#002171", "#004ba0", 
                 "#0069c0", "#2286c3", "#bbdefb"]; 
  var backgroundColors =  ["#ffffff", "#ffffff", 
                 "#000000", "#000000", "#000000"]; 
 
  var count = 0;
  for ( const result of results.bindings ) {
    var language = document.createElement("div"); 
    language.setAttribute('class', "language");

    language.style['background-color'] = getColor(colors, count, results.bindings.length);

    var a = document.createElement("a"); 
    a.setAttribute('href', "./language.html?language=" + result['languageCode'].value);
    a.style['color'] = getColor(backgroundColors, count, results.bindings.length);
    var text = document.createTextNode(result['languageCode'].value + " (" + result['total'].value +")");
    a.appendChild(text);
    language.appendChild(a);
    languages.appendChild(language);

    count++;
  }
}

function createDivTranslatedDescriptionsCount(divId, json) {
  const { head: { vars }, results } = json;
  var languages = document.getElementById(divId);
  var colors =  ["#002171", "#004ba0", 
                 "#0069c0", "#2286c3", "#bbdefb"]; 
  var backgroundColors =  ["#ffffff", "#ffffff", 
                 "#000000", "#000000", "#000000"]; 
 
  var count = 0;
  for ( const result of results.bindings ) {
    var language = document.createElement("div"); 
    language.setAttribute('class', "language");

    language.style['background-color'] = getColor(colors, count, results.bindings.length);

    var a = document.createElement("a"); 
    a.setAttribute('href', "./language.html?language=" + result['languageCode'].value);
    a.style['color'] = getColor(backgroundColors, count, results.bindings.length);
    var text = document.createTextNode(result['languageCode'].value + " (" + result['total'].value +")");
    a.appendChild(text);
    language.appendChild(a);
    languages.appendChild(language);

    count++;
  }
}

function createDivLanguage(divId, json) {
  const { head: { vars }, results } = json;
  var languages = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " languages";
  languages.appendChild(total);
  for ( const result of results.bindings ) {
    for ( const variable of vars ) {
      var language = document.createElement("div"); 
      language.setAttribute('class', "language");
      var a = document.createElement("a"); 
      a.setAttribute('href', "./language.html?language=" + result[variable].value);
      var text = document.createTextNode(result[variable].value);
      a.appendChild(text);
      language.appendChild(a);
      languages.appendChild(language);
    }
  }
}

function createDivPropertyDetails(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " properties";
  properties.appendChild(total);
  for ( const result of results.bindings ) {
    for ( const variable of vars ) {
      var property = document.createElement("div"); 
      property.setAttribute('class', "property");
      var a = document.createElement("a"); 
      a.setAttribute('href', "property.html?property=" + result[variable].value.replace("http://www.wikidata.org/entity/", ""));
      var text = document.createTextNode(result[variable].value.replace("http://www.wikidata.org/entity/", ""));
      a.appendChild(text);
      property.appendChild(a);
      properties.appendChild(property);
    }
  }
}

function queryWikidata(sparqlQuery, func, divId) {
     /*
      * Following script is a modified form of automated
      * script generated from Wikidata Query services
      */
     var div = document.getElementById(divId);
     var fetchText = document.createElement("h4"); 
     fetchText.innerHTML = "Fetching data...";
     div.append(fetchText);

     const endpointUrl = 'https://query.wikidata.org/sparql',
     fullUrl = endpointUrl + '?query=' + encodeURIComponent( sparqlQuery )+"&format=json";
     headers = { 'Accept': 'application/sparql-results+json' };

     fetch( fullUrl, { headers } ).then( body => body.json() ).then( json => {
       div.removeChild(fetchText);
       func(divId, json)
     } );
}

function getLanguages() {
  const sparqlQuery = `
      SELECT DISTINCT ?language
      WHERE
      {
        [] wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      }
      ORDER by ?language
      `;
  queryWikidata(sparqlQuery, createDivLanguage, "languages");
}

function getProperty(item, language) {
  const sparqlQuery = `
      SELECT ?propertyLabel
      {
        wd:`+ item +` rdfs:label ?propertyLabel FILTER (lang(?propertyLabel) = "`+language+`").
      }
      `;
  queryWikidata(sparqlQuery, createDivProperty, "property");
}

function getClasses() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }

  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT DISTINCT ?item ?label
    {
      {
        SELECT ?item ?label
        WHERE
        {
          ?item wdt:P1963 [].
          OPTIONAL{ ?item rdfs:label ?label FILTER (lang(?label)="` + language + `").}.
        }
      }
      UNION
      {
        SELECT ?item ?label
        WHERE
        {
          ?property a wikibase:Property;
                    wdt:P31 ?item.
          OPTIONAL{ ?item rdfs:label ?label FILTER (lang(?label)="` + language + `").}.
        }
      }
    }
    ORDER by ?label
    `;
  queryWikidata(sparqlQuery, createDivClasses, "propertyClasses");
}

function getClassProperties() {
  var language = "en";
  var item = "Q9143";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
    reg = new RegExp("class=([^&#=]*)");
    value = reg.exec(window.location.search);
    if (value != null) {
       item = decodeURIComponent(value[1]);
    }
  }

  getProperty(item, language);

  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT DISTINCT ?property ?label
    {
      {
        SELECT ?property ?label
        WHERE
        {
          wd:`+ item +` wdt:P1963 ?property.
          OPTIONAL{ ?property rdfs:label ?label FILTER (lang(?label)="`+ language +`").}
        }
      }
      UNION
      {
        SELECT DISTINCT ?property ?label
        WHERE
        {
          ?property a wikibase:Property;
                    wdt:P31  wd:`+ item +`.
          OPTIONAL{ ?property rdfs:label ?label FILTER (lang(?label)="`+ language +`").}
        }
      } 
    }
    ORDER by ?label
    `;
  queryWikidata(sparqlQuery, createDivClassProperties, "classProperties");
}

function getMissingPropertyAliases() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }

  getLanguage(language);

  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT DISTINCT ?property
    WHERE
    {
      ?property rdf:type wikibase:Property.
      OPTIONAL{?property skos:altLabel ?alias FILTER (lang(?alias)="`
      + language + `")}
      FILTER (!BOUND(?alias)).
    }
    ORDER by ?alias
    `;
  queryWikidata(sparqlQuery, createDivProperties, "missingPropertyAliases");
}

function getPropertyLabelsNeedingTranslation() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }

  getLanguage(language);

  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?property
    WHERE
    {
      ?property rdf:type wikibase:Property.
      OPTIONAL{?property rdfs:label ?label FILTER (lang(?label)="`
      + language + `")}
      FILTER (!BOUND(?label)).
    }
    ORDER by ?property
    `;
  queryWikidata(sparqlQuery, createDivProperties, "propertyLabelsNeedingTranslation");
}

function createDivProperty(divId, json) { 
  const { head: { vars }, results } = json;
  var languageText = document.getElementById(divId);
  if(results.bindings.length > 0) {
    languageText.innerHTML = results.bindings[0]['propertyLabel']['value'];
  }
}

function createDivLanguageCode(divId, json) { 
  const { head: { vars }, results } = json;
  var languageText = document.getElementById(divId);
  if(results.bindings.length > 0) {
    languageText.innerHTML = results.bindings[0]['languageLabel']['value'];
  }
}

function getLanguage(language){
  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?languageLabel
    WHERE
    {
      ?languageWiki wdt:P424 "` + language + `";
               wdt:P407 ?language.   
      ?language rdfs:label ?languageLabel.
      FILTER(lang(?languageLabel) = "en")
       
    }
    LIMIT 1`;
  queryWikidata(sparqlQuery, createDivLanguageCode, "languageCode");
}

function getPropertyDescriptionsNeedingTranslation() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  
  getLanguage(language);
  
  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?property
    WHERE
    {
      ?property rdf:type wikibase:Property.
      OPTIONAL{?property schema:description ?description FILTER (lang(?description)="`
      + language + `")}
      FILTER (!BOUND(?description)).
    }
    ORDER by ?description
    `;
  queryWikidata(sparqlQuery, createDivProperties, "propertyDescriptionsNeedingTranslation");
}

function getCountOfTranslatedLabels() {
  const sparqlQuery = `
     SELECT ?languageCode (SUM(?count) as ?total)
     WHERE
     {
       SELECT ?property ?languageCode (count(?label) as ?count)
       WHERE
       {
         ?property a wikibase:Property;
                rdfs:label ?label.
         BIND(lang(?label) as ?languageCode)            
       }
       GROUP BY ?property ?languageCode
     }
     GROUP BY ?languageCode
     ORDER BY DESC(?total)    `;

  queryWikidata(sparqlQuery, createDivTranslatedLabelsCount, "translatedLabelsCount");
}

function getComparisonResultsOnLoad() {
  var search = "en, fr";
  if(window.location.search.length > 0) {
    var reg = new RegExp("languages=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       search = decodeURIComponent(value[1]);
    }
  }
  document.getElementById("languages").value = search;
  search = "('" + search + "')";
  search = search.replace(/ /g, "");
  search = search.replace(/,/g, "') ('");
  getComparisonResult(search);
}

function getComparisonResultsOnEvent(e, form) {
  e.preventDefault();
  var search = "en, fr";
  if(window.location.search.length > 0) {
    var reg = new RegExp("languages=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       search = decodeURIComponent(value[1]);
    }
  }
  search = "('" + document.getElementById("languages").value + "')";
  search = search.replace(/ /g, "");
  search = search.replace(/,/g, "') ('");
  getComparisonResult(search);
}

function getComparisonResult(search) {
  var sparqlQuery = `
      SELECT ?languageCode (COUNT(?label) as ?total)
      {
        VALUES (?languageCode) {` + search + `}
        [] a wikibase:Property;
             rdfs:label ?label FILTER(lang(?label)= ?languageCode)
      }
      GROUP BY ?languageCode
      ORDER BY DESC(?total)
     `;

  var compareDiv = document.getElementById("comparisonResults");
  while (compareDiv.hasChildNodes()) {
    compareDiv.removeChild(compareDiv.lastChild);
  }

  //URL to comparison page
  var compareURLdiv = document.createElement("div"); 
  var textURL = document.createTextNode("URL: ");
  compareURLdiv.appendChild(textURL);
  var compareURL = document.createElement("a"); 
  compareURL.setAttribute("href","./compare.html?languages=" + document.getElementById("languages").value);
  var text = document.createTextNode("compare.html?languages=" + document.getElementById("languages").value);
  compareURL.appendChild(text);
  compareURLdiv.appendChild(compareURL);
  compareDiv.appendChild(compareURLdiv);

  var labels = document.createElement("div"); 
  labels.setAttribute("id", "comparisonResultsLabels");
  var total = document.createElement("h3"); 
  total.innerHTML = "Count of translated labels";
  compareDiv.appendChild(total);
  compareDiv.appendChild(labels);  
  queryWikidata(sparqlQuery, createDivTranslatedLabelsCount, "comparisonResultsLabels");

  sparqlQuery = `
      SELECT ?languageCode (COUNT(?label) as ?total)
      {
        VALUES (?languageCode) {` + search + `}
        [] a wikibase:Property;
             schema:description ?label FILTER(lang(?label)= ?languageCode)
      }
      GROUP BY ?languageCode
      ORDER BY DESC(?total)
     `;

  var descriptions = document.createElement("div"); 
  descriptions.setAttribute("id", "comparisonResultsDescriptions");
  total = document.createElement("h3"); 
  total.innerHTML = "Count of translated descriptions";
  compareDiv.appendChild(total);
  compareDiv.appendChild(descriptions);
  queryWikidata(sparqlQuery, createDivTranslatedLabelsCount, "comparisonResultsDescriptions");

  sparqlQuery = `
      SELECT ?languageCode (COUNT(?label) as ?total)
      {
        VALUES (?languageCode) {` + search + `}
        [] a wikibase:Property;
             skos:altLabel ?label FILTER(lang(?label)= ?languageCode)
      }
      GROUP BY ?languageCode
      ORDER BY DESC(?total)
     `;

  var aliases = document.createElement("div"); 
  aliases.setAttribute("id", "comparisonResultsAliases");
  total = document.createElement("h3"); 
  total.innerHTML = "Count of available aliases";
  compareDiv.appendChild(total);
  compareDiv.appendChild(aliases);
  queryWikidata(sparqlQuery, createDivTranslatedLabelsCount, "comparisonResultsAliases");
}

function getTranslatedLabels() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  getLanguage(language);

  const sparqlQuery = `
    SELECT ?property ?label
    WHERE
    {
      ?property a wikibase:Property;
              rdfs:label ?label.
      FILTER(lang(?label) = "`+ language +`")            
    }
    ORDER by ?property
   `;
  queryWikidata(sparqlQuery, createDivTranslatedValues, "translatedLabels");
}

function getTranslatedDescriptions() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  getLanguage(language);

  const sparqlQuery = `
    SELECT ?property ?label
    WHERE
    {
      ?property a wikibase:Property;
              schema:description ?label.
      FILTER(lang(?label) = "`+ language +`")            
    }
    ORDER by ?property
   `;
  queryWikidata(sparqlQuery, createDivTranslatedValues, "translatedDescription");
}

function getTranslatedAliases() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  getLanguage(language);

  const sparqlQuery = `
    SELECT ?property ?label
    WHERE
    {
      ?property a wikibase:Property;
              skos:altLabel ?label.
      FILTER(lang(?label) = "`+ language +`")            
    }
    ORDER by ?property
   `;
  queryWikidata(sparqlQuery, createDivTranslatedValues, "translatedAliases");
}


function getCountOfTranslatedDescriptions() {
  const sparqlQuery = `
    SELECT ?languageCode (SUM(?count) as ?total)
    WHERE
    {
      SELECT ?property ?languageCode (count(?description) as ?count)
      WHERE
      {
        ?property a wikibase:Property;
                schema:description ?description.
        BIND(lang(?description) as ?languageCode)            
      }
      GROUP BY ?property ?languageCode
    }
    GROUP BY ?languageCode
    ORDER BY DESC(?total) `;

  queryWikidata(sparqlQuery, createDivTranslatedDescriptionsCount, "translatedDescriptionsCount");
}

function getCountOfTranslatedAliases() {
  const sparqlQuery = `
   SELECT ?languageCode (SUM(?count) as ?total)
   WHERE
   {
     SELECT ?property ?languageCode (count(?altLabel) as ?count)
     WHERE
     {
       ?property a wikibase:Property;
                skos:altLabel ?altLabel.
       BIND(lang(?altLabel) as ?languageCode)            
     }
     GROUP BY ?property ?languageCode
   }
   GROUP BY ?languageCode
   ORDER BY DESC(?total) `;

  queryWikidata(sparqlQuery, createDivTranslatedAliasesCount, "translatedAliasesCount");
}

function getLanguagesWithUntranslatedLabels() {
  const sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      ?wikipedia wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {[a wikibase:Property] rdfs:label ?label. BIND(lang(?label) as ?language)}
    }
    ORDER by ?language
   `;

  queryWikidata(sparqlQuery, createDivLanguage, "untranslatedLabelsInLanguages");
}

function getLanguagesWithUntranslatedDescriptions() {
  const sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      ?wikipedia wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {[a wikibase:Property] schema:description ?description. BIND(lang(?description) as ?language)}
    }
    ORDER by ?language
   `;

  queryWikidata(sparqlQuery, createDivLanguage, "untranslatedDescriptionsInLanguages");
}

function getLanguagesWithUntranslatedAliases() {
  const sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      ?wikipedia wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {[a wikibase:Property] skos:altLabel ?alias. BIND(lang(?alias) as ?language)}
    }
    ORDER by ?language
   `;

  queryWikidata(sparqlQuery, createDivLanguage, "untranslatedAliasesInLanguages");
}

function getMissingTranslationStatistics() {
  getLanguagesWithUntranslatedLabels();
  getLanguagesWithUntranslatedDescriptions();
  getLanguagesWithUntranslatedAliases();
}

function getTranslationStatistics() {
  getCountOfTranslatedLabels();
  getCountOfTranslatedDescriptions();
  getCountOfTranslatedAliases();
}

function createDivDataTypes(divId, json) {
  const { head: { vars }, results } = json;
  var datatypes = document.getElementById(divId);
  var total = document.createElement("h3"); 
  total.innerHTML = "Total " + results.bindings.length + " datatypes";
  datatypes.appendChild(total);
  for ( const result of results.bindings ) {
    for ( const variable of vars ) {
      var datatype = document.createElement("div"); 
      datatype.setAttribute('class', "datatype");
      var a = document.createElement("a"); 
      var datatypeValue = result[variable].value.replace("http://wikiba.se/ontology#", "");
      var text = document.createTextNode(datatypeValue);
      a.setAttribute('href', "datatype.html?datatype=wikibase:" + datatypeValue);
      a.appendChild(text);
      datatype.appendChild(a);
      datatypes.appendChild(datatype);
    }
  }
}

function getDatatypes() {
  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?datatype
    WHERE
    {
      [] rdf:type wikibase:Property;
                wikibase:propertyType ?datatype.
    }
    ORDER by ?property

    `;
  queryWikidata(sparqlQuery, createDivDataTypes, "propertyDatatypes");
}

function getProperties() {
  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?property
    WHERE
    {
      ?property rdf:type wikibase:Property.
    }
    ORDER by ?property
    `;
  queryWikidata(sparqlQuery, createDivPropertyDetails, "allProperties");
}

function getPropertiesNeedingTranslation() {
  getPropertyLabelsNeedingTranslation();
  getPropertyDescriptionsNeedingTranslation();
  getMissingPropertyAliases();
}


function getPropertyDetails() {
  var property = "P31";
  if(window.location.search.length > 0) {
    var reg = new RegExp("property=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       property = decodeURIComponent(value[1]);
    }
  }
  var div = document.getElementById("propertyCode");
  div.innerHTML = property;

  div = document.getElementById("propertyDetails");
  var table = document.createElement("table"); 
  var th = document.createElement("tr"); 
  var td = document.createElement("th"); 
  td.innerHTML = "Feature";
  th.appendChild(td);
  td = document.createElement("th"); 
  td.innerHTML = "Value";
  th.appendChild(td);
  table.appendChild(th);
  var th = document.createElement("tr"); 
  var td = document.createElement("td"); 
  td.innerHTML = "Link";
  th.appendChild(td);
  td = document.createElement("td"); 
  link = document.createElement("a"); 
  link.setAttribute('href', "https://www.wikidata.org/entity/" + property)
  var text = document.createTextNode("https://www.wikidata.org/entity/"+property);
  link.appendChild(text);
  td.appendChild(link)
  th.appendChild(td);
  table.appendChild(th);
  div.appendChild(table);
  
   sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      [] wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {wd:`+ property + ` rdfs:label ?label. BIND(lang(?label) as ?language)}
    }
    ORDER by ?language
    `;
   queryWikidata(sparqlQuery, createDivLanguage, "untranslatedLabelsInLanguages");

   sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      [] wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {wd:`+ property + ` schema:description ?description. BIND(lang(?description) as ?language)}
    }
    ORDER by ?language
    `;
   queryWikidata(sparqlQuery, createDivLanguage, "untranslatedDescriptionsInLanguages");

   sparqlQuery = `
    SELECT DISTINCT ?language
    WHERE
    {
      [] wdt:P31 wd:Q10876391;
                 wdt:P407 [wdt:P424 ?language]
      MINUS {wd:`+ property + ` skos:altLabel ?alias. BIND(lang(?alias) as ?language)}
    }
    ORDER by ?language
    `;

   queryWikidata(sparqlQuery, createDivLanguage, "untranslatedAliasesInLanguages");
  var sparqlQuery = `
    SELECT DISTINCT ?language
    {
      wd:`+ property + ` rdfs:label ?label.
      BIND(lang(?label) as ?language)
    }
    ORDER by ?language`;
   queryWikidata(sparqlQuery, createDivLanguage, "translatedLabelsInLanguages");
   
   sparqlQuery = `
    SELECT DISTINCT ?language
    {
      wd:`+ property + ` schema:description ?description.
      BIND(lang(?description) as ?language)
    } 
    ORDER by ?language`;
   queryWikidata(sparqlQuery, createDivLanguage, "translatedDescriptionsInLanguages");

   sparqlQuery = `
    SELECT DISTINCT ?language
    {
      wd:`+ property + ` skos:altLabel ?alias.
      BIND(lang(?alias) as ?language)
    }
    ORDER by ?language`;
   queryWikidata(sparqlQuery, createDivLanguage, "translatedAliasesInLanguages");

}

function getPropertiesWithDatatype() {
  var datatype = "wikibase:WikibaseItem";
  if(window.location.search.length > 0) {
    var reg = new RegExp("datatype=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       datatype = decodeURIComponent(value[1]);
    }
  }

  var datatypeCode = document.getElementById("datatypeCode");
  datatypeCode.innerHTML = "Properties with datatype- "+ datatype;
  
  const sparqlQuery = `PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?property
    WHERE
    {
      ?property rdf:type wikibase:Property;
                wikibase:propertyType ` + datatype + `
    }
    ORDER by ?property

    `;
  queryWikidata(sparqlQuery, createDivPropertyDetails, "propertiesWithDatatype");
}

function createDivPropertyDescriptors(divId, json) {
  const { head: { vars }, results } = json;
  var properties = document.getElementById(divId);
  var total = document.createElement("h3"); 
  var count = 0;
  properties.appendChild(total);
  for ( const result of results.bindings ) {
    for ( const variable of vars ) {
      var property = document.createElement("div"); 
      property.setAttribute('class', "property");
      var a = document.createElement("a"); 
      if (result[variable].value.indexOf("/direct") != -1 || 
          result[variable].value.indexOf("wikiba.se") != -1  ||
          result[variable].value.indexOf("schema.org") != -1 ||
          result[variable].value.indexOf("w3.org") != -1) {
         continue; //To avoid properties  
      }
      count = count + 1;
      //a.setAttribute('href', result[variable].value);
      a.setAttribute('href', "property.html?property=" + result[variable].value.replace("http://www.wikidata.org/prop/", ""));
      var text = document.createTextNode(result[variable].value.replace(new RegExp(".*/"), ""));
      a.appendChild(text);
      property.appendChild(a);
      properties.appendChild(property);
    }
  }
  total.innerHTML = "Total " + count + " properties";
}

function getPropertyDescriptors() {
  const sparqlQuery = `
    PREFIX wikibase: <http://wikiba.se/ontology#>

    SELECT DISTINCT ?subproperty
    WHERE
    {
      [] rdf:type wikibase:Property;
                ?subproperty [].
    }
    ORDER by ?subproperty

    `;
  queryWikidata(sparqlQuery, createDivPropertyDescriptors, "propertyDescriptors");
}

function getSearchQuery(language, search) {
  const sparqlQuery = `
    PREFIX wikibase: <http://wikiba.se/ontology#>
    SELECT DISTINCT ?property ?label
    {
      {
        SELECT ?property ?label
        WHERE
        {
          ?property a wikibase:Property;
                      rdfs:label ?label FILTER (lang(?label) = "`+ language +`").
          FILTER(contains(lcase(?label), lcase(`+search+`)))
        }
      }
      UNION
      {
        SELECT ?property ?label
        WHERE
        {
          [rdfs:label ?ilabel] wdt:P1963 ?property.
          ?property rdfs:label ?label FILTER(lang(?label)="`+language+`").
          FILTER (lang(?ilabel)="en" && contains(lcase(?ilabel), lcase(`+search+`)))
        }
      }
      UNION
      {
        SELECT DISTINCT ?property ?label
        WHERE
        {
          ?property a wikibase:Property;
                    wdt:P31  [rdfs:label ?ilabel];
                    rdfs:label ?label FILTER (lang(?label)="`+language+`").
          FILTER (lang(?ilabel)="en" && contains(lcase(?ilabel), lcase(`+search+`)))
        }
      } 
    }
    ORDER by ?label
    `;
  return(sparqlQuery);
}

function findPropertyOnLoad() {
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  var search = 'instance of';
  if(window.location.search.length > 0) {
    var reg = new RegExp("search=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       search = decodeURIComponent(value[1]);
    }
  }
  sparqlQuery = getSearchQuery(language, '"'+search+'"');
  document.getElementById("search").value = search; 
  queryWikidata(sparqlQuery, createDivSearchProperties, "searchResults");
}

function findProperty(e, form) {
  e.preventDefault();
  var language = "en";
  if(window.location.search.length > 0) {
    var reg = new RegExp("language=([^&#=]*)");
    var value = reg.exec(window.location.search);
    if (value != null) {
       language = decodeURIComponent(value[1]);
    }
  }
  var search = '"' + document.getElementById("search").value + '"';
  sparqlQuery = getSearchQuery(language, search);
  queryWikidata(sparqlQuery, createDivSearchProperties, "searchResults");
}

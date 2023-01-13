const parser = new DOMParser();

const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const nameNodeF = xmlDOM.getElementsByTagName("name")[0];
const ageNodeF = xmlDOM.getElementsByTagName("age")[0];
const profNodeF = xmlDOM.getElementsByTagName("prof")[0];
const langAttrF = nameNodeF.getAttribute("lang");

const nameNodeS = xmlDOM.getElementsByTagName("name")[1];
const ageNodeS = xmlDOM.getElementsByTagName("age")[1];
const profNodeS = xmlDOM.getElementsByTagName("prof")[1];
const langAttrS = nameNodeS.getAttribute("lang");

const result = {
        List: [
              {name: nameNodeF.textContent, age: Number(ageNodeF.textContent), prof: profNodeF.textContent, lang: langAttrF,},
              {name: nameNodeS.textContent, age: Number(ageNodeS.textContent), prof: profNodeS.textContent, lang: langAttrS,}
        ],
}
console.log(result);

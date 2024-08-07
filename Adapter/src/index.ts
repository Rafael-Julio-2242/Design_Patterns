import { parseString } from 'xml2js';
import dataAnalisys from './dataAnalisys';
import sendApplicationData from './application';
// Aqui eu "Adapto os dados de application para o data Analisys"


function xmlToJson(xml: string): Promise<any> {
 return new Promise((resolve, reject) => {
  parseString(xml, { explicitArray: false }, (err, result) => {
   if (err) {
    reject(err)
   } else {
    resolve(result)
   }
  })
 })
}


async function Adapter(xml: string) {
 const data = await xmlToJson(xml);
 const result = dataAnalisys(JSON.stringify(data));
 return result;
}


async function main() {

 const xmlData = sendApplicationData();

 const result = await Adapter(xmlData);

 console.log('[RESULT]: ', result);
}



main();
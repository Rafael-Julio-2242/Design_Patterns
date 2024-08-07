export default function dataAnalisys(json: string) {

  const result = JSON.parse(json);

  const { data } = result;

  return `Data | Name: ${data.name} - Age: ${data.age} - City: ${data.city} |`;
}

// var Request = unirest.get('http://localhost:3000/recipes')
// var Request = unirest.get('unirest');
//   var req = unirest("GET","http://localhost:3000/recipes")
// req.headers({
//     "cache-control":"no-cache",
// })
// req.end(function (res){
//     if(res.error) throw new error (res.error)
//     console.log(res.body)
// })
async function getAll() {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((element) => {
    template += `
    
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${element.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${element.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${element.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${element.id}"
                class="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100">
                Show
            </a>
        </td>
    </tr>
    `;
  });
  app.innerHTML = template;
  console.log(data);
}
async function getTen(count) {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes?_limit='${}'";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((element) => {
    template += `
    
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${element.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${element.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${element.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${element.id}"
                class="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100">
                Show
            </a>
        </td>
    </tr>
    `;
  });
  app.innerHTML = template;
  console.log(data);
}
async function filterByM() {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes?title_like=M";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((element) => {
    var titlle = element.title;
    var startsWithM = titlle.startsWith("M");
    if (startsWithM) {
      template += `
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${element.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${element.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${element.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${element.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${element.id}"
                class="text-blue-500 hover:text-blue-700 px-4 py-2 rounded-md hover:bg-blue-100">
                Show
            </a>
        </td>
    </tr>
    `;
    }
  });
  app.innerHTML = template;
  console.log(data);
}

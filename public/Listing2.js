// Get All Data
async function getAll() {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((item) => {
    template += `
    
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${item.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${item.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${item.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${item.id}"
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

// Get the first 10 records of the data
async function getTen() {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes?_limit=10";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((item) => {
    template += `
    
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${item.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${item.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${item.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${item.id}"
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

// Filter by title starting with "M"
async function filterByM() {
  var app = document.getElementById("app");
  let template = "";
  const api = "http://localhost:3000/recipes?title_like=M";
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((item) => {
    var titlle = item.title;
    var startsWithM = titlle.startsWith("M");
    if (startsWithM) {
      template += `
    <tr>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="flex items-center">
                <div class="text-sm font-medium text-gray-900">
                    ${item.id}
                </div>
            </div>
        </td>
        <td class="px-4 py-4 whitespace-nowrap text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.title}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-gray-700"">
            <div class="text-sm text-gray-900">
                ${item.cuisines}
            </div>
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
                ${item.instructions}
        </td>
        <td class="px-4 py-4 whitespace-normal text-sm text-gray-700">
            <span
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 text-ellipsis">
              ${item.readyInMinutes}
            </span>
        </td>
        <td class="px-2 whitespace-normal text-right text-sm font-medium">
            <a href="/recipes/${item.id}"
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

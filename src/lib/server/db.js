const items = [
  {
    id: 1,
    text: "Item 1",
    status: "TO_DO",
  },
];

// fake promise generator
function later(delay, value) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay, value); // Note the order, `delay` before `value`
    /* Or for outdated browsers that don't support doing that:
        setTimeout(function() {
            resolve(value);
        }, delay);
        Or alternately:
        setTimeout(resolve.bind(null, value), delay);
        */
  });
}

function funcLater(delay, func) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, func()); // Note the order, `delay` before `value`
    })
}

export function addItem(item) {
  items.push(item);
}
export async function getItem(id) {
  return later(
    1000,
    items.find((item) => item.id === id)
  );
}
export async function getItems() {
  return later(1000, items);
}
export async function updateItem(id, status) {
    console.log("Updating to status: ", status)
  await funcLater(1000, () => {
    const index = items.findIndex((item) => item.id === id);
    items[index].status = status;
    console.log("From updater: ", items)
  });
}

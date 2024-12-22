let obj = null; // Start with null instead of {}

const getData = () => {
  let data = document.querySelector("#input").value.trim();
  return { data };
};

const insrtNum = (node, value) => {
  if (node === null) { // Initialize root node
    return { value, left: null, right: null };
  }

  if (value > node.value) { // Insert into right subtree
    node.right = insrtNum(node.right, value);
  } else if (value < node.value) { // Insert into left subtree
    node.left = insrtNum(node.left, value);
  } else {
    alert("Value already exists in the tree!");
  }

  return node;
};

const renderTree = (tree) => {
  if (!tree) return ""; // Handle empty tree
  const { value, left, right } = tree;

  return `
    <div class="value">${value}</div>
    ${
      left || right
        ? `
      <div class="line"></div>
      <div class="childs">
        <div class="tree left">${left ? renderTree(left) : ""}</div>
        <div class="tree right">${right ? renderTree(right) : ""}</div>
      </div>
    `
        : ""
    }
  `;
};

const main = () => {
  const tree = document.querySelector(".rootNode");
  tree.innerHTML = renderTree(obj);
};

const insert = () => {
  const { data } = getData();
  if (isNaN(data) || data === "") {
    alert("Please enter a valid number.");
    return;
  }
  const numVal = Number(data);
  obj = insrtNum(obj, numVal);
  main(); // Refresh the tree rendering
  document.querySelector("#input").value = ""; // Clear input
};

// Initialize rendering
main();

const searchNum = (node, value) => {
    if (node === null) {
      alert("Value not found in the tree.");
      return false; // Value not found
    }
  
    if (node.value === value) {
      alert(`Value ${value} found in the tree!`);
      highlightNode(value); // Highlight the found node
      return true;
    } else if (value > node.value) {
      return searchNum(node.right, value); // Search in the right subtree
    } else {
      return searchNum(node.left, value); // Search in the left subtree
    }
  };
  
  const search = () => {
    const data = document.querySelector("#searchInput").value.trim();
    if (isNaN(data) || data === "") {
      alert("Please enter a valid number.");
      return;
    }
    const numVal = Number(data);
    searchNum(obj, numVal);
    document.querySelector("#searchInput").value = ""; // Clear input
  };
  
  // Bind the search functionality to the button
  document.querySelector("#searchSubmit").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    search();
  });
  
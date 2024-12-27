const deleteNum = (node, value) => {
    if (node === null) {
      alert("Value not found in the tree.");
      return null; // Node not found
    }
  
    if (value < node.value) {
      node.left = deleteNum(node.left, value); // Traverse left subtree
    } else if (value > node.value) {
      node.right = deleteNum(node.right, value); // Traverse right subtree
    } else {
      // Node to be deleted found
      if (node.left === null && node.right === null) {
        // Case 1: Leaf node
        return null;
      } else if (node.left === null) {
        // Case 2: One child (right)
        return node.right;
      } else if (node.right === null) {
        // Case 2: One child (left)
        return node.left;
      } else {
        // Case 3: Two children
        const successor = findMin(node.right); // Find in-order successor
        node.value = successor.value; // Replace value
        node.right = deleteNum(node.right, successor.value); // Delete successor
      }
    }
  
    return node;
  };
  
  const findMin = (node) => {
    while (node.left !== null) {
      node = node.left; // Traverse to the leftmost node
    }
    return node;
  };
  
  const deleteNode = () => {
    const data = document.querySelector("#deleteInput").value.trim();
    if (isNaN(data) || data === "") {
      alert("Please enter a valid number.");
      return;
    }
    const numVal = Number(data);
    obj = deleteNum(obj, numVal); // Perform deletion
    main(); // Refresh the tree rendering
    document.querySelector("#deleteInput").value = ""; // Clear input
  };
  
  // Bind the delete functionality to the button
  document.querySelector("#deleteSubmit").addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    deleteNode();
  });
  
const inorderTraversal = (node, result = []) => {
    if (node !== null) {
      inorderTraversal(node.left, result);
      result.push(node.value);
      inorderTraversal(node.right, result);
    }
    return result;
  };
  
  const preorderTraversal = (node, result = []) => {
    if (node !== null) {
      result.push(node.value);
      preorderTraversal(node.left, result);
      preorderTraversal(node.right, result);
    }
    return result;
  };
  
  const postorderTraversal = (node, result = []) => {
    if (node !== null) {
      postorderTraversal(node.left, result);
      postorderTraversal(node.right, result);
      result.push(node.value);
    }
    return result;
  };
  
  const printTree = () => {
    const traversalType = document.querySelector("#Traversing\\ search").value; 
    let result;
  
    if (!obj) {
      alert("The tree is empty. Nothing to print.");
      return;
    }
  
    switch (traversalType) {
      case "Inorder":
        result = inorderTraversal(obj);
        break;
      case "Preorder":
        result = preorderTraversal(obj);
        break;
      case "Postorder":
        result = postorderTraversal(obj);
        break;
      default:
        alert("Invalid traversal type selected.");
        return;
    }
  
    alert(`Traversal (${traversalType}): ${result.join(", ")}`);
  };
  
  document.querySelector("#printSubmit").addEventListener("click", (event) => {
    event.preventDefault(); 
    printTree();
  });
  
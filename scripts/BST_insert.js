
const treeData = () => {
  return {
    value: 10,
    left: {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: {
          value: 4,
          left: null,
          right: null,
        },
      },
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 8,
          left: null,
          right: null,
        },
      },
    },
    right: {
      value: 15,
      left: {
        value: 13,
        left: {
          value: 12,
          left: null,
          right: null,
        },
        right: {
          value: 14,
          left: null,
          right: null,
        },
      },
      right: {
        value: 18,
        left: {
          value: 17,
          left: null,
          right: null,
        },
        right: {
          value: 20,
          left: null,
          right: null,
        },
      },
    },
  };
};

const renderTree = (tree) => {
  const { value, left, right } = tree;
  return `
        <div class = "value">
            ${value}
        </div>
       ${
         left || right
           ? ` 
        <div class = "line"></div>
        <div class = "childs">
            ${
              left
                ? `
            <div class = "tree left" >
                    ${renderTree(left)}
            </div>`
                : ""
            }
            ${
              right
                ? `
            <div class = "tree right" >
                    ${renderTree(right)}
            </div>`
                : ""
            }
        </div>
    `
           : ""
       }`;
};

const main = () =>{
    const tree = document.querySelector(".rootNode");
    tree.innerHTML = renderTree(treeData());
}


const insert = () => {
    getData();
    checker();
}
main();

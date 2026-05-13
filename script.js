function toggleDarkMode() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("darkModeBtn");

  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light Mode";
    btn.style.background = "#f1c40f";
    btn.style.color = "#000";
  } else {
    btn.textContent = "🌙 Dark Mode";
    btn.style.background = "#222";
    btn.style.color = "#fff";
  }
}

function peekStack() {
  const container = document.getElementById("stackContainer");
  const boxes = container.getElementsByClassName("stack-box");
  if (boxes.length === 0) return;

  const topBox = boxes[boxes.length - 1];
  topBox.classList.add("highlight");

  setTimeout(() => {
    topBox.classList.remove("highlight");
  }, 1000);
}

function clearStack() {
  const container = document.getElementById("stackContainer");
  container.innerHTML = "";
}
function enqueue() {
  const input = document.getElementById("queueInput");
  const value = input.value.trim();
  if (value === "") return;

  const box = document.createElement("div");
  box.className = "queue-box";
  box.textContent = value;

  const container = document.getElementById("queueContainer");
  container.appendChild(box);
  input.value = "";
}

function dequeue() {
  const container = document.getElementById("queueContainer");
  const boxes = container.getElementsByClassName("queue-box");
  if (boxes.length === 0) return;

  const firstBox = boxes[0];
  firstBox.classList.add("highlight");

  setTimeout(() => {
    container.removeChild(firstBox);
  }, 500);
}

function peekQueue() {
  const container = document.getElementById("queueContainer");
  const boxes = container.getElementsByClassName("queue-box");
  if (boxes.length === 0) return;

  const firstBox = boxes[0];
  firstBox.classList.add("highlight");

  setTimeout(() => {
    firstBox.classList.remove("highlight");
  }, 1000);
}

function clearQueue() {
  const container = document.getElementById("queueContainer");
  container.innerHTML = "";
}
// Linked List Data
let linkedList = [];

function renderLinkedList() {
  const container = document.getElementById("linkedListContainer");
  container.innerHTML = "";

  linkedList.forEach((value, index) => {
    const node = document.createElement("div");
    node.className = "stack-box";
    node.textContent = value;
    container.appendChild(node);

    if (index < linkedList.length - 1) {
      const arrow = document.createElement("span");
      arrow.textContent = "→";
      arrow.style.margin = "0 10px";
      arrow.style.fontWeight = "bold";
      arrow.style.fontSize = "20px";
      container.appendChild(arrow);
    }
  });
}

function insertAtEnd() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  linkedList.push(value);
  input.value = "";
  renderLinkedList();
}

function deleteByValue() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  linkedList = linkedList.filter((item) => item !== value);
  renderLinkedList();
}

function searchNode() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  const container = document.getElementById("linkedListContainer");
  const nodes = container.getElementsByClassName("stack-box");

  Array.from(nodes).forEach((node) => {
    if (node.textContent === value) {
      node.classList.add("highlight");
      setTimeout(() => node.classList.remove("highlight"), 1000);
    }
  });
}

function clearList() {
  linkedList = [];
  renderLinkedList();
}
function insertAtBeginning() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  linkedList.unshift(value);
  input.value = "";
  renderLinkedList();
}

function insertAtPosition() {
  const valueInput = document.getElementById("llInput");
  const posInput = document.getElementById("llPositionInput");

  const value = valueInput.value.trim();
  const position = parseInt(posInput.value);

  if (value === "" || isNaN(position)) return;

  // Clamp position between 0 and linkedList.length
  const pos = Math.max(0, Math.min(position, linkedList.length));

  linkedList.splice(pos, 0, value);
  valueInput.value = "";
  posInput.value = "";
  renderLinkedList();
}
function insertAfterNode() {
  const input = document.getElementById("llInput").value.trim();
  const posInput = document.getElementById("llPositionInput").value;

  if (input === "" || posInput === "") return;

  const targetValue = input;
  const newValue = prompt(`Enter value to insert after "${targetValue}":`);
  if (newValue === null || newValue.trim() === "") return;

  const index = linkedList.indexOf(targetValue);
  if (index === -1) {
    alert(`Value "${targetValue}" not found.`);
    return;
  }

  linkedList.splice(index + 1, 0, newValue.trim());
  renderLinkedList();
}

function deleteAtPosition() {
  const posInput = parseInt(document.getElementById("llPositionInput").value);
  if (isNaN(posInput) || posInput < 0 || posInput >= linkedList.length) {
    alert("Invalid position.");
    return;
  }

  linkedList.splice(posInput, 1);
  renderLinkedList();
}
function insertAtBeginning() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  linkedList.unshift(value);
  input.value = "";
  renderLinkedList();
}

function insertAtPosition() {
  const input = document.getElementById("llInput");
  const posInput = document.getElementById("llPositionInput");
  const value = input.value.trim();
  const position = parseInt(posInput.value);

  if (
    value === "" ||
    isNaN(position) ||
    position < 0 ||
    position > linkedList.length
  )
    return;

  linkedList.splice(position, 0, value);
  input.value = "";
  posInput.value = "";
  renderLinkedList();
}

function insertAfterNode() {
  const input = document.getElementById("llInput");
  const value = input.value.trim();
  if (value === "") return;

  const afterValue = prompt("Insert after which value?");
  const index = linkedList.indexOf(afterValue);
  if (index === -1) {
    alert("Value not found in the list.");
    return;
  }

  linkedList.splice(index + 1, 0, value);
  input.value = "";
  renderLinkedList();
}

function deleteAtPosition() {
  const posInput = document.getElementById("llPositionInput");
  const position = parseInt(posInput.value);

  if (isNaN(position) || position < 0 || position >= linkedList.length) return;

  linkedList.splice(position, 1);
  posInput.value = "";
  renderLinkedList();
}
// --- Doubly Linked List Logic ---
// ================= Doubly Linked List =================
let dll = [];

function renderDLL(animatedIndex = null, deletingValue = null) {
  const c = document.getElementById("dllContainer");
  c.innerHTML = "";
  dll.forEach((v, i) => {
    const node = document.createElement("div");
    node.className = "dll-node";
    node.textContent = v;
    if (animatedIndex === i) {
      node.classList.add("slide-in");
      setTimeout(() => node.classList.add("show"), 50);
    }
    c.appendChild(node);
  });
  if (deletingValue !== null) {
    const nodes = c.getElementsByClassName("dll-node");
    Array.from(nodes).forEach((n) => {
      if (n.textContent === deletingValue) {
        n.classList.add("fade-out");
        setTimeout(() => n.classList.add("hide"), 50);
        setTimeout(() => n.remove(), 500);
      }
    });
  }
}

// Insert at End
function insertDLL() {
  const v = document.getElementById("dllInput").value.trim();
  if (!v) return;
  dll.push(v);
  renderDLL(dll.length - 1);
}

// Insert at Beginning
function insertAtBeginningDLL() {
  const v = document.getElementById("dllInput").value.trim();
  if (!v) return;
  dll.unshift(v);
  renderDLL(0);
}

// Insert at Position
function insertAtPositionDLL() {
  const v = document.getElementById("dllInput").value.trim();
  const pos = parseInt(prompt("Enter position (0-n):"));
  if (!v || isNaN(pos) || pos < 0 || pos > dll.length) return;
  dll.splice(pos, 0, v);
  renderDLL(pos);
}

// Delete by Value
function deleteDLL() {
  const v = document.getElementById("dllInput").value.trim();
  if (!v) return;
  dll = dll.filter((x) => x !== v);
  renderDLL(null, v);
}

// Delete at Beginning
function deleteAtBeginningDLL() {
  if (!dll.length) return;
  const d = dll.shift();
  renderDLL(null, d);
}

// Delete at End
function deleteAtEndDLL() {
  if (!dll.length) return;
  const d = dll.pop();
  renderDLL(null, d);
}

// Delete at Position
function deleteAtPositionDLL() {
  const pos = parseInt(prompt("Enter position (0-n):"));
  if (isNaN(pos) || pos < 0 || pos >= dll.length) return;
  const d = dll[pos];
  dll.splice(pos, 1);
  renderDLL(null, d);
}

// Search Node
function searchDLL() {
  const v = document.getElementById("dllInput").value.trim();
  if (!v) return;
  const nodes = document
    .getElementById("dllContainer")
    .getElementsByClassName("dll-node");
  Array.from(nodes).forEach((n) => {
    if (n.textContent === v) {
      n.classList.add("highlight");
      setTimeout(() => n.classList.remove("highlight"), 1000);
    }
  });
}

// Update Node
function updateDLL() {
  const pos = parseInt(prompt("Enter position (0-n):"));
  const newVal = prompt("Enter new value:");
  if (isNaN(pos) || pos < 0 || pos >= dll.length || !newVal) return;
  dll[pos] = newVal;
  renderDLL(pos);
}

// Count Nodes
function countDLL() {
  alert("Total Nodes in DLL: " + dll.length);
}

// Backward Traversal
function traverseBackwardDLL() {
  alert("Backward Traversal: " + dll.slice().reverse().join(" ⇄ "));
}

// Reverse DLL
function reverseDLL() {
  dll.reverse();
  renderDLL();
}

// Clear DLL
function clearDLL() {
  dll = [];
  document.getElementById("dllContainer").innerHTML = "";
}

// --- Binary Tree Logic ---
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.x = 0;
    this.y = 0;
  }
}

let treeRoot = null;

function insertIntoTree() {
  const input = document.getElementById("btInput");
  const value = input.value.trim();
  if (value === "") return;

  treeRoot = insertNode(treeRoot, value);
  input.value = "";
  drawTree();
}

function insertNode(root, value) {
  if (!root) return new TreeNode(value);

  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else {
    root.right = insertNode(root.right, value);
  }
  return root;
}

function clearTree() {
  treeRoot = null;
  drawTree();
}

function searchTree() {
  const input = document.getElementById("btInput");
  const value = input.value.trim();
  if (value === "") return;

  searchAndHighlight(treeRoot, value);
}

// --- Tree Drawing ---
function drawTree() {
  const canvas = document.getElementById("treeCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!treeRoot) return;

  assignCoordinates(treeRoot, canvas.width / 2, 50, canvas.width / 4);
  drawConnections(ctx, treeRoot);
  drawNodes(ctx, treeRoot);
}

function assignCoordinates(node, x, y, spacing) {
  if (!node) return;

  node.x = x;
  node.y = y;

  assignCoordinates(node.left, x - spacing, y + 70, spacing / 2);
  assignCoordinates(node.right, x + spacing, y + 70, spacing / 2);
}

function drawConnections(ctx, node) {
  if (!node) return;

  ctx.strokeStyle = "#007BFF";
  ctx.lineWidth = 2;

  if (node.left) {
    ctx.beginPath();
    ctx.moveTo(node.x, node.y);
    ctx.lineTo(node.left.x, node.left.y);
    ctx.stroke();
  }

  if (node.right) {
    ctx.beginPath();
    ctx.moveTo(node.x, node.y);
    ctx.lineTo(node.right.x, node.right.y);
    ctx.stroke();
  }

  drawConnections(ctx, node.left);
  drawConnections(ctx, node.right);
}

function drawNodes(ctx, node) {
  if (!node) return;

  ctx.fillStyle = "#e3f2fd";
  ctx.strokeStyle = "#007BFF";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "black";
  ctx.font = "14px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(node.value, node.x, node.y);

  drawNodes(ctx, node.left);
  drawNodes(ctx, node.right);
}

function searchAndHighlight(node, value) {
  const canvas = document.getElementById("treeCanvas");
  const ctx = canvas.getContext("2d");

  function dfs(n) {
    if (!n) return false;

    if (n.value === value) {
      ctx.beginPath();
      ctx.arc(n.x, n.y, 25, 0, Math.PI * 2);
      ctx.strokeStyle = "#ff9900";
      ctx.lineWidth = 4;
      ctx.stroke();

      setTimeout(drawTree, 1000); // Reset after 1s
      return true;
    }

    return dfs(n.left) || dfs(n.right);
  }

  dfs(node);
}
function deleteFromTree() {
  const input = document.getElementById("btInput");
  const value = input.value.trim();
  if (value === "") return;

  treeRoot = deleteNode(treeRoot, value);
  input.value = "";
  drawTree();
}

function deleteNode(root, value) {
  if (!root) return null;

  if (value < root.value) {
    root.left = deleteNode(root.left, value);
  } else if (value > root.value) {
    root.right = deleteNode(root.right, value);
  } else {
    // Found the node to delete
    if (!root.left && !root.right) {
      // Case 1: No children
      return null;
    } else if (!root.left) {
      // Case 2: One child (right)
      return root.right;
    } else if (!root.right) {
      // Case 2: One child (left)
      return root.left;
    } else {
      // Case 3: Two children
      const minRight = findMin(root.right);
      root.value = minRight.value;
      root.right = deleteNode(root.right, minRight.value);
    }
  }

  return root;
}

function findMin(node) {
  while (node.left !== null) {
    node = node.left;
  }
  return node;
}
// ================= Binary Tree Traversals =================
// ================= Binary Tree Traversals =================
function traverseTree(type) {
  if (!root) return;
  let order = [];
  if (type === "inorder") inorder(root, order);
  else if (type === "preorder") preorder(root, order);
  else if (type === "postorder") postorder(root, order);
  else if (type === "levelorder") levelorder(root, order);

  // Show traversal order text
  const resultDiv = document.getElementById("traversalResult");
  resultDiv.innerHTML =
    "Traversal Result: " + order.map((v) => `<span>${v}</span>`).join(" → ");

  // Animate traversal
  let i = 0;
  function highlightNext() {
    if (i >= order.length) return;
    drawTree(order[i]); // highlight current node

    // highlight in text
    const spans = resultDiv.querySelectorAll("span");
    spans.forEach((s) => (s.style.color = "#333"));
    spans[i].style.color = "red";

    i++;
    setTimeout(highlightNext, 800); // delay between highlights
  }
  highlightNext();
}

function inorder(node, arr) {
  if (!node) return;
  inorder(node.left, arr);
  arr.push(node.val);
  inorder(node.right, arr);
}
function preorder(node, arr) {
  if (!node) return;
  arr.push(node.val);
  preorder(node.left, arr);
  preorder(node.right, arr);
}
function postorder(node, arr) {
  if (!node) return;
  postorder(node.left, arr);
  postorder(node.right, arr);
  arr.push(node.val);
}
function levelorder(node, arr) {
  let q = [node];
  while (q.length) {
    let n = q.shift();
    arr.push(n.val);
    if (n.left) q.push(n.left);
    if (n.right) q.push(n.right);
  }
}
function traverseTree(type) {
  if (!root) return;
  let order = [];
  if (type === "inorder") inorder(root, order);
  else if (type === "preorder") preorder(root, order);
  else if (type === "postorder") postorder(root, order);
  else if (type === "levelorder") levelorder(root, order);

  // ✅ Show traversal result
  document.getElementById(
    "traversalResult"
  ).textContent = `${type.toUpperCase()} Traversal: ${order.join(" → ")}`;

  // Animate traversal
  let i = 0;
  function highlightNext() {
    if (i >= order.length) return;
    drawTree(order[i]); // highlight current node
    i++;
    setTimeout(highlightNext, 800); // delay between highlights
  }
  highlightNext();
}
/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues(nodes = [this.root]) {
    if (!this.root) return 0;
    if (nodes.length === 0) {
      return 0;
    } else {
      const current = nodes.pop();
      for (let child of current.children) {
        nodes.push(child);
      }
      return current.val + this.sumValues(nodes);
    }
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens(nodes = [this.root]) {
    if (!this.root) return 0;
    if (nodes.length === 0) {
      return 0;
    } else {
      const current = nodes.pop();
      for (let child of current.children) {
        nodes.push(child);
      }
      return (current.val % 2 === 0 ? 1 : 0) + this.countEvens(nodes);
    }
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound, nodes = [this.root]) {
    if (!this.root) return 0;
    if (nodes.length === 0) {
      return 0;
    } else {
      const current = nodes.pop();
      for (let child of current.children) {
        nodes.push(child);
      }
      return (
        (current.val > lowerBound ? 1 : 0) + this.numGreater(lowerBound, nodes)
      );
    }
  }
}

module.exports = { Tree, TreeNode };

class Node {
  constructor(number, q) {
    this.number = number;
    this.q = q;
    this.minNodeInSubtree = null; 
    this.richer = [];
  }

  getLeastQuietNode() {
    if (!this.minNodeInSubtree) {
      this.minNodeInSubtree = this;
      for (const n of this.richer) {
        const nlqn = n.getLeastQuietNode();
        if (nlqn.q < this.minNodeInSubtree.q)
          this.minNodeInSubtree = nlqn;
      }
    }
    return this.minNodeInSubtree;
  }
}


var loudAndRich = function (richer, quiet) {
  const N = quiet.length;
  const nodes = new Array(N);
  for (let i = 0; i < N; i++)
    nodes[i] = new Node(i, quiet[i]);
  richer.forEach(([x, y]) => {
    nodes[y].richer.push(nodes[x]);
  });

  return nodes.map(n => n.getLeastQuietNode().number);
};
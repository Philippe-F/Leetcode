var hasCycle = function (head) {
  let values = new Set(),
    cur = head;

  while (cur) {
    let next = cur.next;

    if (values.has(cur)) return true;
    values.add(cur);
    cur = next;
  }

  return false;
};
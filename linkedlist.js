import { Node } from "./node.js";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    curr.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (!this.head) return null;
    let curr = this.head;
    while (curr.nextNode) {
      curr = curr.nextNode;
    }
    return curr;
  }

  at(index) {
    let curr = this.head;
    let i = 0;
    while (curr && i < index) {
      curr = curr.nextNode;
      i++;
    }
    return curr || null;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.nextNode) {
      const popped = this.head;
      this.head = null;
      return popped;
    }

    let curr = this.head;
    while (curr.nextNode.nextNode) {
      curr = curr.nextNode;
    }
    const popped = curr.nextNode;
    curr.nextNode = null;
    return popped;
  }

  contains(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return true;
      curr = curr.nextNode;
    }
    return false;
  }

  find(value) {
    let curr = this.head;
    while (curr) {
      if (curr.value === value) return curr;
      curr = curr.nextNode;
    }
    return null;
  }

  toString() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.value} -> `;
      curr = curr.nextNode;
    }
    str += "null";
    return str;
  }

  insertAt(value, index) {
    if (index < 0) return null;

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let curr = this.head;
    let i = 0;
    while (curr && i < index - 1) {
      curr = curr.nextNode;
      i++;
    }

    if (!curr) return null;

    newNode.nextNode = curr.nextNode;
    curr.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || !this.head) return null;

    if (index === 0) {
      const removed = this.head;
      this.head = this.head.nextNode;
      removed.nextNode = null;
      return removed;
    }

    let curr = this.head;
    let i = 0;
    while (curr.nextNode && i < index - 1) {
      curr = curr.nextNode;
      i++;
    }

    if (!curr.nextNode) return null;

    const removed = curr.nextNode;
    curr.nextNode = removed.nextNode;
    removed.nextNode = null;
    return removed;
  }
}

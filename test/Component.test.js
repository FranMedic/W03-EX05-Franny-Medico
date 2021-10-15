import Component from "../Component.js";

describe("When given a Component constructor", () => {
  describe("when it recieves a parent 'section' a className 'patata' and a p tag", () => {
    test("it should render a p element with class patata", () => {
      const parentElement = document.createElement("section");
      const className = "patata";
      const tag = "p";

      const creation = new Component(parentElement, className, tag);
      const created = parentElement.querySelector("p.patata");

      expect(created).not.toBeNull();
    });
  });
});

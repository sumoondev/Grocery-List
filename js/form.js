import { addItem } from "./app.js";

export function createForm() {
  const form = document.createElement("form");

  form.innerHTML = `
        <h1 style="text-align: center;padding-bottom: 1rem;">Grocery List</h1>
        <div class="form-control">
            <input type="text" class="form-input" placeholder="eg: Apples" required>
            <button type="submit" class="btn"><i class="fa-regular fa-square-plus"></i></button>
        </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    addItem(value);
    input.value = "";
  });

  return form;
}
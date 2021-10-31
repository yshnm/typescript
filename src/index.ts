document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

document.querySelector<HTMLElement>("#parent")?.addEventListener(
  "change",
  (event) => {
    let a = event.target.options;

    for (var i = 0, l = a.length; l > i; i++) {
      if (a[i].selected) {
        let j = JSON.parse(a[i].dataset.child);

        document.querySelector<HTMLElement>("#child")?.innerHTML = "";

        j?.forEach((e) => {
          document.querySelector<HTMLElement>("#child")?.innerHTML += `
          <option value=${e[0]}>${e[1]}</option>
          `;
        });
      }
    }
  },
  false
);

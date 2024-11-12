import { jsxs, Fragment, jsx } from "@emotion/react/jsx-runtime";
const logoUrl = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20class='iconify%20iconify--logos'%20viewBox='-50%20-50%2041%2041'%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='-25.4'%20x2='-25.4'%20y1='-9.3'%20y2='-18'%20gradientTransform='translate(31%2024)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20/%3e%3cstop%20offset='1'%20stop-color='%23fff'%20/%3e%3c/linearGradient%3e%3cmask%20id='b'%3e%3cpath%20fill='url(%23a)'%20d='M-19-26h46v42h-46z'%20/%3e%3c/mask%3e%3c/defs%3e%3cg%20mask='url(%23b)'%20transform='translate(-33%20-24)'%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20fill='%23ababab'%20d='m-9-10%202%204%202-3z'%20/%3e%3cpath%20fill='%23949494'%20d='m-2-24-7%2014%204%201%207-14z'%20/%3e%3cpath%20fill='%23ababab'%20d='m-2-24%203-2%201%203z'%20/%3e%3cpath%20fill='%23949494'%20d='m18%205-3%202L-7-6l2-3z'%20/%3e%3c/g%3e%3cg%20stroke='%23878787'%3e%3cpath%20stroke-width='9.6'%20d='m-9%2020-1%203'%20/%3e%3cpath%20fill='%23878787'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='m-12%2023-2-2%206%202c2%201%202%202%201%202l-5-2m1-2c2%201%204%202%205%201%201%200%201-1-1-2l-5-2c-2%200-1%201%201%203'%20/%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20fill='%23949494'%20d='M-17-10h8l2%204h-9z'%20/%3e%3cpath%20fill='%23757575'%20d='M24-9%2018%205-5-9l7-14z'%20/%3e%3cpath%20fill='%23fbbf28'%20stroke='%23fbbf28'%20stroke-width='.6'%20d='m10-16%204%203v1l-2%205s0%200%200%200l-1-1s0%200%200%200l-1%202s0%200%200%200L9-7v1L8-3s0%200%200%200h0v-10s0%200%200%200l1%201s0%200%200%200l1-4s0%200%200%200z'%20/%3e%3c/g%3e%3cg%20stroke='gray'%3e%3cpath%20stroke-width='9.1'%20d='m-8%2019-1%201'%20/%3e%3cpath%20fill='gray'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M-11%2020c-2-1-2-2-1-2s4%200%205%202%203%202%202%202l-6-2'%20/%3e%3cpath%20fill='gray'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='m-11%2019%206%202c1%200%201-1-1-2l-6-2%201%202'%20/%3e%3c/g%3e%3cpath%20fill='%23757575'%20d='M-17-10h8l7-14h-8z'%20/%3e%3cpath%20stroke='%2391512b'%20stroke-width='8.6'%20d='m-2%204-6%2015'%20/%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20fill='%2391512b'%20d='m-10%2019-2-2c2-1%204%200%206%201%202%202%202%203%201%203l-5-2m6-15%206%202-2-2-5-2c-1%200-1%201%201%202'%20/%3e%3cpath%20fill='%23949494'%20d='m1-26%201%203L24-9l-1-3zm-11%202h8l3-2-8%201z'%20/%3e%3c/g%3e%3cg%20stroke='%236e6e6e'%3e%3cpath%20stroke-width='9.1'%20d='m0%201-2%203'%20/%3e%3cpath%20fill='%236e6e6e'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='.5'%20d='M-4%204c-2-1-2-2-1-2l6%202%201%202-6-2m1-3%206%202c1%200%201-1-1-2l-6-2c-1%200-1%201%201%202'%20/%3e%3c/g%3e%3cg%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20fill='%23ababab'%20d='m18%206-3%201%203-2z'%20/%3e%3cpath%20fill='%23757575'%20d='M15%207%207%208-16-6h9z'%20/%3e%3cpath%20fill='%23ababab'%20d='m-17-10%201%204v-2z'%20/%3e%3cpath%20fill='%23949494'%20d='M25-8%2018%206V5l6-14zm-35-16-7%2014%201%202%206-14z'%20/%3e%3cpath%20fill='%23ababab'%20d='m25-8-2-4%201%203z'%20/%3e%3cpath%20fill='%23757575'%20d='m23-12-8%201-22-14%208-1z'%20/%3e%3cpath%20fill='%23ababab'%20d='m-10-24%203-1-3%203z'%20/%3e%3cpath%20fill='%23949494'%20d='m18%206-8%201-3%201%208-1zM-16-8v2L7%208%206%206z'%20/%3e%3cpath%20fill='%23757575'%20d='m18%206-8%201%206-14%209-1zm-28-28-6%2014L6%206l6-14z'%20/%3e%3cpath%20fill='%23fbbf28'%20stroke='%23fbbf28'%20stroke-width='.6'%20d='m3-13-5-1s0%200%200%200l-3%204v1h2s0%200%200%200l-1%202v1h1s0%200%200%200l-2%203s0%200%200%200h0l7-6s0%200%200%200l-1-1H0l3-2v-1z'%20/%3e%3cpath%20fill='%23949494'%20d='m25-8-9%201-1-4%208-1zm-10-3-3%203-22-14%203-3z'%20/%3e%3cpath%20fill='%23ababab'%20d='M10%207%207%208%206%206z'%20/%3e%3cpath%20fill='%23949494'%20d='M16-7%2010%207%206%206l6-14z'%20/%3e%3cpath%20fill='%23ababab'%20d='m16-7-1-4-3%203z'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const Head = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx("meta", {
        charSet: "UTF-8"
      }),
      /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }),
      /* @__PURE__ */ jsx("link", {
        rel: "icon",
        href: logoUrl
      }),
      /* @__PURE__ */ jsx("title", {
        children: "Vike + React + Bun"
      }),
      /* @__PURE__ */ jsx("meta", {
        name: "author",
        content: "Oleksandr Pishta"
      }),
      /* @__PURE__ */ jsx("meta", {
        name: "description",
        content: "Oleksandr Pishta, Full Stack Developer"
      }),
      /* @__PURE__ */ jsx("link", {
        rel: "canonical",
        href: "http://localhost:3000/"
      })
    ]
  });
};
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Head
}, Symbol.toStringTag, { value: "Module" }));
export {
  import3 as i
};
//# sourceMappingURL=chunk-D7iTpu7Q.js.map

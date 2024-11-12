import import1 from "vike-react/__internal/components/Loading";
import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { i as import3 } from "../chunks/chunk-D7iTpu7Q.js";
import { jsx, jsxs, Fragment } from "@emotion/react/jsx-runtime";
import { css, keyframes, Global } from "@emotion/react";
import { useState } from "react";
import styled from "@emotion/styled";
const ButtonStyled = /* @__PURE__ */ styled("button", {
  target: "e1e3hmnn0"
})("border-radius:8px;border:1px solid transparent;padding:0.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color 0.25s;&:hover{border-color:#646cff;}&:focus,&:focus-visible{outline:4px auto -webkit-focus-ring-color;}@media (prefers-color-scheme:light){background-color:#f9f9f9;}");
const Button = ({ onClick, label }) => /* @__PURE__ */ jsx(ButtonStyled, {
  type: "button",
  onClick,
  children: label
});
const spin = /* @__PURE__ */ keyframes("from{transform:rotate(0deg);}to{transform:rotate(360deg);}");
const IconStyled = /* @__PURE__ */ styled("svg", {
  target: "euuhbx20"
})("height:6em;width:6em;padding:1.5em;will-change:filter;transition:filter 300ms;&:hover{filter:", (props) => props.primary ? "drop-shadow(0 0 2em #61dafbaa)" : "drop-shadow(0 0 2em #646cffaa)", ";}", (props) => props.animated ? css`
          @media (prefers-reduced-motion: no-preference) {
            animation: ${spin} infinite 20s linear;
          }
        ` : null);
const Icon = ({ name, animated, primary }) => /* @__PURE__ */ jsx(IconStyled, {
  animated,
  primary,
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  "aria-label": `Logo ${name}`,
  children: /* @__PURE__ */ jsx("use", {
    xlinkHref: `spritemap.svg#${name}`
  })
});
const Link = ({ href, children }) => /* @__PURE__ */ jsx("a", {
  href,
  target: "_blank",
  rel: "noreferrer",
  children
});
const TitleStyled = /* @__PURE__ */ styled("h1", {
  target: "e11tqb5o0"
})("font-size:3.2em;line-height:1.1;");
const CardStyled = /* @__PURE__ */ styled("div", {
  target: "e11tqb5o1"
})("padding:2em;");
const TextStyled = /* @__PURE__ */ styled("p", {
  target: "e11tqb5o2"
})("color:#888;");
const GlobalStyles = /* @__PURE__ */ css(":root{font-family:Roboto,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:rgba(255,255,255,0.87);background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;@media (prefers-color-scheme:light){color:#213547;background-color:#ffffff;}}#root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center;}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh;}");
const Page = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      /* @__PURE__ */ jsx(Global, {
        styles: [
          GlobalStyles
        ]
      }),
      /* @__PURE__ */ jsxs("div", {
        children: [
          /* @__PURE__ */ jsx(Link, {
            href: "https://vike.dev/",
            children: /* @__PURE__ */ jsx(Icon, {
              name: "vike",
              primary: true
            })
          }),
          /* @__PURE__ */ jsx(Link, {
            href: "https://react.dev",
            children: /* @__PURE__ */ jsx(Icon, {
              name: "react",
              animated: true
            })
          }),
          /* @__PURE__ */ jsx(Link, {
            href: "https://typescriptlang.org/",
            children: /* @__PURE__ */ jsx(Icon, {
              name: "ts"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx(TitleStyled, {
        children: "Vike + React + TS"
      }),
      /* @__PURE__ */ jsx(CardStyled, {
        children: /* @__PURE__ */ jsx(Button, {
          label: `count is ${count}`,
          onClick: handleClick
        })
      }),
      /* @__PURE__ */ jsx(TextStyled, {
        children: "Click on logos to learn more"
      })
    ]
  });
};
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/components/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import1
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Head"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import3
    }]
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import4
    }
  }
};
export {
  configValuesSerialized
};
//# sourceMappingURL=pages_index.mjs.map

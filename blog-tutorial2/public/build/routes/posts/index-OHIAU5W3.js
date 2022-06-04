import {
  Link
} from "/build/_shared/chunk-NF6RRORH.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-6BO74FWO.js";

// browser-route-module:/Users/matthewpettenato/Documents/GitHub/remix-demo-folder/blog-tutorial/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  console.log(posts);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug,
    className: "text-blue-600 underline"
  }, post.title)))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-OHIAU5W3.js.map

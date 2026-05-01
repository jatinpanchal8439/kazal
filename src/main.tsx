import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root")!;
router.mount({
  rootElement,
});

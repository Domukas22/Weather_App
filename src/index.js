import returnText from "./logic/function";
import "./styles/reset.css";
import "./styles/main.css";

function _print_this(textSTRING) {
  const text = document.createElement("h2");
  text.innerHTML = textSTRING;
  document.body.appendChild(text);
}

_print_this(returnText());

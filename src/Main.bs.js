

import * as Tea_app from "bucklescript-tea/src-ocaml/tea_app.js";
import * as Tea_html from "bucklescript-tea/src-ocaml/tea_html.js";

function currentWord(param_0) {
  return /* CurrentWord */[param_0];
}

function init(param) {
  return /* record */[/* current_word */""];
}

function update(model, param) {
  if (param) {
    return /* record */[/* current_word */param[0]];
  } else {
    return /* record */[/* current_word */""];
  }
}

function enter_fn(ev) {
  if (ev.keyCode === 13) {
    return /* Reset */0;
  }
  
}

function keypress_fn(v) {
  return "hello";
}

function view(model) {
  return Tea_html.div(undefined, undefined, /* [] */0, /* :: */[
              Tea_html.span(undefined, undefined, /* :: */[
                    Tea_html.style("font-weight", "bold"),
                    /* [] */0
                  ], /* :: */[
                    Tea_html.text("hello: " + model[/* current_word */0]),
                    /* [] */0
                  ]),
              /* :: */[
                Tea_html.br(/* [] */0),
                /* :: */[
                  Tea_html.input$prime(undefined, undefined, /* :: */[
                        Tea_html.type$prime("text"),
                        /* :: */[
                          Tea_html.value(model[/* current_word */0]),
                          /* :: */[
                            Tea_html.onInput("", (function (v) {
                                    return /* CurrentWord */["hello"];
                                  })),
                            /* :: */[
                              Tea_html.onCB("keyup", "", enter_fn),
                              /* [] */0
                            ]
                          ]
                        ]
                      ], /* [] */0),
                  /* [] */0
                ]
              ]
            ]);
}

var partial_arg_000 = /* model : record */[/* current_word */""];

var partial_arg = /* record */[
  partial_arg_000,
  /* update */update,
  /* view */view
];

function main(param, param$1) {
  return Tea_app.beginnerProgram(partial_arg, param, param$1);
}

var reset = /* Reset */0;

export {
  currentWord ,
  reset ,
  init ,
  update ,
  enter_fn ,
  keypress_fn ,
  view ,
  main ,
  
}
/* Tea_html Not a pure module */

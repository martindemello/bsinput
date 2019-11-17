open Tea.App
open Tea.Html

type model = {
  current_word: string;
}

type msg =
  | CurrentWord of string
  | Reset
  [@@bs.deriving {accessors}]

let init () = {
  current_word = ""
}

let update model = function
  | CurrentWord x -> { current_word = x }
  | Reset -> init ()

let enter_fn ev =
  if ev##keyCode == 13 then
    Some Reset
  else
    None

let keypress_fn v =
  "hello"

let view model =
  div
    []
    [ span
        [ style "font-weight" "bold" ]
        [ text ("hello: " ^ model.current_word) ]
    ; br []
    ; input' [ type' "text"
             ; value model.current_word
             ; onInput ~key:"" (fun v -> CurrentWord (keypress_fn v))
             ; onCB "keyup" "" enter_fn
             ] []
    ]

let main =
  beginnerProgram {
    model = init ();
    update;
    view;
  }

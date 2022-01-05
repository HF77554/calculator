/*
4 classes:
  special (unique application to display), 
  number (number value, just string to be added),
  calculation (value to be separated from string as it represents a calcualtion func), 
  result (clears calculation display, does calculations, adds to history display )
  trig (trig function calculations)
*/

/*
  Object format:
  {
    value: String (value to be displayed in button),
    attribute: String (choose from 5 classes above, func to address how value will affect display)
    color: String (color of button at display)
  }
*/

export const GEN_BUTTONS = [
    //row 1, 4 elements ( AC, (), %, /)
    [
      {
        value: "AC",
        attribute: "special",
        color: "danger"
      },
      {
        value: "()",
        attribute: "special",
        color: "success"
      },
      {
        value: "%",
        attribute: "special",
        color: "success"
      },
      {
        value: "/",
        attribute: "calculation",
        color: "info"
      }
    ],
    //row 2, 4 elements (7, 8, 9, x)
    [
      {
        value: "7",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "8",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "9",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "x",
        attribute: "calculation",
        color: "info"
      }
    ],
    //row 3, 4 elements (4, 5, 6, -)
    [
      {
        value: "4",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "5",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "6",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "-",
        attribute: "calculation",
        color: "info"
      }
    ],
    //row 4, 4 elements (1, 2, 3, +)
    [
      {
        value: "1",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "2",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "3",
        attribute: "number",
        color: "secondary"
      },
      {
        value: "+",
        attribute: "calculation",
        color: "info"
      }
    ],
    //row 5, 4 elements (0, '.', Del, =)
    [
      {
        value: "0",
        attribute: "number",
        color: "secondary"
      },
      {
        value: ".",
        attribute: "special",
        color: "secondary"
      },
      {
        value: "Del",
        attribute: "special",
        color: "danger"
      },
      {
        value: "=",
        attribute: "result",
        color: "warning"
      }
    ]
  ];
  
  export const TRIG_BUTTONS = [
    //row 1, 4 elements ( AC, (), %, /)
    [
      {
        value: "e",
        attribute: "constant",
        color: "secondary"
      },
      {
        value: "π",
        attribute: "constant",
        color: "secondary"
      },
      {
        value: "^",
        attribute: "calculation",
        color: "secondary"
      },
      {
        value: "!",
        attribute: "calculation",
        color: "secondary"
      }
    ],
    [
      {
        value: "Unit",
        attribute: "trig",
        color: "secondary"
      },
      {
        value: "sin",
        attribute: "trig",
        color: "secondary"
      },
      {
        value: "cos",
        attribute: "trig",
        color: "secondary"
      },
      {
        value: "tan",
        attribute: "trig",
        color: "secondary"
      }
    ]
  ];

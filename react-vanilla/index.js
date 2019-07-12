const createElement = React.createElement;

const value = Math.floor(Math.random() * 10000);

function render(){}

const App =
createElement(
  "div",
  {
    className: "App",
    render: render,
    value: value
  },
  [
    createElement(
      "h1",
      {},
      `React Functions [ ${this.props.value} ]`
    ),
    createElement(
      Level1,
      {
        render: this.props.render,
        value: this.props.value
      },
      [
        createElement(
          "div",
          {},
          [
            'LEVEL 1',
            createElement(
              Level2,
              {
                render: this.props.render,
                value: this.props.value
              },
              [
                createElement(
                  "div",
                  {},
                  [
                    'LEVEL 2',
                    createElement(
                      Level3,
                      {
                        render: this.props.render,
                        value: this.props.value
                      },
                      [
                        createElement(
                          "div",
                          {},
                          [
                            'LEVEL 3',
                            createElement(
                              'div',
                              {
                                render: this.props.render,
                                value: this.props.value
                              },
                              [
                                'button'
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ]
    )
  ]
);

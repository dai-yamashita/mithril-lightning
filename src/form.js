var form = {};

form.input = function (attrs) {
  return m(".slds-form-element", [
    m("label.slds-form-element__label", {
      for: attrs.name
    }, [
      attrs.input.required ? m("abbr.slds-required[title='required']", "*") : ""
    ], attrs.label),
    m(".slds-form-element__control", [
      m("input.slds-input[type='text']", attrs.input)
    ])
  ])
};

form.textarea = function (attrs) {
  return m(".slds-form-element", [
    m("label.slds-form-element__label[for='textarea-input-01']", attrs.label),
    m(".slds-form-element__control", [
      m("textarea.slds-textarea", attrs.textarea)
    ])
  ])
};

form.radio = function (attrs) {
  return m("fieldset.slds-form-element", [
    m("legend.slds-form-element__legend.slds-form-element__label", [
      attrs.required ? m("abbr.slds-required[title='required']", "*") : ""
    ], attrs.label),
    m(".slds-form-element__control", [
      attrs.itens.map(function (radio) {
        return m("label.slds-radio", [
          m("input[type='radio']", {
            name: attrs.name,
            value: radio.value,
            onclick: attrs.onclick
          }),
          m("span.slds-radio--faux"),
          m("span.slds-form-element__label", radio.label)
        ])
      })
    ])
  ])
};

form.radioGroup = function (attrs) {
  return m("fieldset.slds-form-element", [
    m("legend.slds-form-element__legend.slds-form-element__label", attrs.label),
    m(".slds-form-element__control", [
      m(".slds-radio--button-group", [
        attrs.itens.map(function (radio) {
        return m("label.slds-button.slds-radio--button", [
            m("input[type='radio']", {
              name: attrs.name,
              value: radio.value,
              onclick: attrs.onclick
            }),
            m("span.slds-radio--faux", radio.label)
          ])
        })
      ])
    ])
  ])
};
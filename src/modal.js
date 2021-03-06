'use strict';

var mlds = {

  show: function (modal, id) {
    var modalWrapper = document.createElement("div");
    modalWrapper.id = id;
    modal.state.root = modalWrapper;
    document.body.appendChild(modalWrapper);
    m.render(modalWrapper, modal);
  },

  modalClose: function (e) {
    m.mount(this.state.root, null);
    this.state.root.remove()
  },

  view: function (vnode) {
    return [
      m(".slds-modal.slds-fade-in-open[role='dialog'][tabindex='-1']", [
        m(".slds-modal__container", [
          m(".slds-modal__header", {
            class: vnode.attrs.header ? "" : "slds-modal__header--empty"
          }, [
            m("button.slds-button.slds-button--icon-inverse.slds-modal__close", {
              onclick: this.modalClose.bind(vnode)
            }, [
              m("svg.slds-button__icon.slds-button__icon--large", [
                m("use[xlink:href='/assets/icons/action-sprite/svg/symbols.svg#close']")
              ]),
              m("span.slds-assistive-text", "Close")
            ]),
            // Header
            typeof vnode.attrs.header === "object" ? vnode.attrs.header : vnode.attrs.header
          ]),
          // Content
          m(".slds-modal__content.slds-p-around--medium", [
            m("div", [
              vnode.attrs.content
            ])
          ]),
          // Footer
          vnode.attrs.footer ?
          m(".slds-modal__footer", [
            vnode.attrs.footer
          ]) : ""
        ]),
    ]),
      m(".slds-backdrop.slds-backdrop--open")
    ]
  }

};

module.exports = mlds;
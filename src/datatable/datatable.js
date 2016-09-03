
var Datatable = {

  oninit: function (vnode) {
    this.fields = Object.keys(vnode.attrs.fields);
    this.isStriped = vnode.attrs.isStriped;
  },

  header: function (fields) {
    return m("thead", [
      m("tr.slds-text-heading--label", [
        this.fields.map(function (key) {
          return m("th[scope='col']", [
            // Labels here
            m('.slds-truncate', fields[key])
          ])
        })
      ])
    ])
  },

  view: function(vnode) {
    var table = "table.slds-table.slds-table--bordered.slds-table--cell-buffer";
    if (this.isStriped) table += ".slds-table--striped";
    return m(table, [
      vnode.state.header(vnode.attrs.fields),
      m("tbody", [
        vnode.attrs.data.map(function (row) {
          return m("tr", [
            // Loop in data here and validate if is th or td
            vnode.state.fields.map(function (key) {
              return m("td[scope='row']", [
                m(".slds-truncate", row[key])
              ])
            })
          ])
        })
      ])
    ])
  }

};
Book.css = function() {
let preferences = Book.data.local.preferences
theme = preferences.theme || 'default'
let _ = Book.cssTemplates[theme];
Book.events.updatePreferences = function() {
  preferences = Book.data.local.preferences
  _ = Book.cssTemplates[theme];
}
return {
  modal: `
    :host {
      background-color:rgba(150,150,150,.3);
      padding:5px;position: fixed; z-index: 4;top:10%;height:100%; width:100%;
    }
    #centerModal {
      text-align:center;
      width:80%;
      margin: 0 auto;
      ${_.backgroundModals}
    }
    ${_.select}
    ${_.btn}
    ${_.btnExit}
  `,
  gold : `
    background: linear-gradient(0deg, #efd100, #e2a233 38%, #f0c328 60%, #fff1a3 86%, #ffe13e 100%);`,
  boxes: {
    topLeftNav: function() {
      return `
        :host {
          padding-top:.3rem;
          width:100%;
          position: fixed;
          ${_.border1}
          ${_.backgroundNav1}
        }
        :host(:hover) {
          box-shadow: 0px 0px .1rem .2rem rgba(255, 255, 255, .1) inset;
        }
        #topDiv {
          display:block;
          flex-wrap:wrap;
        }
        #collapseNav {
          font-weight:900;
          background-color:rgba(0,0,0,0);font-size:1rem;
          padding:none;
          color:white;
          top:-.3rem;
          position:relative;
          border:none;
          max-height:.9rem;
        }
        #collapseNav:hover {
          box-shadow: 0px 0px .1rem .2rem rgba(100,255,188,.6) inset;
        }
        #left {
          display: inline-block;
          margin-right:.1rem;
        }
        #LyceliaButton {
          font-family:cursive;
          font-size:1rem;
          text-shadow:1px 1px white;
        }
        #LyceliaButton a {
          text-decoration: none;
          color: white;
        }
        ${_.btnBase1}`
    },
    mainButtons: function() {
      return `
      :host {
        box-sizing: border-box;
        display:inline;
        ${_.backgroundNav1}
        width: 100%;
        clear: left;
      }
      ${_.btn}
      ${_.btnNav1}
      #addColumn {
        border-radius: 5px;
        font-size: 1rem;
        background: linear-gradient(0deg, rgb(0,200,0), rgb(0,255,55) 40%, rgb(40,240,40));
      }
      #addColumn:hover {
          background: linear-gradient(0deg, rgb(0,220,0), rgb(20,255,75) 40%, rgb(60,250,60));
          box-shadow: 0px 1px 1px 2px blue;
      }`
    },
    displayTopUI: function() {
      return `
        :host {
          ${_.backgroundNav2}
          min-height:1.5rem;
          display:flex;
          position:fixed;
          width:100%;
        }
        #left {
          display:inline-flex;
          margin-right:.5rem;
        }
        ${_.btn}
        ${_.btnBase2}
        #right: {
          display: inline
        }
        #left button:first-child {
          border-top-left-radius: .4rem;
          border-bottom-left-radius: .4rem;
        }
        #left button:last-child {
          border-top-right-radius: .4rem;
          border-bottom-right-radius: .4rem;
        }
        .rightButtons {
          ${_.btnNav2}
        }`
    },
    display : function() {
      return `
        .lineContainer {
          background: linear-gradient(30deg, rgb(0, 0, 0), rgb(33, 155, 55) 40%, rgb(40, 40, 40));
          box-sizing:border-box;
        }
        .stringContainer {
        }
        .objectContainer {
          ${_.border2}
          padding:1px;
        }
        .objectContainer > .title > .titleContent {
          text-decoration: underline;
        }
        .title {
          line-height: 1.1rem;
          background: linear-gradient(-2deg, rgb(120, 110, 110), rgb(160, 205, 205) 80%, rgb(140, 140, 140));
          font-weight: bold;
          padding: .15rem;
          border-radius: .2rem;
        }
        .titleContent {
          color:black;
          margin: auto;
          padding:.5rem;
        }
        .lineBody {
          margin-left:.5rem;
          min-height:.5rem;
          background-color: rgb(230,230,0);
          display: block;
        }
        .textField {
          color: black;
          cursor: text;
          background-color: rgb(240,245,240);
          min-height:.5rem;
        }
        .textField:focus {
          background-color: rgb(255,255,255);
          box-shadow:0px 0px 1px 1px black ;
        }
        .addLine {
          background-color: #5cb85c;
          border-color: #4cae4c;
        }
        .addLine:hover {
          background-color: #449d44;
          border-color: #398439;
        }
        .deleteLine {
          background-color: #d9534f;
          border-color: #d43f3a;
        }
        .deleteLine:hover {
          background-color: #c9302c;
          border-color: #ac2925;
        }
        .focusMe {
          background-color: #337ab7;
          border-color: #2e6da4;
        }
        .focusMe:hover {
          background-color: #286090;
          border-color: #204d74;
        }
        .editHTML {
          background-color: #5bc0de;
          border-color: #46b8da;
        }
        .editHTML:hover {
          background-color: #31b0d5;
          border-color: #269abc;
        }
        .isRaw {
          box-shadow: 0px 0px 1px 3px rgba(222, 0, 222, .5) inset;
        }
        .buttonGroup {
          margin-left: .4rem;
          line-height: 1.1rem;
          vertical-align: middle;
          display:inline-flex;
        }
        .buttonGroup button {
          font-weight: bold;
          color: white;
          padding: .15rem;
          margin: auto;
        }
        .buttonGroup button:hover {
          outline:none;
        }
        .buttonGroup button:first-child {
          border-top-left-radius: .4rem;
          border-bottom-left-radius: .4rem;
        }
        .buttonGroup button:last-child {
          border-top-right-radius: .4rem;
          border-bottom-right-radius: .4rem;
        }`
    },
    splash: function() {
      return `
        :host {
          padding: 3%;
        }
        h1 {
          text-align:center;
        }`
    }
  },
  modals : {
    createFile : function() {
      return `
        button, input, select {
          font-size:1rem;
        }
        ${_.btn}
        ${Book.css.modal}
        ${_.btnExit}
        ${_.btnSubmit}`
    },
    addLine : function() {
      let str =  `
        ${Book.css.modal}
        ${_.btnSubmit}
        select:active, select:hover {
          outline-color: red
        }
        option:active, option:hover {
          color: red
        }`
      return str
    },
    confirmationDelete : function() {
      return `
        ${Book.css.modal}
        ${_.btnWarn}
        #cancel {
          background-color: rgb(0,50,255);
        }`
    },
    preferencesFile : function() {
      return `
        ${Book.css.modal}
        ${_.btnSubmit}`
    },
    saveFile : function() {
      return `
        ${Book.css.modal}`
    },
    uploadFile : function() {
      return `${Book.css.modal}
      ${_.btnSubmit}`
    },
    openFile: function() {
      return `
        ${Book.css.modal}
        .fileBtn {
          ${Book.css.gold}
        }`
    }

  }
}
}

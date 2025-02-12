export default `
      .icon {
        width: 1.4em;
        height: 1.4em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
      #editor-content:focus,
      .custom-input:focus {
        outline: none;
      }
      .custom-input {
        top: -100px;
        left: 0;
        position: absolute;
        pointer-events: none;
        width: 2px;
        background: transparent;
        border: none;
        padding: 0;
      }
      .custom-input {
        opacity: 0;
        caret-color: transparent;
        color: transparent;
      }
      .custom-input-iframe {
        top: -100px;
        left: 0;
        background: transparent;
        color: transparent;
        width: 10px;
        height: 0px;
        pointer-events: none;
        border: none;
        caret-color: transparent;
        /* display: none; */
      }
      .custom-caret {
        top: -100px;
        left: 0;
        pointer-events: none;
        position: absolute;
        width: 2px;
        border: none;
        padding: 0;
        /* user-select: none; */
        display: block;
        animation: caret 1s infinite 0.5s steps(1, start);
      }
      @keyframes static-caret {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes caret {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      #editor-content ::selection {
        background: rgb(186, 210, 250);
      }
      #editor-content .editor-disabled:hover{
        user-select:none
      }
    `

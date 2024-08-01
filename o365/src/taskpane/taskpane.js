/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global document, Office */

Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
      //document.getElementById("sideload-msg").style.display = "none";
      document.getElementById("app-body").style.display = "flex";
      document.getElementById("run").onclick = run;
    }
  });
  
  export async function run() {
    // Get a reference to the current message
    const item = Office.context.mailbox.item;
  
    // Write message property value to the task pane
    document.getElementById("item-subject").innerHTML = "<b>Subject:</b> <br/>" + item.subject;
  }
  
/**
 * Writes 'Hello world!' to a new message body.
 */
function sayHello() {
  Office.context.mailbox.item.body.setAsync(
    'Hello world!',
    {
      coercionType: 'html', // Write text as HTML
    },

    // Callback method to check that setAsync succeeded
    function (asyncResult) {
      if (asyncResult.status == Office.AsyncResultStatus.Failed) {
        write(asyncResult.error.message);
      }
    }
  );
}
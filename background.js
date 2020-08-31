chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if(details.method == "POST") {
        let formData = details.requestBody.formData;

        if(formData.__action == "grade")
        {
            setTimeout(window.history.back, 1000);
            return {cancel: !confirm('are you sure you want to submit for grading?')};
        }
  
        return {cancel: false};
      }
    },
    {urls: ["https://prairielearn.engr.illinois.edu/*"]},
    ["blocking", "requestBody"]
  ); 
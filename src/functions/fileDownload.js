function fileDownload(filename, text){
    const blob = new Blob([text], {type: "text/plain"});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  }  

  export default fileDownload;
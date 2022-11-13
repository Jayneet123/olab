// document.getElementById('rectAfterMerge').style.display = "none";
document.addEventListener('DOMContentLoaded', (event) => {
    
    function handleDragStart(e) {
      this.style.opacity = '0.4';
    }
  
    function handleDragEnd(e) {
      this.style.opacity = '1';
  
      items.forEach(function (item) {
        item.classList.remove('over');
      });
    }
  
    function handleDragOver(e) {
      e.preventDefault();
      return false;
    }
  
    function handleDragEnter(e) {
      this.classList.add('over');
    }
  
    function handleDragLeave(e) {
      this.classList.remove('over');
    }
  
    // let items = document.querySelectorAll('.container1 .box');
    // items.forEach(function(item) {
    //   item.addEventListener('dragstart', handleDragStart);
    //   item.addEventListener('dragover', handleDragOver);
    //   item.addEventListener('dragenter', handleDragEnter);
    //   item.addEventListener('dragleave', handleDragLeave);
    //   item.addEventListener('dragend', handleDragEnd);
    //   item.addEventListener('drop', handleDrop);
    // });
    const source = document.getElementById('rect');
    const target = document.getElementById('square1');
    source.addEventListener("dragstart", handleDragStart)
    source.addEventListener("dragend",handleDragEnd)
    target.addEventListener("dragover", handleDragOver)
    target.addEventListener("drop", handleDrop)
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
  
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('squareOnRect', this.innerHTML);
    e.dataTransfer.setData('squareOnRect',e.target.id);
  }
  function handleDrop(e) {
    e.stopPropagation();
    dragSrcEl = this;
  
    // if (dragSrcEl !== this) {
    //   dragSrcEl.innerHTML = this.innerHTML;
    //   this.innerHTML = e.dataTransfer.getData('squareOnRect');
    // }
    if(dragSrcEl.id !== document.getElementById('square1')){
      const data = e.dataTransfer.getData('squareOnRect');
      document.getElementById("rect").style.backgroundColor = "white";
      document.getElementById('rect').style.border = "white";
      document.getElementById('plusOperator').textContent = ' ';
      document.getElementById('xsquare').append('+ 4x');
      console.log("Success");
    }
    
  
    return false;
  }
  });
  
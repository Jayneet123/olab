document.getElementById("rectAfterMerge").style.display = "none";
let smallSquare = document.getElementById('smallSquare');
async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}
function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

typeSentence("Drag the red box to the green box. Therefore, adding x² and 4x.", "#sentence")
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
  const source = document.getElementById('rect');
  const target = document.getElementById('square1');
  source.addEventListener("dragstart", handleDragStart)
  source.addEventListener("dragend", handleDragEnd)
  target.addEventListener("dragover", handleDragOver)
  target.addEventListener("drop", handleDrop)

  function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('squareOnRect', this.innerHTML);
    e.dataTransfer.setData('squareOnRect', e.target.id);
  }
  function handleDrop(e) {
    e.stopPropagation();
    dragSrcEl = this;

    // if (dragSrcEl !== this) {
    //   dragSrcEl.innerHTML = this.innerHTML;
    //   this.innerHTML = e.dataTransfer.getData('squareOnRect');
    // }
    if (dragSrcEl.id !== document.getElementById('square1')) {
      const data = e.dataTransfer.getData('squareOnRect');
      // document.getElementById("rect").style.backgroundColor = "white";
      // document.getElementById('rect').style.border = "white";
      document.getElementById('rect').style.display = 'none';
      document.getElementById('plusOperator').textContent = ' ';
      // document.getElementById('equalOperator').style.marginLeft= '-40%';
      document.getElementById('fourx').textContent = ' ';
      document.getElementById('sixty').style.paddingLeft = '255px';
      document.getElementById('xsquare').append('+ 4x');
      document.getElementById('xsquare').style.paddingLeft = '420px';
      document.getElementById("rectAfterMerge").style.display = "grid";
      document.getElementById('square1').style.display = "none";
      document.getElementById('sentence').textContent = " ";
      typeSentence("Now we try to see how to make it a complete square.", "#sentence");
      console.log("Success");
      let square = document.querySelector("#smallSquare");
      square.style.display = "grid";
      square.addEventListener('click',moveRight);
      function moveRight(){
        square.style.left = square.offsetLeft + 1000+'px';
      }
      
    //   //Animations 
    //   let start = Date.now(); // remember start time

    //   let timer = setInterval(function () {
    //     // how much time passed from the start?
    //     let timePassed = Date.now() - start;

    //     if (timePassed >= 20000) {
    //       clearInterval(timer); // finish the animation after 2 seconds
    //       return;
    //     }

    //     // draw the animation at the moment timePassed
    //     draw(timePassed);

    //   }, 20);

    //   // as timePassed goes from 0 to 2000
    //   // left gets values from 0px to 400px
    //   function draw(timePassed) {
    //     smallSquare.style.paddingLeft = timePassed / 5 + 'px';
    //   }

    }
    // return false;
  }
});



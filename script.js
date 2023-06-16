//your JS code here. If required.
function findDOMLevel(elementId) {
      var element = document.getElementById(elementId);
      var level = 0;
      
      while (element.parentElement) {
        element = element.parentElement;
        level++;
      }
      
      return level;
    }
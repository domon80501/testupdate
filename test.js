<script language="javascript">
  function mouseMove(evt){
        svgtar=evt.target    
        svgdoc=svgtar.ownerDocument;
        rect1=svgdoc.getElementById("rect1");
        rect1.setAttribute("style", "fill:green");
  }

  function mouseOut(evt){
        svgtar=evt.target    
        svgdoc=svgtar.ownerDocument;
        rect1=svgdoc.getElementById("rect1");
        rect1.setAttribute("style", "fill:red");
  }
</script>

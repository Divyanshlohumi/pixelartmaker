var submit = $('input[type="submit"]');

submit.click(function(event){
    event.preventDefault();
    makeGrid();
});

function makeGrid() 
{
    var table,height,width,cell,row,color;
    
    table = $('#pixelCanvas');
    gridHeight = $('#inputHeight').val();
    gridWidth = $('#inputWidth').val();
  
    for(let i=0; i<gridHeight; i++) 
    {
        table.append('<tr></tr>');
        row=$('tr');
    }
    
        for(let j=0; j<gridWidth; j++) {
            row.append('<td></td>');
    }
    
    cell = table.find('td');
    
    cell.click(function()
    {
        color = $('#colorPicker').val();
        $(this).attr('bgcolor',color); 
    });
}

table.on("dblclick", "td", function(){
    $(this).attr("bgcolor", "");
});
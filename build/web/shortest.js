var index;
		function drawOnCanvas(canvas, x,y) {
			if (canvas.getContext){
				var canvas_context = canvas.getContext("2d");
                canvas_context.beginPath();
				canvas_context.arc(x,y,10,0,Math.PI*2,true);
				canvas_context.fillStyle= 'black';
				canvas_context.strokeStyle='yellow';
				canvas_context.fill();
				canvas_context.stroke();
			}

		}
		
		function drawedge(canvas,x1,y1,x2,y2){
	       context.beginPath();
           context.moveTo(x1,y1);
           context.lineTo(x2,y2);
		   context.strokeStyle= "yellow";
           context.stroke();	
		}

      var clickposx = new Array();
	  var clickposy = new Array();
	  var correctx;
	  var correcty;
	  var AlinkB =new Array();
	  var BlinkA= new Array();
	  var removeindex;
	  
	  
      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();  
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');
      var clickx=new Array();
	  var clicky=new Array();
	  var removex=new Array();
	  var removey=new Array();
	  var index1=-1,index2=-1;
          var shortestx=new Array();
          var shortesty=new Array();
          var mouseclick=0;
	
          listfiles();
      canvas.addEventListener('mousedown', function(evt) {
        var mousePos = getMousePos(canvas, evt); 
        mouseclick=mouseclick+1;
		if(document.getElementById('Add Vertices').checked){ 
                    
                    
		  if(checkcircle(mousePos.x,mousePos.y)){
		     drawOnCanvas(canvas, mousePos.x, mousePos.y) 
		     append(mousePos.x,mousePos.y);
		   }
		}
		if(document.getElementById('Add Edges').checked){
                    if(x.length!=0){
		   if(edgecheck(mousePos.x,mousePos.y)){
		     clickx.push(correctx); 
		     clicky.push(correcty); 
			 
			 if(clickx.length==2){
			   if(clickx[0]!=clickx[1]){
			    //console.log(clickx,clicky);
				if(checkexistence(clickx[0],clickx[1])){
				drawedge(canvas,clickx[0],clicky[0],clickx[1],clicky[1]);
				adjList(clickx[0],clickx[1]);
				}
			}
				clickx.pop();
				clickx.pop();
				clicky.pop();
				clicky.pop();
			 }
	        }	}
            else{
                alert("Please add some vertices");
            }
		}
		
		if(document.getElementById('Find Shortest Path').checked){
		//console.log("asdas");	
                if(x.length!=0){
                    redraweverthing();
                  if(edgecheck(mousePos.x,mousePos.y)){
                      shortestx.push(correctx);
                      shortesty.push(correcty);
                      console.log(shortestx,shortesty);
                      
                      if(shortestx.length==2){
                      if( shortestx[0]!=shortestx[1] && shortesty[0]!=shortesty[1]){
                          modify(shortestx[0],shortesty[0],shortestx[1],shortesty[1]);
                         
                          console.log("x");
                          console.log(x);
                          console.log("y");
                          console.log(y);
                          console.log("Alinkb");
                          console.log(AlinkB);
                          console.log("BLinka");
                          console.log(BlinkA);
                           dijikstra();
                          
                          
                      }
                      
                      if(shortestx[0]==shortestx[1] && shortesty[0]==shortesty[1]){
                          console.log(shortestx,shortesty);
                          alert("Shortest Path length is ZERO");
                         
                      }
                       shortestx.pop();
                      shortestx.pop();
                      shortesty.pop();
                      shortesty.pop();
                  }
                  }
                  //      alert("sadasfdsa");
                }
                else{
                    alert("Please add some vertices and edges");
                }
          }
		
		
		if(document.getElementById('Delete Edges').checked){
                  if(x.length!=0 && AlinkB.length!=0){  
		   if(edgecheck(mousePos.x,mousePos.y)){
		     removex.push(correctx);
		     removey.push(correcty); 
			// console.log(removex,removey);
			 if(removex.length==2){
			    if(!(checkexistence(removex[0],removex[1]))){
				  // console.log('viaks');
				   deleteEdge(removeindex);
				   redraweverthing();
				}
			   removex.pop();
               removex.pop();			   
		       removey.pop();
		       removey.pop();
		}
		
		}
	  }
          else{
              alert("Please add some vertices and then edges");
          }
      }
	  
	  if(document.getElementById('Delete Vertices').checked){
              if(x.length!=0){
	    if(edgecheck(mousePos.x,mousePos.y)){
		  detvertices();
		}
              }
              else{
                  alert("Please add some vertices");
              }
	  }
	  
	  if(document.getElementById('Move Vertices').checked){
            if(x.length!=0) {
	    if(edgecheck(mousePos.x,mousePos.y)){
		
		   canvas.addEventListener('mousemove',move,false);
		   canvas.addEventListener('mouseup',function(evt){canvas.removeEventListener('mousemove',move,false)
                    if(!(checkcirclemodify(x[index],y[index]))){
                       alert("Some vertices are overlapping.Moved vertex will be restored back to its original position");
                       x[index]=correctx;
                       y[index]=correcty;
                       redraweverthing();
                       
                   }
                   },false);
                  
                 /*  if(!(checkcirclemodify(canvas,x[index],y[index]))){
                       alert("Some vertices are overlapping.Moved vertex will be restored back to its original position");
                       x[index]=correctx;
                       y[index]=correcty;
                       redraweverthing();
                       
                   }*/
		}
	  }
          else{
              alert("Please add some vertices");
          }
        }
		
		 
	}, false);
	
	function move(evt){
          
		var rectmod = canvas.getBoundingClientRect();
                 //  if(checkcircle((evt.x-rectmod.left),(evt.y-rectmod.top))){
					x[index]=evt.x-rectmod.left;
					y[index]=evt.y-rectmod.top;
                                        redraweverthing();
                                        console.log(correctx,correcty);
                                      /* if((checkcircle((evt.x-rectmod.left),(evt.y-rectmod.top)))){
                                            x[index]=correctx;
                                            y[index]=correcty;
                                            redraweverthing();
                                        }*/
			   
                  // }	   
     
			
	}
	
	var AB=new Array(); 
	var BA=new Array();
	
	
	
	
	
	/*delete vertices function*/
	function detvertices(){
	var c,d,e;
	  for (var i in x){
	    if(correctx==x[i] && correcty==y[i])
		{
		  c=i;
		}
	  }
	
	
	var q=AlinkB.length;
	 for (var i=0;i<q;i++){
	   if(AlinkB[i]==c){
	     AlinkB.splice(i,1);
	     BlinkA.splice(i,1);
		 i--;
		
	   }
	     
	 }
	 var w=BlinkA.length;
	 for (var j=0;j<w;j++){
	   if(BlinkA[j]==c){
	      BlinkA.splice(j,1);
	      AlinkB.splice(j,1);
		  j--;
		 
	 }
	    
	 }
	  x.splice(c,1);
	 y.splice(c,1);
	  adjust(c); 
	 console.log('adafafdd');
	 console.log(AlinkB,BlinkA);
	 
	
     redraweverthing();	 
	}
	
	function adjust(k){
	  console.log(AlinkB);
	  for ( var i in AlinkB){
	    if(AlinkB[i]>k){
		  AlinkB[i]=AlinkB[i]-1;
		}
		if(BlinkA[i]>k){
		  BlinkA[i]=BlinkA[i]-1;
		}
	  }
	  console.log(AlinkB,BlinkA);
	}
	/* delete vertices function */
	
        function swap(q,w){
            var z=x[q];
            var d=y[q];
            x[q]=x[w];
            y[q]=y[w];
            x[w]=z;
            y[w]=d;
        }
	
        function swap1(e,r){
           
           for(var i in AlinkB){
               if(AlinkB[i]==0){
                   AlinkB[i]=r;
               }
               else if(AlinkB[i]==r){
                   AlinkB[i]=0;
               }
               if(BlinkA[i]==0){
                   BlinkA[i]=r;
               }
               else if(BlinkA[i]==r){
                   BlinkA[i]=0;
               }
           }
        }
        
	var ind1;
	function modify(a,b,c,d){
            var ind;
            for(var i in x){
                if(x[i]==a && y[i]==b){
                    ind=i;
                }
                if(x[i]==c && y[i]==d){
                    ind1=i;
                }
             }
            swap(0,ind); 
            swap1(0,ind);
            
        }
	
	
	
	
	function deleteEdge(a){
	console.log(AlinkB);
	  AlinkB.splice(a,1);
	  BlinkA.splice(a,1);
	  console.log(AlinkB,BlinkA);
	}
	
	function redraweverthing(){
	 context.clearRect(0, 0, canvas.width, canvas.height);
	 for (var i in x){
	   
	    drawOnCanvas(canvas,x[i],y[i]);
	 }
	 console.log(AlinkB,BlinkA);
	  for(var i in AlinkB){
	    drawedge(canvas,x[AlinkB[i]],y[AlinkB[i]],x[BlinkA[i]],y[BlinkA[i]]);
	  }
	}
	
	function checkexistence(k,w){
       
	   var cond=true;
	   for (var i in x){
	     if(k==x[i]){
		   index1=i
		   
		 }
		 if(w==x[i]){
		   index2=i
		 }
	  }
	  for (var i in AlinkB){
	    if(AlinkB[i]==index1 && BlinkA[i]==index2){
		     removeindex=i;
		     cond=false;
		   }
		if(AlinkB[i]==index2 && BlinkA[i]==index1){
             removeindex=i;
		     cond=false;
		   }   
	  }
	  return cond;
	}
	
	function edgecheck(c,yi){
	  var value=false;
        for(var i in x){
		  if(((c-x[i])*(c-x[i])+(yi-y[i])*(yi-y[i]))<=100){
		     correctx=x[i];
			 correcty=y[i];
			 index=i;
			 value=true
		  }
		}
	  return value;
	 }
	  
	 function adjList(s1,s2){
	   var indexx1 , indexx2;
	   for (var i in x){
	     if(s1==x[i]){
		   indexx1=i;
		 }
		 if(s2==x[i]){
	       indexx2=i;	 
   		 }
	   }
	  AlinkB.push(indexx1);
	  BlinkA.push(indexx2);
	  for(var i in AlinkB){
	    AlinkB[i]=AlinkB[i]-0;
		BlinkA[i]=BlinkA[i]-0;
	  }
	  console.log(AlinkB,BlinkA);
	 }
	 
	 
	  var x=new Array();
	  var y=new Array();
	  
	  function append(x1,y1)
	  {
	      x.push(x1);
	      y.push(y1);
		  console.log(x,y);
		 
	  }
	  
	   
	   
	  function checkcircle(x1,y1)
	  {
	    var check=true;
		for (var i in x)
		{
		  var dis=(x1-x[i])*(x1-x[i])+(y1-y[i])*(y1-y[i])+2;
		   if(dis<=(20*20))
		   {
		     check=false;
		   }
		}
		return check;
	 }
         
         function checkcirclemodify(x1,y1)
	  {
	    var check=true;
		for (var i in x)
		{
                  if(i!=index){
		  var dis=(x1-x[i])*(x1-x[i])+(y1-y[i])*(y1-y[i])+2;
		   if(dis<=(20*20))
		   {
		     check=false;
		   }
                  }
                  else{
                      continue;
                  }
		}
		return check;
	 }
	 
         
         
           var save;
          function savefile(){
                      save = document.getElementsByName('filename')[0].value;   
                      recentsave();
                      var xver=x.join(" ");
                      //console.log(xver);
                       var yver=y.join(" ");
                       var a2b=AlinkB.join(" ");
                       var b2a=BlinkA.join(" ");
                      
				$.ajax({
			url: 'savefile.jsp?w='+save+'&x='+xver+'&y='+yver+'&z='+a2b+'&a='+b2a,
			type: "POST" ,
			dataType: "text",
                        data:"",
			success: function(data) {
				alert("successfully saved");

			}
		});
	 }
         
         var pathlist=new Array();
         
         function dijikstra(){
                      console.log("afadfadf")
                      var xdij=x.join(" ");
                      //console.log(xver);
                       var ydij=y.join(" ");
                       var a2bdij=AlinkB.join(" ");
                       var b2adij=BlinkA.join(" ");
                       
				$.ajax({
			url: 'dijikstra.jsp?x='+xdij+'&y='+ydij+'&z='+a2bdij+'&a='+b2adij+'&des='+ind1,
			type: "POST" ,
			dataType: "text",
                        data:"",
			success: function(data) {
                               console.log(data);
                               console.log("heeeeeeeeeeee")
				if(data==10000){
                                    alert("No Path Exists");
                                }
                                else{
                                 pathlist=data.split(",");
                                pathlist.splice(0,1);
                                pathlist.splice(-1,1);
                                var len=pathlist.length;
                                for(var i=0;i<len;i++){
                                    pathlist.splice(i+1,1);
                                }
                                for(var i in pathlist){
                                    pathlist[i]=pathlist[i]-0;}
                        console.log(pathlist);
                        for(var i=0;i<pathlist.length;i++){
                           var g=pathlist[i];
                           var h=pathlist[i+1];
                            if((i+1)<=pathlist.length){
                                drawshortestpath(canvas,x[g],x[h],y[g],y[h]);
                            }
                        } }
                    
			}
		});
	 }
         
         function drawshortestpath(canvas,x1,x2,y1,y2){
             console.log("Iam here");
           context.beginPath();
           context.moveTo(x1,y1);
           context.lineTo(x2,y2);
           context.strokeStyle = "red";
           context.stroke();
          
         };
         
         
         var name;
        function loadfile(){
                    // name = document.getElementsByName('loadgraph')[0].value;
                     var e = document.getElementById('select');
                      name = e.options[e.selectedIndex].text;
                     /* var xver=x.join(" ");
                      console.log(xver);
                       var yver=y.join(" ");
                       var a2b=AlinkB.join(" ");
                       var b2a=BlinkA.join(" ");*/
                      x.length=0;
                      y.length=0;
                      AlinkB.length=0;
                      BlinkA.length=0;
                      //console.log(name);
				$.ajax({
			url: 'loadfile.jsp?e='+name/*+'&x='+xver+'&y='+yver+'&z='+a2b+'&a='+b2a*/,
			type: "POST" ,
			dataType: "text",
                        data:" ",
			success: function(data) {
                              //alert(data);
                              console.log(data);
                                var receivedstring=data.split(",");
                                
                                receivedstring.splice(0,1);
                                receivedstring.splice(-1,1);
                               console.log(receivedstring);
                                if(!(receivedstring.length===0)){
				var dummyX=receivedstring[0].split(" ");
                                console.log(dummyX);
                                var dummyY=receivedstring[1].split(" ");
                                console.log(dummyY);
                                var dummyAB=receivedstring[2].split(" ");
                                console.log(dummyAB);
                                var dummyBA=receivedstring[3].split(" ");
                                console.log(dummyBA);
                                for(var i in dummyX){
                                  x.push(dummyX[i]-0);
                                  y.push(dummyY[i]-0);
                                }
                                console.log(x);
                                console.log(y);
                                for(var j in dummyAB){
                                  AlinkB.push(dummyAB[j]-0);
                                  BlinkA.push(dummyBA[j]-0);
                                }
                                console.log(AlinkB);
                                console.log(BlinkA);
                               /// console.log(AlinkB);
                                redraweverthing();
			      }
                        else{
                            alert("ERROR!!!"+"\n"+"File not found. TRy again...");
                        }
                    }
                    
		});
	 }
          
          var savefilelist=new Array();
          var count=0;
         // var loadfilelist=new Array();
         function recentsave(){
             var str=save+".graph";
             console.log(savefilelist);
          if(nameexist(str)){
              savefilelist.push(save);
              count=count+1;
            updatelist(savefilelist[(count-1)]);
            /*console.log(save);
             console.log(savefilelist);
             console.log(savefilelist[-1]);
             console.log(savefilelist[0]);*/
         }}
         
        function nameexist(k){
             var ret=true;
             for(var i in savefilelist){
                 if(savefilelist[i]===k){
                     ret=false;
                 }
             }
             for(var i in savedgraph){
                 if(savedgraph[i]===k){
                     ret=false;
                 }
             }
             return ret;
         }
         
         var savedgraph;
         
         function listfiles(){
                      //var some = document.getElementsByName('')[0].value; 
                      
				$.ajax({
			url: 'givefilenames.jsp?k=a',
			type: "POST" ,
			dataType: "text",
                        data:"",
			success: function(data) {
                               console.log(data);
				savedgraph=data.split(",");
                                savedgraph.splice(0,1);
                                savedgraph.splice(-1,1);
                                var len=savedgraph.length
                                for(var i=0;i<len;i++){
                                    savedgraph.splice(i+1,1);
                                         
                                }
                                
                                createlist();
                        console.log(savedgraph);
			}
		});
	 }
         
         
         function createlist(){
             for(var i in savedgraph){
              var file=savedgraph[i];
              content=document.getElementById('select').innerHTML;
              document.getElementById('select').innerHTML=content+"<option value="+file+">"+file+"</option>";
             }
           }
           
         function updatelist(arg){
             var content= document.getElementById('select').innerHTML;
              document.getElementById('select').innerHTML=content+"<option value="+arg+".graph"+">"+arg+".graph"+"</option>";
         }  
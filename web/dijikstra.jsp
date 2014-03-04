<%-- 
    Document   : dijikstra
    Created on : Mar 12, 2013, 1:36:11 PM
    Author     : Vikash  Kumar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8" import="java.util.*"%>

<%
 String s1 = (String) request.getParameter("x");
String s2 = (String) request.getParameter("y");
String s3 = (String) request.getParameter("z");
String s4 = (String) request.getParameter("a");
String s5 = (String) request.getParameter("des");

String[] s1dummy=s1.split(" ");
String[] s2dummy=s2.split(" ");
String[] s3dummy=s3.split(" ");
String[] s4dummy=s4.split(" ");
int[] xdummy=new int[s1dummy.length];
int[] ydummy=new int[s2dummy.length];
int[] albdummy=new int[s3dummy.length];
int[] bladummy=new int[s4dummy.length];
int dest=Integer.parseInt(s5);
for(int n = 0; n <s1dummy.length; n++) {
   xdummy[n] = Integer.parseInt(s1dummy[n]);
} 

for(int n = 0; n <s2dummy.length; n++) {
   ydummy[n] = Integer.parseInt(s2dummy[n]);
} 

for(int n = 0; n <s3dummy.length; n++) {
   albdummy[n] = Integer.parseInt(s3dummy[n]);
} 

for(int n = 0; n <s4dummy.length; n++) {
   bladummy[n] = Integer.parseInt(s4dummy[n]);
} 
int[] x=new int[xdummy.length];
System.arraycopy(xdummy, 0,x, 0, xdummy.length);
int[] y=new int[ydummy.length];
System.arraycopy(ydummy, 0,y, 0, ydummy.length);
int[] alb=new int[albdummy.length];
System.arraycopy(albdummy, 0,alb, 0, albdummy.length);
int[] bla=new int[bladummy.length];
System.arraycopy(bladummy, 0,bla,0, bladummy.length);
double[] weigj=new double[alb.length];
for(int b=0;b<alb.length;b++){
  int squ=(((x[alb[b]]-x[bla[b]])*(x[alb[b]]-x[bla[b]]))+((y[alb[b]]-y[bla[b]])*(y[alb[b]]-y[bla[b]])));  
  weigj[b]=Math.sqrt(squ);
}
class vert implements Comparable<vert>{
   public double dis=10000;
   public int posotion;
   public vert prev=null;
   public int compareTo(vert a){ if(this.dis>a.dis )return 1 ;else return -1;}
};

     //int[] x={1,2,3,4,5,6};
     //int[] y={6,5,4,3,2,1};
    // int[] weigj={1,7,9,8,4,3,6,5,2};
    // int[] alb={0,1,2,2,3,1,1,2,0};
     //int[] bla={1,4,0,3,4,3,2,4,3};
     vert[] ver=new vert[x.length];
     for(int i=0;i<x.length;i++){
       ver[i]=new vert();
       ver[i].posotion=i;
     }
     vert v1=new vert();
     ver[0].dis=0;
     int count=0;
    PriorityQueue<vert> heap=new PriorityQueue<vert>();
    heap.add(ver[0]);
    int i=0;
    
    while(!(heap.isEmpty()))
    {
        v1=heap.poll();
        for(int j=0;j<alb.length;j++)
        {
            if((v1.posotion == alb[j])||(v1.posotion == bla[j]))
            {
                
                int v;
                if(v1.posotion == alb[j])
                {
                   
                    v=bla[j];
                }
                else
                {
                    
                    v=alb[j];
                }
                
                
                if(ver[v].dis >v1.dis+weigj[j])
                {
                    ver[v].dis=v1.dis+weigj[j];
                    heap.add(ver[v]);
                    ver[v].prev=v1;
                    count++;
                    
                    
                    
                   // System.out.println((ver[v].prev).posotion);
                    
                }    
             }
         }
        
      }
    /*vert a=new vert();
    a.posotion=3;
    while(a.posotion!=0){
    System.out.println(ver[a].prev);
    a=ver[a].prev;
    }*/
     vert v2=new vert();
    v2=ver[dest];
   int [] rr=new int[10];
   int j=0;
   if(v2.dis==10000)
   {
       out.println(10000);
   }    
   else
   {
    for( i=0;i<10;i++)
    {
      
        // System.out.println(v2.posotion);
       rr[j]=v2.posotion;
       if(v2.posotion==0)
           break;
       v2=v2.prev;
       j++;
       
    }
    int[] dijans=new int[j+1];
    for(int k=0;k<j+1;k++){
    dijans[k]=rr[k];
    }
    String all="";
   for(int q=0;q<dijans.length;q++){
   String str=Integer.toString(dijans[q]);
      all=all+","+str+",";
   }
   out.println(all);
   }
  /*  for(int j=0;j<x.length;j++){
     System.out.println(ver[j].dis);
    }*/
%>




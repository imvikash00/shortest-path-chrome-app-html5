<%-- 
    Document   : savefile
    Created on : Mar 7, 2013, 9:56:51 PM
    Author     : Vikash  Kumar
--%>

<%@ page import="java.io.*" import="java.util.*"  %>
<%
String s = (String) request.getParameter("w");
String s1 = (String) request.getParameter("x");
String s2 = (String) request.getParameter("y");
String s3 = (String) request.getParameter("z");
String s4 = (String) request.getParameter("a");

 /*String name;
 String xvertices,yvertices,alinkb,blinka;
 String[] arr=s.split(",");
 name=arr[0];
 xvertices=arr[1];
 yvertices=arr[2];
 alinkb=arr[3];
 blinka=arr[4];*/
//always give the path from root. This way it almost always works.
String nameOfTextFile = "C://Users//THeHeCtor//Documents//NetBeansProjects//ShortestPath-Html5//web//savedGraph//"+s+".graph";
  
    PrintWriter pw = new PrintWriter(new FileOutputStream(nameOfTextFile));
    pw.println(s1);
    pw.println(s2);
    pw.println(s3);
    pw.println(s4);
    //clean up
    pw.close();
   out.println("Successfully saved.");
%>

    
    
    
    %>
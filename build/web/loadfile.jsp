<%-- 
    Document   : loadfile
    Created on : Mar 8, 2013, 12:44:23 AM
    Author     : Vikash  Kumar
--%>

<%@ page import="java.io.*"%>
<%
String s = (String) request.getParameter("e");
/*
 String name;
 String xvertices,yvertices,alinkb,blinka;
 String[] arr=s.split(",");
 name=arr[0];
 xvertices=arr[1];
 yvertices=arr[2];
 alinkb=arr[3];
 blinka=arr[4];*/
String nameOfTextFile = "C://Users//THeHeCtor//Documents//NetBeansProjects//ShortestPath-Html5//web//savedGraph//"+s;

File f=new File(nameOfTextFile);
if(f.exists()){
String input="";
String inpu="";
BufferedReader in = new BufferedReader(new FileReader(nameOfTextFile));
while((input = in.readLine()) != null){
    inpu=inpu+","+input;
}
inpu += ",";
out.println(inpu);
in.close();
}
else{
  out.println("0");
}



 
 /*else{
   System.out.println("File not found");
 }*/
  /*  PrintWriter pw = new PrintWriter(new FileOutputStream(nameOfTextFile));
    pw.println(s1);
    pw.println(s2);
    pw.println(s3);
    pw.println(s4);
    \\clean up
    pw.close();*/
  
%>
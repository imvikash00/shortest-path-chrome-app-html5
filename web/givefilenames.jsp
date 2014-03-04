<%-- 
    Document   : givefilenames.jsp
    Created on : Mar 8, 2013, 10:45:22 AM
    Author     : Vikash  Kumar
--%>

<%@ page import="java.io.*" import="java.util.*" %>
<%
String s = (String) request.getParameter("k");
 
  String path = "C://Users//THeHeCtor//Documents//NetBeansProjects//ShortestPath-Html5//web//savedGraph//"; 
 
  String files="";
  File folder = new File(path);
  File[] list = folder.listFiles(); 
 
  for (int i = 0; i < list.length; i++) 
  {
    files =files+","+ list[i].getName()+",";
  }
  out.println(files);
 
 %>

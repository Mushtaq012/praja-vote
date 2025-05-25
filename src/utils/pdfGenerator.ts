import { jsPDF } from 'jspdf';

interface IssueData {
  name: string;
  email: string;
  message: string;
  date: string;
}

export const generateIssuePDF = (data: IssueData): string => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Add header
  doc.setFontSize(20);
  doc.setTextColor(0, 0, 0);
  doc.text('Praja Vote - Issue Report', pageWidth / 2, 20, { align: 'center' });
  
  // Add issue details
  doc.setFontSize(12);
  doc.text('Submitted by:', 20, 40);
  doc.setFont('helvetica', 'normal');
  doc.text(data.name, 80, 40);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Email:', 20, 50);
  doc.setFont('helvetica', 'normal');
  doc.text(data.email, 80, 50);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Date:', 20, 60);
  doc.setFont('helvetica', 'normal');
  doc.text(data.date, 80, 60);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Issue Description:', 20, 80);
  doc.setFont('helvetica', 'normal');
  
  // Handle long messages with word wrap
  const splitText = doc.splitTextToSize(data.message, pageWidth - 40);
  doc.text(splitText, 20, 90);
  
  // Save the PDF
  const fileName = `issue-${Date.now()}.pdf`;
  doc.save(fileName);
  
  return fileName;
};
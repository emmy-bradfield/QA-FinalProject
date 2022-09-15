import {useState} from 'react';
import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

const usePrinter = () => {
    const [receipts, setReceipts] = useState([{
            BOOKING_REFERENCE: localStorage.getItem("REF"),
            CUSTOMER: localStorage.getItem("Customer"),
            SCREENING: localStorage.getItem("Screening"),
            TICKETS: localStorage.getItem("Tickets"),
            PAYMENT: localStorage.getItem("Payment"),
            DATE: localStorage.getItem("Date")
        }]);


    let doc = new jsPDF();
    receipts.forEach(function (receipt, i) {
        doc.text(20, 10 + (i * 10), "REF: " + receipt.BOOKING_REFERENCE + "\n\rName: " + receipt.CUSTOMER + "\n\rMovie: " + receipt.SCREENING + "\n\rTickets: " + receipt.TICKETS + "\n\r\n\rPayment Details\n\n" + receipt.PAYMENT + "\n\r on " + receipt.DATE);
    });
    doc.save(`QA_CINEMAS_#${
        localStorage.getItem("REF")
    }.pdf`);
    console.log("doc saved");
    window.location.replace("/");
}

export default usePrinter;
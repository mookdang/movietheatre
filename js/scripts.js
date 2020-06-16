//Business Logic for Total Ticket Purchase (Ticket):

function CustomerPurchases() {                   //Constructor function
  this.customerTickets = [];
}

CustomerPurchases.prototype.addCustomerTicket = function(customerTicket) {                                           
  this.customerTickets.push(customerTicket);                                       //This function pushes the customer info into at's own array in line 4
}


CustomerPurchases.prototype.calcTicket = function(customerTicket) {
  if (rerun > 0) {
    rerun * 8
  }
  if (matinee > 0) {
    matinee * 10
  }
  if (senior > 0) {
    senior * 6
  }
}

//Business Logic for handling Tickets/Types of Tickets (CustomerTicket):

function CustomerTicket(rerun, matinee, senior) { //These names will refer to the NUMBER of tickets, not the ticket type
  this.rerun = rerun;
  this.matinee = matinee;
  this.senior = senior;
}

CustomerTicket.prototype.allTickets = function() {
  return "You selected " + this.rerun + "re-run tickets, " + this.matinee + " matinee tickets, and " + this.senior + " senior tickets.";
}

//USER INTERFACE LOGIC:

let newCustomerEntry = new CustomerPurchases();

function displayCustomerDetails(ticketToDisplay) {
  (".mattinee").text(this.mattinee);
  })
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const movieName = $("#moviename").val();
    const matinee = $("input#matinee").val();
    const senior = $("input#senior").val();
    const kids = $("input#kids").val();

    $("input#matinee").val("");
    $("input#senior").val("");
    $("input#kids").val("");
    let newCustomer = new CustomerTicket(moviename, matinee, senior, kids);
    newCustomerEntry.addCustomerTicket(newCustomer);                               //this line calls the addCustomerTicket function, sending info in line 71 to line 7
    console.log(newCustomerEntry.customerTickets);
    displayCustomerDeatils(newCustomerEntry);
  })
})
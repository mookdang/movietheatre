//Business Logic for Total Ticket Purchase (Ticket):

function CustomerPurchases() {                   //Constructor function
  this.customerTickets = [];
  this.currentId = 0;
}

CustomerPurchases.prototype.addCustomerTicket = function(customerTicket) {    //This function adds a new customer's tickets when called
  customerTicket.id = this.assignId();                                         
  this.customerTickets.push(customerTicket);
}

CustomerPurchases.prototype.assignId = function(customerTicket) {
  this.currentId += 1;
  return this.currentId;
}

CustomerPurchases.prototype.findTicket = function(id) {
  for (let i=0; i<this.customerTickets.length; i++) {
    if (this.CustomerTickets[i]) {
      if (this.customerTickets[i].id == id) {
        return this.customerTickets[i];
      }
    }
  };
  return false;
}

CustomerPurchases.prototype.deleteTicket = function(id) {
  for (let i=0; i<this.customerTickets.length; i++) {
    if (this.CustomerTickets[i]) {
      if (this.customerTickets[i].id == id) {
        delete this.customerTickets[i];
        return true;
      }
    }
  };
  return false;
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

//UI Logic
let newCustomerEntry = new CustomerPurchases();

function displayCustomerDetails(ticketToDisplay) {
  let customerShoppingCart = $("#show-customer");
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
    newCustomerEntry.addCustomerTicket(newCustomer);
    console.log(newCustomerEntry.customerTickets);
  })
})
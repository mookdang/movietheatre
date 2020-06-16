//Business Logic for Total Ticket Purchase (Ticket):

function CustomerPurchases() {                   //Constructor function
  this.customerTickets = [];
  this.currentId = 0;
}

CustomerPurchases.prototype.addCustomerTicket = function(customerTicket) {    //This function adds a new customer's tickets when called
  customerTicket.id = this.assignId();                                         //This line assigns the new customer an id and pushes it to the array in the CustomerPurchases Object
  this.customerTickets.push(customerTicket);
}

CustomerPurchases.prototype.assignId = function(customerTicket) {
  this.currentId += 1;
  return this.currentId;
}

CustomerPurchases.prototype.findTicket = function(id) {
  for (let i=0; i<this.customerTickets.length; i++) {
    if (this.customerTickets[i].id == id) {
      return this.customerTickets[i];
    }
  };
  return false;
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
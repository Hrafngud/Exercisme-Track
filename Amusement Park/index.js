function createVisitor(name, age, ticketId) {
  let visitor = {
  name: name,
  age: age,
  ticketId: ticketId,
}
  return visitor;
}

function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

function ticketStatus(tickets, ticketId) {
  let status = '';
  let i = 0;
  for (i in tickets){
  switch (tickets[ticketId]) {
    case undefined:
    status = 'unknown ticket id';
    break;
    case null:
    status = 'not sold';
    break;
    default:
    status = ('sold to ' + tickets[ticketId]);
    break;
  }
 }
  return status;
}

function simpleTicketStatus(tickets, ticketId) {
  let status = '';
  let i = 0;
  for (i in tickets){
  switch (tickets[ticketId]) {
    case undefined:
    status = 'invalid ticket !!!';
    break;
    case null:
    status = 'invalid ticket !!!';
    break;
    default:
    status = tickets[ticketId];
    break;
  }
 }
  return status;
}

function gtcVersion(visitor) {
  let gtcStatus = {
  signed: false,
  version: 0,
}
    for(let i in visitor){
      if (visitor.gtc !== undefined) {
      gtcStatus.signed = visitor.gtc.signed;
      gtcStatus.version = visitor.gtc.version;
      return gtcStatus.version;
    } else {
      return visitor.gtc;
      }
    }
}

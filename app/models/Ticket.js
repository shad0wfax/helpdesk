Helpdesk.Ticket = DS.Model.extend({
    type: DS.attr("string"),
    from: DS.attr("string"),
    comments: DS.attr("string"),
    created: DS.attr("string"),
    status: DS.attr("string")
});

Helpdesk.Ticket.FIXTURES = [{
    id: 1,
    type: "highlights",
    from: "a@a.com",
    comments: "Sending screenshot..",
    created: "Feb 20, 2013, 8 pm",
    status: "Open"
}, {
    id: 2,
    type: "highlights",
    from: "a@a.com",
    comments: "Sending screenshot..",
    created: "Feb 20, 2013, 8 pm",
    status: "Open"
}, {
    id: 3,
    type: "highlights",
    from: "a@a.com",
    comments: "Sending screenshot..",
    created: "Feb 20, 2013, 8 pm",
    status: "Open"
}, {
    id: 4,
    type: "photos",
    from: "a@a.com",
    comments: "Sending screenshot..",
    created: "Feb 20, 2013, 8 pm",
    status: "Open"
}, {
    id: 5,
    type: "photos",
    from: "a@a.com",
    comments: "Sending screenshot..",
    created: "Feb 20, 2013, 8 pm",
    status: "Open"
}];
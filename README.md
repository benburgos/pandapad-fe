# Pandapad

Pandapad is a mock-up of a simple Help Desk solution - i.e. an application to respond and manage customer inquiries and issues.

Check out the [Live Site](https://pandapad-fe.netlify.app/)!

Visit the [backend repo](https://github.com/benburgos/pandapad-be)

### Initial Wireframe

<img src="https://i.imgur.com/AFdF1pM.png" />

### Live Site Screenshots

| Page         | Image                                         |
| ------------ | --------------------------------------------- |
| Login Page   | <img src="https://i.imgur.com/obwJUky.png" /> |
| Landing Page | <img src="https://i.imgur.com/hHnhoex.png" /> |
| Detail Page  | <img src="https://i.imgur.com/xDtIX8D.png" /> |

### Technologies Used
*Frontend*
- React
- Auth0-React
- React Pop-up
- FontAwesome (because buttons)

*Backend*
- NestJS
- Mongoose / MongoDB
- Auth0 / Passport / JWT
- Jeffsum (For mimicking a bot as Jeff Goldlum)


### Model Details
```javascript
// Ticket Schema
({
  to: String,
  from: String,
  body: String,
  status: String,
  comments: [{ 
    from: String, 
    body: String 
    }],
})
```

### Future Enhancements
A lot of planning went into the v1 of this project - mostly around how to ensure the product could scale. Several of the future enhancements are related to **actual** functionality as a helpdesk application.
- Whitelabel for branding / customization 
- Integrate with the Twilio APIs
- Build out a dashboard for Admin level users
- Add reporting features
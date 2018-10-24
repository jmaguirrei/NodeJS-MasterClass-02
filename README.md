# NodeJS-MasterClass-02
Homework Assignment #2

This is the second of several homework assignments you'll receive in this course. In order to receive your certificate of completion (at the end of this course) you must complete all the assignments and receive a passing grade.

How to Turn It In:

1. Create a public github repo for this assignment.

2. Create a new post in the Facebook Group  and note "Homework Assignment #2" at the top.

3. In that thread, discuss what you have built, and include the link to your Github repo.

The Assignment (Scenario):

You are building the API for a pizza-delivery company. Don't worry about a frontend, just build the API. Here's the spec from your project manager:

1. New users can be created, their information can be edited, and they can be deleted. We should store their name, email address, and street address.

2. Users can log in and log out by creating or destroying a token.

3. When a user is logged in, they should be able to GET all the possible menu items (these items can be hardcoded into the system).

4. A logged-in user should be able to fill a shopping cart with menu items

5. A logged-in user should be able to create an order. You should integrate with the Sandbox of Stripe.com to accept their payment. Note: Use the stripe sandbox for your testing. Follow this link and click on the "tokens" tab to see the fake tokens you can use server-side to confirm the integration is working: https://stripe.com/docs/testing#cards

6. When an order is placed, you should email the user a receipt. You should integrate with the sandbox of Mailgun.com for this. Note: Every Mailgun account comes with a sandbox email account domain (whatever@sandbox123.mailgun.org) that you can send from by default. So, there's no need to setup any DNS for your domain for this task https://documentation.mailgun.com/en/latest/faqs.html#how-do-i-pick-a-domain-name-for-my-mailgun-account

This is an open-ended assignment. You may take any direction you'd like to go with it, as long as your project includes the requirements. It can include anything else you wish as well.

-----------------------------------------------------------------------------

Example API usage:

1. Users
  - Create:
    method: POST
    url: "localhost:3030/users"
    body: {
      "name": "Jose Manuel Aguirre",
      "email": "jmaguirre@gmail.com",
      "address": "Los Militares 5151"
    }
  - Edit:
    method: PUT
    url: "localhost:3030/users"
    headers: {
      token: "zd0hzygosudmtvwrza2b"
    },
    body: {
      "email": "jmaguirre@gmail.com",
      "address": "Los Militares 8000"
    }
  - Delete:
    method: DELETE
    url: "localhost:3030/users"
    headers: {
      token: "zd0hzygosudmtvwrza2b"
    },
    body: {
      "email": "jmaguirre@gmail.com"
    }

2. Tokens
  - Login:
    method: POST
    url: "localhost:3030/tokens"
    body: {
      "email": "jmaguirre@gmail.com",
    },
    response: {
      "email": "jmaguirre@gmail.com",
      "id": "olpqx2k3212ad8v5hv0f",
      "expires": 1539440737231
    }
  - Logout:
    method: DELETE
    url: "localhost:3030/tokens"
    body: {
      "id": "olpqx2k3212ad8v5hv0f",
    },

3. Menu:
  - Get the menu
    method: GET
    url: "localhost:3030/menu?email=jmaguirre@gmail.com",
    headers: {
      token: wxklz34rmdhd551xaljw
    },
    response: [
      {
        "code": "PIZ-001",
        "type": "pizza",
        "price": 10,
        "name": "Peperoni"
      },
      {
        "code": "PIZ-002",
        "type": "pizza",
        "price": 12,
        "name": "Española"
      },
      {
        "code": "PIZ-003",
        "type": "pizza",
        "price": 10,
        "name": "Napolitana"
      },
      {
        "code": "PIZ-004",
        "type": "pizza",
        "price": 12,
        "name": "4 quesos"
      },
      {
        "code": "PIZ-005",
        "type": "pizza",
        "price": 8,
        "name": "Espinaca c/queso azul"
      },
      {
        "code": "PIZ-006",
        "type": "pizza",
        "price": 8,
        "name": "Queso, tomate, albahaca"
      },
      {
        "code": "PIZ-007",
        "type": "pizza",
        "price": 10,
        "name": "Veggie"
      },
      {
        "code": "PIZ-008",
        "type": "pizza",
        "price": 6,
        "name": "Fugasa"
      },
      {
        "code": "SNA-001",
        "type": "snack",
        "price": 5,
        "name": "Aros de cebolla"
      },
      {
        "code": "SNA-002",
        "type": "snack",
        "price": 5,
        "name": "Palos de ajo"
      },
      {
        "code": "SNA-003",
        "type": "snack",
        "price": 5,
        "name": "Palos de queso"
      },
      {
        "code": "SNA-004",
        "type": "snack",
        "price": 4,
        "name": "Cocacola"
      }
    ]

4. Orders:
  - Create an order
    method: POST
    url: "localhost:3030/order"
    headers: {
      token: wxklz34rmdhd551xaljw
    },
    body: {
      "email": "jmaguirre@gmail.com",
      "order": [ "PIZ-004", "SNA-001", "SNA-004" ]
    },
    response: {}

    --> Stripe payment is processed
    --> Mail is sent to the recipient




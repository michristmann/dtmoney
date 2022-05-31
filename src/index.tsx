import React from "react"
import ReactDOM from "react-dom"
import { createServer, Model } from "miragejs"

import { App } from "./App"
import { GlobalStyle } from "./styles/global"

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Trabalho",
          value: 6000,
          createdAt: new Date("2022-02-24 18:34:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Habitação",
          value: 2000,
          createdAt: new Date("2022-02-06 08:34:00"),
        },
      ],
    })
  },

  routes() {
    this.namespace = "api"
    this.get("/transactions", () => {
      return this.schema.all("transaction")
    })
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create("transaction", data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
)

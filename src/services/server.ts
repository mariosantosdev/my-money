import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer Digital Menu",
          type: "deposit",
          category: "Remuneração",
          value: 1700,
          createdAt: new Date("2022-05-17"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Contas",
          value: 800,
          createdAt: new Date("2022-05-13"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", { ...data, createdAt: new Date() });
    });
  },
});

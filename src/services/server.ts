import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Aluguel",
          amount: 800,
          type: "withdraw",
          category: "Contas",
          createdAt: new Date(),
        },
      ];
    });
  },
});

import app from "./app";
import { sequelize } from "./database/db";
import "core-js/stable";
import "regenerator-runtime/runtime";

async function main() {
  sequelize.sync({ force: true }).then(() => {
    app.listen(3001, () => {
      console.log("listening on port 3001"); // eslint-disable-line no-console
    });
  });
}
main();

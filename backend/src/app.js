import createServer from "./server.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 9091;
const app = createServer();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import { validateRoute } from "./auth";

export default validateRoute((req, res, user) => {
    res.json(user);
})
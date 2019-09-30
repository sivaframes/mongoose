import { Router } from 'express';
import * as college from "../controllers/college";

export const router = Router();

router.route("/collegelist")
        .get(college.list);

        
router.route("/studentlist")
.get(college.slist);
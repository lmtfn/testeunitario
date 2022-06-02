import { create } from "../validations/psicologos/create";
import { getOne } from "../validations/psicologos/getOne";
import { destroy}  from "../validations/psicologos/destroy";
import { update } from "../validations/psicologos/update";

export const PsicologoValidation = {
  create,
  getOne,
  destroy,
  update,
};


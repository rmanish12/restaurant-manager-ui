import { IAllotTablePayload } from '../models/redux';

class AllotTableService {
  allotTable(payload: IAllotTablePayload) {
    return payload;
  }
}

export default new AllotTableService();

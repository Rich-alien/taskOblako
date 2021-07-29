import {DataDto} from "./data.dto";

export interface TaskDto {
  id?: string;
  data: DataDto;
  name?: string;
  members?: number;
  coach?: string;
  progress?: number;
}

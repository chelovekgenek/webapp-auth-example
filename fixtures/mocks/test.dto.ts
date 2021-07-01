import { IsNumber, IsString } from "class-validator"

export default class TestDto {
  @IsString()
  field1: string

  @IsNumber()
  field2: number
}

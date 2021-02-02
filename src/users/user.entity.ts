import { Entity } from "typeorm";

@Entity()
export default class User {
  private email: string;

  private password: string;

  private firstName: string;

  private lastName: string;
}

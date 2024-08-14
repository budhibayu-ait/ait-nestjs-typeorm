import { Role } from 'src/role/role.enum';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class User {

    @PrimaryColumn("varchar", {
        length: 50
      })
    id: string;
  
    @Column({ type: 'varchar', length: 50 })
    username: string;
  
    @Column({ type: 'varchar', length: 50 })
    password: string;

    @Column({ type: 'enum', enum: Role, default: Role.USER })
    role: Role;
}

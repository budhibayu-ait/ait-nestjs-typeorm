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
}

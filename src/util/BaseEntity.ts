import { Entity, Column,  } from "typeorm";


export class BaseEntity {
    
    @Column('created_at')
    createdAt:Date

    @Column('updated_at')
    updatedAt:Date

}
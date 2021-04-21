import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn, PrimaryColumnCannotBeNullableError} from "typeorm"

import {v4} from "uuid";

@Entity("settings")
class Setting {
    @PrimaryColumn()
    id: string;
    
    @Column()
    username: string;
    
    @Column()
    chat: boolean;
    
    @UpdateDateColumn()
    updated_at: Date;
    
    @UpdateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id 
        }
    }
}

export {Setting}
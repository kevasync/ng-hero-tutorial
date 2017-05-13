export class Value {
    rev: string;
}

export class SkillRecord {
    _id: string;
    _rev: string;
     id: string;
     name : string;

}

export class Row {
    id: string;
    key: string;
    value: Value;
    doc: SkillRecord;
}

export class CouchDbResponse {
    total_rows: number;
    offset: number;
    rows: Row[];
}
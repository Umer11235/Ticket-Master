export interface TableColumn {
    key: string;
    label: string;
  }
  
export  interface TableProps {
    columns: TableColumn[];
    data: Record<string, any>[];
    itemsPerPage?: number;
    bgColor?:string;
  }
  
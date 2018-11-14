import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { CategoryService } from 'src/app/core/services/category.service';
import { TableColumn } from 'src/app/datatable/models/table-column.interface';
import { TableRow } from 'src/app/datatable/models/table-row.interface';
import { TableService } from 'src/app/datatable/services/table.service';

@Injectable()
export class AdminCategoryManagerTableService implements TableService {

  columns: TableColumn[] = [
    { name: 'shortenedId', text: 'ID', type: 'TextTableCellComponent' },
    { name: 'name', text: 'Full Name', type: 'TextTableCellComponent' },
    { name: 'description', text: 'Description', type: 'TextTableCellComponent' },
    { name: 'quoteCount', text: 'Quotes', type: 'TextTableCellComponent' },
    { name: 'loveCount', text: 'Loves', type: 'TextTableCellComponent' }
  ];

  rows: TableRow[];

  pagination: Pagination = {
    pageNumber: 1,
    pageSize: 10
  };

  constructor(private categoryService: CategoryService) { }

  getDataColumns() {
    return this.columns;
  }

  getRawData() {
    return this.categoryService.getCategories(
      this.pagination.pageNumber,
      this.pagination.pageSize)
      .pipe(
        map((response: any) => {
          this.pagination = response.pagination;
          return response.items;
        })
      )
      .toPromise();
  }

  async getDataRows() {
    return null;
  }

}

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { AuthorService } from 'src/app/core/services/author.service';
import { TableCell } from 'src/app/datatable/models/table-cell.interface';
import { TableColumn } from 'src/app/datatable/models/table-column.interface';
import { TableRow } from 'src/app/datatable/models/table-row.interface';
import { TableService } from 'src/app/datatable/services/table.service';
import { TableAction, TableActionType } from 'src/app/datatable/models/table-action.interface';

@Injectable()
export class AdminAuthorManagerTableService implements TableService {

  columns: TableColumn[] = [
    { name: '_id', text: 'ID', type: 'IdTableCellComponent' },
    { name: 'fullName', text: 'Full Name', type: 'TextCellComponent' },
    { name: 'born', text: 'Born', type: 'TextCellComponent' },
    { name: 'died', text: 'Died', type: 'TextCellComponent' },
    { name: 'nationality', text: 'Nationality', type: 'TextCellComponent' },
    { name: 'description', text: 'Description', type: 'TextCellComponent' },
    { name: 'quoteCount', text: 'Quotes', type: 'TextCellComponent' },
    { name: 'loveCount', text: 'Loves', type: 'TextCellComponent' },
    { name: 'actions', text: 'Actions', type: 'ActionsCellComponent' }
  ];

  rows: TableRow[];

  pagination: Pagination = {
    pageNumber: 1,
    pageSize: 10
  };

  actions: TableAction[] = [
    { class: 'btn-primary', icon: 'fa fa-edit', text: 'Edit', type: TableActionType.Edit },
    { class: 'btn-danger', icon: 'fa fa-trash', text: 'Delete', type: TableActionType.Delete },
  ];

  constructor(private authorService: AuthorService) { }

  getDataColumns() {
    return this.columns;
  }

  getRawData() {
    return this.authorService.getAuthors(
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
    return await this.getRawData()
      .then(data => {
        this.rows = data.map(row => {
          const cells: TableCell = <any>{};

          for (const key in row) {
            if (!row.hasOwnProperty(key)) {
              continue;
            }

            cells[key] = {
              value: row[key]
            };
          }

          cells['actions'] = {
            value: this.actions,
            showText: false
          };

          return { cells };
        });

        return this.rows;
      });
  }

}

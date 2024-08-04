import type { PageData } from '@/interface';

export const getTableData = <T extends any[]>(pageNum = 1, pageSize = 10, totalData: T) => {
  const total: number = totalData.length;
  const tableData: PageData<T[0]> = {
    data: [],
    pageNum,
    pageSize,
    total,
  };

  if (pageSize >= total) {
    // When pageSize is greater than or equal to the total data length, it means there is only 1 page of data or no data
    tableData.data = totalData;
    tableData.pageNum = 1; // Directly set to the first page
  } else {
    // When pageSize is less than the total data length, there is more than 1 page of data
    const num = pageSize * (pageNum - 1); // Calculate the total number of data entries before the current page (not inclusive)

    if (num < total) {
      // If the total number of entries before the current page is less than (not equal to) the total data length, it means the current page number is not beyond the maximum page number
      const startIndex = num; // The index of the first data entry on the current page in the total data set
      const endIndex = num + pageSize - 1; // The index of the last data entry on the current page

      tableData.data = totalData.filter((_, index) => index >= startIndex && index <= endIndex); // When the number of data entries on the current page is less than the maximum number per page, data is filtered according to the maximum range
    } else {
      // If the current page number exceeds the maximum page number, calculate the actual last page and automatically return the data for the last page
      const size = Math.ceil(total / pageSize); // Get the quotient
      const rest = total % pageSize; // Get the remainder

      if (rest > 0) {
        // If the remainder is greater than 0, it means the actual last page has less data than pageSize, so size + 1 should be taken as the last page number
        tableData.pageNum = size + 1; // Reset the current page number to size + 1
        tableData.data = totalData.filter((_, index) => index >= pageSize * size && index <= total);
      } else if (rest === 0) {
        // If the remainder is equal to 0, the last page has exactly pageSize number of entries
        tableData.pageNum = size; // Reset the current page number to size
        tableData.data = totalData.filter((_, index) => index >= pageSize * (size - 1) && index <= total);
      } // Note: The remainder cannot be less than 0
    }
  }

  return tableData;
};

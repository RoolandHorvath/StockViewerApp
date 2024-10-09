import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-portfolio',
  templateUrl: './stock-portfolio.component.html',
  styleUrls: ['./stock-portfolio.component.scss']
})
export class StockPortfolioComponent {
  stocks: string[] = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB']; // Replace with your stock data
  filteredStocks: string[] = [];
  selectedStock: string = '';
  searchQuery: string = '';
  percentage: number = 0;
  portfolio: { name: string; percentage: number }[] = [];

  constructor() {
    this.filteredStocks = this.stocks;
  }

  filterStocks() {
    this.filteredStocks = this.stocks.filter(stock =>
      stock.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addStock() {
    if (this.selectedStock && this.percentage > 0) {
      this.portfolio.push({ name: this.selectedStock, percentage: this.percentage });
      this.resetInputs();
    }
  }

  removeStock(stockToRemove: { name: string; percentage: number }) {
    this.portfolio = this.portfolio.filter(stock => stock !== stockToRemove);
  }

  resetInputs() {
    this.selectedStock = '';
    this.percentage = 0;
    this.searchQuery = '';
    this.filterStocks(); // Reset the filtered stocks list
  }
}

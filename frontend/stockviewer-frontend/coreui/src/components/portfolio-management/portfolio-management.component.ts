import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';

interface Stock {
    label: string;
    value: string;
    percentage?: number;
}

@Component({
    selector: 'app-portfolio-management',
    templateUrl: './portfolio-management.component.html',
    standalone: true,
    imports: [ButtonModule, FormsModule, CommonModule, DropdownModule],
    styleUrls: ['./portfolio-management.component.scss'],
})
export class PortfolioManagementComponent {
    stocks: Stock[] = [
        { label: 'Apple', value: 'AAPL' },
        { label: 'Google', value: 'GOOGL' },
        { label: 'Microsoft', value: 'MSFT' },
        { label: 'Amazon', value: 'AMZN' },
    ];
    
    selectedStock: Stock | null = null;
    stockPercentage: number = 0;
    portfolio: Stock[] = [];

    // Method to handle stock selection changes
    onStockChange(event: any) {
        // Find the selected stock object based on the value
        this.selectedStock = this.stocks.find(stock => stock.value === event.value) || null;
        console.log('Selected stock:', this.selectedStock);
    }

    addStock() {
        if (this.selectedStock && this.stockPercentage > 0) {
            const newStock = { 
                label: this.selectedStock.label,
                value: this.selectedStock.value,
                percentage: this.stockPercentage
            };

            console.log('Adding stock to portfolio:', newStock);
            this.portfolio.push(newStock);
            console.log('Current portfolio:', this.portfolio);

            // Reset selected stock and stock percentage for next entry
            this.selectedStock = null; // Reset selection
            this.stockPercentage = 0; // Reset stock percentage
        }
    }

    removeStock(stock: Stock) {
        this.portfolio = this.portfolio.filter(s => s !== stock);
    }
}

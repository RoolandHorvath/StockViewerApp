package com.stockviewer.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockviewer.Entities.Stock;
import com.stockviewer.Repositories.StockRepository;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Stock createStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public Stock getStockById(Long id) {
        return stockRepository.findById(id).orElse(null);
    }

    public void deleteStock(Long id) {
        stockRepository.deleteById(id);
    }
}

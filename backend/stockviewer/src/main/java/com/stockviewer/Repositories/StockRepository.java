package com.stockviewer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stockviewer.Entities.Stock;

public interface StockRepository extends JpaRepository<Stock, Long> {
}
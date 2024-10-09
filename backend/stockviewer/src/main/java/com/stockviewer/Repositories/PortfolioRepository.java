package com.stockviewer.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.stockviewer.Entities.Portfolio;

public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
}
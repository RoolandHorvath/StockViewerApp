package com.stockviewer.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stockviewer.Entities.Portfolio;
import com.stockviewer.Repositories.PortfolioRepository;

@Service
public class PortfolioService {
    
    @Autowired
    private PortfolioRepository portfolioRepository;

    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    public Portfolio createPortfolio(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    public Portfolio getPortfolioById(Long id) {
        return portfolioRepository.findById(id).orElse(null);
    }

    public void deletePortfolio(Long id) {
        portfolioRepository.deleteById(id);
    }
}

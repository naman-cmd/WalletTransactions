package com.capgemini.main.dto;

import java.time.LocalDateTime;

public class TransactionDto {
	private long transactionId;
	private int account;
	private String description;
	
	private double amount;
	private LocalDateTime transactionTime;
	public int getAccount() {
		return account;
	}
	public void setAccount(int account) {
		this.account = account;
	}
	public TransactionDto(long transactionId, int account, String description, double amount,
			LocalDateTime transactionTime, double balance) {
		super();
		this.transactionId = transactionId;
		this.account = account;
		this.description = description;
		this.amount = amount;
		this.transactionTime = transactionTime;
		this.balance = balance;
	}
	private double balance;
	public long getTransactionId() {
		return transactionId;
	}
	public void setTransactionId(long transactionId) {
		this.transactionId = transactionId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public LocalDateTime getTransactionTime() {
		return transactionTime;
	}
	public void setTransactionTime(LocalDateTime transactionTime) {
		this.transactionTime = transactionTime;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}

}

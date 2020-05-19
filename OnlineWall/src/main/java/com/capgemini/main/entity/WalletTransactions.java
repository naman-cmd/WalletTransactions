package com.capgemini.main.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "transactions")

public class WalletTransactions {


    @Id
    @GeneratedValue
	private long transactionId;
	private int account;
	private String description;
	private double amount;
	private LocalDateTime transactionTime;
	
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
	public WalletTransactions(long transactionId, int account, String description, double amount,
			LocalDateTime transactionTime, double balance) {
		super();
		this.transactionId = transactionId;
		this.account = account;
		this.description = description;
		this.amount = amount;
		this.transactionTime = transactionTime;
		this.balance = balance;
	}
	public WalletTransactions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getAccount() {
		return account;
	}
	public void setAccount(int account) {
		this.account = account;
	}
	@Override
	public int hashCode() {
		String transactionIdString = ""+transactionId;
		return transactionIdString.hashCode();
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if(obj == null || obj instanceof WalletTransactions)
			return false;
		WalletTransactions other = (WalletTransactions)obj;
		return this.transactionId == other.transactionId;
	}
	

}

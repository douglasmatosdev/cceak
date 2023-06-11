package com.cceak.cceak;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.logging.Logger;

@SpringBootApplication
public class CceakApplication {
	private static Logger logger = Logger.getLogger(CceakApplication.class.getName());

	public static void main(String[] args) {

		logger.info("Start");
		SpringApplication.run(CceakApplication.class, args);
	}

}

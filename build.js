const fs = require("fs");
const fetch = require("isomorphic-fetch");
const sortby = require("lodash.sortby");
const ora = require("ora");
const chalk = require("chalk");

const endpoint = "https://www.cryptocompare.com/api/data/coinlist/";

const spinner = ora("Building currencies").start();
spinner.color = "magenta";

fetch(endpoint)
	.then((response) => response.json())
	.then((json) => {
		const sorted = sortby(json.Data, (o) => o.CoinName);

		const symbols = {};

		/**
		 * Build the JSON file based on the cryptocompare coinlist.
		 */
		sorted.forEach((currency, index) => {
			const { Name, CoinName } = currency;
			symbols[Name] = CoinName.trim();
		});

		spinner.color = "yellow";
		spinner.start(`Saving cryptocurrencies.json file`);

		fs.writeFileSync("cryptocurrencies.json", JSON.stringify(symbols, null, 2));
		spinner.succeed(
			`${sorted.length} currencies saved to cryptocurrencies.json`
		);

		spinner.start("Saving Readme");

		/**
		 * Build the Markdown Table of currencies in the Readme.
		 */
		const template = fs.readFileSync("readme.md").toString();
		const data = JSON.parse(
			fs.readFileSync("cryptocurrencies.json").toString()
		);

		const newSymbols = Object.keys(data);

		let table = `There are currently **${newSymbols.length} cryptocurrencies** represented*:\n`;
		table += `\n<small><em>* Last updated: ${new Date().toUTCString()}</em></small>`;
		table += "\n\n";
		table += "| Symbol | Name |\n";
		table += "| :------ | :------ |\n";

		newSymbols.forEach((symbol) => {
			table += `| \`${symbol}\` | ${data[symbol]} |\n`;
		});

		// Look for the HTML comments in the README as a target
		const targetRegex =
			/<!-- BEGIN TABLE INJECT -->(\w|\W)*<!-- END TABLE INJECT -->/gim;
		const updated = template.replace(
			targetRegex,
			`<!-- BEGIN TABLE INJECT -->\n${table}\n<!-- END TABLE INJECT -->`
		);
		fs.writeFileSync("readme.md", updated);
		spinner.succeed(["Readme Markdown Table updated"]);

		console.log(
			"\n",
			"Remember to",
			chalk.yellow("git commit"),
			"and",
			chalk.yellow("npm publish")
		);
	})
	.catch((err) => console.error(err));

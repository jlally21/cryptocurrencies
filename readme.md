# cryptocurrencies [![Build Status](https://travis-ci.org/crypti/cryptocurrencies.svg?branch=master)](https://travis-ci.org/crypti/cryptocurrencies)

> A JSON list of all the cryptocurrency symbols and names

The currency list is a [JSON file](cryptocurrencies.json) that can be used wherever.

## Install

```
$ npm install --save cryptocurrencies
```

## Usage

```js
const cryptocurrencies = require("cryptocurrencies");

cryptocurrencies.BTC;
//=> 'Bitcoin'

cryptocurrencies.symbols();
//=> ['42', ... 'BTC', 'ETH', 'LTC', ...]
```

## Cryptocurrencies

<!-- DO NOT REMOVE THE COMMENTS BELOW, OR EDIT THIS TABLE DIRECTLY. -->
<!-- Use `npm run build` to auto-generate the table. -->

<!-- BEGIN TABLE INJECT -->
There are currently **7741 cryptocurrencies** represented*:

<small><em>* Last updated: Wed, 09 Feb 2022 17:44:44 GMT</em></small>

| Symbol | Name |
| :------ | :------ |
| `42` | 42 Coin |
| `300` | 300 token |
| `365` | 365Coin |
| `404` | 404Coin |
| `433` | 433 Token |
| `611` | SixEleven |
| `808` | 808 |
| `888` | Octocoin |
| `1337` | EliteCoin |
| `2015` | 2015 coin |
| `COVEROLD` | Cover Protocol (old) |
| `OFC` | $OFC Coin |
| `ALGOHALF` | 0.5X Long Algorand Token |
| `ALTHALF` | 0.5X Long Altcoin Index Token |
| `BNBHALF` | 0.5X Long BNB Token |
| `BALHALF` | 0.5X Long Balancer Token |
| `TRYBHALF` | 0.5X Long BiLira Token |
| `BTMXHALF` | 0.5X Long BitMax Token Token |
| `BCHHALF` | 0.5X Long Bitcoin Cash Token |
| `BSVHALF` | 0.5X Long Bitcoin SV Token |
| `HALF` | 0.5X Long Bitcoin Token |
| `ADAHALF` | 0.5X Long Cardano Token |
| `LINKHALF` | 0.5X Long Chainlink Token |
| `COMPHALF` | 0.5X Long Compound Token Token |
| `CUSDTHALF` | 0.5X Long Compound USDT Token |
| `ATOMHALF` | 0.5X Long Cosmos Token |
| `DEFIHALF` | 0.5X Long DeFi Index Token |
| `DOGEHALF` | 0.5X Long Dogecoin Token |
| `DRGNHALF` | 0.5X Long Dragon Index Token |
| `EOSHALF` | 0.5X Long EOS Token |
| `ETCHALF` | 0.5X Long Ethereum Classic Token |
| `ETHHALF` | 0.5X Long Ethereum Token |
| `EXCHHALF` | 0.5X Long Exchange Token Index Token |
| `HTHALF` | 0.5X Long Huobi Token Token |
| `KNCHALF` | 0.5X Long Kyber Network Token |
| `LEOHALF` | 0.5X Long LEO Token |
| `LTCHALF` | 0.5X Long Litecoin Token |
| `MATICHALF` | 0.5X Long Matic Token |
| `MIDHALF` | 0.5X Long Midcap Index Token |
| `OKBHALF` | 0.5X Long OKB Token |
| `PAXGHALF` | 0.5X Long PAX Gold Token |
| `PRIVHALF` | 0.5X Long Privacy Index Token |
| `HALFSHIT` | 0.5X Long Shitcoin Index Token |
| `SXPHALF` | 0.5X Long Swipe Token |
| `TRXHALF` | 0.5X Long TRX Token |
| `XAUTHALF` | 0.5X Long Tether Gold Token |
| `USDTHALF` | 0.5X Long Tether Token |
| `XTZHALF` | 0.5X Long Tezos Token |
| `THETAHALF` | 0.5X Long Theta Network Token |
| `TOMOHALF` | 0.5X Long TomoChain Token |
| `XRPHALF` | 0.5X Long XRP Token |
| `ZEROEX` | 0.exchange |
| `007` | 007 coin |
| `ZOC` | 01coin |
| `ZCN` | 0chain |
| `ZRX` | 0x |
| `0xBTC` | 0xBitcoin |
| `OXD` | 0xDAO |
| `1-UP` | 1-UP |
| `BNBDOOM` | 10X Short BNB Token |
| `BCHDOOM` | 10X Short Bitcoin Cash Token |
| `DOOM` | 10X Short Bitcoin Token |
| `ETHDOOM` | 10X Short Ethereum Token |
| `LTCDOOM` | 10X Short Litecoin Token |
| `OKBDOOM` | 10X Short OKB Token |
| `TSHP` | 12Ships |
| `BIT16` | 16BitCoin |
| `MCT` | 1717 Masonic Commemorative Token |
| `1CR` | 1Credit |
| `ONEM.CUR` | 1Life Healthcare Inc |
| `1SG` | 1SG |
| `1TRC` | 1TRONIC |
| `1WO` | 1World |
| `ALGOHEDGE` | 1X Short Algorand Token |
| `ALTHEDGE` | 1X Short Altcoin Index Token |
| `BNBHEDGE` | 1X Short BNB Token |
| `BALHEDGE` | 1X Short Balancer Token |
| `TRYBHEDGE` | 1X Short BiLira Token |
| `BTMXHEDGE` | 1X Short BitMax Token Token |
| `BCHHEDGE` | 1X Short Bitcoin Cash Token |
| `BSVHEDGE` | 1X Short Bitcoin SV Token |
| `BTCHG` | 1X Short Bitcoin Token |
| `ADAHEDGE` | 1X Short Cardano Token |
| `LINKHEDGE` | 1X Short Chainlink Token |
| `COMPHEDGE` | 1X Short Compound Token Token |
| `CUSDTHEDGE` | 1X Short Compound USDT Token |
| `ATOMHEDGE` | 1X Short Cosmos Token |
| `DEFIHEDGE` | 1X Short DeFi Index Token |
| `DOGEHEDGE` | 1X Short Dogecoin Token |
| `DRGNHEDGE` | 1X Short Dragon Index Token |
| `EOSHEDGE` | 1X Short EOS Token |
| `ETCHEDGE` | 1X Short Ethereum Classic Token |
| `ETHHEDGE` | 1X Short Ethereum Token |
| `EXCHHEDGE` | 1X Short Exchange Token Index Token |
| `HTHEDGE` | 1X Short Huobi Token Token |
| `KNCHEDGE` | 1X Short Kyber Network Token |
| `LEOHEDGE` | 1X Short LEO Token |
| `LTCHEDGE` | 1X Short Litecoin Token |
| `MATICHEDGE` | 1X Short Matic Token |
| `MIDHEDGE` | 1X Short Midcap Index Token |
| `OKBHEDGE` | 1X Short OKB Token |
| `PAXGHEDGE` | 1X Short PAX Gold Token |
| `PRIVHEDGE` | 1X Short Privacy Index Token |
| `HEDGESHIT` | 1X Short Shitcoin Index Token |
| `SXPHEDGE` | 1X Short Swipe Token |
| `TRXHEDGE` | 1X Short TRX Token |
| `XAUTHEDGE` | 1X Short Tether Gold Token |
| `USDTHEDGE` | 1X Short Tether Token |
| `XTZHEDGE` | 1X Short Tezos Token |
| `THETAHEDGE` | 1X Short Theta Network Token |
| `TOMOHEDGE` | 1X Short TomoChain Token |
| `VETHEDGE` | 1X Short VeChain Token |
| `XRPHEDGE` | 1X Short XRP Token |
| `1ECO` | 1eco |
| `1INCH` | 1inch |
| `1GOLD` | 1irstGold |
| `1IRST` | 1irstcoin |
| `1PECO` | 1peco |
| `BVOL` | 1x Long BTC Implied Volatility Token |
| `IBVOL` | 1x Short BTC Implied Volatility Token |
| `VNET.CUR` | 21Vianet Group, Inc. |
| `CHAO` | 23 Skidoo |
| `VCK` | 28VCK |
| `ARMS` | 2Acoin |
| `2BACCO` | 2BACCO Coin |
| `2BASED` | 2Based Finance |
| `2GT` | 2GETHER |
| `2GIVE` | 2GiveCoin |
| `2TF` | 2TF |
| `2CRZ` | 2crazyNFT |
| `2KEY` | 2key.network |
| `2LC` | 2local |
| `300F` | 300FIT |
| `32BIT` | 32Bitcoin |
| `3XD` | 3DChain |
| `3DES` | 3DES |
| `ALGOBULL` | 3X Long Algorand Token |
| `ALTBULL` | 3X Long Altcoin Index Token |
| `BNBBULL` | 3X Long BNB Token |
| `BALBULL` | 3X Long Balancer Token |
| `TRYBBULL` | 3X Long BiLira Token |
| `BTMXBULL` | 3X Long BitMax Token Token |
| `BCHBULL` | 3X Long Bitcoin Cash Token |
| `BSVBULL` | 3X Long Bitcoin SV Token |
| `BULL` | 3X Long Bitcoin Token |
| `ADABULL` | 3X Long Cardano Token |
| `LINKBULL` | 3X Long Chainlink Token |
| `COMPBULL` | 3X Long Compound Token Token |
| `CUSDTBULL` | 3X Long Compound USDT Token |
| `ATOMBULL` | 3X Long Cosmos Token |
| `DMGBULL` | 3X Long DMM Governance Token |
| `DEFIBULL` | 3X Long DeFi Index Token |
| `DOGEBULL` | 3X Long Dogecoin Token |
| `DRGNBULL` | 3X Long Dragon Index Token |
| `EOSBULL` | 3X Long EOS Token |
| `ETCBULL` | 3X Long Ethereum Classic Token |
| `ETHBULL` | 3X Long Ethereum Token |
| `EXCHBULL` | 3X Long Exchange Token Index Token |
| `HTBULL` | 3X Long Huobi Token Token |
| `KNCBULL` | 3X Long Kyber Network Token |
| `LEOBULL` | 3X Long LEO Token |
| `LTCBULL` | 3X Long Litecoin Token |
| `MKRBULL` | 3X Long Maker Token |
| `MATICBULL` | 3X Long Matic Token |
| `MIDBULL` | 3X Long Midcap Index Token |
| `OKBBULL` | 3X Long OKB Token |
| `PAXGBULL` | 3X Long PAX Gold Token |
| `PRIVBULL` | 3X Long Privacy Index Token |
| `BULLSHIT` | 3X Long Shitcoin Index Token |
| `XLMBULL` | 3X Long Stellar Token |
| `SUSHIBULL` | 3X Long Sushi Token |
| `SXPBULL` | 3X Long Swipe Token |
| `TRXBULL` | 3X Long TRX Token |
| `XAUTBULL` | 3X Long Tether Gold Token |
| `USDTBULL` | 3X Long Tether Token |
| `XTZBULL` | 3X Long TezosToken |
| `THETABULL` | 3X Long Theta Network Token |
| `TOMOBULL` | 3X Long TomoChain Token |
| `UNISWAPBULL` | 3X Long Uniswap Index Token |
| `VETBULL` | 3X Long VeChain Token |
| `XRPBULL` | 3X Long XRP Token |
| `ALGOBEAR` | 3X Short Algorand Token |
| `ALTBEAR` | 3X Short Altcoin Index Token |
| `BNBBEAR` | 3X Short BNB Token |
| `BALBEAR` | 3X Short Balancer Token |
| `TRYBBEAR` | 3X Short BiLira Token |
| `BTMXBEAR` | 3X Short BitMax Token Token |
| `BEAR` | 3X Short Bitcoin |
| `BCHBEAR` | 3X Short Bitcoin Cash Token |
| `BSVBEAR` | 3X Short Bitcoin SV Token |
| `ADABEAR` | 3X Short Cardano Token |
| `LINKBEAR` | 3X Short Chainlink Token |
| `COMPBEAR` | 3X Short Compound Token Token |
| `CUSDTBEAR` | 3X Short Compound USDT Token |
| `ATOMBEAR` | 3X Short Cosmos Token |
| `DMGBEAR` | 3X Short DMM Governance Token |
| `DEFIBEAR` | 3X Short DeFi Index Token |
| `DOGEBEAR` | 3X Short Dogecoin Token |
| `DRGNBEAR` | 3X Short Dragon Index Token |
| `EOSBEAR` | 3X Short EOS Token |
| `ETCBEAR` | 3X Short Ethereum Classic Token |
| `ETHBEAR` | 3X Short Ethereum Token |
| `EXCHBEAR` | 3X Short Exchange Token Index Token |
| `HTBEAR` | 3X Short Huobi Token Token |
| `KNCBEAR` | 3X Short Kyber Network Token |
| `LEOBEAR` | 3X Short LEO Token |
| `LTCBEAR` | 3X Short Litecoin Token |
| `MKRBEAR` | 3X Short Maker Token |
| `MATICBEAR` | 3X Short Matic Token |
| `MIDBEAR` | 3X Short Midcap Index Token |
| `OKBBEAR` | 3X Short OKB Token |
| `PAXGBEAR` | 3X Short PAX Gold Token |
| `PRIVBEAR` | 3X Short Privacy Index Token |
| `BEARSHIT` | 3X Short Shitcoin Index Token |
| `XLMBEAR` | 3X Short Stellar Token |
| `SUSHIBEAR` | 3X Short Sushi Token |
| `SXPBEAR` | 3X Short Swipe Token |
| `TRXBEAR` | 3X Short TRX Token |
| `XAUTBEAR` | 3X Short Tether Gold Token |
| `USDTBEAR` | 3X Short Tether Token |
| `XTZBEAR` | 3X Short Tezos Token |
| `THETABEAR` | 3X Short Theta Network Token |
| `TOMOBEAR` | 3X Short TomoChain Token |
| `UNISWAPBEAR` | 3X Short Uniswap Index Token |
| `VETBEAR` | 3X Short VeChain Token |
| `XRPBEAR` | 3X Short XRP Token |
| `ERROR` | 484 Fund |
| `4ART` | 4ART Coin |
| `KWATT` | 4New |
| `FOUR` | 4THPILLAR TECHNOLOGIES |
| `7E` | 7ELEVEN |
| `8BT` | 8 Circuit Studios |
| `88MPH` | 88mph |
| `8BIT` | 8BIT Coin |
| `8PAY` | 8Pay |
| `8X8` | 8X8 Protocol |
| `ATKN` | A-Token |
| `ATD` | A2DAO |
| `AAVEDOWN` | AAVEDOWN |
| `AAVEUP` | AAVEUP |
| `AAB` | AAX Token |
| `RTB` | AB-CHAIN |
| `ABC` | AB-Chain |
| `ABBC` | ABBC Coin |
| `ABCC` | ABCC Token |
| `ACM` | AC Milan Fan Token |
| `AC3` | AC3 |
| `ACXT` | ACDX Exchange Token |
| `DAOACT` | ACT |
| `ACOIN` | ACoin |
| `ADADOWN` | ADADOWN |
| `ADM` | ADAMANT Messenger |
| `ADAUP` | ADAUP |
| `ADD` | ADD.xyz |
| `AENT` | AEN |
| `AEON` | AEON |
| `AERGO` | AERGO |
| `AFEN` | AFEN Blockchain |
| `AGPC` | AGPC |
| `AIC` | AI Crypto |
| `AIDOC` | AI Doctor |
| `AIN` | AI Network |
| `AIPE` | AI Prediction Ecosystem |
| `AIBK` | AIB Utility Token |
| `AICO` | AICON |
| `AIT` | AIChain Token |
| `AIDT` | AIDUS TOKEN |
| `AIDUS` | AIDUS Token |
| `AIOT` | AIOT Token |
| `AIOZ` | AIOZ Network |
| `AITT` | AITrading |
| `AXT` | AIX |
| `AKTIO` | AKTIO Coin |
| `ALA` | ALA |
| `ALX` | ALAX |
| `ALIS` | ALISmedia |
| `ALLBI` | ALL BEST ICO |
| `ALT` | ALTcoin |
| `AMAL` | AMAL |
| `AMBT` | AMBT Token |
| `AMIS` | AMIS |
| `AMLT` | AMLT |
| `AMO` | AMO Coin |
| `AAPX` | AMPnet |
| `ANGLE` | ANGLE |
| `ANON` | ANON |
| `ANS` | ANS Crypto Coin |
| `ANTE` | ANTE |
| `ANTS` | ANTS Reloaded |
| `AOS` | AOS |
| `NFT` | APENFT |
| `APXP` | APEX Protocol |
| `API3` | API3 |
| `APIS` | APIS |
| `APIX` | APIX |
| `APS` | APRES |
| `APW` | APWine |
| `APY` | APY.Finance |
| `APYS` | APYSwap |
| `ARBT` | ARBITRAGE |
| `ARX` | ARCS |
| `ARK` | ARK |
| `ARKK` | ARK Innovation ETF |
| `ARMOR` | ARMOR |
| `ARMR` | ARMR |
| `ARNA` | ARNA Panacea |
| `ARNO` | ARNO |
| `ARPA` | ARPA Chain |
| `ARR` | ARROUND |
| `ARTDECO` | ARTDECO |
| `ARTH` | ARTH |
| `ARTII` | ARTII Token |
| `ASR` | AS Roma Fan Token |
| `ASGC` | ASG |
| `ASH` | ASH |
| `522.CUR` | ASM Pacific Technology Limited |
| `ASQT` | ASQ Protocol |
| `ASTA` | ASTA |
| `ATB` | ATB coin |
| `ATCC` | ATC Coin |
| `ATFS` | ATFS Project |
| `ATL` | ATLANT |
| `ATMCHAIN` | ATMChain |
| `ATN` | ATN |
| `AG8` | ATROMG8 |
| `AUR` | AUREO |
| `AVN` | AVNRich |
| `AT` | AWARE |
| `AWAX` | AWAX |
| `AXEL` | AXEL |
| `AXC` | AXIA Coin |
| `AXR` | AXRON |
| `AXL` | AXiaL |
| `AZBI` | AZBI CORE |
| `LEND` | Aave |
| `AAVE` | Aave |
| `ADAI` | Aave DAI |
| `AETH` | Aave ETH |
| `GHST` | Aavegotchi |
| `ABBV.CUR` | Abbvie |
| `ABELE` | Abele |
| `ABEY` | Abey |
| `ABJ` | Abjcoin |
| `ABS` | Absolute Coin |
| `ABYSS` | Abyss Finance |
| `ACA` | Acala |
| `ACCEL` | Accel Defi |
| `ACCN` | Accelerator Network |
| `ACCO` | Accolade |
| `ACE` | Acent |
| `AEC` | AcesCoin |
| `ACES` | AcesCoin |
| `ACT` | Achain |
| `ACHC` | AchieveCoin |
| `ACID` | AcidCoin |
| `OAK` | Acorn Collective |
| `ACTIN` | Actinium |
| `ACTN` | Action Coin |
| `ATVI.CUR` | Activision Blizzard Inc |
| `AMT` | Acumen |
| `AAC` | Acute Angle Cloud |
| `ACC` | AdCoin |
| `ADX` | AdEx |
| `ADT` | AdToken |
| `ADAB` | Adab Solutions |
| `ADAT` | Adadex Tools |
| `ADP` | Adappter Token |
| `ADPT.CUR` | Adaptive Biotechnologies Corporation |
| `ADB` | Adbank |
| `PLT` | Add.xyz |
| `ADL` | Adelphoi |
| `ADH` | Adhive |
| `ADS.CUR` | Adidas AG |
| `ADNT.CUR` | Adient |
| `ADI` | Aditus |
| `ADBE.CUR` | Adobe Systems Inc |
| `ADRX` | Adrenaline Chain |
| `WADS` | AdsByWiFi |
| `ADS` | Adshares |
| `ADUX` | Adult X Token |
| `AAP.CUR` | Advance Auto Parts |
| `AMD` | Advanced Micro Devices |
| `AMD.CUR` | Advanced Micro Devices Inc |
| `AIB` | AdvancedInternetBlock |
| `AGLD` | Adventure Gold |
| `YOLO.CUR` | AdvisorShares Pure Cannabis ETF |
| `ADZ` | Adzcoin |
| `AEGIS` | Aegis |
| `AGS` | Aegis |
| `AEN` | Aenco |
| `AERM` | Aerium |
| `AERO` | Aero Coin |
| `AM` | AeroMe |
| `ARNX` | Aeron |
| `XRM` | Aerum |
| `AER` | Aeryus |
| `AE` | Aeternity |
| `ATH` | AetherV2 |
| `AFFC` | Affil Coin |
| `AFTT` | Africa Trading Chain |
| `AET` | AfterEther |
| `AGVC` | AgaveCoin |
| `ESTATE` | AgentMile |
| `AGET` | Agetron |
| `AEM.CUR` | Agnico Eagle |
| `AGRS` | Agoras Token |
| `DLT` | Agrello Delta |
| `AAT` | Agricultural Trade Chain |
| `AHT` | AhaToken |
| `AHOO` | Ahoolee |
| `RVO` | AhrvoDEEX |
| `AIBB` | AiBB |
| `ALI` | AiLink Token |
| `AWO` | AiWork |
| `AID` | AidCoin |
| `ADNT` | Aiden |
| `AIDI` | Aidi Inu |
| `ADK` | Aidos Kuneen |
| `AIX` | Aigang |
| `AION` | Aion |
| `AFp.CUR` | Air France-Klm |
| `APOD` | AirPod |
| `AST` | AirSwap |
| `AIR` | AirToken |
| `ABL` | Airbloc |
| `ABNB` | Airbnb |
| `AIRX` | Aircoins |
| `AIRT` | Aircraft |
| `ACU` | Aitheon |
| `AKT` | Akash Network |
| `AKITA` | Akita Inu |
| `AKN` | Akoin |
| `AKA` | Akroma |
| `AKRO` | Akropolis |
| `ADEL` | Akropolis Delphi |
| `ADN` | Aladdin |
| `ALCE` | Alcedo |
| `SDS` | Alchemint Standards |
| `ALCHE` | Alchemist |
| `ALCX` | Alchemix |
| `ALUSD` | Alchemix USD |
| `ALCH` | Alchemy |
| `ACH` | Alchemy Pay |
| `AA.CUR` | Alcoa |
| `ALEPH` | Aleph.im |
| `ALEX` | Alexandrite |
| `ALXN.CUR` | Alexion Pharmaceuticals, Inc. |
| `PLM` | Algo.Land |
| `ALGO` | Algorand |
| `ALG` | Algory |
| `ALIC` | AliCoin |
| `ALIAS` | Alias |
| `BABA` | Alibaba FTX |
| `9988.CUR` | Alibaba Group Holding Limited |
| `BABA.CUR` | Alibaba Group Holding Limited |
| `241.CUR` | Alibaba Health Information Technology Limited |
| `TLM` | Alien Worlds |
| `ALIEN` | AlienCoin |
| `ALITA` | Alita Network |
| `ALKI` | Alkimi |
| `SOC` | All Sports Coin |
| `ME` | All.me |
| `AFO` | AllForOneBusiness |
| `AGN.CUR` | Allergan |
| `AFCT` | Allforcrypto |
| `ACD` | Alliance Cargo Direct |
| `UIN` | Alliance Chain |
| `ALBT` | AllianceBlock |
| `ALV` | Allive |
| `AMDC` | Allmedi Coin |
| `ALH` | AlloHash |
| `ASAFE2` | Allsafe |
| `ALY` | Ally |
| `DRCT` | Ally Direct |
| `ALLY.CUR` | Ally Financial |
| `ALNY.CUR` | Alnylam Pharmaceuticals, Inc. |
| `ALOHA` | Aloha |
| `APC` | AlpaCoin |
| `ALPA` | Alpaca |
| `ALPACA` | Alpaca Finance |
| `ALPS` | Alpenschillling |
| `ROAR` | Alpha DEX |
| `ALPHA` | Alpha Finance Lab |
| `AQT` | Alpha Quark Token |
| `A5T` | Alpha5 |
| `ALF` | AlphaCoin |
| `ANK` | AlphaLink |
| `AX` | AlphaX |
| `GOOGL` | Alphabet FTX |
| `GOOGL.CUR` | Alphabet Inc |
| `ACAT` | Alphacat |
| `ALP` | Alphacon |
| `ALPHR` | Alphr |
| `APZ` | Alprockz |
| `XLQ` | Alqo |
| `ALTCOM` | AltCommunity Coin |
| `AFN` | AltaFin |
| `ALTOCAR` | AltoCar |
| `ALU` | Altura |
| `ALN` | Aluna |
| `ALUX` | Alux Bank |
| `AEVO` | Always Evolving |
| `AS` | AmaStar |
| `AMATEN` | Amaten |
| `AMZN` | Amazon FTX |
| `AMZN.CUR` | Amazon.com Inc |
| `AMB` | Amber |
| `AMBER` | AmberCoin |
| `WALLET` | Ambire Wallet |
| `AME` | Amepay |
| `USHIBA` | American Shiba |
| `AMC` | AmericanCoin |
| `AMX` | Amero |
| `AMIO` | Amino Network |
| `AMMO` | Ammo Rewards |
| `AMN` | Amon |
| `AMON` | AmonD |
| `AMOS` | Amos |
| `VEO` | Amoveo |
| `AMP` | Amp |
| `AMPL` | Ampleforth |
| `FORTH` | Ampleforth Governance Token |
| `AMS` | Amsterdam Coin |
| `NL25.CUR` | Amsterdam Exchange Index 25 |
| `BTC3L` | Amun Bitcoin 3x Daily Long |
| `BTC3S` | Amun Bitcoin 3x Daily Short |
| `ETH3L` | Amun Ether 3x Daily Long |
| `ETH3S` | Amun Ether 3x Daily Short |
| `BTCSHORT` | Amun Short Bitcoin Token |
| `AMUN.CUR` | Amundi |
| `AMY` | Amygws |
| `$ANRX` | AnRKey X |
| `ANCP` | Anacrypt |
| `ANAL` | AnalCoin |
| `ACP` | Anarchists Prime |
| `ANCT` | Anchor |
| `ANW` | Anchor Neural World |
| `ANC` | Anchor Protocol |
| `ANDC` | Android chain |
| `AND` | AndromedaCoin |
| `ANDROTTWEILER` | Androttweiler Token |
| `ANGL` | Angel Token |
| `ANB` | Angryb |
| `STRAY` | Animal Token |
| `AVH` | Animation Vision Cash |
| `ANI` | Animecoin |
| `ANV` | Aniverse |
| `ANKA.BITCI` | Ankaragücü Fan Token |
| `ANKORUS` | Ankorus Token |
| `ANKR` | Ankr Network |
| `ANONCOIN` | Anoncoin |
| `RYZ` | Anryze |
| `AR.CUR` | Antero Resources |
| `ANTI` | Anti Bitcoin |
| `ANTC` | AntiLitecoin |
| `MATTER` | AntiMatter |
| `XAMP` | Antiample |
| `APAD` | Anypad |
| `ANY` | Anyswap |
| `APA.CUR` | Apache |
| `ABI` | ApeBullInu |
| `BANANA` | ApeSwap Finance |
| `APAM.CUR` | Aperam S.A. |
| `CPX` | Apex Token |
| `APEX` | ApexCoin |
| `APH` | Aphelion |
| `APHA` | Aphria Inc |
| `AFC` | Apiary Fund Coin |
| `APL` | Apollo Currency |
| `APXT` | ApolloX |
| `XAP` | Apollon |
| `APPC` | AppCoins |
| `AUSD` | Appeal dollar |
| `AAPL` | Apple FTX |
| `AAPL.CUR` | Apple Inc |
| `API` | Application Programming Interface |
| `APN` | Apron |
| `APT` | Aptcoin |
| `APX` | Apx |
| `AQUAC` | Aquachain |
| `AQUARI` | Aquari |
| `ARCO` | AquariusCoin |
| `ARGO` | ArGoApp |
| `ARQ` | ArQmA |
| `ARA` | Ara Token |
| `ALC` | Arab League Coin |
| `ANT` | Aragon |
| `ANJ` | Aragon Court |
| `ARATA` | Arata |
| `ARAW` | Araw |
| `ARBI` | Arbi |
| `RBIS` | ArbiSmart |
| `ABX` | Arbidex |
| `ARB` | Arbit Coin |
| `ARCT` | ArbitrageCT |
| `ABT` | ArcBlock |
| `ARCA` | Arca |
| `ARCH` | ArchCoin |
| `ARNC.CUR` | Arconic |
| `ARC` | ArcticCoin |
| `ARDX` | ArdCoin |
| `ARDR` | Ardor |
| `ARENA` | Arena |
| `AREN` | Arenon |
| `AREPA` | Arepacoin |
| `ARES` | Ares Protocol |
| `ARG` | Argentum |
| `ARGON` | Argon |
| `AGM` | Argoneum |
| `ARGUS` | ArgusCoin |
| `ARI` | AriCoin |
| `ARIA20` | Arianee |
| `ARO` | Arionum |
| `ARV` | Ariva |
| `BOTS` | ArkDAO |
| `DIKO` | Arkadiko |
| `ARKER` | Arker |
| `ARNXM` | Armor NXM |
| `ARM` | Armory Coin |
| `ARW` | Arowana Token |
| `ARPAC` | ArpaCoin |
| `ANDX` | Arrano |
| `ABY` | ArtByte |
| `ARTP` | ArtPro |
| `1ART` | ArtWallet |
| `ARTC` | Artcoin |
| `ARTE` | Artemine |
| `ARTEON` | Arteon |
| `ARTEX` | Artex |
| `ATX` | ArtexCoin |
| `ARTF` | Artfinity Token |
| `AITECH` | Artificial Intelligence Utility Token |
| `AES` | Artis Aes Evolution |
| `AUA` | ArubaCoin |
| `AR` | Arweave |
| `AYA` | Aryacoin |
| `ASD` | AscendEX Token |
| `ASN` | Ascension Coin |
| `XAS` | Asch |
| `ASG` | Asgard |
| `AC` | Asia Coin |
| `ASIA` | Asia Coin |
| `APECOIN` | Asia Pacific Electronic Coin |
| `ASP` | Aspire |
| `ASM` | Assemble Protocol |
| `ASST` | AssetStream |
| `ASTR` | Astar |
| `ASTO` | Aston |
| `AGV` | Astra Guild Ventures |
| `ASTRAL` | Astral |
| `ELONONE` | AstroElon |
| `ASTROLION` | AstroLion |
| `ASTRO` | AstroSwap |
| `ASTRONAUT` | Astronaut |
| `ATRI` | Atari Token |
| `ATHE` | Atheios |
| `ATR` | Ather |
| `THO` | Athero |
| `ATP` | Atlas Protocol |
| `TEAM.CUR` | Atlassian Corporation Plc |
| `ATM` | Atletico de Madrid Fan Token |
| `ATMOS` | Atmos |
| `AWC` | Atomic Wallet Coin |
| `ATMI` | Atonomi |
| `ATT` | Attila |
| `ATTR` | Attrace |
| `AUCTION` | Auction |
| `AUC` | Auctus |
| `ADC` | AudioCoin |
| `AUDIO` | Audius |
| `AGF` | Augmented Finance |
| `REP` | Augur |
| `AUK` | Aukcecoin |
| `AUNIT` | Aunit |
| `ARE` | Aurei |
| `AURS` | Aureus |
| `AUSCM` | Auric Network |
| `AURORA` | Aurora |
| `AOA` | Aurora |
| `ACB` | Aurora Cannabis Inc |
| `AURORAC` | Auroracoin |
| `AURY` | Aurory |
| `NDA.CUR` | Aurubis AG |
| `AURUM` | Aurum |
| `AWX` | AurusDeFi |
| `AWG` | AurusGOLD |
| `AWS` | AurusSILVER |
| `AUDC` | Aussie Digital |
| `AUD.CUR` | Australian Dollar |
| `ASS` | Australian Safe Shepherd |
| `AUN` | Authoreon |
| `ATS` | Authorship |
| `AUPC` | Authpaper |
| `AUTO` | Auto |
| `ABXC` | AutoBay |
| `ATC` | AutoBlock |
| `AU` | AutoCrypto |
| `ATA` | Automata |
| `AN.CUR` | Autonation |
| `AUTON` | Autonio |
| `AUT` | Autoria |
| `ATMC` | Autumncoin |
| `XAL` | AuxChips |
| `Auxilium` | Auxilium |
| `AVAX` | Avalanche |
| `AVAXIOU` | Avalanche IOU |
| `XAVA` | Avalaunch |
| `AVALON` | Avalon |
| `AVAL` | Avaluse |
| `AV` | Avatar Coin |
| `AVXL` | Avaxlauncher |
| `AVT` | Aventus |
| `AOP` | Averopay |
| `AVE` | Avesta |
| `AVG` | Avocado DAO |
| `ACN` | AvonCoin |
| `AVO` | Avoteo |
| `AWR` | Award |
| `AWORK` | Aworker |
| `AXE` | Axe |
| `AXNT` | Axentro |
| `AXIAV3` | Axia |
| `AXS` | Axie Infinity Shards |
| `AXIOM` | Axiom Coin |
| `AXN` | Axion |
| `AXIS` | Axis DeFi |
| `AXYS` | Axys |
| `AZART` | Azart |
| `AZ` | Azbit |
| `AZUKI` | Azuki |
| `AZU` | Azultec |
| `B20` | B20 |
| `B21` | B21 |
| `B26` | B26 Finance |
| `B3` | B3 Coin |
| `KB3` | B3Coin |
| `B91` | B91 |
| `BAX` | BABB |
| `BACOIN` | BACoin |
| `BAM` | BAM |
| `BANCA` | BANCA |
| `BKX` | BANKEX |
| `BASIC` | BASIC |
| `BBDT` | BBD Token |
| `BBN` | BBNCOIN |
| `BBS (1)` | BBSCoin |
| `BCB` | BCB Blockchain |
| `BCHDOWN` | BCHDOWN |
| `BCHUP` | BCHUP |
| `BCNX` | BCNEX |
| `BCVB` | BCV Blue Chip |
| `BDCC` | BDCC COIN |
| `BEAT` | BEAT Token |
| `BEER` | BEER Coin |
| `QI` | BENQI |
| `BEPRO` | BEPRO Network |
| `BERN` | BERNcash |
| `BEX` | BEX token |
| `BFT` | BF Token |
| `BFEX` | BFEX |
| `BGG` | BGG Token |
| `BHPC` | BHPCash |
| `BIKI` | BIKI |
| `BITTO` | BITTO |
| `BIXB` | BIXBCOIN |
| `BIZZ` | BIZZCOIN |
| `BKK` | BKEX Token |
| `BLAST` | BLAST |
| `BLOCM` | BLOC.MONEY |
| `BLOCKS` | BLOCKS |
| `VEE` | BLOCKv |
| `BLTV` | BLTV Token |
| `BMT` | BMChain |
| `BMW.CUR` | BMW AG |
| `BNBCH` | BNB Cash |
| `BPAY` | BNBPay |
| `BNIX` | BNIX Token |
| `BNPL` | BNPL Pay |
| `BNS` | BNS token |
| `BOMB` | BOMB |
| `BONK` | BONK Token |
| `BOONS` | BOONSCoin |
| `BOO` | BOOSTO |
| `BORA` | BORA |
| `BOA` | BOSAGORA |
| `BOS` | BOScoin |
| `BOTX` | BOTXCOIN |
| `BOXT` | BOX Token |
| `BQC` | BQCoin |
| `BQTX` | BQT |
| `BVO` | BRAVO Pay |
| `BRAT` | BROTHER |
| `BSCM` | BSC MemePad |
| `BSCS` | BSC Station |
| `BSCPAD` | BSCPAD |
| `BSYS` | BSYS |
| `BT` | BT.Finance |
| `BTCL` | BTC Lite |
| `BTCST` | BTC Standard Hashrate Token |
| `BTCDOWN` | BTCDOWN |
| `BTCM` | BTCMoon |
| `BTCUP` | BTCUP |
| `BTE` | BTEcoin |
| `BTR` | BTRIPS |
| `BTSE` | BTSE Token |
| `BTU` | BTU Protocol |
| `BU` | BUMO |
| `BUMN` | BUMooN |
| `BUSDC` | BUSD |
| `BUSD` | BUSD |
| `BUX` | BUX |
| `1211.CUR` | BYD Company Limited |
| `BYTZ` | BYTZ |
| `BZL` | BZLCoin |
| `BAAS` | BaaSid |
| `BXX` | Baanx |
| `BANC` | Babes and Nerds |
| `BABYCUBAN` | Baby Cuban |
| `BABYFB` | Baby Floki Billionaire |
| `BLINU` | Baby Lambo Inu |
| `BABYSAITAMA` | Baby Saitama |
| `BABYDOGE` | BabyDoge |
| `BABYELON` | BabyElon |
| `BABYFLOKI` | BabyFloki |
| `BSATOSHI` | BabySatoshi |
| `BABY` | BabySwap |
| `BAKT` | Backed Protocol |
| `BAK` | BaconCoin |
| `BACON` | BaconDAO (BACON) |
| `BADGER` | Badger DAO |
| `BBADGER` | Badger Sett Badger |
| `BRC` | Baer Chain |
| `BIDU.CUR` | Baidu, Inc. |
| `BAKE` | BakeryToken |
| `BAL` | Balancer |
| `BKC` | Balkancoin |
| `BKR` | Balkari Token |
| `BSP` | BallSwap |
| `BLX` | Balloon-X |
| `BAMBOO` | BambooDeFi |
| `NANAS` | BananaBits |
| `BNA` | BananaTok |
| `BAN` | Banano |
| `BNT` | Bancor Network Token |
| `XBANK` | Bancryp |
| `BAND` | Band Protocol |
| `B@` | BankCoin |
| `BANKETH` | BankEth |
| `BSOCIAL` | BankSocial |
| `BNK` | Bankera |
| `BED` | Bankless BED Index |
| `BCOIN` | BannerCoin |
| `BNN` | Banyan Network |
| `BAO` | Bao Finance |
| `BZUN.CUR` | Baozun Inc. |
| `BKS` | Barkis Network |
| `BOND` | BarnBridge |
| `BRI` | Baroin |
| `BRTR` | Barter |
| `BART` | BarterTrade |
| `BASE` | Base Protocol |
| `BBCC` | BaseballCardCoin |
| `BGLD` | Based Gold |
| `$BASED` | Based Money |
| `BASHC` | BashCoin |
| `BAT` | Basic Attention Token |
| `BASID` | Basid Coin |
| `BASIS` | Basis |
| `BAC` | Basis Cash |
| `BAGS` | Basis Gold Share |
| `BSGS` | Basis Gold Share |
| `BAS` | Basis Share |
| `BSKT` | BasketCoin |
| `BASK` | BasketDAO |
| `BAST` | Bast |
| `BTA` | Bata |
| `BATH` | Battle Hero |
| `PET` | Battle Pets |
| `BSTK` | BattleStake |
| `BEACH` | BeachCoin |
| `BETH` | Beacon ETH |
| `BEAM` | Beam |
| `BEAN` | BeanCash |
| `BRDD` | BeardDollars |
| `XBTS` | Beats |
| `BTZC` | BeatzCoin |
| `BECH` | Beauty Chain |
| `BVC` | BeaverCoin |
| `BXY` | Beaxy |
| `BBBY.CUR` | Bed Bath & Beyond Inc. |
| `BEE` | Bee Token |
| `BKBT` | BeeKan |
| `BIFI` | Beefy.Finance |
| `BEET` | Beetle Coin |
| `BCMC1` | BeforeCoinMarketCap |
| `BFDT` | Befund |
| `BELA` | Bela |
| `BDX` | Beldex |
| `BEL` | Bella Protocol |
| `BELT` | Belt |
| `BBI` | BelugaPay |
| `BENZI` | Ben Zi Token |
| `BMK` | Benchmark |
| `MARK` | Benchmark Protocol |
| `BNP` | BenePit |
| `BENJACOIN` | Benjacoin |
| `BENJI` | BenjiRolls |
| `BWF` | Beowulf |
| `BRY` | Berry Data |
| `BRTX` | Bertinity |
| `BST` | Beshare Token |
| `BBY.CUR` | Best Buy |
| `BESTC` | BestChain |
| `KNG` | BetKings |
| `CHART` | BetOnChart |
| `BETA` | Beta Finance |
| `BETACOIN` | BetaCoin |
| `BETF` | Betform |
| `BEC` | Betherchip |
| `BETHER` | Bethereum |
| `KRO` | Betoken |
| `BTRM` | Betrium Token |
| `BETR` | BetterBetting |
| `BTXC` | Bettex coin |
| `BETT` | Bettium |
| `BETU` | Betu |
| `BYN` | Beyond Finance |
| `BYND` | Beyond Meat Inc FTX |
| `BYND.CUR` | Beyond Meat, Inc. |
| `BZNT` | Bezant |
| `BEZOGE` | Bezoge Earth |
| `BEZ` | Bezop |
| `BFIC` | Bficoin |
| `BHO` | Bholdus Token |
| `BIFIF` | BiFi |
| `TRYB` | BiLira |
| `BNR` | BiNeuro |
| `BITT` | BiTToken |
| `GIB` | Bible Coin |
| `BBP` | BiblePay |
| `BIX` | BiboxCoin |
| `BICO` | Biconomy |
| `BID` | Bidao |
| `BIDCOM` | Bidcommerce |
| `BIDI` | Bidipass |
| `DOOH` | Bidooh |
| `BFC` | Bifrost |
| `BNC` | Bifrost Native Coin |
| `BDB` | Big Data Block |
| `BDP` | Big Data Protocol |
| `BFCH` | Big Fun Chain |
| `BIG.CUR` | Big Lots |
| `BBG` | BigBang |
| `BBC` | BigBang Core |
| `BBGC` | BigBang Game |
| `HUGE` | BigCoin |
| `LFC` | BigLifeCoin |
| `BGONE` | BigONE Token |
| `BIGUP` | BigUp |
| `BBO` | Bigbom |
| `BHC` | BighanCoin |
| `BIC` | Bikercoins |
| `BILI` | Bilibili Inc FTX |
| `BILI.CUR` | Bilibili Inc. |
| `BILL.CUR` | Bill.com Inc |
| `BLRY` | BillaryCoin |
| `XBL` | Billionaire Token |
| `BMARS` | Binamars |
| `BMON` | Binamon |
| `BNB` | Binance Coin |
| `BGBP` | Binance GBP Stable Coin |
| `BIDR` | Binance IDR Stable Coin |
| `BKRW` | Binance KRW |
| `BSCGIRL` | Binance Smart Chain Girl |
| `BVND` | Binance VND |
| `BDOT` | Binance Wrapped DOT |
| `BNX` | BinaryX |
| `BIN` | Binemon |
| `SBGO` | Bingo Share |
| `BINTEX` | Bintex Futures |
| `BIOT` | Bio Passport |
| `BIOB` | BioBar |
| `BIOC` | BioCrypt |
| `BMRN.CUR` | BioMarin Pharmaceutical Inc |
| `BIONT` | BioNTech FTX |
| `BIO` | Biocoin |
| `HTER` | Biogen |
| `BIIB.CUR` | Biogen Inc. |
| `BNTX.CUR` | Biontech SE |
| `BIOS` | BiosCrypto |
| `BTRN` | Biotron |
| `BIPC` | BipCoin |
| `BIRD` | Bird.Money |
| `BIRDCHAIN` | Birdchain |
| `BDAY` | Birthday Cake |
| `BIS` | Bismuth |
| `BIPX` | Bispex |
| `BIST` | Bistroo |
| `AGRO` | Bit Agro |
| `BITF` | Bit Financial |
| `STORE` | Bit Store |
| `BIUT` | Bit Trust System |
| `BWB` | Bit World Token |
| `BZ` | Bit-Z |
| `B2M` | Bit2Me |
| `BITASEAN` | BitAsean |
| `BTB` | BitBar |
| `BAY` | BitBay |
| `BBK` | BitBlocks |
| `BBT` | BitBoost |
| `BOSS` | BitBoss |
| `BRONZ` | BitBronze |
| `BEN` | BitCOEN |
| `BCNA` | BitCanna |
| `BCV` | BitCapitalVendor |
| `BITCAR` | BitCar |
| `BITC` | BitCash |
| `BCHC` | BitCherry |
| `BCAT` | BitClave |
| `BPRO` | BitCloud Pro |
| `CLOUT` | BitClout |
| `COAL` | BitCoal |
| `BCCOIN` | BitConnect Coin |
| `BTX` | BitCore |
| `BCR` | BitCredit |
| `BTCRY` | BitCrystal |
| `BCY` | BitCrystals |
| `BTCR` | BitCurrency |
| `BIT` | BitDAO |
| `DNS` | BitDNS |
| `BFI` | BitDefi |
| `BDG` | BitDegree |
| `CSNO` | BitDice |
| `BFX` | BitFinex Tokens |
| `FLIP` | BitFlip |
| `BF` | BitForex Token |
| `XBG` | BitGrin |
| `BHIRE` | BitHIRE |
| `BIH` | BitHostCoin |
| `STU` | BitJob |
| `KAM` | BitKAM |
| `BTLC` | BitLuckCoin |
| `BITL` | BitLux |
| `BTMK` | BitMark |
| `BMX` | BitMart Token |
| `BTMI` | BitMiles |
| `BITM` | BitMoney |
| `BM` | BitMoon |
| `BTNT` | BitNautic |
| `BITNEW` | BitNewChain |
| `BITOK` | BitOKX |
| `BTNYX` | BitOnyx Token |
| `BTQ` | BitQuark |
| `RNTB` | BitRent |
| `BITREWARDS` | BitRewards |
| `BSCH` | BitSchool |
| `BITX` | BitScreener |
| `XSEED` | BitSeeds |
| `BSEND` | BitSend |
| `BSE` | BitSerial |
| `BSR` | BitSoar Coin |
| `BTSG` | BitSong |
| `STASH` | BitStash |
| `BSTN` | BitStation |
| `SWIFT` | BitSwift |
| `BTTR` | BitTiger |
| `BXT` | BitTokens |
| `BTTOLD` | BitTorrent |
| `BTT` | BitTorrent |
| `TUBE` | BitTube |
| `BUT` | BitUP Token |
| `VEG` | BitVegan |
| `VOLT` | BitVolt |
| `BTW` | BitWhite |
| `BWN` | BitWings |
| `ZNY` | BitZeny |
| `XBOND` | Bitacium |
| `BTCA` | Bitair |
| `BTBL` | Bitball |
| `BTRS` | Bitball Treasure |
| `BB1` | Bitbond |
| `BXK` | Bitbook Gambling |
| `BOSE` | Bitbose |
| `BTMG` | Bitcademy Football |
| `BCP` | BitcashPay |
| `BITCI` | Bitcicoin |
| `BTD` | Bitcloud |
| `BTDX` | Bitcloud 2.0 |
| `BTCN` | BitcoiNote |
| `B2G` | Bitcoiin2Gen |
| `BTC` | Bitcoin |
| `BTC2` | Bitcoin 2 |
| `BCA` | Bitcoin Atom |
| `BTCB` | Bitcoin BEP2 |
| `BTCBR` | Bitcoin BR |
| `BCZ` | Bitcoin CZ |
| `CDY` | Bitcoin Candy |
| `CAPT` | Bitcoin Captain |
| `BCH` | Bitcoin Cash |
| `BCHA` | Bitcoin Cash ABC |
| `BXC` | Bitcoin Classic |
| `BC` | Bitcoin Confidential |
| `BTCC` | Bitcoin Core |
| `BCD` | Bitcoin Diamond |
| `GOD` | Bitcoin God |
| `BTG` | Bitcoin Gold |
| `BITG` | Bitcoin Green |
| `BHD` | Bitcoin HD |
| `BTCH` | Bitcoin Hush |
| `XBI` | Bitcoin Incognito |
| `BCI` | Bitcoin Interest |
| `LTNM` | Bitcoin Latinum |
| `BITN` | Bitcoin Nova |
| `BTPL` | Bitcoin Planet |
| `BTCP` | Bitcoin Private |
| `BTCRED` | Bitcoin Red |
| `XRC` | Bitcoin Rhodium |
| `BSV` | Bitcoin SV |
| `BTCS` | Bitcoin Scrypt |
| `BT2` | Bitcoin SegWit2X |
| `BSPM` | Bitcoin Supreme |
| `BTCT` | Bitcoin Token |
| `BTCK` | Bitcoin Turbo Koin |
| `BTCV` | Bitcoin Vault |
| `BTCAS` | BitcoinAsia |
| `BTCD` | BitcoinDark |
| `BCF` | BitcoinFast |
| `BTCF` | BitcoinFile |
| `BTCGO` | BitcoinGo |
| `XBC` | BitcoinPlus |
| `BPS` | BitcoinPoS |
| `BSOV` | BitcoinSoV |
| `BITCOINV` | BitcoinV |
| `BWS` | BitcoinWSpectrum |
| `BCX` | BitcoinX |
| `BTCZ` | BitcoinZ |
| `BTCUS` | Bitcoinus |
| `BITCM` | Bitcomo |
| `BCT` | Bitcratic Token |
| `DARX` | Bitdaric |
| `BDL` | Bitdeal |
| `XBX` | BiteX |
| `BT1` | Bitfinex Bitcoin Future |
| `BRISE` | Bitgert |
| `BHAO` | Bithao |
| `BITHER` | Bither |
| `BTH` | Bithereum |
| `KAN` | Bitkan |
| `KUB` | Bitkub Coin |
| `BIM` | BitminerCoin |
| `BMXT` | Bitmxittz |
| `XPAT` | Bitnation Pangea |
| `BEST` | Bitpanda Ecosystem Token |
| `BQ` | Bitqy |
| `BRO` | Bitradio |
| `BTL` | Bitrolium |
| `BITRUE` | Bitrue Coin |
| `BITSD` | Bits Digit |
| `BQQQ` | Bitsdaq Token |
| `BINS` | Bitsense |
| `BTS` | Bitshares |
| `BSX` | Bitspace |
| `SPWN` | Bitspawn |
| `XBS` | Bitstake |
| `BITS` | BitstarCoin |
| `BITSZ` | Bitsz |
| `BTN` | Bittron |
| `BWT` | Bittwatt |
| `BTV` | Bitvote |
| `BWT2` | Bitwin 2.0 |
| `BITW` | Bitwise 10 Crypto Index Fund |
| `BTY` | Bityuan |
| `BITZ` | Bitz Coin |
| `BTZ` | BitzCoin |
| `BTZN` | Bitzon |
| `BZKY` | Bizkey |
| `XBP` | Black Pearl Coin |
| `BB` | BlackBerry |
| `BLK` | BlackCoin |
| `BXF` | BlackFort Token |
| `BLKC` | BlackHat Coin |
| `BPLC` | BlackPearl Token |
| `BPT` | BlackPool Token |
| `BS` | BlackShadowCoin |
| `BBOS` | Blackbox Foundation |
| `BLHC` | BlackholeCoin |
| `BMC` | Blackmoon Crypto |
| `BSTAR` | Blackstar |
| `BLADE` | BladeWarrior |
| `BBTC` | BlakeBitcoin |
| `BLC` | BlakeCoin |
| `BLAS` | BlakeStar |
| `BLANK` | Blank Token |
| `BLAZR` | BlazerCoin |
| `BLES` | Blind Boxes |
| `BLKD` | Blinked |
| `BLITZ` | BlitzCoin |
| `BPX` | BlitzPredict |
| `BLZD` | Blizzard.money |
| `BLY` | Blocery |
| `ARY` | Block Array |
| `DUELERS` | Block Duelers |
| `BLTG` | Block-Logic |
| `BBANK` | BlockBank |
| `BCDN` | BlockCDN |
| `BCPT` | BlockMason Credit Protocol |
| `BLINK` | BlockMason Link |
| `BMH` | BlockMesh |
| `BLOCK` | BlockNet |
| `BLOCKPAY` | BlockPay |
| `BPL` | BlockPool |
| `BSAFE` | BlockSafe |
| `BLOCKSTAMP` | BlockStamp |
| `CBSN` | BlockSwap Network |
| `WRK` | BlockWRK |
| `BCAP` | Blockchain Capital |
| `CUTE` | Blockchain Cuties Universe |
| `BCUG` | Blockchain Cuties Universe Governance |
| `BEPR` | Blockchain Euro Project |
| `BXA` | Blockchain Exchange Alliance |
| `BQT` | Blockchain Quotations Index Token |
| `BCHT` | Blockchain Terminal |
| `BTF` | Blockchain Traded Fund |
| `BHP` | Blockchain of Hash Power |
| `MBCC` | Blockchain-Based Distributed Super Computing Platform |
| `BCIO` | Blockchain.io |
| `BLOC` | Blockcloud |
| `BOK` | Blockium |
| `LNC` | Blocklancer |
| `BONIX` | Blockonix |
| `BOXX` | Blockparty |
| `PASS` | Blockpass |
| `BLS` | Blocks Space |
| `BLKS` | Blockshipping |
| `TIX` | Blocktix |
| `BKT` | Blocktrade token |
| `BLV` | Blockvest |
| `BNTN` | Blocnation |
| `BLT` | Blocto Token |
| `BPAD` | BlokPad |
| `BLOK` | Bloktopia |
| `CYS` | BlooCYS |
| `BLOODY` | Bloody Token |
| `BLOOMT` | Bloom Token |
| `BLCT` | Bloomzed Loyalty Club Ticket |
| `BEP` | Blucon |
| `BWX` | Blue Whale |
| `BLU` | BlueCoin |
| `BDR` | BlueDragon |
| `BLZ` | Bluzelle |
| `BNBH` | BnbHeroes Token |
| `BNRTX` | BnrtxCoin |
| `BOBS` | Bob's Repair |
| `BOBA` | Boba Network |
| `BOE` | Bodhi |
| `BODHI` | Bodhi Network |
| `BA.CUR` | Boeing |
| `BOGCOIN` | Bogcoin |
| `BOG` | Bogged Finance |
| `BOLD` | Bold |
| `BLNM` | Bolenum |
| `BOLI` | BolivarCoin |
| `BOLT` | Bolt |
| `BOLTT` | BolttCoin |
| `BOMBC` | BombCoin |
| `BNF` | BonFi |
| `BONA` | Bonafi |
| `USDAP` | Bond Appetite USD |
| `BAG` | BondAppetit |
| `BONDLY` | Bondly |
| `BONES` | BonesCoin |
| `FIDA` | Bonfida |
| `BONO` | Bonorum Coin |
| `BON` | Bonpay |
| `BONUSCAKE` | Bonus Cake |
| `BOOB` | BooBank |
| `BBR` | Boolberry |
| `BOOM` | Boom Token |
| `BOOST` | Boost |
| `BOST` | BoostCoin |
| `BARK` | Bored Ark |
| `BORED` | Bored Museum |
| `BOR` | BoringDAO |
| `BORING` | BoringDAO |
| `BMG` | Borneo |
| `BORUTO` | Boruto Inu |
| `BOSON` | Boson Protocol |
| `BOSONC` | BosonCoin |
| `BTK` | Bostoken |
| `BSX.CUR` | Boston Scientific |
| `BOSU` | Bosu Inu |
| `BOTC` | BotChain |
| `CAP` | BottleCaps |
| `BTO` | Bottos |
| `BOU` | Boulle |
| `BOT` | Bounce Token |
| `BNTE` | Bountie |
| `XBTY` | Bounty |
| `BNTY` | Bounty0x |
| `BOUTS` | BoutsPro |
| `BSC` | BowsCoin |
| `BOXY` | BoxyCoin |
| `IMPCN` | Brain Space |
| `BRAIN` | BrainCoin |
| `BTRST` | Braintrust |
| `BRAND` | BrandProtect |
| `BRNK` | Brank |
| `BFT.BITCI` | Brazil Fan Token |
| `BRZ` | Brazilian Digital Token |
| `BRAZ` | Brazio |
| `BRD` | Bread token |
| `BRX` | Breakout Stake |
| `BRK` | BreakoutCoin |
| `BRZE` | Breezecoin |
| `Oil - Crude.CUR` | Brent Crude Oil Spot |
| `BRIA` | Briacoin |
| `XBB` | BrickBlock |
| `BRICK` | Brickchain FInance |
| `BKN` | Brickken |
| `BMI` | Bridge Mutual |
| `BRDG` | Bridge Protocol |
| `BRGX` | Bridge$ |
| `BCO` | BridgeCoin |
| `BRIGHT` | Bright Union |
| `BRIC` | BrightCoin |
| `BRIK` | BrikBit |
| `BRIT` | BritCoin |
| `BRKL` | Brokoli Token |
| `BRNX` | Bronix |
| `BMP` | Brother Music Platform |
| `BRYLL` | Bryllite |
| `BSCV` | Bscview |
| `BTCEX` | BtcEX |
| `BUBO` | Budbo |
| `BUD` | Buddy |
| `BUFFDOGE` | Buff Doge |
| `BUFF` | Buffalo Swap |
| `BUGG` | Bugg Inu |
| `BCZERO` | Buggyra Coin Zero |
| `BUILDTEAM` | BuildTeam |
| `BUILDIN` | Buildin Token |
| `BDOG` | Bulldog Token |
| `BLN` | Bulleon |
| `BULLS` | BullshitCoin |
| `BWK` | Bulwark |
| `BUN` | BunnyCoin |
| `BP` | BunnyPark |
| `BUNNYROCKET` | BunnyRocket |
| `BUY` | Burency |
| `BURGER` | Burger Swap |
| `BURNDOGE` | BurnDoge |
| `TMSH.BITCI` | Bursa Crocodile Token |
| `BAOE` | Business Age of Empires |
| `BCAC` | Business Credit Alliance Chain |
| `BCS` | Business Credit Substitute |
| `BFLY` | Butterfly Protocol |
| `BUXCOIN` | Buxcoin |
| `BULLC` | BuySell |
| `BUYI` | Buying.com |
| `BUZZ` | BuzzCoin |
| `GLDY` | Buzzshow |
| `BYC` | ByteCent |
| `BCN` | ByteCoin |
| `BYTHER` | Bytether |
| `BTM` | Bytom |
| `BYTS` | Bytus |
| `BZZONE` | Bzzone |
| `XCT` | C-Bits |
| `C25` | C25 Coin |
| `CGT` | CACHE Gold |
| `CAIx` | CAIx |
| `CXCELL` | CAPITAL X CELL |
| `CATX` | CAT.trade Protocol |
| `CBD` | CBD Crystals |
| `BREE` | CBDAO |
| `CCC` | CCCoin |
| `UVU` | CCUniverse |
| `CDRX` | CDRX |
| `CDX` | CDX Network |
| `CEDEX` | CEDEX Coin |
| `CEEK` | CEEK Smart VR Token |
| `CELEB` | CELEBPLUS |
| `CENT` | CENTERCOIN |
| `CETI` | CETUS Coin |
| `CFL365` | CFL365 Finance |
| `CFXQ` | CFX Quantum |
| `CFun` | CFun |
| `CHADS` | CHADS VC |
| `CHARS` | CHARS |
| `CINU` | CHEEMS INU |
| `CHEESE` | CHEESE |
| `CHIPS` | CHIPS |
| `CIC` | CIChain |
| `CINX` | CINDX |
| `CINNI` | CINNICOIN |
| `CKUSD` | CKUSD |
| `CLAM` | CLAMS |
| `CNNS` | CNNS |
| `CNYT` | CNY Tether |
| `CO2` | CO2 Token |
| `COCOS` | COCOS BCX |
| `CODEX` | CODEX Finance |
| `CB` | COINBIG |
| `CIM` | COINCOME |
| `CMS` | COMSA |
| `CNCT` | CONNECT |
| `CONUN` | CONUN |
| `CPY` | COPYTRACK |
| `CMCX` | CORE MultiChain |
| `CORN` | CORN |
| `COS` | COS |
| `COTI` | COTI |
| `COVA` | COVA |
| `COVIR` | COVIR |
| `COZP` | COZPlus |
| `CPC` | CPChain |
| `CPCOIN` | CPCoin |
| `MLS` | CPROP |
| `CPROP` | CPROP |
| `CRD` | CRD Network |
| `CRDT` | CRDT |
| `CRWD` | CRWD Network |
| `CBUCKS` | CRYPTOBUCKS |
| `CMZ` | CRYPTOMAGZ |
| `CRS` | CRYSTALS |
| `CTAG` | CTAGtoken |
| `CUE` | CUE Protocol |
| `CUT` | CUTcoin |
| `CVS.CUR` | CVS Health |
| `CYBR` | CYBR |
| `CAB` | CabbageUnit |
| `CACHE` | Cache |
| `CACH` | Cachecoin |
| `BREW` | CafeSwap Token |
| `CAI` | Cai Token |
| `CXP` | Caixa Pay |
| `CAIZ` | Caizcoin |
| `CAKEMOON` | CakeMoon |
| `KMA` | Calamari Network |
| `CF` | Californium |
| `CALC` | CaliphCoin |
| `CLO` | Callisto Network |
| `CLVX` | Calvex |
| `CAMC` | Camcoin |
| `CAMP` | Camp |
| `CPB.CUR` | Campbell Soup |
| `CMPCO` | CampusCoin |
| `CANYA` | CanYaCoin |
| `CDN` | Canada eCoin |
| `CAD.CUR` | Canadian Dollar |
| `CAND` | Canlead |
| `CBDC` | CannaBCoin |
| `CCN` | CannaCoin |
| `XCI` | Cannabis Industry Coin |
| `CANN` | CannabisCoin |
| `CNAB` | Cannabium |
| `CZR` | CanonChain |
| `CGC` | Canopy Growth Corp |
| `CAPD` | Capdax |
| `CAPP` | Cappasity |
| `CPS` | CapriCoin |
| `CAR` | CarBlock |
| `CARTAXI` | CarTaxi |
| `CV` | CarVertical |
| `CARAT` | Carats Token |
| `CUSD` | Carbon |
| `GEMS` | Carbon GEMS |
| `CARBON` | Carboncoin |
| `CSWAP` | CardSwap |
| `CW` | CardWallet |
| `ADA` | Cardano |
| `CRDN` | Cardence |
| `CARD` | Cardstack |
| `CARDS` | Cardstarter |
| `CARE` | Carebit |
| `CRGO` | CargoCoin |
| `TICS` | CargoConX |
| `CXO` | CargoX |
| `CARR` | Carnomaly |
| `CARPE` | CarpeDiemCoin |
| `CRT` | Carr.Finance |
| `CARROT` | CarrotSwap |
| `CARRY` | Carry |
| `CART` | CarterCoin |
| `CTSI` | Cartesi |
| `CNBC` | Cash & Back Coin |
| `CASHT` | Cash Tech |
| `CTLX` | Cash Telex |
| `CASH` | CashCoin |
| `CSH` | CashOut |
| `CAS` | Cashaa |
| `CBC` | Casino Betting Coin |
| `CSC` | CasinoCoin |
| `CASPER` | Casper DeFi |
| `CSPR` | Casper Network |
| `CSP` | Caspian |
| `CSTL` | Castle |
| `CTT` | Castweet |
| `CAT` | Cat Token |
| `CTLT.CUR` | Catalent Inc |
| `CATC` | Catcoin |
| `CATE` | CateCoin |
| `CATT` | Catex |
| `CATGIRL` | Catgirl |
| `CATZ` | CatzCoin |
| `CAVA` | Cavapoo |
| `CVTC` | CavatCoin |
| `CCO` | Ccore |
| `CELR` | Celer Network |
| `CELT` | Celestial |
| `CELL` | Cellframe |
| `CELO` | Celo |
| `CELOUSD` | Celo Dollar |
| `CEUR` | Celo Euro |
| `CGLD` | Celo Gold |
| `CEL` | Celsius Network |
| `XCF` | Cenfura Token |
| `CNTR` | Centaur |
| `CTR` | Centra |
| `CENNZ` | Centrality Token |
| `CNS` | Centric Cash |
| `CFG` | Centrifuge |
| `CNT` | Centurion |
| `CBS` | Cerberus |
| `CERE` | Cere Network |
| `XCE` | Cerium |
| `CTK` | CertiK |
| `CHN` | Chain |
| `CFLO` | Chain Flowers |
| `CHAIN` | Chain Games |
| `CGG` | Chain Guardians |
| `CHC` | ChainCoin |
| `PCX` | ChainX |
| `ZILLA` | ChainZilla |
| `CFXT` | Chainflix |
| `CHNG` | Chainge Finance |
| `LINK` | Chainlink |
| `CHS` | Chainsquare |
| `TOKEN` | Chainswap |
| `CHAL` | Chalice Finance |
| `CHAN` | ChanCoin |
| `CAG` | Change |
| `CAN` | Channels |
| `IONX` | Charged Particles |
| `CHA` | Charity Coin |
| `CHARIZARD` | Charizard Inu |
| `C3` | Charli3 |
| `CHARM` | Charm Coin |
| `CHECOIN` | CheCoin |
| `CXC` | CheckCoin |
| `CCAKE` | CheeseCake Swap |
| `CHEESUS` | Cheesus |
| `CHK` | Chek |
| `CHLT` | Chellitcoin |
| `CC.CUR` | Chemours |
| `CHE` | CherrySwap |
| `CHK.CUR` | Chesapeake Energy Corp |
| `CHESSCOIN` | ChessCoin |
| `CHI` | Chi Gastoken |
| `XCH` | Chia |
| `KFC` | Chicken |
| `CHIHUA` | Chihua Token |
| `CHILD` | ChildCoin |
| `CHZ` | Chiliz |
| `BNANA` | Chimpion |
| `CNC` | ChinaCoin |
| `CHEX` | Chintai |
| `CHIP` | Chip |
| `CHVF` | Chives Finance |
| `CHIWAWA` | Chiwawa |
| `CHONK` | Chonk |
| `CHOOF` | ChoofCoin |
| `CHOPPER` | Chopper Inu |
| `CHOW` | Chow Chow Finance |
| `CHR` | Chroma |
| `XNL` | Chronicle |
| `CHRONO` | Chrono.tech |
| `DAY` | Chronologic |
| `CRX` | ChronosCoin |
| `CHW` | Chrysalis Coin |
| `CHINU` | Chubby Inu |
| `CHMB` | Chumbi Valley |
| `CLPX` | Chynge.net |
| `CIEN.CUR` | Ciena |
| `XEC.CUR` | Cimarex Energy |
| `CIN` | CinderCoin |
| `CND` | Cindicator |
| `CIND` | Cindrum |
| `LUT` | Cinemadrom |
| `CIPHC` | Cipher Core Token |
| `CIR` | CircuitCoin |
| `COVAL` | Circuits of Value |
| `CIRUS` | Cirus |
| `CSCO.CUR` | Cisco Systems |
| `CTL` | Citadel |
| `C.CUR` | Citigroup Inc |
| `CTW` | Citowise |
| `CVC` | Civic |
| `CIV` | Civilization |
| `CIVIT` | Civitas Protocol |
| `CLRTY` | Clarity |
| `CAID` | ClearAid |
| `XCLR` | ClearCoin |
| `CLH` | ClearDAO |
| `CLEARPOLL` | ClearPoll |
| `CPOOL` | Clearpool |
| `CLVA` | Clever DeFi |
| `CLEVERCOIN` | CleverCoin |
| `CHASH` | CleverHash |
| `CLICK` | Clickcoin |
| `CLIFF` | Clifford Inu |
| `CTI` | ClinTex CTi |
| `CLIN` | Clinicoin |
| `CLINT` | Clinton |
| `CCCX` | Clipper Coin Capital |
| `CLOAK` | CloakCoin |
| `CKC` | Clockcoin |
| `CLD` | Cloud |
| `CCE` | CloudCoin |
| `CLB` | Cloudbric |
| `NET.CUR` | Cloudflare Inc. |
| `CLOUTIO` | Clout |
| `CLV` | Clover Finance |
| `CLDX` | Cloverdex |
| `CLVS.CUR` | Clovis Oncology, Inc. |
| `CLU` | CluCoin |
| `CLUB` | ClubCoin |
| `CLUD` | CludCoin |
| `COE` | CoEval |
| `COFIX` | CoFIX |
| `COSHI` | CoShi Inu |
| `COT` | CoTrader |
| `COVEX` | CoVEX |
| `CBK` | Cobak Token |
| `COB` | Cobinhood |
| `COX` | CobraCoin |
| `KO.CUR` | Coca-Cola |
| `COKE` | Cocaine Cowboy Shards |
| `CODEO` | Codeo Token |
| `CODI` | Codi Finance |
| `CFF` | Coffe |
| `CFC` | CoffeeCoin |
| `CFI` | Cofound.it |
| `COGE` | Cogecoin |
| `COGEN` | Cogenero |
| `COGS` | Cogmento |
| `COG` | Cognitio |
| `COINDEFI` | Coin |
| `COY` | Coin Analyst |
| `XMG` | Coin Magi |
| `BTTF` | Coin to the Future |
| `C2` | Coin.2 |
| `C98` | Coin98 |
| `CONI` | CoinBene |
| `CBFT` | CoinBene Future Token |
| `BURP` | CoinBurp |
| `CDL` | CoinDeal Token |
| `CET` | CoinEx Token |
| `COFI` | CoinFi |
| `IMP` | CoinIMP |
| `XCJ` | CoinJob |
| `CL` | CoinLancer |
| `COINLION` | CoinLion |
| `CLT` | CoinLoan |
| `MEET` | CoinMeet |
| `CMERGE` | CoinMerge |
| `XCM` | CoinMetro |
| `CPL` | CoinPlace Token |
| `CHP` | CoinPoker Token |
| `CPEX` | CoinPulseToken |
| `RADR` | CoinRadr |
| `CSS` | CoinSwap Token |
| `CNUS` | CoinUs |
| `CVS` | CoinVisa |
| `COIN` | Coinbase Tokenized Stock on FTX |
| `CCH` | Coinchase |
| `DAILY` | Coindaily |
| `CODY` | Coindy |
| `NEAL` | Coineal Token |
| `COING` | Coingrid |
| `CTIC` | Coinmatic |
| `COI` | Coinnec |
| `CNO` | Coino |
| `CNMT` | Coinomat |
| `CXT` | Coinonat |
| `XCXT` | CoinonatX |
| `COINSL` | CoinsLoot |
| `CNB` | Coinsbit Token |
| `TCJ` | Coinshare |
| `CSX` | Coinstox |
| `CEN` | Coinsuper Ecosystem Network |
| `OROX` | Cointorox |
| `COINVEST` | Coinvest |
| `CWEB` | Coinweb |
| `CXPAD` | CoinxPad |
| `CXG` | Coinxes |
| `DAMO` | Coinzen |
| `CLS` | Coldstack |
| `COM` | Coliseum |
| `COLL` | Collateral Pay |
| `COLLG` | Collateral Pay Governance |
| `CLNY` | Colony |
| `COLX` | ColossusCoinXT |
| `CLN` | Colu Local Network |
| `CBP` | ComBox |
| `COMB` | Combo |
| `CMTC` | CometCoin |
| `COMM.CUR` | CommScope Holding Company, Inc. |
| `CBT` | CommerceBlock Token |
| `CMM` | Commercium |
| `CBK.CUR` | Commerzbank AG |
| `COMM` | Community Coin |
| `COC` | Community Coin |
| `COMT` | Community Token |
| `CMP` | Compcoin |
| `BIND` | Compendia |
| `COMFI` | CompliFi |
| `CZRX` | Compound 0x |
| `CREP` | Compound Augur |
| `CBAT` | Compound Basic Attention Token |
| `COMPD` | Compound Coin |
| `CDAI` | Compound Dai |
| `CETH` | Compound Ethereum |
| `COMP` | Compound Governance Token |
| `CSAI` | Compound SAI |
| `CUSDC` | Compound USD Coin |
| `CWBTC` | Compound Wrapped BTC |
| `CPN` | CompuCoin |
| `CONS` | ConSpiracy Coin |
| `CAG.CUR` | Conagra Brands Inc |
| `CCX` | Conceal |
| `CNL` | ConcealCoin |
| `CVPT` | Concentrated Voting Power |
| `CHY` | Concern Poverty Chain |
| `RAIN` | Condensate |
| `CFD` | Confido |
| `CFX` | Conflux Network |
| `CJR` | Conjure |
| `CJT` | ConnectJob Token |
| `CCTN` | Connectchain |
| `CNTM` | Connectome |
| `CTY` | Connecty |
| `CQST` | ConquestCoin |
| `CVNT` | Conscious Value Network |
| `CSEN` | Consensus |
| `ECELL` | Consensus Cell Network |
| `CSM` | Consentium |
| `CNX.CUR` | Consol Energy |
| `DAG` | Constellation |
| `PEOPLE` | ConstitutionDAO |
| `CAM` | Consumption Avatar Matrix |
| `CNN` | Content Neutrality Network |
| `CADN` | Content and AD Network |
| `BOX` | ContentBox |
| `CONT` | Contentos |
| `CTPT` | Contents Protocol |
| `CTCN` | Contracoin |
| `LOCK` | Contracto |
| `CONV` | Convergence |
| `CVXCRV` | Convex CRV |
| `CVX` | Convex Finance |
| `COOK` | Cook |
| `CUZ` | Cool Cousin |
| `COOL` | CoolCoin |
| `CCXC` | CoolinDarkCoin |
| `COOP` | Coop Network |
| `CPRT.CUR` | Copart, Inc. |
| `COPE` | Cope |
| `XCPO` | Copico |
| `CLR` | CopperLark |
| `COPS` | Cops Finance |
| `CORAL` | CoralPay |
| `COREG` | Core Group Asset |
| `CORGI` | Corgi Inu |
| `COR` | Corion |
| `CORX` | CorionX |
| `NCOV` | CoronaCoin |
| `CTXC` | Cortex |
| `COSX` | Cosmecoin |
| `CSMIC` | Cosmic |
| `COSMIC` | CosmicSwap |
| `CMOS` | Cosmo |
| `COSM` | CosmoChain |
| `ATOM` | Cosmos |
| `CMC` | CosmosCoin |
| `COSP` | Cosplay Token |
| `COU` | Couchain |
| `CCA` | Counos Coin |
| `CCXX` | CounosX |
| `XCP` | CounterParty |
| `CHT` | Countinghouse Fund |
| `CQT` | Covalent |
| `CVNC` | CovenCoin |
| `COVN` | Covenant |
| `COVER` | Cover Protocol |
| `COV` | Covesting |
| `1COV.CUR` | Covestro AG |
| `COVIDTOKEN` | Covid Token |
| `CWR` | Cowrium |
| `CPLO` | Cpollo |
| `CRAB` | CrabCoin |
| `CRACK` | CrackCoin |
| `CRAFT` | Craftcoin |
| `CRF` | Crafting Finance |
| `CFTY` | Crafty |
| `CRAIG` | CraigsCoin |
| `CRP` | Cranepay |
| `CRNK` | CrankCoin |
| `CRTS` | Cratos |
| `CVNG` | Crave-NG |
| `CRAVE` | CraveCoin |
| `CZC` | Crazy Coin |
| `CR8` | Crazy8Token |
| `CRM` | Cream |
| `CREAM` | Cream |
| `PYE` | CreamPYE |
| `CBNT` | Create Breaking News Together |
| `XCRE` | Creatio |
| `CREA` | CreativeChain |
| `LBA` | Cred |
| `CREDI` | Credefi |
| `CRDNC` | Credence Coin |
| `PESA` | Credible |
| `CSAC` | Credit Safe Application Chain |
| `CRB` | Creditbit |
| `CCOIN` | Creditcoin |
| `CTC` | Creditcoin |
| `CDPT` | Creditor Data Platform |
| `CRDS` | Credits |
| `CRDTS` | Credits |
| `CREDO` | Credo |
| `CRES` | Cresio |
| `CREVA` | Creva Coin |
| `CROAT` | Croat |
| `CRON.CUR` | Cronos Group Inc. |
| `CRFI` | CrossFi |
| `CWT` | CrossWallet |
| `CMCT` | Crowd Machine |
| `CROWD` | CrowdCoin |
| `CCOS` | CrowdCoinage |
| `CSNP` | CrowdSale Network |
| `YUP` | Crowdholding |
| `WIZ` | Crowdwiz |
| `CRW` | Crown Coin |
| `CWS` | Crowns |
| `CRWNY` | Crowny Token |
| `CRU` | Crust Network |
| `CRC` | CryCash |
| `CWAR` | Cryowar Token |
| `IPT` | Crypt-ON |
| `CRYPT` | CryptCoin |
| `CPT` | Cryptaur |
| `CRL` | Cryptelo Coin |
| `CRPT` | Crypterium |
| `CTX` | Cryptex |
| `XCR` | Crypti |
| `CRYP` | CrypticCoin |
| `QRP` | Cryptics |
| `CTO` | Crypto |
| `ANGEL` | Crypto Angel |
| `CBRL` | Crypto BRL |
| `CBANK` | Crypto Bank |
| `XCB` | Crypto Birds |
| `CYCE` | Crypto Carbon Energy |
| `CCOMM` | Crypto Commonwealth |
| `CEM` | Crypto Emergency |
| `CESC` | Crypto Escudo |
| `CGS` | Crypto Gladiator Shards |
| `CHFT` | Crypto Holding |
| `CIF` | Crypto Improvement Fund |
| `CMA` | Crypto Market Ads |
| `CPRX` | Crypto Perx |
| `CPI` | Crypto Price Index |
| `CSPN` | Crypto Sports |
| `TKT` | Crypto Tickets |
| `CTE` | Crypto Tron |
| `CVA` | Crypto Village Accelerator |
| `CVAG` | Crypto Village Accelerator CVAG |
| `CWEX` | Crypto Wine Exchange |
| `CWIS` | Crypto Wisdom Coin |
| `CWX` | Crypto-X |
| `MCO` | Crypto.com |
| `CRO` | Crypto.com Coin |
| `C20` | Crypto20 |
| `CABS` | CryptoABS |
| `BEAST` | CryptoBeast |
| `SKILL` | CryptoBlades |
| `CBM` | CryptoBonusMiles |
| `BUK` | CryptoBuk |
| `CBX` | CryptoBullion |
| `CCRB` | CryptoCarbon |
| `CCAR` | CryptoCars |
| `CIRC` | CryptoCircuits |
| `CNRG` | CryptoEnergy |
| `FCS` | CryptoFocus |
| `CFT` | CryptoForecast |
| `XCHF` | CryptoFranc |
| `CHBR` | CryptoHub |
| `TKR` | CryptoInsight |
| `CJ` | CryptoJacks |
| `CJC` | CryptoJournal |
| `CKEK` | CryptoKek |
| `LEU` | CryptoLEU |
| `ETERNAL` | CryptoMines Eternal |
| `CPAY` | CryptoPay |
| `CRPS` | CryptoPennies |
| `PING` | CryptoPing |
| `CPAN` | CryptoPlanes |
| `OFCR` | CryptoPolice |
| `CP` | CryptoProfile |
| `CREV` | CryptoRevolution |
| `CR` | CryptoRiyal |
| `SRA` | CryptoSara |
| `CRSP` | CryptoSpots |
| `CTASK` | CryptoTask |
| `TYCOON` | CryptoTycoon |
| `CVCC` | CryptoVerificationCoin |
| `CWV` | CryptoWave |
| `CWN` | CryptoWorldNews |
| `CWXT` | CryptoWorldXToken |
| `ZOON` | CryptoZoon |
| `XPT` | Cryptobuyer |
| `CRON` | Cryptocean |
| `CCIN` | Cryptocoin Insurance |
| `CC10` | Cryptocurrency Top 10 Tokens Index |
| `CDEX` | Cryptodex |
| `CRYPTOE` | Cryptoenter |
| `FFA` | Cryptofifa |
| `GODZ` | Cryptogodz |
| `CGA` | Cryptographic Anomaly |
| `CIX100` | Cryptoindex |
| `CYT` | Cryptokenz |
| `UTOPIA` | Crypton |
| `CIX` | Cryptonetix |
| `CNX` | Cryptonex |
| `XCN` | Cryptonite |
| `YAE` | Cryptonovae |
| `CEFS` | CryptopiaFeeShares |
| `CXA` | CryptovationX |
| `OXY2` | Cryptoxygen |
| `MN` | Cryptsy Mining Contract |
| `POINTS` | Cryptsy Points |
| `CRTM` | Cryptum |
| `CVCOIN` | Crypviser |
| `CCT` | Crystal Clear Token |
| `CYL` | Crystal Token |
| `CUBEAUTO` | Cube |
| `QBT` | Cubits |
| `CUDOS` | Cudos |
| `CUEX` | Cuex |
| `CULT` | Cult DAO |
| `CTPL` | Cultiplan |
| `CUMMIES` | CumRocket |
| `CURA` | Cura Network |
| `CTKN` | Curaizon |
| `XCUR` | Curate |
| `CURE` | Curecoin |
| `CURIO` | Curio Governance |
| `CURI` | Curium |
| `CURRY` | CurrySwap |
| `CRV` | Curve DAO Token |
| `CBUK` | CurveBlock |
| `CUST` | Custody Token |
| `CCL` | CyClean |
| `XCS` | CybCSec Coin |
| `CCI` | Cyber Capital Invest |
| `CYBERD` | Cyber Doge |
| `CC` | CyberCoin |
| `CMT` | CyberMiles |
| `CTF` | CyberTime Finance |
| `CVT` | CyberVein |
| `CYBER` | CyberWay |
| `CBRT` | Cybereits Token |
| `CYC` | Cyclone Protocol |
| `CYCLUB` | Cyclub |
| `CYDER` | Cyder Coin |
| `CYG` | Cygnus |
| `CYP` | CypherPunkCoin |
| `FUNK` | Cypherfunks Coin |
| `CPH` | Cypherium |
| `CYRS` | Cyrus Token |
| `DILI` | D Community |
| `DAB` | DABANKING |
| `DACC2` | DACC2 |
| `DACH` | DACH Coin |
| `DACASH` | DACash |
| `DAD` | DAD |
| `DAX` | DAEX |
| `DAO` | DAO Maker |
| `DAOVC` | DAO.VC |
| `DAOB` | DAOBet |
| `HAUS` | DAOhaus |
| `GEN` | DAOstack |
| `DVG` | DAOventures |
| `DAPS` | DAPS Coin |
| `DMCH` | DARMA Cash |
| `DAS` | DAS |
| `DATX` | DATx |
| `DAV` | DAV |
| `DLX` | DAppLinks |
| `DRP` | DCORP |
| `DDAM` | DDAM |
| `DDK` | DDKoin |
| `DDS` | DDS.Store |
| `DEP` | DEAPCOIN |
| `DTEP` | DECOIN |
| `DPS` | DEEPSPACE |
| `DEEX` | DEEX |
| `DEFI5` | DEFI Top 5 Tokens Index |
| `DEMOS` | DEMOS |
| `DEX` | DEX |
| `DEXA` | DEXA COIN |
| `DXN` | DEXON |
| `DXR` | DEXTER |
| `DEXTF` | DEXTF |
| `DEXT` | DEXTools |
| `YFII` | DFI.money |
| `DFSG` | DFSocial Gaming |
| `DIA` | DIA |
| `DICEM` | DICE Money |
| `DIGG` | DIGG |
| `DIM` | DIMCOIN |
| `DPN` | DIPNET |
| `DIVO` | DIVO Token |
| `DIW` | DIWtoken |
| `DKKT` | DKK Token |
| `DLPD` | DLP Duck Token |
| `DMD` | DMD |
| `DMG` | DMM: Governance |
| `DMT` | DMarket |
| `DNTX` | DNAtix |
| `DXCT` | DNAxCAT |
| `DNN` | DNN Token |
| `DODO` | DODO |
| `DOOR` | DOOR |
| `DOS` | DOS Network |
| `DOSE` | DOSE |
| `DOTDOWN` | DOTDOWN |
| `DOTUP` | DOTUP |
| `DOV` | DOVU |
| `RATING` | DPRating |
| `DREAM` | DREAM |
| `DREP` | DREP |
| `DRPU` | DRP Utility |
| `DSCVR` | DSCVR.Finance |
| `DSLA` | DSLA Protocol |
| `DRACO` | DT Token |
| `DTOP` | DTOP Token |
| `TRVL` | DTravel |
| `DUOT` | DUO Network |
| `DVF` | DVF |
| `DXD` | DXdao |
| `DYNO` | DYNO |
| `DZCC` | DZCC |
| `DAF` | DaFIN |
| `DACS` | Dacsee |
| `DADDYDOGE` | Daddy Doge |
| `DAFI` | Dafi Protocol |
| `DAFT` | DaftCoin |
| `DAGO` | Dago Mining |
| `DAI` | Dai |
| `DIC` | Daikicoin |
| `DAI.CUR` | Daimler AG |
| `DAIN` | Dain Token |
| `DAIQ` | Daiquilibrium |
| `DALI` | Dalichain |
| `DHR.CUR` | Danaher |
| `DAN` | Daneel |
| `DAOX` | Daox |
| `DAPPT` | Dapp Token |
| `APP` | Dappsy |
| `DARB` | Darb Token |
| `DARCRUS` | Darcrus |
| `DNFT` | DareNFT |
| `DARICO` | Darico |
| `DARK` | Dark |
| `DARKEN` | Dark Energy Crystals |
| `DISK` | Dark Lisk |
| `MOOND` | Dark Moon |
| `DB` | DarkBit |
| `DBUND` | DarkBundles |
| `DRKC` | DarkCash |
| `DETH` | DarkEther |
| `DGDC` | DarkGold |
| `DKC` | DarkKnightCoin |
| `DANK` | DarkKush |
| `D4RK` | DarkPayCoin |
| `DSB` | DarkShibe |
| `DT` | DarkToken |
| `DRKT` | DarkTron |
| `KTON` | Darwinia Commitment Token |
| `RING` | Darwinia Network |
| `DASC` | DasCoin |
| `DASH` | Dash |
| `DSC` | Dash Cash |
| `DSH` | Dashcoin |
| `DTA` | Data |
| `DTC` | Data Transaction |
| `XD` | Data Transaction Token |
| `STONE` | DataBloc |
| `DTX` | DataBroker DAO |
| `DATAWALLET` | DataWallet |
| `DTB` | Databits |
| `DBCCOIN` | Datablockchain |
| `DDOG.CUR` | Datadog Inc |
| `XDT` | Dataeum |
| `DAM` | Datamine |
| `DTN` | Datareum |
| `DTRC` | Datarius |
| `DAT` | Datum |
| `DVS` | Davies |
| `DAC` | Davinci Coin |
| `DAVP` | Davion |
| `DAWN` | Dawn Protocol |
| `DXH` | Daxhund |
| `DAXX` | DaxxCoin |
| `DAYTA` | Dayta |
| `DCX` | DeCEX |
| `DFL` | DeFIL |
| `DEFT` | DeFi Factory Token |
| `DFGL` | DeFi Gold |
| `DFIO` | DeFi Omega |
| `DWZ` | DeFi Wizard |
| `DYP` | DeFi Yield Protocol |
| `DFI` | DeFiChain |
| `DPIE` | DeFiPie |
| `DPI` | DeFiPulse Index |
| `DFC` | DeFiScale |
| `DFA` | DeFine |
| `FIN` | DeFiner |
| `DZI` | DeFinition |
| `DHV` | DeHive |
| `DEVT` | DeHorizon |
| `DNET` | DeNet |
| `XNA` | DeOxyRibose |
| `DERC` | DeRace |
| `DS` | DeStorage |
| `DVT` | DeVault |
| `DEXE` | DeXe |
| `DEBASE` | Debase |
| `DBTC` | DebitCoin |
| `DEB` | Debitum Token |
| `DCT` | Decent |
| `DBET` | Decent.bet |
| `DEC` | Decentr |
| `DG` | Decentral Games |
| `MANA` | Decentraland |
| `DACC` | Decentralized Accessible Content Chain |
| `DML` | Decentralized Machine Learning |
| `DEOR` | Decentralized Oracle |
| `DESO` | Decentralized Social |
| `DUBI` | Decentralized Universal Basic Income |
| `DVP` | Decentralized Vulnerability Platform |
| `DIO` | Decimated |
| `HST` | Decision Token |
| `DCR` | Decred |
| `DCB` | Decubate |
| `DEEPG` | Deep Gold |
| `DBC` | DeepBrain Chain |
| `DEEP` | DeepCloud AI |
| `ONION` | DeepOnion |
| `DPR` | Deeper Network |
| `DE.CUR` | Deere |
| `LOVE` | Deesse |
| `DEFI` | Defi |
| `DFY` | Defi For You |
| `DBOX` | DefiBox |
| `CLIQ` | DefiCliq |
| `DFD` | DefiDollar DAO |
| `DFSOCIAL` | DefiSocial (OLD) |
| `DXB` | DefiXBet |
| `XGM` | Defis |
| `DEFLA` | Defla |
| `DEFLCT` | Deflect |
| `DEA` | Degas Coin |
| `DGVC` | DegenVC |
| `DEGO` | Dego Finance |
| `DEGOV` | Degov |
| `HEROES` | Dehero Community Token |
| `DEI` | Deimos |
| `DEK` | DekBox |
| `DKD` | Dekado |
| `DEL` | DelChain |
| `DPAY` | DelightPay |
| `DLO` | Delio |
| `DLPT` | Deliverers Power Token |
| `DLPH.CUR` | Delphi Automotive |
| `DPY` | Delphy |
| `AIR.CUR` | Delta Air Lines |
| `DAL.CUR` | Delta Air Lines |
| `DELTA` | Delta Financial |
| `DLXV` | Delta-X |
| `DELTAC` | DeltaChain |
| `DCRE` | DeltaCredits |
| `DMTC` | Demeter Chain |
| `DMOD` | Demodyfi Token |
| `DMLG` | Demole |
| `DDN` | Den Domains |
| `D` | Denarius |
| `DNO` | Denaro |
| `DNZ.BITCI` | Denizlispor Fan Token |
| `DENT` | Dent |
| `DCN` | Dentacoin |
| `DFBT` | DentalFix |
| `DEPO` | Depo |
| `DEQ` | Dequant |
| `DERI` | Deri Protocol |
| `DDX` | DerivaDAO |
| `DVX` | Derivex |
| `DERO` | Dero |
| `DESI` | Desico |
| `DSR` | Desire |
| `DES` | Destiny |
| `DTCT` | DetectorToken |
| `DTH` | Dether |
| `DBK.CUR` | Deutsche Bank AG |
| `LHA.CUR` | Deutsche Lufthansa AG |
| `DEVCOIN` | DevCoin |
| `DEVX` | Developeo |
| `EVE` | Devery |
| `DEV` | Deviant Coin |
| `DXG` | DexAge |
| `DXF` | Dexfin |
| `DXT` | Dexit Finance |
| `DEXM` | Dexmex |
| `DEXG` | Dextoken Governance |
| `DXO` | Dextro |
| `DFYN` | Dfyn Network |
| `DCASH` | Diabolo |
| `DGN` | Diagon |
| `DIAM` | Diamond |
| `DBZ` | Diamond Boyz Coin |
| `DPT` | Diamond Platform Token |
| `DCK` | DickCoin |
| `DID` | Didcoin |
| `DIESEL` | Diesel |
| `YFIII` | Dify.Finance |
| `DIGS` | Diggits |
| `DDR` | Digi Dinar |
| `DGB` | DigiByte |
| `DGCL` | DigiCol Token |
| `DIGIC` | DigiCube |
| `DDRST` | DigiDinar StableToken |
| `DDRT` | DigiDinar Token |
| `DEUR` | DigiEuro |
| `DIGIF` | DigiFel |
| `DFXT` | DigiFinexToken |
| `DGM` | DigiMoney |
| `DGPT` | DigiPulse |
| `DGMS` | Digigems |
| `DAGT` | Digital Asset Guarantee Token |
| `DPP` | Digital Assets Power Play |
| `DBA` | Digital Bank of Africa |
| `DDF` | Digital Developers Fund |
| `DFSPORTS` | Digital Fantasy Sports |
| `DIFX` | Digital Financial Exchange |
| `DEFIT` | Digital Fitness |
| `DFP` | Digital Fund Coin |
| `DGLD` | Digital Gold |
| `DRC` | Digital Reserve Currency |
| `DRS` | Digital Rupees |
| `DWC` | Digital Wallet |
| `XDGB` | DigitalBits |
| `XDN` | DigitalNote |
| `DP` | DigitalPrice |
| `DGC` | Digitalcoin |
| `DGTX` | Digitex Token |
| `WAGE` | Digiwage |
| `DGD` | Digix DAO |
| `DGX` | Digix Gold token |
| `DIG` | Dignity |
| `DIME` | DimeCoin |
| `EONC` | Dimension |
| `DMTR` | Dimitra |
| `DCY` | Dinastycoin |
| `DIN` | Dinero |
| `DINGER` | Dinger Token |
| `DINO` | DinoSwap |
| `DNXC` | DinoX |
| `XDQ` | Dirac Coin |
| `DHS` | Dirham Crypto |
| `DIS` | DiscoveryIoT |
| `DCC` | Distributed Credit Chain |
| `DIT` | Ditcoin |
| `DIVER` | Divergence Protocol |
| `DIVX` | Divi Exchange Token |
| `DIVI` | Divi Project |
| `DVTC` | DivotyCoin |
| `DXC` | DixiCoin |
| `DLISK` | Dlisk |
| `DNOTES` | Dnotes |
| `DRM` | DoDreamChain |
| `DRE` | DoRen |
| `DYT` | DoYourTip |
| `DBY` | Dobuy |
| `DOCC` | Doc Coin |
| `NRN` | Doc.ai Neuron |
| `DOCT` | DocTailor |
| `DOC` | Dochain |
| `DOCK` | Dock.io |
| `DMS` | Documentchain |
| `DOGDEFI` | DogDeFiCoin |
| `DOGACOIN` | DogaCoin |
| `DOGEDASH` | Doge Dash |
| `LEASH` | Doge Killer |
| `RELOADED` | Doge Reloaded |
| `WSDOGE` | Doge of Woof Street |
| `DOGEBNB` | DogeBNB |
| `DOGEC` | DogeCash |
| `DOGED` | DogeCoinDark |
| `DOGEDAO` | DogeDao |
| `DOGEGF` | DogeGF |
| `DGORE` | DogeGoreCoin |
| `DOGEX` | DogeHouse Capital |
| `XDP` | DogeParty |
| `DOGY` | DogeYield |
| `DOGEZILLA` | DogeZilla |
| `DOGE` | Dogecoin |
| `ELON` | Dogelon Mars |
| `DOGO` | DogemonGo |
| `DOGGY` | Doggy |
| `DOGIRA` | Dogira |
| `DOE` | Dogs Of Elon |
| `DOGZ` | Dogz |
| `DOKI` | Doki Doki Finance |
| `DOLA` | Dola USD Stablecoin |
| `DLA` | Dolla |
| `DG.CUR` | Dollar General |
| `DT1` | Dollar Token 1 |
| `DLTR.CUR` | Dollar Tree, Inc. |
| `DLC` | DollarCoin |
| `DLR` | DollarOnline |
| `DRT` | DomRaider |
| `DON` | Don-key |
| `DONATION` | DonationCoin |
| `DDL` | Donocle |
| `DBUY` | Doont Buy |
| `PAPER` | Dope Wars Paper |
| `DOPE` | DopeCoin |
| `DPX` | Dopex |
| `RDPX` | Dopex Rebate Token |
| `DORA` | Dora Factory |
| `DOR` | Dorado |
| `XDOT` | DotBased |
| `DOTC` | Dotcoin |
| `BOAT` | Doubloon |
| `US30.CUR` | Dow Jones 30 |
| `Dow` | DowCoin |
| `DWDP.CUR` | DowDuPont Inc. |
| `DRA` | DraculaCoin |
| `DKNG` | DraftKings |
| `DFT` | Draftcoin |
| `DRG` | Dragon Coin |
| `XDB` | DragonSphere |
| `DVC` | DragonVein |
| `DRGN` | Dragonchain |
| `DMC` | Dream21 |
| `DRM8` | Dream8Coin |
| `DREAMS` | Dreams Quest |
| `DSCP` | Dreamscape |
| `DRF` | Drife |
| `DRINK` | DrinkChain |
| `DRZ` | Droidz |
| `DRONE` | Drone Coin |
| `DBX.CUR` | DropBox |
| `DROP` | Dropil |
| `DOP` | Drops |
| `DRXNE` | Droxne |
| `DUB` | DubCoin |
| `DBIC` | DubaiCoin |
| `DBIX` | DubaiCoin |
| `DUCATO` | Ducato Protocol Token |
| `DUC` | DucatusCoin |
| `DDIM` | DuckDaoDime |
| `DUCKD` | DuckDuckCoin |
| `DUK+` | Dukascoin |
| `DUN` | Dune |
| `DUSK` | Dusk Network |
| `DUX` | DuxCoin |
| `DVI` | Dvision Network |
| `DX` | DxChain Token |
| `SALE` | DxSale Network |
| `DYC` | Dycoin |
| `DMX` | Dymmax |
| `DYN` | Dynamic |
| `DSD` | Dynamic Set Dollar |
| `DSTR` | Dynamic Supply Tracker |
| `DTR` | Dynamic Trading Rights |
| `DYNMT` | Dynamite |
| `DYNCOIN` | Dyncoin |
| `DTEM` | Dystem |
| `DBR` | Düber |
| `EFL` | E-Gulden |
| `E21` | E21 Coin |
| `EB3` | EB3coin |
| `EBC` | EBCoin |
| `ECOCH` | ECOChain |
| `OMI` | ECOMI |
| `ECU` | ECOSC |
| `ECOC` | ECOcoin |
| `ECP` | ECP+ Technology |
| `EDC` | EDC Blockchain |
| `EDDA` | EDDASwap |
| `EDEN` | EDEN |
| `EDGE` | EDGE |
| `EDRC` | EDRCoin |
| `EKT` | EDUCare |
| `EGO` | EGOcoin |
| `EHASH` | EHash |
| `EIFI` | EIFI FINANCE |
| `EJAC` | EJA Coin |
| `ELAC` | ELA Coin |
| `ELAD` | ELAD Network |
| `ELTCOIN` | ELTCOIN |
| `EL` | ELYSIA |
| `EMANATE` | EMANATE |
| `LOL` | EMOGI Network |
| `EMX` | EMX |
| `ET` | ENDO |
| `ENX` | ENEX |
| `ENTRC` | ENTER COIN |
| `ENTRY` | ENTRY |
| `ENV` | ENVOY |
| `EOS` | EOS |
| `EOSDOWN` | EOSDOWN |
| `EOSDT` | EOSDT |
| `EOSC` | EOSForce |
| `EOSUP` | EOSUP |
| `EPAM.CUR` | EPAM Systems, Inc. |
| `EPIK` | EPIK Token |
| `EQX` | EQIFi |
| `EQO` | EQO |
| `EQL` | EQUAL |
| `EQ` | EQUI |
| `EQUI` | EQUI Token |
| `ERB` | ERBCoin |
| `ESBC` | ESBC |
| `EST` | ESports Chain |
| `XBASE` | ETERBASE |
| `MJ.CUR` | ETFMG Alternative Harvest ETF |
| `ETH2X-FLI` | ETH 2x Flexible Leverage Index |
| `ETS` | ETH Share |
| `ERA` | ETHA |
| `ETHA` | ETHA Lend |
| `ETHDOWN` | ETHDOWN |
| `EGAS` | ETHGAS |
| `ETHPAD` | ETHPad |
| `ETHP` | ETHPlus |
| `ETHUP` | ETHUP |
| `ETHPLO` | ETHplode |
| `ETNA` | ETNA Network |
| `EUCOIN` | EU Coin |
| `EUCX` | EUCX |
| `EUNO` | EUNO |
| `EBASE` | EURBASE |
| `EVOS` | EVOS |
| `EXIP` | EXIP |
| `EXM` | EXMO Coin |
| `EXMR` | EXMR FDN |
| `EXRN` | EXRNchain |
| `EOX` | EXTRA ORDINARY |
| `ETE` | EXTRADECOIN |
| `EYE` | EYE Token |
| `EZC` | EZCoin |
| `EZM` | EZMarket |
| `EZT` | EZToken |
| `EA` | EagleCoin |
| `EAGS` | EagsCoin |
| `EBSC` | EarlyBSC |
| `EARTH` | Earth Token |
| `EAC` | EarthCoin |
| `EMN.CUR` | Eastman Chemical |
| `EASYF` | EasyFeedback |
| `EZ` | EasyFi V2 |
| `EGDC` | EasyGuide |
| `EMT` | EasyMine |
| `ETKN` | EasyToken |
| `EAURIC` | Eauric |
| `EBK` | Ebakus |
| `EBZ` | Ebitz |
| `EBS` | EbolaShare |
| `EKO` | EchoLink |
| `EC` | Echoin |
| `ECLIP` | Eclipse |
| `EVCC` | Eco Value Coin |
| `ABA` | EcoBall |
| `ECOB` | EcoBit |
| `ECOFI` | EcoFi |
| `ECR` | EcoVerse |
| `ECOREAL` | Ecoreal Estate |
| `EDDIE` | Eddie coin |
| `EDN` | EdenChain |
| `EDF.CUR` | Edf |
| `DADI` | Edge |
| `EDGT` | Edgecoin |
| `EDG` | Edgeless |
| `EDGEW` | Edgeware |
| `EDU` | EduCoin |
| `LEDU` | Education Ecosystem |
| `EDUC` | EducoinV |
| `WOZX` | Efforce |
| `EFFT` | Effort Economy |
| `EFI` | Efinity |
| `EGGC` | EggCoin |
| `EGGP` | Eggplant Finance |
| `EUSD` | Egoras Dollar |
| `EGT` | Egretia |
| `EHRT` | Eight Hours Token |
| `EMC2` | Einsteinium |
| `EKG` | Ekon Gold |
| `ELC` | Elacoin |
| `ELAMA` | Elamachain |
| `XEL` | Elastic |
| `XBN` | Elastic BNB |
| `ELA` | Elastos |
| `ECA` | Electra |
| `XEP` | Electra Protocol |
| `ELCASH` | Electric Cash |
| `ETR` | Electric Token |
| `EVZ` | Electric Vehicle Zone |
| `ELEC` | Electrify.Asia |
| `ELT` | Electron |
| `ETN` | Electroneum |
| `E2C` | Electronic Energy Coin |
| `ELD` | Electrum Dark |
| `EKN` | Elektron |
| `ELE` | Elementrem |
| `ELEMENTS` | Elements |
| `ELES` | Elements Estates |
| `ELM` | Elements Play |
| `LLY.CUR` | Eli Lilly & Co |
| `ELIC` | Elicoin |
| `XLS` | Elis |
| `EUM` | Elitium |
| `ELIX` | Elixir |
| `ELLA` | Ellaism |
| `ELP` | Ellerium |
| `ELLI` | ElliotCoin |
| `ELLIP` | Ellipsis |
| `ELONGD` | Elongate Deluxe |
| `ERD` | Elrond |
| `EGLD` | Elrond |
| `LEX` | Elxis |
| `ELY` | Elysian |
| `ELS` | Elysium |
| `EMAR` | EmaratCoin |
| `EMBER` | EmberCoin |
| `MBRS` | Embers |
| `EMD` | Emerald |
| `EMC` | Emercoin |
| `EMN` | Eminence |
| `EM` | Eminer |
| `EMIGR` | EmiratesGoldCoin |
| `EMRX` | Emirex Token |
| `EMPH` | Emphy |
| `EMPIRE` | Empire Token |
| `PLEO` | Empleos |
| `EMPC` | EmporiumCoin |
| `ESD` | Empty Set Dollar |
| `EPY` | Empyrean |
| `ETM` | En-Tan-Mo |
| `ENC` | Encores Token |
| `ENCX` | Encrybit |
| `ENCRYPG` | EncrypGen |
| `ETT` | EncryptoTel |
| `ENCN` | EndChain |
| `EDR` | Endor Protocol Token |
| `ENE` | EneCoin |
| `ENQ` | Enecuum |
| `ENEDEX` | Enedex |
| `NRG` | Energi |
| `ETK` | Energi Token |
| `TSL` | Energo |
| `WATT.CUR` | Energous Corporation |
| `ELX` | Energy Ledger |
| `EWT` | Energy Web Token |
| `ENRG` | EnergyCoin |
| `ENGT` | Engagement Token |
| `EGCC` | Engine |
| `XNG` | Enigma |
| `ENG` | Enigma |
| `ENJ` | Enjin Coin |
| `ENK` | Enkidu |
| `SPORE` | Enoki Finance |
| `ENO` | Enotoken |
| `ENTC` | EnterButton |
| `ENTER` | EnterCoin |
| `ENTR` | EnterDAO |
| `ENTRP` | Entropy Token |
| `ENU` | Enumivo |
| `NIFTSY` | Envelop |
| `ENVIENTA` | Envienta |
| `EVN` | Envion |
| `NVOY` | Envoy |
| `ZYM` | Enzym |
| `MLN` | Enzyme |
| `EPS` | Epanus |
| `EPK` | EpiK Protocol |
| `EPIC` | Epic |
| `EQUAL` | EqualCoin |
| `EQZ` | Equalizer |
| `EQT` | EquiTrader |
| `EQM` | Equilibrium Coin |
| `ES` | Era Swap Token |
| `ERE` | Erecoin |
| `ERG` | Ergo |
| `ERIS` | Eristica |
| `ERO` | Eroscoin |
| `EROTICA` | Erotica |
| `ERR` | ErrorCoin |
| `ERTHA` | Ertha |
| `EWC` | Erugo World Coin |
| `ERY` | Eryllium |
| `ESES.BITCI` | Eskişehir Fan Tokens |
| `ESP` | Espers |
| `ERT` | Esports.com |
| `ESS` | Essentia |
| `ETALON` | Etalon |
| `ETERNALC` | Eternal Coin |
| `XET` | Eternal Token |
| `ETRNT` | Eternal Trusts |
| `ENT` | Eternity |
| `ETH2` | Eth 2.0 Staking by Pool-X |
| `EBET` | EthBet |
| `ETBS` | EthBits |
| `EBOX` | Ethbox Token |
| `HEAL` | Etheal |
| `IMPT` | Ether Kingdoms Token |
| `ETHB` | EtherBTC |
| `ETHBN` | EtherBone |
| `EDT` | EtherDelta |
| `DOGETH` | EtherDoge |
| `EGEM` | EtherGem |
| `ETI` | EtherInc |
| `ETL` | EtherLite |
| `ESZ` | EtherSportz |
| `ETZ` | EtherZero |
| `ECC` | Etherconnect |
| `ECH` | EthereCash |
| `ETH` | Ethereum |
| `ETBT` | Ethereum Black |
| `BLUE` | Ethereum Blue |
| `ECASH` | Ethereum Cash |
| `ETC` | Ethereum Classic |
| `ETY` | Ethereum Cloud |
| `ETHD` | Ethereum Dark |
| `ETG` | Ethereum Gold |
| `ETGP` | Ethereum Gold Project |
| `ETHM` | Ethereum Meta |
| `EMV` | Ethereum Movie Venture |
| `ENS` | Ethereum Name Service |
| `ETHPR` | Ethereum Premium |
| `PUSH` | Ethereum Push Notification Service |
| `EQC` | Ethereum Qchain Token |
| `EFIL` | Ethereum Wrapped Filecoin |
| `ETHY` | Ethereum Yield |
| `EER` | Ethereum eRush |
| `LNK` | Ethereum.Link |
| `BTCE` | EthereumBitcoin |
| `ELITE` | EthereumLite |
| `EMAX` | EthereumMax |
| `ETHS` | EthereumScrypt |
| `EVAULT` | EthereumVault |
| `DIP` | Etherisc |
| `RIYA` | Etheriya |
| `ELAND` | Etherland |
| `EMON` | Ethermon |
| `ERN` | Ethernity Chain |
| `ETNY` | Ethernity Cloud |
| `DICE` | Etheroll |
| `FUEL` | Etherparty |
| `ETHPY` | Etherpay |
| `ESN` | Ethersocial |
| `SOX` | Ethersocks |
| `ETHIX` | EthicHub |
| `HORSE` | Ethorse |
| `ETHOS` | Ethos Project |
| `ETHV` | Ethverse |
| `ET4` | Eticket4 |
| `ERK` | Eureka Coin |
| `EU50.CUR` | Euro Stoxx 50 |
| `EURT` | Euro Tether |
| `EUC` | Eurocoin |
| `ECTE` | EurocoinToken |
| `ERC` | EuropeCoin |
| `ETL.CUR` | Eutelsat Communications |
| `EVED` | Evedo |
| `EVENC` | EvenCoin |
| `EVENT` | Event Token |
| `EVC` | Eventchain |
| `EVERGREEN` | EverGreenCoin |
| `EGC` | EverGrowCoin |
| `EVERLIFE` | EverLife.AI |
| `ID` | Everest |
| `EVX` | Everex |
| `EVT` | EveriToken |
| `IQ` | Everipedia |
| `EVER` | Everscale |
| `EVR` | Everus |
| `EVY` | EveryCoin |
| `EOC` | EveryonesCoin |
| `BCDT` | EvidenZ |
| `EPTT` | Evident Proof Transaction Token |
| `EVIL` | EvilCoin |
| `EVRICE` | Evrice |
| `EVRY` | Evrynet |
| `EVU` | Evulus Token |
| `EXB` | ExaByte (EXB) |
| `EXAS.CUR` | Exact Sciences Corporation |
| `XOS` | Excalibur OS |
| `CAVO` | Excavo Finance |
| `XUC` | Exchange Union |
| `EXCC` | ExchangeCoin |
| `EXN` | ExchangeN |
| `EXCL` | Exclusive Coin |
| `XPL` | Exclusive Platform |
| `EXE` | ExeCoin |
| `XED` | Exeedme |
| `EXEL.CUR` | Exelixis, Inc. |
| `XNT` | Exenium |
| `EXC` | Eximchain |
| `EXIT` | ExitCoin |
| `EXO` | Exosis |
| `EXP` | Expanse |
| `EXPE.CUR` | Expedia Inc |
| `XP` | Experience Points |
| `EXY` | Experty |
| `WIS` | Experty Wisdom Token |
| `EON` | Exscudo |
| `TAURI` | Extauri |
| `EXTN` | Extensive Coin |
| `XTRA` | ExtraCredit |
| `EXLT` | ExtraLovers |
| `XSB` | Extreme Sportsbook |
| `XTREME` | ExtremeCoin |
| `EXZO` | ExzoCoin 2.0 |
| `F16` | F16Coin |
| `FAB` | FABRK Token |
| `FARMC` | FARM Coin |
| `BAR` | FC Barcelona Fan Token |
| `PORTO` | FC Porto |
| `FX` | FCoin |
| `FEG` | FEG Token |
| `FEX` | FEX Token |
| `FDT` | FIAT DAO Token |
| `FO` | FIBOS |
| `FIBRE` | FIBRE |
| `eFIC` | FIC Network |
| `FIFTY` | FIFTYONEFIFTY |
| `FILDOWN` | FILDOWN |
| `FILUP` | FILUP |
| `FIO` | FIO Protocol |
| `FK` | FK Coin |
| `FLASHC` | FLASH coin |
| `FLETA` | FLETA |
| `FLEX` | FLEX Coin |
| `FLIK` | FLiK |
| `FMG` | FM Gallery |
| `FME` | FME |
| `FMEX` | FMex |
| `FNB` | FNB protocol |
| `FNDZ` | FNDZ Token |
| `FOCV` | FOCV |
| `FLMC` | FOLM coin |
| `FOREX` | FOREXCOIN |
| `FRED` | FREDEnergy |
| `FREE` | FREE coin |
| `FREN` | FREN |
| `IT40.CUR` | FTSE Borsa Italiana Index 40 |
| `CN50.CUR` | FTSE China A50 |
| `FTT` | FTX Token |
| `FTK` | FToken |
| `FUD` | FUD.finance |
| `FUN` | FUN Token |
| `FUNDC` | FUNDChains |
| `FXP` | FXPay |
| `FABA` | Faba Invest |
| `FB.CUR` | Facebook |
| `DIEM` | Facebook Diem |
| `FBFTX` | Facebook FTX |
| `FC` | Facecoin |
| `FACE` | Faceter |
| `FTR` | FactR |
| `FCT` | Factom |
| `FAIR` | FairCoin |
| `FAIRG` | FairGame |
| `FAIRC` | Faireum Token |
| `FAI` | Fairum |
| `FLDT` | FairyLand |
| `F9` | Falcon Nine |
| `FALCONS` | Falcon Swaps |
| `FSW` | Falconswap |
| `FAME` | Fame |
| `FAMEC` | FameCoin |
| `FAN` | Fan360 |
| `FANZ` | FanChain |
| `FTI` | FansTime |
| `XFT` | Fantasy Cash |
| `FTM` | Fantom |
| `FCN` | FantomCoin |
| `FARA` | FaraLand |
| `FRD` | Farad |
| `FTCH.CUR` | Farfetch Ltd |
| `F2K` | Farm2Kitchen |
| `FARMA` | FarmaTrust |
| `METH` | Farming Bad |
| `FSHN` | Fashion Coin |
| `FSTC` | FastCoin |
| `FASTMOON` | FastMoon |
| `FAST` | Fastswap |
| `FOGE` | Fat Doge |
| `FATCAKE` | FatCake |
| `FAT` | Fatcoin |
| `FTUM` | Fatum |
| `FCTC` | FaucetCoin |
| `FAZZ` | FazzCoin |
| `FEAR` | Fear |
| `FTC` | FeatherCoin |
| `FDX.CUR` | Fedex |
| `TIPS` | FedoraCoin |
| `FEED` | Feeder Finance |
| `FEI` | Fei Protocol |
| `NFD` | Feisty Doge NFT |
| `FB` | Fenerbahçe Token |
| `FRM` | Ferrum Network |
| `FESS` | Fesschain |
| `FET` | Fetch.AI |
| `FEY` | Feyorra |
| `FIH` | Fidelity House |
| `FIELD` | Fieldcoin |
| `FIII` | Fiii |
| `FILDA` | Filda |
| `FIL` | FileCoin |
| `FILST` | Filecoin Standard Hashrate Token |
| `FN` | Filenet |
| `FFM` | Files.fm Library |
| `FILL` | Fillit |
| `FBB` | FilmBusinessBuster |
| `FILM` | Filmpass |
| `FNX` | FinNexus |
| `FNTB` | FinTab |
| `FINA` | FinanceX |
| `FIT` | Financial Investment Token |
| `FIND` | FindCoin |
| `FRA` | Findora |
| `PRINTS` | FingerprintsDAO |
| `FNL` | Finlocale |
| `FMT` | Finminity |
| `FINOM` | Finom FIN Token |
| `NOM` | Finom NOM Token |
| `FTX` | FintruX |
| `FXF` | Finxflo |
| `FDO` | Firdaos |
| `FINU` | Fire Inu |
| `FIRE` | FireCoin |
| `FLOT` | FireLotto |
| `FRC` | FireRoosterCoin |
| `FLAME` | FireStarter |
| `FFC` | FireflyCoin |
| `FMCT` | FirmaChain |
| `FIRO` | Firo |
| `FSLR.CUR` | First Solar Inc |
| `FTXR.CUR` | First Trust Nasdaq Transportation ETF |
| `1ST` | FirstBlood |
| `FRST` | FirstCoin |
| `FIRU` | Firulais Finance |
| `FFYI` | Fiscus FYI |
| `FIST` | FistBump |
| `FITC` | Fitcoin |
| `FRV` | Fitrova |
| `FIVE.CUR` | Five Below, Inc. |
| `FBN` | Five balance |
| `F7` | Five7 |
| `FVRR.CUR` | Fiverr International Ltd |
| `FLM` | Flamingo |
| `FLAP` | Flappy Coin |
| `FLAS` | Flas Exchange Token |
| `CFLASH` | Flash |
| `FLASH` | Flashstake |
| `FLVR` | FlavorCoin |
| `FXC` | Flexacoin |
| `FNP` | FlipNpik |
| `FLS` | Flits |
| `FLIXX` | Flixxo |
| `FLO` | Flo |
| `BANK` | Float Protocol |
| `FLOAT` | Float Protocol |
| `FLOKI` | Floki Inu |
| `FLRS` | Flourish Coin |
| `FLOW` | Flow - Dapper Labs |
| `FLOWP` | Flow Protocol |
| `FLC` | FlowChainCoin |
| `FIG` | FlowCom |
| `FLURRY` | Flurry Finance |
| `FLT` | FlutterCoin |
| `FLUX` | Flux |
| `FLUZ` | FluzFluz |
| `FLYCOIN` | FlyCoin |
| `FYP` | FlypMe |
| `FOAM` | Foam |
| `FODL` | Fodl Finance |
| `FOIN` | Foin |
| `FOL` | Folder Protocol |
| `FLDC` | Folding Coin |
| `FLG` | Folgory Coin |
| `USDF` | FolgoryUSD |
| `FLLW` | Follow Coin |
| `FNO` | Fonero |
| `FONT` | Font |
| `FONZ` | FonzieCoin |
| `FOODC` | Food Club |
| `FOOD` | FoodCoin |
| `XFC` | Football Coin |
| `FOPA` | Fopacoin |
| `FOR` | ForTube |
| `FORCEC` | Force Coin |
| `F.CUR` | Ford Motor Co |
| `FF` | Forefront |
| `PTON` | Foresting |
| `FOREVER` | Forever Coin |
| `FOREVERPUMP` | Forever Pump |
| `FBNB` | ForeverBNB |
| `FOREVERFOMO` | ForeverFOMO |
| `FOREVERUP` | ForeverUp |
| `FRSP` | Forkspot |
| `FORM` | Formation FI |
| `FML` | FormulA |
| `FFCT` | FortFC |
| `FKX` | FortKnoxster |
| `FCQ` | Fortem Capital |
| `FTS` | Fortress Lending |
| `FOTA` | Fortuna |
| `FORTUNE` | Fortune |
| `FSBT` | Forty Seven Bank |
| `FTN` | Fountain |
| `FOXF` | Fox Finance |
| `FOXT` | Fox Trading |
| `FOXD` | Foxdcoin |
| `FCL` | Fractal |
| `FRAC` | FractalCoin |
| `FR40.CUR` | France 40 |
| `FRN` | Francs |
| `FLY` | Franklin |
| `FRK` | Franko |
| `FRWC` | Frankywillcoin |
| `FRAX` | Frax |
| `FXS` | Frax Share |
| `FRAZ` | FrazCoin |
| `FGZ` | Free Game Zone |
| `FRE` | FreeCoin |
| `FREEROSS` | FreeRossDAO |
| `FR` | Freedom Reserve |
| `FL` | Freeliquid |
| `FWT` | Freeway Token |
| `FRECNX` | FreldoCoinX |
| `FDR` | French Digital Reserve |
| `FREC` | Freyrchain |
| `FWB` | Friends With Benefits Pro |
| `FSC` | FriendshipCoin |
| `FDZ` | Friendz |
| `BONDED` | Fringe Finance |
| `FRDX` | Frodo Tech |
| `FROGE` | Froge Finance |
| `FRONT` | Frontier |
| `FRR` | Frontrow |
| `FRTS` | Fruits |
| `F2C` | Ftribe Fighters |
| `FUCK` | Fuck Token |
| `FC2` | Fuel2Coin |
| `FJC` | FujiCoin |
| `FUJIN` | Fujinto |
| `FUNC` | FunCoin |
| `FNK` | FunKeyPay |
| `FUNX` | Function X |
| `FUNDP` | Fund Platform |
| `FUNDZ` | FundFantasy |
| `FND` | FundRequest |
| `FYN` | FundYourselfNow |
| `ATON` | Further Network |
| `COMBO` | Furucombo |
| `FUSE` | Fuse Network Token |
| `FSN` | Fusion |
| `FUTC` | FutCoin |
| `FTRC` | FutureCoin |
| `FTP` | FuturePoints |
| `FTW` | FutureWorks |
| `FPC` | Futurepia |
| `FST` | Futureswap |
| `FTO` | FuturoCoin |
| `FXT` | FuzeX |
| `FUZZ` | Fuzzballs |
| `FYZ` | Fyooz |
| `FYZNFT` | Fyooz NFT |
| `G50` | G50 |
| `G999` | G999 |
| `GAIAPLATFORM` | GAIA Platform |
| `GAKH` | GAKHcoin |
| `GTX` | GALLACTIC |
| `GAMB` | GAMB |
| `GMEE` | GAMEE |
| `GANA` | GANA |
| `GAT` | GATCOIN |
| `GATE` | GATENet |
| `GBRC` | GBR Coin |
| `GE` | GEchain |
| `GGP` | GGPro |
| `GGR` | GGRocket |
| `GTO` | GIFTO |
| `GIN` | GINcoin |
| `GIZ` | GIZMOcoin |
| `GKI` | GKi |
| `GLOS` | GLOS |
| `GM` | GM |
| `GMB` | GMB |
| `GMCOIN` | GMCoin |
| `GMT` | GMT Token |
| `GN` | GN |
| `GNY` | GNY |
| `GODL` | GODL |
| `GOGO` | GOGO Finance |
| `GOMA` | GOMA Finance |
| `GOPX` | GOPX Token |
| `GOSS` | GOSSIP-Coin |
| `OGOD` | GOTOGOD |
| `GPX` | GPEX |
| `GPU` | GPU Coin |
| `GRAYLL` | GRAYLL |
| `GRO` | GROWTH DeFi |
| `GSE` | GSENetwork |
| `GSM` | GSM Coin |
| `GSPI` | GSPI |
| `GSTC` | GSTCOIN |
| `GSTT` | GSTT |
| `GTON` | GTON Capital |
| `GWPH.CUR` | GW Pharmaceuticals PLC |
| `GXC` | GXChain |
| `GYEN` | GYEN |
| `GBO` | Gabro.io |
| `RUX` | Gacrux NFT |
| `GEP` | Gaia |
| `GAIA` | Gaia Everworld |
| `GNR` | Gainer |
| `GAIN` | Gainfy |
| `GAINS` | Gains |
| `GFARM2` | Gains V2 |
| `GALA` | Gala |
| `ORE` | Galactrum |
| `GLPG.CUR` | Galapagos NV |
| `GAL` | Galatasaray Fan Token |
| `GLXY` | Galaxy Digital Holdings |
| `GES` | Galaxy eSolutions |
| `GLX` | GalaxyCoin |
| `GALI` | Galilel |
| `GLN` | Galion Token |
| `GALT` | Galtcoin |
| `GAM` | Gambit coin |
| `GMCN` | GambleCoin |
| `GSHIBA` | Gambler Shiba |
| `GAMEC` | Game |
| `GARK` | Game Ark |
| `GBT` | GameBetCoin |
| `GAME` | GameCredits |
| `GAFI` | GameFi |
| `GML` | GameLeagueCoin |
| `GST` | GameStars |
| `GME` | GameStop |
| `UNITS` | GameUnits |
| `GAMEX` | GameX |
| `GDX` | Gamedex |
| `FLP` | Gameflip |
| `GHX` | GamerCoin |
| `GMPD` | GamesPad |
| `GME.CUR` | Gamestop |
| `GSWAP` | Gameswap |
| `GAMMA` | Gamma Strategies |
| `GFX` | GamyFi Token |
| `GNJ` | GanjaCoin V2 |
| `GAPC` | Gapcoin |
| `GAP` | Gaps Chain |
| `GARI` | Gari Network |
| `GRLC` | Garlicoin |
| `GRMN.CUR` | Garmin Ltd. |
| `GARUDA` | GarudaSwap |
| `GAS` | Gas |
| `GASG` | Gasgains |
| `FORK` | Gastro Advisor Token |
| `GASTRO` | GastroCoin |
| `GT` | Gatechain Token |
| `GTH` | Gath3r |
| `GZE` | GazeCoin |
| `GAZE` | GazeTV |
| `OGZD.CUR` | Gazprom PJSC ADR |
| `GLDS` | Gdigit |
| `GEC` | Geco.one |
| `GBA` | Geeba |
| `GEEQ` | Geeq |
| `GXT` | Gem Exchange And Trading |
| `GEMG` | GemGuardian |
| `GEMA` | Gemera |
| `GUSD` | Gemini Dollar |
| `GEM` | Gems |
| `GMS` | Gemstra |
| `GEMZ` | Gemz Social |
| `GNX` | Genaro Network |
| `GNBT` | Genebank Token |
| `GD.CUR` | General Dynamics |
| `GE.CUR` | General Electric Co |
| `GENXNET` | Genesis Network |
| `GS` | Genesis Shards |
| `GVT` | Genesis Vision |
| `XGS` | GenesisX |
| `GSY` | GenesysCoin |
| `GENIX` | Genix |
| `GENE` | Genopets |
| `GENS` | Genshiro |
| `GENSTAKE` | Genstake |
| `GENX` | Genx Token |
| `GEO` | GeoCoin |
| `GEODB` | GeoDB |
| `GUNS` | GeoFunders |
| `GEON` | Geon |
| `GERA` | Gera Coin |
| `GER` | GermanCoin |
| `DE30.CUR` | Germany 30 |
| `GERO` | GeroWallet |
| `GESE` | Gese |
| `GEX` | Gexan |
| `GSR` | GeyserCoin |
| `SPKTR` | Ghost Coin |
| `GHC` | GhostCoin |
| `GHOSTM` | GhostMarket |
| `GHOST` | GhostbyMcAfee |
| `GHOUL` | Ghoul Coin |
| `GIC` | Giant |
| `GOFF` | Gift Off Token |
| `GIF` | Gift Token |
| `GIFT` | GiftNet |
| `GFT` | Giftcoin |
| `GBTC` | GigTricks |
| `WTT` | Giga Watt |
| `GIG` | GigaCoin |
| `GZB` | Gigzi |
| `GILD.CUR` | Gilead Sciences |
| `GGS` | Gilgam |
| `GIM` | Gimli |
| `GMR` | Gimmer |
| `GIOT` | Giotto Coin |
| `GTC` | Gitcoin |
| `GIVE` | GiveCoin |
| `SVS` | GivingToServices SVS |
| `GLA` | Gladius |
| `GLEEC` | Gleec Coin |
| `GLCH` | Glitch |
| `GTN` | GlitzKoin |
| `GLOBE` | Global |
| `CALL` | Global Crypto Alliance |
| `GCR` | Global Currency Reserve |
| `GFCS` | Global Funeral Care |
| `GGC` | Global Game Coin |
| `GJC` | Global Jobcoin |
| `XRX` | Global Property Register |
| `GSC` | Global Social Chain |
| `GTSE` | Global Tourism Sharing Ecology |
| `GTIB` | Global Trust Coin |
| `GUSDT` | Global Utility Smart Digital Token |
| `BSTY` | GlobalBoost |
| `GLOBAL` | GlobalCoin |
| `GLT` | GlobalToken |
| `GVE` | Globalvillage Ecosystem |
| `GDT` | Globe Derivative Exchange |
| `GSI` | Globex SCI |
| `GBXT` | Globitex Token |
| `GSX` | GlowShares |
| `GLYPH` | GlyphCoin |
| `GNO` | Gnosis |
| `xGOx` | Go! |
| `GBX` | GoByte |
| `GO` | GoChain |
| `ELI` | GoCrypto |
| `GOC` | GoCrypto |
| `GOMT` | GoMeat |
| `GOM2` | GoMoney2 |
| `GPRO.CUR` | GoPro Inc |
| `GOREC` | GoRecruit |
| `GTK` | GoToken |
| `GMAT` | GoWithMi |
| `GOA` | GoaCoin |
| `GOAL` | Goal Bonanza |
| `GOAT` | Goat |
| `GBE` | Godbex |
| `GDL` | GodlyCoin |
| `GODS` | Gods Unchained |
| `XR` | Gofind XR |
| `GOL` | GogolCoin |
| `GBCR` | Gold BCR |
| `NGL` | Gold Fever |
| `GPKR` | Gold Poker |
| `GPL` | Gold Pressed Latinum |
| `GRX` | Gold Reward Token |
| `Gold.CUR` | Gold Spot |
| `GB` | GoldBlocks |
| `GLC` | GoldCoin |
| `GIX` | GoldFinX |
| `GFUN` | GoldFund |
| `MNTP` | GoldMint |
| `GP` | GoldPieces |
| `XGR` | GoldReserve |
| `GBK` | Goldblock |
| `GMA` | Goldchip Mining Asset |
| `GNTO` | GoldeNugget Token |
| `GEA` | Goldea |
| `XGN` | Golden Currency |
| `GOLD` | Golden Goose |
| `XGH` | Golden Hash |
| `GRPL` | Golden Ratio Per Liquidity |
| `XGB` | GoldenBird |
| `GLDR` | Golder Coin |
| `GFI` | Goldfinch |
| `GOLDM` | Goldmaxcoin |
| `GLM` | Golem Network Token |
| `GOLF` | GolfCoin |
| `GOF` | Golff |
| `GOLOS` | Golos |
| `GLS` | Golos Blockchain |
| `GBG` | Golos Gold |
| `GOM` | Gomics |
| `GGG` | Good Games Guild |
| `GOOD` | Goodomy |
| `GOON` | Goonies |
| `EGG` | Goose Finance |
| `GORILLAINU` | Gorilla Inu |
| `GOS` | Gosama |
| `GOTX` | GothicCoin |
| `GUM` | Gourmet Galaxy |
| `gOHM` | Governance OHM |
| `GOVI` | Govi |
| `ARTG` | Goya Giant Token |
| `GREARN` | GrEarn |
| `GPT` | Grace Period Token |
| `GRFT` | Graft Blockchain |
| `GGOLD` | GramGold Coin |
| `GDC` | GrandCoin |
| `GAI` | GraphGrail AI |
| `GLQ` | GraphLinq Protocol |
| `77G` | GraphenTech |
| `GFN` | Graphene |
| `GIO` | Graviocoin |
| `GRAV` | Graviton |
| `GRAVITYF` | Gravity Finance |
| `GBIT` | GravityBit |
| `ETHE` | Grayscale Ethereum Trust |
| `WPP` | Green Energy Token |
| `GMMT` | Green Mining Movement Token |
| `GINUX` | Green Shiba Inu |
| `GRE` | GreenCoin |
| `GRMD` | GreenMed |
| `GRN` | GreenPower |
| `GNT` | GreenTrust |
| `GREEN` | GreenX |
| `GNC` | Greencoin |
| `GREENT` | Greentoken |
| `GREXIT` | GrexitCoin |
| `GREY` | Grey Token |
| `GC` | Gric Coin |
| `GRID` | Grid+ |
| `GRC` | GridCoin |
| `GRM` | GridMaster |
| `GMC` | Gridmaster |
| `GRIN` | Grin |
| `GRS` | Groestlcoin |
| `GRON` | Gron Digital |
| `GRWI` | Growers International |
| `GROW` | GrownCoin |
| `GRW` | GrowthCoin |
| `GRUB.CUR` | Grubhub |
| `GRUMPY` | Grumpy Finance |
| `GTR` | Gturbo |
| `GET` | Guaranteed Entrance Token |
| `GETX` | Guaranteed Ethurance Token Extra |
| `GETH` | Guarded Ether |
| `GUAR` | Guarium |
| `GCC` | GuccioneCoin |
| `GUE` | GuerillaCoin |
| `GDR` | Guider.Travel |
| `GOG` | Guild of Guardians |
| `GF` | GuildFi |
| `NLG` | Gulden |
| `GUN` | GunCoin |
| `GUP` | Guppy |
| `GYM` | Gym Rewards |
| `HIDU` | H-Education World |
| `HAPI` | HAPI |
| `HART` | HARA |
| `HASH` | HASH Token |
| `BHT` | HBTC Captain Token |
| `HCA.CUR` | HCA Healthcare |
| `HCXP` | HCX PAY |
| `HIX` | HELIX Orange |
| `HELL` | HELL COIN |
| `HRO` | HEROIC.com |
| `PLAY` | HEROcoin |
| `HEX` | HEX |
| `HKC` | HK Coin |
| `HLPT` | HLP Token |
| `HOLD` | HOLD |
| `HLDY` | HOLIDAY |
| `HOMI` | HOMIHELP |
| `HOPR` | HOPR |
| `HQX` | HOQU |
| `HOTT` | HOT Token |
| `HODL` | HOdlcoin |
| `HTML` | HTML Coin |
| `HTML5` | HTML5 Coin |
| `HMT` | HUMAN Token |
| `HUNT` | HUNT |
| `HUP` | HUPAYX |
| `HUSD` | HUSD |
| `HUS` | HUSSY |
| `HYC` | HYCON |
| `HYGH` | HYGH |
| `HBT` | Habitat |
| `HACHIKO` | Hachiko Inu Token |
| `HKN` | Hacken |
| `HAI` | Hacken Token |
| `HKG` | Hacker Gold |
| `HAC` | Hackspace Capital |
| `HPAY` | HadePay |
| `HAKKA` | Hakka Finance |
| `HLC` | HalalChain |
| `HAL` | Halcyon |
| `HALLO` | Halloween Coin |
| `HALO` | Halo Platform |
| `HMST` | Hamster Marketplace Token |
| `HAMS` | HamsterCoin |
| `HANA` | Hanacoin |
| `HNS` | Handshake |
| `HANU` | Hanu Yokia |
| `HNZO` | Hanzo Inu |
| `HPC` | HappyCoin |
| `HCC` | HappyCreatorCoin |
| `HRBE` | Harambee Token |
| `HRB` | Harbour DAO |
| `HARD` | Hard Protocol |
| `ONE` | Harmony |
| `HPAD` | HarmonyPad |
| `FARM` | Harvest Finance |
| `HMN` | Harvest Masternode Coin |
| `HBO` | Hash Bridge Oracle |
| `HSC` | HashCoin |
| `HGS` | HashGains |
| `HNB` | HashNet BitEco |
| `GARD` | Hashgard |
| `HSS` | Hashshare |
| `HTR` | Hathor |
| `HET` | HavEther |
| `XHV` | Haven Protocol |
| `HAT` | Hawala.Exchange |
| `HZT` | HazMatCoin |
| `HAZE` | HazeCoin |
| `HAZ` | Hazza |
| `HDAC` | Hdac |
| `XLV.CUR` | Health Care Select Sector SPDR Fund |
| `HHEM` | Healthureum |
| `WORM` | HealthyWorm |
| `HTN` | Heart Number |
| `HB` | HeartBout |
| `HP` | HeartBout Pay |
| `HEAT` | Heat Ledger |
| `HVC` | HeavyCoin |
| `HBAR` | Hedera Hashgraph |
| `HDG` | Hedge Token |
| `HEDG` | HedgeTrade |
| `HEDGE` | Hedgecoin |
| `HGET` | Hedget |
| `HEEL` | HeelCoin |
| `HEGIC` | Hegic |
| `HYS` | Heiss Shares |
| `HLX` | Helex |
| `HNT` | Helium |
| `HLM` | Helium |
| `MHLX` | HelixNetwork |
| `HNC` | Hellenic Coin |
| `HGT` | Hello Gold |
| `HELMET` | Helmet Insure |
| `HMP` | HempCoin |
| `HERB` | HerbCoin |
| `HEZ` | Hermez Network Token |
| `HERA` | Hero Arena |
| `HER` | Hero Node |
| `HETA` | HetaChain |
| `HEXC` | HexCoin |
| `HXC` | HexanCoin |
| `HXT` | HextraCoin |
| `HXX` | HexxCoin |
| `HYBN` | Hey Bitcoin |
| `HMC` | Hi Mutual Society |
| `XHI` | HiCoin |
| `HIH` | HiHealth |
| `HIBS` | Hiblocks |
| `MFT` | Hifi Finance |
| `HPB` | High Performance Blockchain |
| `HVCO` | High Voltage Coin |
| `AIMS` | HighCastle Token |
| `HIGH` | Highstreet |
| `HINA` | Hina Inu |
| `HINT` | Hintchain |
| `HGO` | HireGo |
| `HIRE` | HireMatch |
| `HFT` | Hirefreehands |
| `HTA` | Historia |
| `HITBTC` | HitBTC Token |
| `HIT` | HitChain |
| `HTC` | Hitcoin |
| `BHIVE` | Hive |
| `HIVE` | Hive |
| `HBD` | Hive Dollar |
| `HVNT` | HiveNet Token |
| `HVN` | Hiveterminal Token |
| `HOD` | HoDooi.com |
| `HRD` | Hoard |
| `HBN` | HoboNickels |
| `HOGE` | Hoge Finance |
| `HOKK` | Hokkaidu Inu |
| `HFI` | Holder Finance |
| `XHT` | HollaEx |
| `HGOLD` | HollyGold |
| `HWC` | HollyWoodCoin |
| `HOT` | Holo |
| `HH` | Holyheld |
| `HMD` | Homelend |
| `HMR` | Homeros |
| `HNST` | Honest |
| `USDH` | HonestCoin |
| `HONEY` | Honey |
| `HNY` | Honey |
| `HORD` | Hord |
| `ZEN` | Horizen |
| `HZ` | Horizon |
| `HZN` | Horizon Protocol |
| `HSP` | Horse Power |
| `HORUS` | HorusPay |
| `HYT` | HoryouToken |
| `HOTCROSS` | Hot Cross |
| `HOTN` | HotNow |
| `UDOO` | Howdoo |
| `HMI.CUR` | Huami Corporation |
| `HUB` | Hub Token |
| `HD` | HubDao |
| `HBB` | Hubble |
| `HUBII` | Hubii Network |
| `HBRS` | HubrisOne |
| `HMQ` | Humaniq |
| `HEART` | Humans |
| `HUM` | Humanscape |
| `HNCN` | Huncoin |
| `HUC` | HunterCoin |
| `HETH` | Huobi Ethereum |
| `HFIL` | Huobi Fil |
| `HPT` | Huobi Pool Token |
| `HT` | Huobi Token |
| `HUR` | Hurify |
| `HCT` | HurricaneSwap Token |
| `HUSH` | Hush |
| `HUSKY` | Husky |
| `HUSL` | Hustle Token |
| `HXRO` | Hxro |
| `HBC` | Hybrid Bank Cash |
| `HYDRA` | Hydra |
| `HYDRO` | Hydro |
| `HYDROP` | Hydro Protocol |
| `H2O` | Hydrominer |
| `H3O` | Hydrominer |
| `HYPE` | Hype |
| `HSN` | Hyper Speed Network |
| `HC` | HyperCash |
| `HYPER` | HyperCoin |
| `HDAO` | HyperDAO |
| `HLD` | HyperLending |
| `HLT` | HyperLoot |
| `HQT` | HyperQuant |
| `HYPERS` | HyperSpace |
| `HYP` | HyperStake |
| `HBX` | Hyperbridge |
| `HYN` | Hyperion |
| `TREE` | HyperionX |
| `XSC` | Hyperspace |
| `HYVE` | Hyve |
| `I0C` | I0coin |
| `IAG` | IAGON |
| `IAM` | IAME Identity |
| `ICAP` | ICAP Token |
| `ICASH` | ICASH |
| `ICHI` | ICHI |
| `ICOO` | ICO OpenLedger |
| `ICOS` | ICOBox |
| `ICX` | ICON Project |
| `ICST` | ICST |
| `IDAC` | IDAC |
| `IDAP` | IDAP |
| `IDEX` | IDEX |
| `IDXM` | IDEX Membership |
| `IDHUB` | IDHUB |
| `IDK` | IDK |
| `IDLE` | IDLE |
| `IDM` | IDM |
| `IGG` | IG Gold |
| `IG1` | IG Token |
| `IGCH` | IG-Crypto Holding |
| `IGTT` | IGT |
| `IHT` | IHT Real Estate Protocol |
| `ILC` | ILCOIN |
| `ILCT` | ILCoin Token |
| `IML` | IMMLA |
| `IMPULSE` | IMPULSE by FDR |
| `INRT` | INRToken |
| `ITR` | INTRO |
| `INU` | INU Token |
| `INVI` | INVI Token |
| `NVZN` | INVIZION |
| `INX` | INX Token |
| `IOC` | IOCoin |
| `IOI` | IOI Token |
| `IONC` | IONChain |
| `IONZ` | IONZ |
| `IOST` | IOS token |
| `MIOTA` | IOTA |
| `IOTW` | IOTW |
| `IOUX` | IOU |
| `IOU` | IOU1 |
| `IOVT` | IOV |
| `IPSX` | IP Exchange |
| `IPC` | IPChain |
| `IPDN` | IPDnetwork |
| `IPUX` | IPUX |
| `IQC` | IQ.cash |
| `IQN` | IQeon |
| `IRIS` | IRIS Network |
| `IRC` | IRONCOIN |
| `ISG` | ISG |
| `ISDT` | ISTARDUST |
| `ITAM` | ITAM Games |
| `ITOC` | ITOChain |
| `IVN` | IVN Security |
| `IXS` | IX Swap |
| `IXC` | IXcoin |
| `IZE` | IZE |
| `IZER` | IZEROIUM |
| `IZI` | IZIChain |
| `IZX` | IZX |
| `ICA` | Icarus Network |
| `ROCK2` | Ice Rock Mining |
| `ICB` | IceBergCoin |
| `ICHX` | IceChain |
| `ICOB` | Icobid |
| `ICON` | Iconic |
| `ICN` | Iconomi |
| `ICH` | IdeaChain |
| `IFX` | IdeaFeX |
| `IDC` | IdealCoin |
| `IDEA` | Ideaology |
| `IDNA` | Idena |
| `IDTT` | Identity |
| `MST` | Idle Mystic |
| `IGI` | Igi |
| `IGNIS` | Ignis |
| `IC` | Ignition |
| `LUM` | Illuminates |
| `ILV` | Illuvium |
| `IMG` | ImageCoin |
| `REX` | Imbrex |
| `IMGZ` | Imigize |
| `IMVR` | ImmVRse |
| `IMX` | Immutable X |
| `IMPACT` | Impact |
| `IMPACTXP` | ImpactXP |
| `IMPCH` | Impeach |
| `IDIA` | Impossible Decentralized Incubator Access |
| `XIM` | Impresso |
| `IMPS` | Impulse Coin |
| `IMST` | Imsmart |
| `IN` | InCoin |
| `INXM` | InMax |
| `INARI` | Inari |
| `NKA` | IncaKoin |
| `INCNT` | Incent |
| `INCP` | InceptionCoin |
| `INC` | Incrementum |
| `INCY.CUR` | Incyte Corporation |
| `IDH` | IndaHash |
| `IMS` | Independent Money System |
| `IDX` | Index Chain |
| `INDEX` | Index Cooperative |
| `ERC20` | Index ERC20 |
| `NDX` | Indexed Finance |
| `INDI` | IndiCoin |
| `IND` | Indorse |
| `IFX.CUR` | Infineon Technologies AG |
| `IFC` | Infinite Coin |
| `ILA` | Infinite Launch |
| `INFT` | Infinito |
| `INFINI` | Infinity Economics |
| `IPAD` | Infinity Pad |
| `IRT` | Infinity Rocket |
| `INCAKE` | InfinityCAKE |
| `INF` | Infinium |
| `IFLT` | InflationCoin |
| `IFUM` | Infleum |
| `INFLR` | Inflr |
| `INTO` | Influ Token |
| `INFC` | Influence Chain |
| `INFX` | Influxcoin |
| `INJ` | Injective Protocol |
| `INK` | Ink |
| `XNK` | Ink Protocol |
| `ILK` | Inlock |
| `INNOU` | Innou |
| `INN` | Innova |
| `MINX` | InnovaMinex |
| `IBP` | Innovation Blockchain Payment |
| `INNBC` | Innovative Bioresearch Coin |
| `INO` | Ino Coin |
| `INSN` | Insane Coin |
| `INSANE` | InsaneCoin |
| `WOLF` | Insanity Coin |
| `INB` | Insight Chain |
| `INXP` | Insight Protocol |
| `INSTAR` | Insights Network |
| `XNS` | Insolar |
| `INS` | Insolar (Old Chain) |
| `ICC` | Insta Cash Coin |
| `INST` | Instadapp |
| `MINE` | Instamine Nuggets |
| `SPON` | Instant Sponsor Token |
| `INSUR` | InsurAce |
| `INSURC` | InsurChain Coin |
| `INET` | Insure Network |
| `INFI` | Insured Finance |
| `ISR` | Insureum |
| `ITGR` | Integral |
| `INTC.CUR` | Intel Corporation |
| `INE` | IntelliShare |
| `IIC` | Intelligent Investment Chain |
| `ITF` | Intelligent Trading |
| `INTER` | Inter Milan Fan Token |
| `POST` | InterPlanetary Search Engine |
| `ICPT.CUR` | Intercept Pharmaceuticals, Inc. |
| `BDPI` | Interest Bearing Defi Pulse Index |
| `IBETH` | Interest Bearing ETH |
| `IBM.CUR` | International Business Machines Corp |
| `IP.CUR` | International Paper |
| `ICP` | Internet Computer |
| `INT` | Internet Node token |
| `IOP` | Internet of People |
| `INXT` | Internxt |
| `TROP` | Interop |
| `ISH` | Interstellar Holdings |
| `ITZ` | Interzone |
| `ICT` | Intrachain |
| `ISRG.CUR` | Intuitive Surgical, Inc. |
| `INUYASHA` | Inuyasha |
| `INVC` | Invacio |
| `IDEFI` | Inverse DeFi Index |
| `INV` | Inverse Finance |
| `IDT` | InvestDigital |
| `IFT` | InvestFeed |
| `INVESTEL` | Investelly token |
| `INVX` | Investx |
| `IVC` | Investy Coin |
| `INVIC` | Invictus |
| `IHF` | Invictus Hyperion Fund |
| `IVZ` | InvisibleCoin |
| `INVOX` | Invox Finance |
| `IZA` | Inzura |
| `ITC` | IoT Chain |
| `IOTX` | IoTeX Network |
| `ION` | Ionomy |
| `IPN.CUR` | Ipsen |
| `IQQ` | Iqoniq |
| `IBS` | Irbis Network |
| `TLU` | Irene Energy |
| `IRL` | IrishCoin |
| `IRON` | Iron BSC |
| `IBEUR` | Iron Bank EURO |
| `ISIKC` | Isiklar Coin |
| `ISL` | IslaCoin |
| `ISP` | Ispolink |
| `ITL` | Italian Lira |
| `ITA` | Italocoin |
| `ING` | Iungo |
| `IEC` | IvugeoEvolutionCoin |
| `IVY` | IvyKoin |
| `IWT` | IwToken |
| `XXA` | Ixinium |
| `IZZY` | Izzy |
| `JACS` | JACS |
| `JED` | JEDSTAR |
| `JRIT` | JERITEX |
| `J8T` | JET8 |
| `JEX` | JEX Token |
| `JFIN` | JFIN Coin |
| `JIO` | JIO Token |
| `JMT` | JMTIME |
| `JOE` | JOE |
| `JOYS` | JOYS |
| `JPM.CUR` | JPMorgan Chase |
| `JPYC` | JPYC |
| `JSE` | JSEcoin |
| `JST` | JUST |
| `JBL.CUR` | Jabil |
| `JFI` | JackPool.finance |
| `JADE` | Jade Currency |
| `JANE` | JaneCoin |
| `JNS` | Janus |
| `JCT` | Japan Content Token |
| `JRT` | Jarvis Reward Token |
| `JAR` | Jarvis+ |
| `JASMY` | JasmyCoin |
| `JVY` | Javvy |
| `JCP.CUR` | Jc Penney |
| `JEFF` | Jeff in Space |
| `JEJUDOGE` | Jejudoge |
| `JEM` | Jem |
| `JC` | JesusCoin |
| `JET` | Jetcoin |
| `JWL` | Jewels |
| `JIAOZI` | Jiaozi |
| `JIB` | Jibbit |
| `JNT` | Jibrel Network Token |
| `JIF` | JiffyCoin |
| `STAK` | Jigstack |
| `JCR` | Jincor |
| `JINDOGE` | Jindoge |
| `JKS.CUR` | JinkoSolar Holding Co., Ltd. |
| `JOB` | Jobchain |
| `JOBS` | JobsCoin |
| `JNJ.CUR` | Johnson & Johnson |
| `J` | JoinCoin |
| `JOINT` | Joint Ventures |
| `JOK` | JokerCoin |
| `JUL` | Joule |
| `XJO` | JouleCoin |
| `JOYT` | JoyToken |
| `JOY` | Joycoin |
| `JPAW` | Jpaw Inu |
| `JT` | Jubi Token |
| `JUDGE` | JudgeCoin |
| `JGN` | Juggernaut (JGN) |
| `JBX` | Juicebox |
| `JUI` | Juiice |
| `JULD` | JulSwap |
| `JBS` | JumBucks Coin |
| `JUMP` | Jumpcoin |
| `JUN` | Jun "M" Coin |
| `JCC` | Junca Cash |
| `JKC` | JunkCoin |
| `JMC` | Junson Ming Chan Coin |
| `JUP` | Jupiter |
| `JUR` | Jur |
| `WINR` | JustBet |
| `JDC` | JustDatingSite |
| `JULB` | JustLiquidity Binance |
| `JUV` | Juventus Fan Token |
| `KSYS` | K-Systems |
| `KTT` | K-Tune |
| `K21` | K21 |
| `KAAS` | KAASY.AI |
| `KAC` | KACO Finance |
| `KATZ` | KATZcoin |
| `KCCM` | KCC MemePad |
| `KCCPAD` | KCCPad |
| `KEC` | KEYCO |
| `KILT` | KILT Protocol |
| `KIMCHI` | KIMCHI.finance |
| `KWD` | KIWI DEFI |
| `KNOW` | KNOW |
| `KOK` | KOK Coin |
| `KORE` | KORE Vault |
| `KRATOS` | KRATOS |
| `KRC` | KRCoin |
| `KREDS` | KREDS |
| `KRN` | KRYZA Network |
| `KSC` | KStarCoin |
| `KUBO` | KUBO |
| `KVNT` | KVANT |
| `KVI` | KVI Chain |
| `KWH` | KWHCoin |
| `KZC` | KZCash |
| `KDA` | Kadena |
| `KSH` | Kahsh |
| `KSHIB` | Kaiken Shiba |
| `KISC` | Kaiser |
| `KLO` | Kalao |
| `KALA` | Kalata Protocol |
| `KAL` | Kaleido |
| `KLKS` | Kalkulus |
| `KALM` | Kalmar |
| `KALYCOIN` | KalyCoin |
| `KAT` | Kambria |
| `KYTE` | Kambria Yield Tuning Engine |
| `KAPU` | Kapu |
| `KBC` | Karatgold coin |
| `KRB` | Karbo |
| `KAI` | KardiaChain |
| `KAREN` | KarenCoin |
| `KRM` | Karma |
| `KARMA` | Karma |
| `KARMAD` | Karma DAO |
| `KSK.BITCI` | Karsiyaka Taraftar Token |
| `KBT` | Kartblock |
| `KAR` | Karura |
| `K2G` | Kasko2go |
| `KASSIAHOME` | Kassia Home |
| `KASTA` | Kasta |
| `KATANA` | Katana Finance |
| `KATA` | Katana Inu |
| `KTN` | Kattana |
| `KAVA` | Kava |
| `SWP` | Kava Swap |
| `KAWA` | Kawakami Inu |
| `KAYI` | Kayı |
| `KCASH` | Kcash |
| `KEANU` | Keanu Inu |
| `KCH` | Keep Calm and Hodl |
| `KEEP` | Keep Network |
| `KP3R` | Keep3rV1 |
| `KP4R` | Keep4r |
| `ROOK` | KeeperDAO |
| `KEI` | Keisuke Inu |
| `KEK` | KekCoin |
| `KEL` | KelVPN |
| `K.CUR` | Kellogg |
| `KELPIE` | Kelpie Inu |
| `KEN` | Kencoin |
| `KEP` | Kepler |
| `KC` | Kernalcoin |
| `KETAN` | Ketan |
| `KEX` | KexCoin |
| `BIHU` | Key |
| `KEYC` | KeyCoin |
| `KEYFI` | KeyFi |
| `XKI` | Ki |
| `KMX` | KiMex |
| `KICK` | Kick |
| `KPAD` | KickPad |
| `KLC` | KiloCoin |
| `KIN` | Kin |
| `KIND` | Kind Ads |
| `KINE` | Kine Protocol |
| `KKO` | Kineko |
| `KVT` | Kinesis Velocity Token |
| `BKING` | King Arthur |
| `KDAG` | King DAG |
| `KIM` | King Money |
| `KINGSHIB` | King Shiba |
| `KING93` | King93 |
| `KDOGE` | KingDoge |
| `KNGN` | KingN Coin |
| `KING` | KingSwap |
| `KDG` | Kingdom Game 4.0 |
| `KINT` | Kintsugi |
| `KIRBY` | Kirby Inu |
| `$KIRBYRELOADED` | Kirby Reloaded |
| `KIRO` | Kirobo |
| `KISHIMOTO` | Kishimoto Inu |
| `KISHU` | Kishu Inu |
| `KITSU` | Kitsune Inu |
| `KIF` | KittenFinance |
| `KITTY` | Kitty Inu |
| `KGO` | Kiwigo |
| `KSP` | KlaySwap Protocol |
| `KLAY` | Klaytn |
| `KLEE` | KleeKai |
| `PNK` | Kleros |
| `KLV` | Klever |
| `KFI` | Klever Finance |
| `KLK` | Klickzie |
| `KTS` | Klimatas |
| `KED` | Klingon Empire Darsek |
| `KBTC` | Klondike BTC |
| `KBOND` | Klondike Bond |
| `KDC` | Klondike Coin |
| `KLON` | Klondike Finance |
| `KNT` | Knekted |
| `KWS` | Knight War Spirits |
| `KFT` | Knit Finance |
| `KNW` | Knowledge |
| `KOBO` | KoboCoin |
| `KSTT.BITCI` | Kocaelispor Fan Token |
| `KHM` | Kohima |
| `KOIN` | Koinos |
| `KOKO` | KokoSwap |
| `KOLION` | Kolion |
| `KOL` | Kollect |
| `KOM` | Kommunitas |
| `KMD` | Komodo |
| `KOMP` | Kompass |
| `KONO` | Konomi Network |
| `DARC` | Konstellation |
| `KBOT` | Korbot |
| `KOREC` | Kore |
| `KOTO` | Koto |
| `KUSD` | Kowala |
| `KOZ` | Kozjin |
| `KRAK` | Kraken |
| `LPK` | Kripton |
| `KRONE` | Kronecoin |
| `KSS` | Krosscoin |
| `KGC` | KrugerCoin |
| `KRL` | Kryll |
| `KTK` | KryptCoin |
| `KRP` | Kryptoin |
| `KMON` | Kryptomon |
| `KBX` | KuBitX |
| `KCS` | KuCoin Token |
| `KT` | Kuai Token |
| `KBR` | Kubera Coin |
| `KUBOS` | KubosCoin |
| `KUE` | Kuende |
| `KLP` | Kulupu |
| `KUMA` | Kuma Inu |
| `KURT` | Kurrent |
| `KSM` | Kusama |
| `KUSH` | KushCoin |
| `KUV` | Kuverit |
| `KWIK` | KwikSwap |
| `KNC` | Kyber Network |
| `KYL` | Kylin Network |
| `KRRX` | Kyrrex |
| `LB.CUR` | L Brands |
| `L` | L inu |
| `LABS` | LABS Group |
| `LAX` | LAPO |
| `LA` | LATOKEN |
| `LBK` | LBK |
| `LBC` | LBRY Credits |
| `LAO` | LC Token |
| `LCG` | LCG |
| `LCMS` | LCMS |
| `LCX` | LCX |
| `LEO` | LEO Token |
| `LC4` | LEOcoin |
| `LEXI` | LEXIT |
| `LGBTQ` | LGBTQoin |
| `LGCY` | LGCY Network |
| `LGOT` | LGO Token |
| `LHC` | LHCoin |
| `LHT` | LHT Coin |
| `LIFELIFETOKEN` | LIFE |
| `LN` | LINK |
| `LINKA` | LINKA |
| `LINKC` | LINKCHAIN |
| `LINKDOWN` | LINKDOWN |
| `LINKUP` | LINKUP |
| `LXT` | LITEX |
| `VEEN` | LIVEEN |
| `LIPC` | LIpcoin |
| `LM` | LM Token |
| `LMAO` | LMAO Finance |
| `LAS` | LNAsolution Coin |
| `LOCG` | LOCGame |
| `LOLC` | LOL Coin |
| `LPI` | LPI DAO |
| `LTBC` | LTBCoin |
| `LTCDOWN` | LTCDOWN |
| `LTCUP` | LTCUP |
| `LTO` | LTO Network |
| `LYXE` | LUKSO |
| `LUMA` | LUMA Token |
| `LUMI` | LUMI Credits |
| `LBXC` | LUX BIO EXCHANGE COIN |
| `LUX` | LUXCoin |
| `LYFT.CUR` | LYFT |
| `LYN` | LYNCHPIN Token |
| `LYTX` | LYTIX |
| `LALA` | LaLa World |
| `LBR` | LaborCrypto |
| `LABRA` | LabraCoin |
| `LAB` | Labrys |
| `LAIKA` | Laika Protocol |
| `LAMB` | Lambda |
| `TAU` | Lamden Tau |
| `PIX` | Lampix |
| `LANA` | LanaCoin |
| `LANC` | Lanceria |
| `LAND` | LandBox |
| `LANE` | LaneAxis |
| `LRG` | Largo Coin |
| `LARIX` | Larix |
| `LMCH` | Latamcash |
| `LTH` | Lathaan |
| `LATIUM` | Latium |
| `LATX` | Latium |
| `LATTE` | LatteSwap |
| `LTX` | Lattice Token |
| `LZ` | LaunchZone |
| `LPOOL` | Launchpool |
| `LNT` | Launchtok |
| `LAZ` | Lazarus |
| `LAZIO` | Lazio Fan Token |
| `LEPEN` | LePenCoin |
| `LEA` | LeaCoin |
| `LDC` | LeadCoin |
| `LEAF` | LeafCoin |
| `LOKA` | League of Kingdoms |
| `LEAG` | LeagueDAO Governance Token |
| `ULED` | Ledder |
| `LGD` | Legends Cryptocurrency |
| `LGO` | Legolas Exchange |
| `LELE` | Lelecoin |
| `LEMO` | LemoChain |
| `LEMON` | LemonCoin |
| `LEMD` | Lemond |
| `LDFI` | LenDeFi Token |
| `LCT` | LendConnect |
| `LHB` | Lendhub |
| `LND` | Lendingblock |
| `LOAN` | Lendoit |
| `LST` | Lendroid Support Token |
| `LENIN` | LeninCoin |
| `LEOS` | Leonicorn Swap |
| `LEOPARD` | Leopard |
| `L3P` | Lepricon |
| `LESS` | Less Network |
| `LIR` | Let it Ride |
| `LTHN` | Lethean |
| `LVX` | Level01 |
| `LVG` | Leverage Coin |
| `LEV` | Leverj |
| `XLC` | LeviarCoin |
| `LEVL` | Levolution |
| `LX.CUR` | LexinFintech Holdings Ltd. |
| `LIB` | Libellum |
| `XLB` | LibertyCoin |
| `LIBFX` | Libfx |
| `LXC` | LibrexCoin |
| `LIDER` | Lider Token |
| `LDO` | Lido DAO |
| `STSOL` | Lido Staked SOL |
| `WSTETH` | Lido wstETH |
| `LIEN` | Lien |
| `LIFE` | Life Crypto |
| `LIGER` | Ligercoin |
| `LIC` | Ligercoin |
| `LIGHT` | LightChain |
| `LSD` | LightSpeedCoin |
| `LTBTC` | Lightning Bitcoin |
| `LTPC` | Lightpaycoin |
| `LIKE` | LikeCoin |
| `LK` | Liker |
| `LIMX` | LimeCoinX |
| `LTD` | Limited Coin |
| `LVIP` | Limitless VIP |
| `LMXC` | LimonX |
| `LINANET` | Lina |
| `LINA` | Linear |
| `LAR` | LinkArt |
| `LKN` | LinkCoin Token |
| `LET` | LinkEye |
| `LTK` | LinkToken |
| `LNKC` | Linker Coin |
| `LF` | Linkflow |
| `LINX` | Linx |
| `LION` | Lion Token |
| `LIPS` | LipChain |
| `LEN` | Liqnet |
| `LQD` | Liquid |
| `LQBTC` | Liquid Bitcoin |
| `LQ8` | Liquid8 |
| `DAPP` | LiquidApps |
| `LID` | Liquidity Dividends Protocol |
| `LQDN` | Liquidity Network |
| `LQTY` | Liquity |
| `LUSD` | Liquity USD |
| `LSK` | Lisk |
| `LTCC` | Listerclassic Coin |
| `LTBX` | Litbinex Coin |
| `LBTC` | LiteBitcoin |
| `LTG` | LiteCoin Gold |
| `LTCU` | LiteCoin Ultra |
| `LCWP` | LiteCoinW Plus |
| `LTCR` | LiteCreed |
| `LDOGE` | LiteDoge |
| `LTB` | Litebar |
| `LTC` | Litecoin |
| `LTCH` | Litecoin Cash |
| `LCP` | Litecoin Plus |
| `LCASH` | LitecoinCash |
| `LCC` | LitecoinCash |
| `LTCD` | LitecoinDark |
| `LHD` | LitecoinHD |
| `LTCP` | LitecoinPro |
| `LTCX` | LitecoinX |
| `LTZ` | Litecoinz |
| `LITENETT` | Litenett |
| `LIT` | Litentry |
| `LTS` | Litestar Coin |
| `LITHIUM` | Lithium |
| `LITH` | Lithium Finance |
| `LITION` | Lition |
| `LTA` | Litra |
| `LPC` | Little Phil |
| `LTRBT` | Little Rabbit |
| `LIVESTARS` | Live Stars |
| `LVN` | LivenPay |
| `LPT` | Livepeer |
| `LIV` | LiviaCoin |
| `LIZ` | Lizus Payment |
| `LOBS` | Lobstex |
| `LTE` | Local Token Exchange |
| `LWF` | Local World Forwarders |
| `LACCOIN` | LocalAgro |
| `LCS` | LocalCoinSwap |
| `LOCI` | LociCoin |
| `LOC` | LockTrip |
| `LKT` | Locklet |
| `LOCO` | Loco |
| `LT` | Loctite Assets Token |
| `LOCUS` | Locus Chain |
| `LGR` | Logarithm |
| `PNP` | LogisticsX |
| `LLG` | Loligo |
| `LMC` | LomoCoin |
| `1INCHUP` | Long 1INCH with Up to 4x Leverage |
| `BNBUP` | Long BNB with Up to 3x Leverage |
| `XTZUP` | Long Tezos with Up to 3x Leverage |
| `LONG` | Longdrink Finance |
| `LOOK` | LookCoin |
| `LOOKS` | LooksRare |
| `LOOM` | Loom Network |
| `LOON` | Loon Network |
| `LRC` | Loopring |
| `LRN` | Loopring [NEO] |
| `LOOTEX` | Lootex |
| `LOWB` | Loser Coin |
| `LSS` | Lossless |
| `LOTES` | Loteo |
| `LOTEU` | Loteo |
| `LOTTO` | LottoCoin |
| `LC` | Lotus Capital |
| `LOUD` | Loud Market |
| `LACE` | Lovelace World |
| `LOVELY` | Lovely Inu finance |
| `LOCC` | Low Orbit Crypto Cannon |
| `LYK` | Loyakk Vega |
| `LYL` | LoyalCoin |
| `LUA` | Lua Token |
| `BASH` | LuckChain |
| `LCK` | Luckbox |
| `LBLOCK` | Lucky Block |
| `LUCKY` | Lucky Lion |
| `LK7` | Lucky7Coin |
| `LUCKYB` | LuckyBlocks |
| `LKY` | LuckyCoin |
| `LCR` | Lucre |
| `LUCY` | Lucy |
| `LUDO` | Ludo |
| `LDM` | Ludum token |
| `LKU` | Lukiu |
| `LOT` | Lukki Operating Token |
| `LKOD.CUR` | Lukoil PJSC ADR |
| `LSP` | Lumenswap |
| `LUS` | Luna Rush |
| `LNL` | LunarLink |
| `LMY` | Lunch Money |
| `LUNE` | Luneko |
| `LUNES` | Lunes |
| `LNX` | Lunox Token |
| `LUNR` | Lunr Token |
| `LUN` | Lunyr |
| `LUTETIUM` | Lutetium Coin |
| `LPNT` | Luxurious Pro Network Token |
| `MC.CUR` | Lvmh Moet Hennessy Louis Vuitton Se |
| `LYC` | LycanCoin |
| `LLION` | Lydian Lion |
| `LDN` | Lydiancoin |
| `LYFE` | Lyfe |
| `LLAND` | Lyfe Land |
| `LKK` | Lykke |
| `LYM` | Lympo |
| `LMT` | Lympo Market Token |
| `LYNK` | Lynked.World |
| `LYNX` | Lynx |
| `LYB` | LyraBar |
| `SNIP` | LyrnAI |
| `MPLUS` | M+Plus |
| `M2O` | M2O Token |
| `MDN` | MADANA |
| `MAKE` | MAKE |
| `OM` | MANTRA DAO |
| `MAP` | MAP Protocol |
| `MAPS` | MAPS |
| `MRK` | MARK.SPACE |
| `MARS4` | MARS4 |
| `MASQ` | MASQ |
| `MASS` | MASS |
| `MATH` | MATH |
| `MB8` | MB8 Coin |
| `MCAP` | MCAP |
| `MCB` | MCDEX |
| `MCF` | MCFinance |
| `MCS` | MCS Token |
| `MCV` | MCV Token |
| `MCONTENT` | MContent |
| `MDU` | MDUKEY |
| `MTC` | MEDICAL TOKEN CURRENCY |
| `MKEY` | MEDIKEY |
| `MTEL` | MEDoctor |
| `MEETONE` | MEET.ONE |
| `MESG` | MESG |
| `MEX` | MEX |
| `MEXC` | MEXC Token |
| `MFX` | MFChain |
| `MFC` | MFCoin |
| `MGM.CUR` | MGM Resorts International |
| `MIKS` | MIKS COIN |
| `MIMI` | MIMI Money |
| `MIMO` | MIMO Parallel Governance Token |
| `MIN` | MINDOL |
| `MNET` | MINE Network |
| `MINUTE` | MINUTE Vault (NFTX) |
| `MIODIO` | MIODIOCOIN |
| `MIRC` | MIR COIN |
| `MISS` | MISS |
| `MISCOIN` | MIScoin |
| `MIX` | MIXMARVEL |
| `MILC` | MIcro Licensing Coin |
| `MMNXT` | MMNXT |
| `MMO` | MMOCoin |
| `MMXVI` | MMXVI |
| `MOAC` | MOAC |
| `MBOX` | MOBOX |
| `MOBU` | MOBU |
| `MODEX` | MODEX Token |
| `MEXP` | MOJI Experience Points |
| `MOS` | MOS Coin |
| `MP3` | MP3 |
| `XDMC` | MPCX |
| `MSD` | MSD |
| `MTCMN` | MTC Mesh |
| `MUN` | MUNcoin |
| `MUSDCOIN` | MUSDcoin |
| `MUST` | MUST Protocol |
| `MVL` | MVL |
| `MX` | MX Token |
| `MYCE` | MY Ceremonial Event |
| `YCE` | MYCE |
| `MAC.CUR` | Macerich |
| `MXC` | Machine Xchange Coin |
| `MAC` | MachineCoin |
| `MCRN` | MacronCoin |
| `MRV` | Macroverse |
| `M.CUR` | Macys |
| `MADC` | MadCoin |
| `STIME` | Madagascar Token |
| `ART` | Maecenas |
| `MAEP` | Maester Protocol |
| `MGGT` | Maggie Token |
| `MCC` | Magic Cube Coin |
| `MIM` | Magic Internet Money |
| `MGN` | MagnaCoin |
| `MAG` | Magnet |
| `MAHA` | MahaDAO |
| `$MAID` | MaidCoin |
| `MAID` | MaidSafe Coin |
| `MMXIV` | MaieutiCoin |
| `MNC` | MainCoin |
| `MIV` | MakeItViral |
| `MKR` | Maker |
| `MAKI` | MakiSwap |
| `MALLY` | Malamute Finance |
| `MNK.CUR` | Mallinckrodt |
| `CITY` | Manchester City Fan Token |
| `MANDALA` | Mandala Exchange Token |
| `MNTC` | Manet Coin |
| `MANGA` | Manga Token |
| `MNGO` | Mango protocol |
| `MGP` | MangoChain |
| `FOLD` | Manifold Finance |
| `MANNA` | Manna |
| `MSN` | Manson Coin |
| `MAPC` | MapCoin |
| `MPL` | Maple |
| `MARX` | MarX |
| `MGX` | MargiX |
| `MRS` | Marginless |
| `MFI` | Marginswap |
| `MARI` | MarijuanaCoin |
| `MSOL` | Marinade Staked SOL |
| `MMPRO` | Market Making Pro |
| `MASP` | Market.space |
| `MOVE` | MarketMove |
| `POND` | Marlin |
| `MARO` | Maro |
| `OMT` | Mars Token |
| `MARSC` | MarsCoin |
| `MARS` | MarsCoin |
| `MARSRISE` | MarsRise |
| `MLGC` | Marshal Lion Group Coin |
| `MXTC` | MartexCoin |
| `MRVL.CUR` | Marvell Technology Group Ltd. |
| `MARV` | Marvelous |
| `MARXCOIN` | MarxCoin |
| `MARYJ` | MaryJane Coin |
| `MSR` | Masari |
| `MASK` | Mask Network |
| `MGD` | MassGrid |
| `MMT` | Master MIX Token |
| `MCAR` | MasterCar |
| `MASTERCOIN` | MasterCoin |
| `MASTERMINT` | MasterMint |
| `MTR` | MasterTraderCoin |
| `MW` | MasterWin Coin |
| `MA.CUR` | Mastercard Inc |
| `MTCH.CUR` | Match Group, Inc. |
| `MATPAD` | MaticPad |
| `MAN` | Matrix AI Network |
| `MTX` | Matryx |
| `MPG` | Max Property Group |
| `MAX` | MaxCoin |
| `MXM` | Maximine |
| `MXW` | Maxonrow |
| `MAPR` | Maya Preferred 223 |
| `MYC` | MayaCoin |
| `MZC` | MazaCoin |
| `MBIT` | Mbitbooks |
| `MCD.CUR` | McDonald's |
| `MDX` | Mdex |
| `MLITE` | MeLite |
| `MDT` | Measurable Data Token |
| `MCH` | Meconcash |
| `MEDI` | MediBond |
| `MCU` | MediChain |
| `MDS` | MediShares |
| `MEDIA` | Media Network |
| `MED` | Medibloc |
| `MDC` | MedicCoin |
| `MEDIC` | MedicCoin |
| `MDCL` | Medicalchain |
| `MHP` | MedicoHealth |
| `MEDICO` | Mediconnect |
| `MEDIT` | MediterraneanCoin |
| `MDM` | Medium |
| `MPRO` | MediumProject |
| `MPT` | Meetple |
| `MEC` | MegaCoin |
| `MEGA` | MegaFlash |
| `XMS` | Megastake |
| `MCAU` | Meld Gold |
| `MEL` | Melior AI |
| `MORA` | Meliora |
| `MELLO` | Mello Token |
| `MELD` | Melodity |
| `MP` | Membership Placeholders |
| `MEME` | Meme |
| `MGAMES` | Meme Games |
| `MEMEINU` | Meme Inu |
| `MWAR` | MemeWars (MWAR) |
| `MEM` | Memecoin |
| `MFUND` | Memefund |
| `PEPE` | Memetic |
| `MMC` | MemoryCoin |
| `MPAY` | Menapay |
| `MENLO` | Menlo One |
| `MRCH` | MerchDAO |
| `MRK.CUR` | Merck & Co Inc |
| `MRN` | Mercoin |
| `MVP` | Merculet |
| `MER` | Mercurial Finance |
| `MERCURY` | Mercury |
| `GAMBIT` | Mercury Protocol |
| `MERI` | Merebel |
| `MERIDIAN` | Meridian Network LOCK |
| `MC` | Merit Circle |
| `MERKLE` | Merkle Network |
| `MESH` | MeshBox |
| `MTA` | Meta |
| `MF1` | Meta Finance |
| `METACAT` | MetaCat |
| `MHC` | MetaHash |
| `MMUI` | MetaMUI |
| `METM` | MetaMorph |
| `WARS` | MetaWars |
| `MTBC` | Metabolic |
| `METAC` | Metacoin |
| `META` | Metadium |
| `HERO` | Metahero |
| `MTL` | Metal |
| `MTLM3` | Metal Music v3 |
| `METAL` | MetalCoin |
| `DNA` | Metaverse |
| `ETP` | Metaverse |
| `MVI` | Metaverse Index |
| `METEOR` | Meteorite Network |
| `MTRG` | Meter |
| `METER` | Meter Stable |
| `MTHD` | Method Finance |
| `MTS` | Metis |
| `METIS` | Metis Token |
| `LINDA` | Metrix |
| `MET` | Metronome |
| `MTLX` | Mettalex |
| `MEWTWO` | Mewtwo Inu |
| `MLK` | MiL.k |
| `MIT` | MiMiner |
| `MIA` | MiamiCoin |
| `MBTC` | MicroBitcoin |
| `AMM` | MicroMoney |
| `MSTR` | MicroStrategy |
| `MCHP.CUR` | Microchip Technology Incorporated |
| `MU.CUR` | Micron Technology, Inc. |
| `MSFT.CUR` | Microsoft |
| `MIDAS` | Midas Dollar Share |
| `MAS` | Midas Protocol |
| `MIDN` | Midnight |
| `MIG` | Migranet |
| `MVC` | MileVerse |
| `MUU` | MilkCoin |
| `MILK` | Milkshake Swap |
| `MM` | Millimeter |
| `MIL` | Milllionaire Coin |
| `MILO` | MiloCoin |
| `MWC` | MimbleWimbleCoin |
| `MINC` | MinCoin |
| `MINA` | Mina Protocol |
| `MINDGENE` | Mind Gene |
| `MINDCOIN` | MindCoin |
| `MINDEX` | Mindexcoin |
| `MINDS` | Minds |
| `MAI` | Mindsync |
| `MB` | MineBee |
| `MBTX` | MinedBlock |
| `MIO` | Miner One token |
| `MG` | MinerGate Token |
| `MNR` | Mineral |
| `MINRL` | Minerals Coin |
| `MNE` | Minereum |
| `MRT` | MinersReward |
| `DAR` | Mines of Dalarnia |
| `MNM` | Mineum |
| `MINEX` | Minex |
| `MNX` | MinexCoin |
| `MINI` | Mini |
| `MAT` | MiniApps |
| `MINIDOGE` | MiniDOGE |
| `MSC` | Miningwatchdog Smartchain |
| `MINT` | Mint Club |
| `MINTCOIN` | MintCoin |
| `MINTME` | MintMe.com Coin |
| `BIP` | Minter |
| `MINTYS` | MintySwap |
| `MQL` | MiraQle |
| `TELE` | Miracle Tele |
| `MIR` | Mirror Protocol |
| `MSB` | Misbloc |
| `MISHKA` | Mishka Token |
| `MIST` | Mist |
| `MITH` | Mithril |
| `MIC` | Mithril Cash |
| `MIS` | Mithril Share |
| `MTSH` | Mitoshi |
| `MXT` | MixTrust |
| `XIN` | Mixin |
| `MOCO` | MoCo |
| `MOAR` | Moar Finance |
| `MOFI` | MobiFi |
| `MBX` | MobieCoin |
| `MIB` | Mobile Integrated Blockchain |
| `MBM` | MobileBridge Momentum |
| `MOB` | MobileCoin |
| `MGO` | MobileGo |
| `MBN` | Mobilian Coin |
| `MOLK` | Mobilink Token |
| `MOBI` | Mobius |
| `MOMA` | Mochi Market |
| `MOCHI` | Mochiswap |
| `MOK` | MocktailSwap |
| `MOD` | Modefi |
| `MRNA` | Moderna |
| `AIM` | ModiHost |
| `MTRC` | ModulTrade |
| `MODUM` | Modum |
| `MDA` | Moeda |
| `MOGU` | Mogu |
| `MGUL` | Mogul Coin |
| `MOIN` | MoinCoin |
| `MOJO` | Mojocoin |
| `MOFOLD` | Molecular Future (ERC20) |
| `MOF` | Molecular Future (TRC20) |
| `MOL` | Molecule |
| `TAB` | MollyCoin |
| `MMTM` | Momentum |
| `MOMO.CUR` | Momo Inc. |
| `MONA` | MonaCoin |
| `MNZ` | Monaize |
| `MONT` | Monarch Token |
| `MART` | Monart |
| `MONAV` | Monavale |
| `XMR` | Monero |
| `ZMR` | Monero 0 |
| `XMC` | Monero Classic |
| `XMRG` | Monero Gold |
| `XMO` | Monero Original |
| `XMV` | MoneroV |
| `MONETA` | Moneta |
| `MNV` | MonetaVerde |
| `MUE` | MonetaryUnit |
| `MTH` | Monetha |
| `MTZ` | Monetizr |
| `MTTCOIN` | Money of Tommorow, Today |
| `MNB` | MoneyBag |
| `MONEY` | MoneyCoin |
| `MNRB` | MoneyRebel |
| `MSWAP` | MoneySwap |
| `IMT` | MoneyToken |
| `MON` | Monfter |
| `MNY` | Monkey |
| `MONK` | Monkey Project |
| `MBS` | MonkeyBall |
| `MNS` | Monnos |
| `MONO` | MonoX |
| `XMCC` | Monoeci |
| `TKN` | Monolith |
| `MONONOKEINU` | Mononoke Inu |
| `MONI` | Monsta Infinite |
| `MBI` | Monster Byte Inc |
| `MONS` | Monsters Clan |
| `MBLC` | Mont Blanc |
| `MLA` | Moola |
| `MNG` | Moon Nation Game |
| `AAA` | Moon Rabbit |
| `MBET` | MoonBet |
| `MOONC` | MoonCoin |
| `MNST` | MoonStarter |
| `MOONARCH` | Moonarch |
| `MFS` | Moonbase File System |
| `GLMR` | Moonbeam |
| `MOONDAY` | Moonday Finance |
| `LX` | Moonlight |
| `MOONLIGHT` | Moonlight Token |
| `MRF` | Moonradar.finance |
| `MOVR` | Moonriver |
| `MOONSHOT` | Moonshot |
| `MZG` | Moozicore |
| `MO` | Morality |
| `MORE` | More Coin |
| `MPH` | Morpher |
| `MITX` | Morpheus Infrastructure Token |
| `MNW` | Morpheus Network |
| `MRP` | MorpheusCoin |
| `MZX` | Mosaic Network |
| `MCO2` | Moss Carbon Credit |
| `MOC` | Mossland |
| `MOAT` | Mother Of All Tokens |
| `MSP` | Mothership |
| `XMN` | Motion |
| `MOTI` | Motion |
| `MOTO` | Motocoin |
| `MND` | Mound Token |
| `MHT` | Mouse Haunt |
| `MBL` | MovieBloc |
| `MOV` | MovieCoin |
| `MTK` | Moya Token |
| `MOZ` | Mozik |
| `MRFOX` | Mr.FOX Token |
| `AMA` | MrWeb |
| `MRSA` | MrsaCoin |
| `MUDRA` | MudraCoin |
| `MTT` | MulTra |
| `MLT` | MultiGames |
| `MTV` | MultiVAC |
| `MLTC` | MultiWallet Coin |
| `MBT` | Multibot |
| `MXX` | Multiplier |
| `BMXX` | Multiplier |
| `MTCN` | Multiven |
| `AI` | Multiverse |
| `MUNCH` | Munch Token |
| `PAINT` | MurAll |
| `MRY` | MurrayCoin |
| `MUSE` | Muse |
| `MITC` | MusicLife |
| `MUSIC` | Musicoin |
| `MCI` | Musiconomi |
| `MUSK` | Musk |
| `MUSTANGC` | MustangCoin |
| `MUTE` | Mute |
| `MUT` | Mutual Coin |
| `MZK` | Muzika Network |
| `MCP` | My Crypto Play |
| `DPET` | My DeFi Pet |
| `MYID` | My Identity Coin |
| `ALICE` | My Neighbor Alice |
| `MSA` | My Shiba Academia |
| `MYB` | MyBit |
| `MCRC` | MyCreditChain |
| `MYDFS` | MyDFS |
| `MYL` | MyLottoCoin |
| `MAZC` | MyMazzu |
| `MYTV` | MyTVchain |
| `MT` | MyToken |
| `WISH` | MyWish |
| `MYCELIUM` | Mycelium Token |
| `MYO` | Mycro |
| `MPXT` | Myplacex |
| `XMY` | MyriadCoin |
| `MYST` | Mysterium |
| `MYTH` | Myth Token |
| `MYOBU` | Myōbu |
| `NANJ` | NANJCOIN |
| `NAOS` | NAOS Finance |
| `NDN` | NDN Link |
| `NEET` | NEET Finance |
| `NEFTIPEDIA` | NEFTiPEDiA |
| `XEM` | NEM |
| `NEO` | NEO |
| `NEOG` | NEO Gold |
| `NNC` | NEO Name Credit |
| `NERVE` | NERVE |
| `NHBTC` | NEST Protocol |
| `NEXO` | NEXO |
| `NT` | NEXTYPE Finance |
| `NFTP` | NFT |
| `ALLEY` | NFT Alley |
| `NFTART` | NFT Art Finance |
| `CHAMP` | NFT Champions |
| `NFTI` | NFT Index |
| `REHAB` | NFT Rehab |
| `NFTL` | NFTL Token |
| `LOOT` | NFTLootBox |
| `NMT` | NFTMart Token |
| `NFTX` | NFTX |
| `NFTXHI` | NFTX Hashmasks Index |
| `NFTB` | NFTb |
| `N1` | NFTify |
| `NFXC` | NFX Coin |
| `NKE.CUR` | NIKE Inc |
| `NOX` | NITRO |
| `NIX` | NIX |
| `NBT` | NIX Bridge Token |
| `NKCLC` | NKCL Classic |
| `NKN` | NKN |
| `NNB` | NNB Token |
| `NOA` | NOA PLAY |
| `NOAH` | NOAHCOIN |
| `NBAR` | NOBAR |
| `NOIZ` | NOIZ |
| `CHFN` | NOKU CHF |
| `EURN` | NOKU EUR |
| `NOKU` | NOKU Master token |
| `NSP` | NOMAD.space |
| `NOW` | NOW Token |
| `NPC` | NPCcoin |
| `NPER` | NPER |
| `NSS` | NSS Coin |
| `NVDA.CUR` | NVIDIA |
| `NVDA` | NVIDIA |
| `NVST` | NVO |
| `NWP` | NWPSolution |
| `NXE` | NXEcoin |
| `NXTI` | NXTI |
| `NXTTY` | NXTTY |
| `NYCREC` | NYCREC |
| `NYN` | NYNJA |
| `NYX` | NYXCOIN |
| `NABOX` | Nabox |
| `NFN` | Nafen |
| `NAFT` | Nafter |
| `NGC` | NagaCoin |
| `NZE` | Nagezeni |
| `NBOT` | Naka Bodhi Token |
| `NAKA` | Nakamoto Games |
| `NKT` | NakomotoDark |
| `NAM` | Namacoin |
| `NMH` | Namahe |
| `NAMEC` | Name Change Token |
| `NMC` | Namecoin |
| `NMK` | Namek |
| `NAMO` | NamoCoin |
| `NANO` | Nano |
| `NHCT` | Nano Healthcare Token |
| `NAN` | NanoToken |
| `NPX` | Napoleon X |
| `NRVE` | Narrative |
| `NAWA` | Narwhale.finance |
| `NAS2` | Nas2Coin |
| `NASADOGE` | Nasa Doge |
| `NSD` | Nasdacoin |
| `NEX` | Nash Exchange |
| `NUT` | Native Utility Token |
| `NEXBT` | Native XBTPro Exchange Token |
| `N8V` | NativeCoin |
| `NAT` | Natmin |
| `NAUSICAA` | Nausicaa-Inu |
| `NAUT` | Nautilus Coin |
| `NAV` | NavCoin |
| `NAVI` | NaviAddress |
| `NAVIB` | Navibration |
| `NC` | Nayuta Coin |
| `NEAR` | Near |
| `PAD` | NearPad |
| `NEBL` | Neblio |
| `NEBU` | Nebuchadnezzar |
| `NBAI` | Nebula AI |
| `NAS` | Nebulas |
| `NEC` | Nectar |
| `NDLC` | NeedleCoin |
| `NEETCOIN` | Neetcoin |
| `NVA` | Neeva Defi |
| `NEF` | NefariousCoin |
| `NRX` | Neironix |
| `NKTR.CUR` | Nektar Therapeutics |
| `NNI` | NeoNomad Exchange |
| `NASH` | NeoWorld Cash |
| `NCR` | Neos Credits |
| `NEOS` | NeosCoin |
| `NTCC` | NeptuneClassic |
| `NRV` | Nerve Finance |
| `NVT` | NerveNetwork |
| `CKB` | Nervos Network |
| `NEST` | Nest Protocol |
| `NESTREE` | Nestree |
| `NBIT` | NetBit |
| `NET` | NetCoin |
| `NTES.CUR` | NetEase, Inc. |
| `NTM` | NetM |
| `NETCOIN` | Netcoincapital |
| `NFLX.CUR` | Netflix |
| `NFLX` | Netflix FTX |
| `NETKO` | Netko |
| `OUT` | Netscouters |
| `NTVRK` | Netvrk |
| `NTWK` | Network Token |
| `NETC` | NetworkCoin |
| `NUA` | Neulaut Token |
| `NEU` | Neumark |
| `NRP` | Neural Protocol |
| `NRO` | Neuro |
| `NCC` | NeuroChain |
| `NRC` | Neurocoin |
| `NRM` | Neuromachine |
| `NTK` | Neurotoken |
| `NSBT` | Neutrino Token |
| `USDN` | Neutrino USD |
| `NTO` | Neutro Protocol |
| `NTRN` | Neutron |
| `NEVA` | NevaCoin |
| `NDC` | NeverDie |
| `NVL` | Nevula |
| `NBS` | New BitShares |
| `NS2DRP` | New Silver Series 2 DROP |
| `NZD.CUR` | New Zealand Dollar |
| `NIC` | NewInvestCoin |
| `NYE` | NewYork Exchange |
| `NYC` | NewYorkCoin |
| `NZC` | NewZealandCoin |
| `NEWB` | Newbium |
| `NEM.CUR` | Newmont Mining |
| `NEWOS` | NewsToken |
| `NEWS` | NewsTokens |
| `NWC` | Newscrypto Coin |
| `NEW` | Newton |
| `NCP` | Newton Coin |
| `NEWTON` | Newtonium |
| `XLT` | Nexalt |
| `NXC` | Nexium |
| `NIN` | Next Innovation |
| `NEXT` | Next.exchange Token |
| `NAX` | NextDAO |
| `NXMC` | NextMindCoin |
| `NEE.CUR` | Nextera Energy |
| `NTY` | Nexty |
| `NXS` | Nexus |
| `NXM` | Nexus Mutual |
| `NEXXO` | Nexxo |
| `NGIN` | Ngin |
| `NICE` | Nice |
| `NICEC` | NiceCoin |
| `NIIFI` | NiiFi |
| `NMB` | Nimbus Coin |
| `NIMFA` | Nimfamoney |
| `NIM` | Nimiq |
| `NTC` | NineElevenTruthCoin |
| `NDOGE` | NinjaDoge |
| `NINKY` | Ninky |
| `NBR` | Niobio Cash |
| `NBC` | Niobium |
| `$NOBS` | No BS Crypto |
| `NLC` | NoLimitCoin |
| `NLC2` | NoLimitCoin |
| `NBL` | Nobility |
| `NOBL` | NobleCoin |
| `NBNG` | Nobunaga Token |
| `NODET` | Node |
| `NDR` | Node Runners |
| `NODIS` | Nodis |
| `NVDX` | Nodvix |
| `NOR` | Noir |
| `NRB` | NoirBits |
| `NRS` | NoirShares |
| `NOK` | Nokia |
| `NUSD` | Nomin USD |
| `NMX` | Nominex Token |
| `NFY` | Non-Fungible Yearn |
| `NZO` | NonZero |
| `NOO` | Noocoin |
| `NORD` | Nord Finance |
| `JWN.CUR` | Nordstrom |
| `NCLH.CUR` | Norwegian Cruise Line Holdings Ltd. |
| `NTS` | Notarised |
| `NTBC` | Note Blockchain |
| `NOTE` | Notional Finance |
| `NVC` | NovaCoin |
| `MNVM` | Novam |
| `NVX` | Novax Coin |
| `NWCN` | NowCoin |
| `NOXB` | Noxbox |
| `NSURE` | Nsure Network |
| `USNBT` | NuBits |
| `NU` | NuCypher |
| `NSR` | NuShares |
| `NUBIS` | NubisCoin |
| `NCASH` | Nucleus Vision |
| `NUKE` | NukeCoin |
| `NKC` | Nukecoinz |
| `NLX` | Nullex |
| `NULS` | Nuls |
| `NR1.BITCI` | Number 1 Token |
| `N7` | Number7 |
| `NUM` | Numbers Protocol |
| `NUMBERS` | NumbersCoin |
| `NMR` | Numeraire |
| `NMS` | Numus |
| `NXT` | Nxt |
| `NYAN` | NyanCoin |
| `NYANTE` | Nyantereum International |
| `NYBBLE` | Nybble |
| `NYEX` | Nyerium |
| `NYZO` | Nyzo |
| `O3` | O3 Swap |
| `OATH` | OATH Protocol |
| `OBSR` | OBSERVER Coin |
| `ODE` | ODEM |
| `ODMC` | ODMCoin |
| `ODX` | ODX Token |
| `OKT` | OEC |
| `OF` | OFCOIN |
| `ON` | OFIN Token |
| `OG` | OG Fan Token |
| `OIN` | OIN Finance |
| `OK` | OKCash |
| `OKOIN` | OKOIN |
| `OKB` | OKX |
| `OLXA` | OLXA |
| `OMEGA` | OMEGA |
| `OMG` | OMG Network |
| `ONAM` | ONAM |
| `ONIT` | ONBUFF |
| `ONEX` | ONE TECH |
| `ONOT` | ONO |
| `OPC` | OP Coin |
| `OPENDAO` | OPEN Governance Token |
| `WPE` | OPES (Wrapped PE) |
| `OOW` | OPP Open WiFi |
| `ORAO` | ORAO Network |
| `ORET` | ORET Token |
| `ORM` | ORIUM |
| `OROP` | ORO |
| `ORS` | ORS Group |
| `OSA` | OSA Token |
| `OTO` | OTOCASH |
| `OVC` | OVCODE |
| `OWL` | OWL Token |
| `OWNDATA` | OWNDATA |
| `OZP` | OZAPHYRE |
| `OASC` | Oasis City |
| `ROSE` | Oasis Labs |
| `OAS.CUR` | Oasis Petroleum |
| `OAX` | Oax |
| `OBITS` | Obits Coin |
| `OHL.CUR` | Obrascón Huarte Lain, S.A. |
| `OBSCURE` | Obscurebay |
| `ODN` | Obsidian |
| `GBYTE` | Obyte |
| `OCC` | OccamFi |
| `OCEAN` | Ocean Protocol |
| `OCE` | OceanEX Token |
| `OCL` | Oceanlab |
| `OCTAX` | OctaX |
| `OTX` | Octanox |
| `OCTI` | Oction |
| `OCTOC` | OctoCoin |
| `OCTO` | OctoFi |
| `OCTOIN` | Octoin Coin |
| `OCT` | Octopus Network |
| `OPS` | Octopus Protocol |
| `ODDZ` | Oddz |
| `OWC` | Oduwa |
| `OCN` | Odyssey |
| `XFTC` | Offshift |
| `OH` | Oh! Finance |
| `OKS` | Oikos |
| `OILD` | OilWellCoin |
| `OIL` | Oiler |
| `OJX` | Ojooo |
| `ODNT` | Old Dogs New Tricks |
| `OLDSF` | OldSafeCoin |
| `OLV` | OldV |
| `OLE` | Olive |
| `OLYMP` | OlympCoin |
| `OHM` | Olympus |
| `MOT` | Olympus Labs |
| `OHMv2` | Olympus v2 |
| `OLY` | Olyseum |
| `OMA` | OmegaCoin |
| `OMIC` | Omicron |
| `OMGC` | OmiseGO Classic |
| `OMNI` | Omni |
| `ORT` | Omni Real Estate Token |
| `OMC` | OmniCron |
| `ECOM` | Omnitude |
| `ONL` | On.Live |
| `OBS` | One Basis Cash |
| `ONC` | One Cash |
| `OGT` | One Game |
| `ONS` | One Share |
| `OSF` | One Solution |
| `OCFT.CUR` | OneConnect |
| `OFBC` | OneFinBank Coin |
| `OLT` | OneLedger |
| `RNT` | OneRoot Network |
| `ONX` | Onix |
| `OIO` | Online |
| `ONLY` | OnlyCam |
| `ONLYCUMIES` | OnlyCumies |
| `ONSTON` | Onston |
| `ONT` | Ontology |
| `ONGAS` | Ontology Gas |
| `OOKI` | Ooki |
| `OPCT` | Opacity |
| `XPO` | Opair |
| `OPEN` | Open Platform |
| `OPTC` | Open Predict Token |
| `OPENRI` | Open Rights Exchange |
| `OTN` | Open Trading Network |
| `BRIX` | OpenBrix |
| `CHAT` | OpenChat |
| `OOE` | OpenOcean |
| `OPSC` | OpenSourceCoin |
| `OSWAP` | OpenSwap |
| `ZNT` | OpenZen |
| `OPNN` | Opennity |
| `OPES` | Opes |
| `OPIUM` | Opium |
| `OPP` | Opporty |
| `OPEX` | Optherium Token |
| `OPA` | Option Panda Platform |
| `OPTION` | OptionCoin |
| `ROOM` | OptionRoom |
| `OPU` | Opu Coin |
| `OPUL` | Opulous |
| `OPT` | Opus |
| `ORCL.CUR` | Oracle |
| `ORACLECHAIN` | OracleChain |
| `ORAI` | Oraichain Token |
| `OC` | OrangeCoin |
| `ORBIS` | Orbis |
| `ORC` | Orbit Chain |
| `ORB` | Orbitcoin |
| `ORBS` | Orbs |
| `ORCA` | Orca |
| `OXT` | Orchid Protocol |
| `RDC` | Ordocoin |
| `ORGT` | Organic Token |
| `ORGA` | Organicco |
| `HTDF` | Orient Walt |
| `ORI` | Origami |
| `OUSD` | Origin Dollar |
| `ORIGIN` | Origin Foundation |
| `OGN` | Origin Protocol |
| `OGSP` | OriginSport |
| `TRAC` | OriginTrail |
| `OCX` | Original Crypto Coin |
| `OGO` | Origo |
| `ORN` | Orion Protocol |
| `ORLY` | OrlyCoin |
| `ORME` | Ormeus Coin |
| `ECO` | Ormeus Ecosystem |
| `ORO` | OroCoin |
| `OROC` | Orocrypt |
| `ORV` | Orvium |
| `ORYX` | OryxCoin |
| `OICOIN` | Osmium Investment Coin |
| `OS76` | OsmiumCoin |
| `OSMO` | Osmosis |
| `OUR` | Our Pay |
| `OVO` | Ovato |
| `EMB` | Overline Emblem |
| `ODC` | Overseas Direct Certification |
| `OSTK.CUR` | Overstock.com, Inc. |
| `OVR` | Ovr |
| `OWD` | Owlstand |
| `CHX` | Own |
| `OWN` | Ownly |
| `ZXC` | Oxcert |
| `OXEN` | Oxen |
| `OXYC` | Oxycoin |
| `OXY` | Oxygen |
| `PRL` | Oyster Pearl |
| `OYS` | Oyster Platform |
| `SHL` | Oyster Shell |
| `P2PS` | P2P Solutions Foundation |
| `PAC` | PAC Global |
| `PAID` | PAID Network |
| `PAMP` | PAMP Network |
| `PANGE` | PANGEA |
| `XPN` | PANTHEON X |
| `PARKGENE` | PARKGENE |
| `PARQ` | PARQ |
| `PRQ` | PARSIQ |
| `PHV` | PATHHIVE |
| `PAT` | PATRON |
| `PAXG` | PAX Gold |
| `PAXEX` | PAXEX |
| `PBET` | PBET |
| `PI` | PCHAIN |
| `PCC` | PCORE |
| `PDATA` | PDATA |
| `PEAK` | PEAKDEFI |
| `PENG` | PENG |
| `PEPS` | PEPS Coin |
| `PERI` | PERI Finance |
| `PGF7T` | PGF500 |
| `PHI` | PHI Token |
| `PITCH` | PITCH |
| `PXL` | PIXEL |
| `PLAAS` | PLAAS FARMERS TOKEN |
| `PLAC` | PLANET |
| `PLNC` | PLNCoin |
| `PNC.CUR` | PNC Financial Services Group |
| `POC` | POC Blockchain |
| `POCC` | POC Chain |
| `POP!` | POP |
| `PCH` | POPCHAIN |
| `PPOVR` | POVR |
| `PRIA` | PRIA |
| `PRY` | PRIMARY |
| `TOSS` | PROOF OF TOSS |
| `PROT` | PROT |
| `PROUD` | PROUD Money |
| `PROOF` | PROVER |
| `PROXI` | PROXI |
| `PSC` | PSC Token |
| `PSI` | PSIcoin |
| `PBQ` | PUBLIQ |
| `PVP` | PVPChain |
| `PWR` | PWR Coin |
| `PX` | PXcoin |
| `PCS` | Pabyosi Coin |
| `PBC` | PabyosiCoin |
| `PAF` | Pacific |
| `PACOCA` | Pacoca |
| `PJM` | Pajama.Finance |
| `PAK` | Pakcoin |
| `Palladium.CUR` | Palladium Spot |
| `PTN` | PalletOneToken |
| `PLMT` | Pallium |
| `BUNNY` | Pancake Bunny |
| `HUNNY` | Pancake Hunny |
| `CAKE` | PancakeSwap |
| `PAND` | Panda Finance |
| `PND` | PandaCoin |
| `PANDO` | Pando |
| `PNG` | Pangolin |
| `ZKP` | Panther Protocol |
| `PINKX` | PantherCoin |
| `PAN` | Pantos |
| `PAPADOGE` | Papa Doge |
| `PHIBA` | Papa Shiba |
| `PAZZI` | Paparazzi |
| `PRT` | Papusha |
| `PPR` | Papyrus |
| `PRP` | Papyrus |
| `PSP` | ParaSwap |
| `PARAB` | Parabolic |
| `PAR` | Parachute |
| `PRG` | Paragon |
| `PARA` | Paralink Network |
| `PARAL` | Parallel |
| `DUO` | ParallelCoin |
| `PRDX` | ParamountDax Token |
| `PARANOIA` | ParanoiaCoin |
| `PARETO` | Pareto Network Token |
| `PBX` | Paribus |
| `PSG` | Paris Saint-Germain Fan Token |
| `PKB` | ParkByte |
| `GOT` | ParkinGo |
| `PARLAY` | Parlay |
| `PART` | Particl |
| `PASC` | Pascal Coin |
| `PASL` | Pascal Lite |
| `PAS` | Passive Coin |
| `PTO` | Patentico |
| `PTOY` | Patientory |
| `PTEN.CUR` | Patterson-UTI Energy, Inc. |
| `PAVO` | Pavocoin |
| `USDP` | Pax Dollar |
| `PBLK` | PayBlock |
| `XPY` | PayCoin |
| `PYC` | PayCoin |
| `PFR` | PayFair |
| `PYPL.CUR` | PayPal Holdings |
| `PAYP` | PayPeer |
| `PPP` | PayPie |
| `PYP` | PayPro |
| `PCI` | PayProtocol Paycoin |
| `PYN` | Paycent |
| `PAYC.CUR` | Paycom Software, Inc. |
| `PAYCON` | Paycon |
| `PMNT` | Paymon |
| `PYPL` | Paypal |
| `EPAN` | Paypolitan Token |
| `PYT` | Payther |
| `PTI` | Paytomat |
| `PBF.CUR` | Pbf Energy Cl A |
| `PEA` | Pea Farm |
| `PEC` | PeaceCoin |
| `PCHS` | Peaches.Finance |
| `PEKC` | Peacock Coin |
| `NUX` | Peanut |
| `PEARL` | Pearl Finance |
| `XPB` | Pebble Coin |
| `PBL` | Pebbles |
| `PCL` | Peculium |
| `PCO` | Pecunio |
| `PCN` | PeepCoin |
| `PMTN` | Peer Mountain |
| `PPC` | PeerCoin |
| `PERX` | PeerEx Network |
| `GUESS` | Peerguess |
| `PPY` | Peerplays |
| `PEG` | PegNet |
| `PEGS` | PegShares |
| `PGC` | Pegascoin |
| `PUSD` | PegsUSD |
| `PTON.CUR` | Peloton Interactive Inc |
| `PENC` | PenCoin |
| `PENDLE` | Pendle |
| `PENN` | Penn National Gaming |
| `PENTA` | Penta |
| `PTA` | PentaCoin |
| `PNY` | Peony Coin |
| `PEPECASH` | Pepe Cash |
| `PPBLZ` | Pepemon Pepeballs |
| `PEP.CUR` | Pepsico |
| `PERA` | Pera Finance |
| `PERC` | Perion |
| `PERL` | Perlin |
| `PERMIAN` | Permian |
| `ASK` | Permission Coin |
| `PERP` | Perpetual Protocol |
| `XPRT` | Persistence |
| `PIE` | Persistent Information Exchange |
| `PWON` | Personal Wager |
| `PMGT` | Perth Mint Gold Token |
| `PERU` | PeruCoin |
| `PTC` | PesetaCoin |
| `PSB` | PesoBit |
| `PETG` | Pet Games |
| `PKD` | PetKingdom |
| `PETL` | Petlife |
| `PTR` | Petro |
| `XPD` | PetroDollar |
| `PBR.CUR` | Petroleo Brasileiro SA |
| `PFE` | Pfizer FTX |
| `PFE.CUR` | Pfizer Inc |
| `PHA` | Phala Network |
| `PHALA` | Phalanx |
| `SOUL` | Phantasma |
| `KCAL` | Phantasma Energy |
| `PNX` | PhantomX |
| `XPH` | PharmaCoin |
| `PGX` | PhiGold Coin |
| `PHS` | PhilosophersStone |
| `PHX` | Phoenix |
| `PHB` | Phoenix Binance |
| `PXC` | PhoenixCoin |
| `PHNX` | PhoenixDAO |
| `PHM` | Phomeum |
| `PHONON` | Phonon DAO |
| `PHORE` | Phore |
| `PHTC` | Photochain |
| `PHO` | Photon |
| `PHT` | Photon Token |
| `PHR` | Phreak |
| `PIB` | Pibble |
| `PICA` | PicaArtMoney |
| `PINU` | Piccolo Inu |
| `PICKLE` | Pickle Finance |
| `YPIE` | PieDAO Yearn Ecosystem Pie |
| `DOUGH` | PieDAO v2 (DOUGH) |
| `PIG` | Pig Finance |
| `PGN` | Pigeoncoin |
| `PIGGY` | Piggy Coin |
| `PIKACHU` | Pikachu Inu |
| `PKC` | Pikciochain |
| `PLR` | Pillar |
| `PIN` | Pin |
| `PTT` | Pink Taxi Token |
| `PINK` | PinkCoin |
| `PNODE` | Pinknode |
| `PSLIP` | Pinkslip Finance |
| `PINMO` | Pinmo |
| `PTU` | Pintu Token |
| `PCOIN` | Pioneer Coin |
| `PIO` | Pioneershares |
| `PIPL` | PiplCoin |
| `PIPI` | Pippi Finance |
| `SKULL` | Pirate Blocks |
| `ARRR` | Pirate Chain |
| `PIRATE` | PirateCash |
| `PIRL` | Pirl |
| `PIST` | Pist Trust |
| `PIT` | Pitbull |
| `PFT` | Pitch Finance Token |
| `PVT` | Pivot Token |
| `PXB` | PixelBit |
| `PIZZACOIN` | PizzaCoin |
| `PIZZA` | PizzaSwap |
| `PLAI` | Plair |
| `PLAN` | Plancoin |
| `AQUA` | Planet Finance |
| `PLANET` | PlanetCoin |
| `PLANETS` | PlanetWatch |
| `PVU` | Plant vs Undead Token |
| `PLNX` | Planumex |
| `PLASTIK` | Plastiks |
| `LAT` | PlatON Network |
| `PLATC` | PlatinCoin |
| `PNC` | PlatiniumCoin |
| `PLAT` | Platinum |
| `Platinum.CUR` | Platinum Spot |
| `XPTX` | PlatinumBAR |
| `PLTC` | PlatonCoin |
| `LUC` | Play 2 Live |
| `PLAYC` | PlayChip |
| `PLY` | PlayCoin |
| `PLA` | PlayDapp |
| `PLF` | PlayFuel |
| `PXG` | PlayGame |
| `PCNT` | Playcent |
| `PKT` | Playkey |
| `DN8` | Pldgr |
| `PLGR` | Pledge Finance |
| `PLG` | Pledgecamp |
| `PLE` | Plethori |
| `PLX` | PlexCoin |
| `PLOT` | PlotX |
| `PLUGCN` | Plug Chain |
| `PLI` | Plugin |
| `PLURA` | PluraCoin |
| `NPLC` | Plus Coin |
| `PLC` | PlusCoin |
| `PLUS1` | PlusOneCoin |
| `GPPT` | Pluto Project Coin |
| `PLU` | Pluton |
| `PLTX` | PlutusX |
| `POE` | Po.et |
| `POS` | PoSToken |
| `POA` | Poa Network |
| `POKT` | Pocket Network |
| `POCO` | Pocoland |
| `POD` | Podo Point |
| `PFID` | Pofid Dao |
| `PXP` | PointPay |
| `XPS` | PoisonIvyCoin |
| `XPOKE` | PokeChain |
| `POKER` | PokerCoin |
| `XPST` | PokerSports |
| `POK` | Pokmonsters |
| `POLAR` | Polaris |
| `POLA` | Polaris Share |
| `PAL` | PolicyPal Network |
| `POLISPLAY` | PolisPay |
| `POLC` | Polka City |
| `PBR` | PolkaBridge |
| `PDOGE` | PolkaDoge |
| `NAME` | PolkaDomain |
| `PKF` | PolkaFoundry |
| `PWAR` | PolkaWar |
| `PBASE` | Polkabase |
| `CVR` | Polkacover |
| `PDEX` | Polkadex |
| `PDOG` | Polkadog |
| `DOT` | Polkadot |
| `PIS` | Polkainsure Finance |
| `KALLY` | Polkally |
| `LKR` | Polkalokr |
| `POLK` | Polkamarkets |
| `PMON` | Polkamon |
| `POLS` | Polkastarter |
| `PSWAP` | Polkaswap |
| `POLL` | Pollchain |
| `POLYDOGE` | PolyDoge |
| `PYQ` | PolyQuity |
| `NCT` | PolySwarm |
| `PLBT` | Polybius |
| `MATIC` | Polygon |
| `SPADE` | PolygonFarm Finance |
| `PGT` | Polyient Games Governance Token |
| `PGU` | Polyient Games Unity |
| `POLX` | Polylastic |
| `POLY` | Polymath Network |
| `PON` | Ponder |
| `PONYO` | Ponyo Impact |
| `PONZU` | Ponzu Inu |
| `POODL` | Poodl |
| `PSK` | Pool of Stake |
| `POL` | Pool-X |
| `XSPT` | PoolStamp |
| `POOL` | PoolTogether |
| `POOLZ` | Poolz Finance |
| `FAG` | PoorFag |
| `POPC` | PopChest |
| `ICE` | Popsicle Finance |
| `PPS` | PopulStay |
| `POP` | PopularCoin |
| `PPT` | Populous |
| `PORT` | Port Finance |
| `PDF` | Port of DeFi Network |
| `PORTAL` | Portal |
| `PFY` | Portify |
| `PEX` | PosEx |
| `PSD` | Poseidon |
| `PCCM` | Poseidon Chain |
| `OCEANT` | Poseidon Foundation |
| `QQQ` | Poseidon Network |
| `POSQ` | Poseidon Quark |
| `POSI` | Position Token |
| `POSTC` | PostCoin |
| `POT` | PotCoin |
| `PIPT` | Power Index Pool Token |
| `POWR` | Power Ledger |
| `CVP` | PowerPool Concentrated Voting Power |
| `PTF` | PowerTrade Fuel |
| `PSM` | Prasm |
| `PRCM` | Precium |
| `PQT` | Prediqt |
| `PREMIA` | Premia |
| `PREM` | Premium |
| `InBit` | PrepayWay |
| `ENTT` | Presale Ventures |
| `PRE` | Presearch |
| `HILL` | President Clinton |
| `PRES` | President Trump |
| `PRS` | PressOne |
| `PRVS` | Previse |
| `PBT` | Primalbase |
| `PST` | Primas |
| `PSF` | Prime Shipping Foundation |
| `PXI` | Prime-X1 |
| `PRIME` | PrimeChain |
| `XPM` | PrimeCoin |
| `PPI` | Primpy |
| `PRINT` | Printer.Finance |
| `PRX` | Printerium |
| `PRM` | PrismChain |
| `PRV` | PrivacySwap |
| `BPRIVA` | Privapp Network |
| `PIVX` | Private Instant Verified Transaction |
| `PRIX` | Privatix |
| `PZM` | Prizm |
| `PROB` | ProBit Token |
| `PRA` | ProChain |
| `XPRO` | ProCoin |
| `PROC` | ProCurrency |
| `PCM` | Procom |
| `PP` | ProducePay Chain |
| `PROD` | Productivist |
| `PFL` | Professional Fighters League Fan Token |
| `PHC` | Profit Hunters Coin |
| `PDC` | Project Decorum |
| `JTX` | Project J |
| `PAI` | Project Pai |
| `QBIT` | Project Quantum |
| `OMX` | Project Shivom |
| `XIL` | ProjectX |
| `DIAMND` | Projekt Diamond |
| `PROM` | Prometeus |
| `PC` | Promotion Coin |
| `PRFT` | Proof Suite Token |
| `PEL` | Propel Token |
| `PROP` | Propeller |
| `PROPS` | Props |
| `PRO` | Propy |
| `VRP` | Prosense.tv |
| `PGL` | Prospectors |
| `PROS` | Prosper |
| `PRC` | ProsperCoin |
| `PROGE` | Protector Roge |
| `PROTON` | Proton |
| `XPR` | Proton |
| `VOCO` | Provoco |
| `XES` | Proxeus |
| `XPX` | ProximaX |
| `PSEUD` | PseudoCash |
| `PSY` | Psilocybin |
| `PTERIA` | Pteria |
| `PUGL` | PugLife |
| `PULI` | Puli Inu |
| `PULSE` | Pulse |
| `PBYI.CUR` | Puma Biotechnology, Inc. |
| `PMA` | PumaPay |
| `PUNDIX` | Pundi X |
| `NPXS` | Pundi X |
| `NPXSXEM` | Pundi X NEM |
| `PUPA` | PupaCoin |
| `PPN` | Puppies Network |
| `PURA` | Pura |
| `PURE` | Pure |
| `UFI` | PureFi |
| `VIDZ` | PureVidz |
| `PGTS` | Puregold token |
| `PRPT` | Purple Token |
| `PRPS` | Purpose |
| `HLP` | Purpose Coin |
| `PUSHI` | Pushi |
| `PUSSY` | Pussy Financial |
| `PUT` | PutinCoin |
| `PETN` | Pylon Eco Token |
| `PYLON` | Pylon Finance |
| `PYLNT` | Pylon Network |
| `PYRAM` | Pyram Token |
| `PYRK` | Pyrk |
| `QARK` | QANplatform |
| `QCH` | QChi |
| `QFI` | QFinance |
| `QLC` | QLC Chain |
| `QOOB` | QOOBER |
| `QQBC` | QQBC IPFS BLOCKCHAIN |
| `QTUM` | QTUM |
| `QCOM.CUR` | QUALCOMM Inc |
| `QBZ` | QUEENBEE |
| `QUSD` | QUSD |
| `QBAO` | Qbao |
| `QC` | Qcash |
| `QUROZ` | Qfora |
| `QISWAP` | QiSwap |
| `PMEER` | Qitmeer |
| `QOBI` | Qobit |
| `QORA` | QoraCoin |
| `QRVO.CUR` | Qorvo, Inc. |
| `QCO` | Qravity |
| `XQR` | Qredit |
| `QRDO` | Qredo |
| `QBK` | QuBuck Coin |
| `eQUAD` | Quadrant Protocol |
| `QUAM` | Quam Network |
| `QNT` | Quant |
| `QNTU` | Quanta |
| `QTF` | Quantfury |
| `QNTR` | Quantor |
| `QSP` | Quantstamp |
| `QAU` | Quantum |
| `QRL` | Quantum Resistant Ledger |
| `Q1S` | Quantum1Net |
| `QUA` | Quarashi Network |
| `QKC` | QuarkChain |
| `QRK` | QuarkCoin |
| `QTZ` | Quartz |
| `QAC` | Quasarcoin |
| `QTL` | Quatloo |
| `QCN` | Quazar Coin |
| `QUBE` | Qube |
| `Q2C` | QubitCoin |
| `QUBITICA` | Qubitica |
| `QBC` | Quebecoin |
| `QNX` | QueenDex Coin |
| `QCX` | QuickX Protocol |
| `QSLV` | Quicksilver coin |
| `QUICK` | Quickswap |
| `QDX` | Quidax |
| `QUIZ` | Quizando |
| `QTCON` | Quiztok |
| `QASH` | Quoine Liquid |
| `XQN` | Quotient |
| `QVT` | Qvolta |
| `QWARK` | Qwark |
| `QWC` | Qwertycoin |
| `R34P` | R34P |
| `RFL` | RAFL |
| `RAIF` | RAI Finance |
| `SOFI` | RAI Finance |
| `RAIZER` | RAIZER |
| `RKN` | RAKON |
| `RAKU` | RAKUN |
| `RAMP` | RAMP |
| `KRX` | RAVN Korrax |
| `RAWG` | RAWG |
| `RAC` | RAcoin |
| `RHOC` | RChain |
| `RCOIN` | RCoin |
| `REALPLATFORM` | REAL |
| `REBL` | REBL |
| `RED` | RED |
| `MWAT` | RED MegaWatt |
| `REDI` | REDi |
| `RST` | REGA Risk Sharing Token |
| `REME` | REME-Coin |
| `REM` | REMME |
| `REN` | REN |
| `RENC` | RENC |
| `REU` | REUCOIN |
| `REVV` | REVV |
| `RGC` | RG Coin |
| `RIF` | RIF Token |
| `RINGX` | RING X PLATFORM |
| `ATOLO` | RIZON |
| `RMPL` | RMPL |
| `RMRK` | RMRK.app |
| `ROAD` | ROAD |
| `ROI` | ROIcoin |
| `RON` | RON |
| `ROOBEE` | ROOBEE |
| `RNX` | ROONEX |
| `ROS` | ROS Coin |
| `RUSH` | RUSH COIN |
| `RABBIT` | Rabbit Finance |
| `RACEFI` | RaceFi |
| `RADI` | RadicalCoin |
| `RAD` | Radicle |
| `RACA` | Radio Caca |
| `XRD` | Radix |
| `EXRD` | Radix |
| `RAI` | Rai Reflex Index |
| `RDNN` | Raiden Network |
| `RDN` | Raiden Network Token |
| `RF` | Raido Financial |
| `RAIL` | Railgun |
| `RAINC` | RainCheck |
| `RNBW` | Rainbow Token |
| `RAINBOW` | Rainbow Token |
| `RAISE` | Raise Token |
| `RLY` | Rally |
| `RAM` | Ramifi Protocol |
| `RFT` | Rangers Fan Token |
| `RAPDOGE` | RapDoge |
| `RPD` | Rapids |
| `RPZX` | Rapidz |
| `RTM` | Raptoreum |
| `RAP` | Rapture |
| `RGT` | Rari Governance Token |
| `RARI` | Rarible |
| `ROC` | Rasputin Online Coin |
| `RTE` | Rate3 |
| `XRA` | Ratecoin |
| `RATIO` | Ratio |
| `RAVE` | Ravelous |
| `RAVEN` | Raven Protocol |
| `RVN` | Ravencoin |
| `RVC` | Ravencoin Classic |
| `RAY` | Raydium |
| `RAYS` | Rays Network |
| `RAZOR` | Razor Network |
| `RZR` | RazorCoin |
| `EFK` | ReFork |
| `RWE` | Real-World Evidence |
| `RCT` | RealChain |
| `FEVR` | RealFevr |
| `RET` | RealTract |
| `RIO` | Realio Network |
| `REA` | Realisto |
| `RCC` | Reality Clash |
| `REALM` | Realm |
| `REAL` | Realy Metaverse |
| `REAP` | ReapChain |
| `R1` | Recast1 |
| `RECOM` | Recom |
| `XRK` | RecordsKeeper |
| `RRT` | Recovery Right Tokens |
| `RRC` | Recycling Regeneration Chain |
| `REDC` | RedCab |
| `RCX` | RedCrowCoin |
| `RFOX` | RedFOX Labs |
| `BTRFLY` | Redacted Cartel |
| `REDCO` | Redcoin |
| `RDD` | Reddcoin |
| `REDN` | Reden |
| `REE` | ReeCoin |
| `REEF` | Reef |
| `REF` | RefToken |
| `RFR` | Refereum |
| `FINE` | Refinable |
| `RFCTR` | Reflector.Finance |
| `FLX` | Reflexer Ungovernance Token |
| `RFG` | Refugees Token |
| `REC` | Regalcoin |
| `RDS` | Reger Diamond |
| `REINDEER` | Reindeer |
| `RELAY` | Relay Token |
| `RELVT` | Relevant |
| `RLX` | Relex |
| `REL` | Reliance |
| `RELI` | Relite Finance |
| `REMCO` | Remco |
| `RNO.CUR` | Renault Par |
| `RPM` | Render Payment |
| `RNDR` | Render Token |
| `RNS` | RenosCoin |
| `RRB` | Renrenbit |
| `BERRY` | Rentberry |
| `RNB` | Rentible |
| `REPO` | Repo Coin |
| `RPB` | Republia |
| `REPUX` | Repux |
| `REQ` | Request Network |
| `RSV` | Reserve |
| `RSR` | Reserve Rights |
| `RES` | Resistance |
| `RMD.CUR` | Resmed |
| `REST` | Restore |
| `RMS` | Resumeo Shares |
| `RETAIL` | Retail.Global |
| `XRTC` | Retailcoin |
| `RBIT` | ReturnBit |
| `RNC` | ReturnCoin |
| `REV` | Revain |
| `REVA` | Revault Network |
| `REVE` | Revenu |
| `RVST` | Revest Finance |
| `REW` | Review.Network |
| `RVP` | Revolution Populi |
| `RVR` | Revolution VR |
| `XRE` | RevolverCoin |
| `REVO` | Revomon |
| `REVU` | Revuto |
| `RWD` | Reward Vision |
| `RMOB` | RewardMob |
| `RH.CUR` | Rh |
| `RHEA` | Rhea |
| `RHP` | Rhypton Club |
| `XRL` | Rialto.AI |
| `RBR` | Ribbit Rewards |
| `RBN` | Ribbon Finance |
| `RICECOIN` | RiceCoin |
| `RICE` | RiceFarm |
| `RICH` | Richie |
| `RICKMORTY` | Rick And Morty |
| `RIDE` | Ride My Car |
| `RDT` | Ridotto |
| `RIC` | Riecoin |
| `RIGEL` | Rigel Finance |
| `RGP` | Rigel Protocol |
| `RMESH` | RightMesh |
| `RIFI` | Rikkei Finance |
| `RIL` | Rilcoin |
| `RBT` | Rimbit |
| `RFUEL` | Rio DeFi |
| `RIPO` | RipOffCoin |
| `RIPAX` | RipaEx |
| `RCN` | Ripio |
| `RIPT` | RiptideCoin |
| `RBX` | RiptoBuX |
| `RISE` | Rise |
| `RISEP` | Rise Protocol |
| `RDR` | Rise of Defenders |
| `RSUN` | RisingSun |
| `RAD.CUR` | Rite Aid |
| `RVT` | Rivetz |
| `RVX` | Rivex |
| `ROBET` | RoBet |
| `RBDT` | RoBust Defense Token |
| `RPUT` | Robin8 Profile Utility Token |
| `HOOD` | Robinhood pre-IPO contract |
| `RC20` | RoboCalls |
| `XRT` | Robonomics Network |
| `RWS` | Robonomics Web Services |
| `ROX` | Robotina |
| `RKT` | Rock Token |
| `ROK` | Rockchain |
| `RBUNNY` | Rocket Bunny |
| `RVF` | Rocket Vault |
| `ROCK` | RocketCoin |
| `RPL` | RocketPool |
| `ROCKI` | Rocki |
| `RSIN` | Roketsin |
| `ROKU.CUR` | Roku, Inc. |
| `RPC` | RonPaulCoin |
| `RSC` | Ronaldinho Soccer Coin |
| `ROOT` | RootCoin |
| `ROOTS` | RootProject |
| `$ROPE` | Rope |
| `ROPE` | Rope Token |
| `ROSN` | Roseon Finance |
| `RTH` | Rotharium |
| `RT2` | RotoCoin |
| `ROT` | Rotten |
| `RD` | Round Dollar |
| `ROUND` | RoundCoin |
| `ROUTE` | Router Protocol |
| `ROE` | Rover Coin |
| `RWN` | Rowan Token |
| `RKC` | Royal Kingdom Coin |
| `RSF` | Royal Sting |
| `RYC` | RoyalCoin |
| `ROYAL` | RoyalCoin |
| `RYCN` | RoyalCoin 2.0 |
| `ROYA` | Royale |
| `RBC` | Rubic |
| `RBIES` | Rubies |
| `RUBY` | Rubius |
| `RUBIT` | Rublebit |
| `RBY` | RubyCoin |
| `RUFF` | Ruff |
| `RUG` | Rug |
| `RPT` | Rug Proof |
| `ZMBE` | RugZombie |
| `RULER` | Ruler Protocol |
| `RUPX` | Rupaya |
| `RUP` | Rupee |
| `IDRT` | Rupiah Token |
| `RUC` | Rush |
| `RC` | Russiacoin |
| `RMC` | Russian Mining Coin |
| `RUST` | RustCoin |
| `RUSTBITS` | Rustbits |
| `R.R.CUR` | Ryder System |
| `RYO` | Ryo |
| `RYOSHI` | Ryoshis Vision |
| `US500.CUR` | S&P 500 |
| `SFG` | S.Finance |
| `S4F` | S4FE |
| `S8C` | S88 Coin |
| `SABR` | SABR Coin |
| `SAI` | SAI |
| `SAV3` | SAV3 |
| `STS` | SBank |
| `SCRIV` | SCRIV |
| `SDAT` | SDATokens |
| `SDA` | SDChain |
| `SEEN` | SEEN |
| `SEER` | SEER |
| `SLY` | SELFLLERY |
| `SENNO` | SENNO |
| `SENSO` | SENSO |
| `KICKS` | SESSIA |
| `SGAT` | SGAT |
| `SGP` | SGPay |
| `XSH` | SHIELD |
| `SHILL` | SHILL Token |
| `SHFL` | SHUFFLE! |
| `SIDT` | SID Token |
| `SIL` | SIL Finance Token V2 |
| `SST` | SIMBA Storage Token |
| `SIN` | SINOVATE |
| `SINX` | SINX Token |
| `SIX` | SIX Network |
| `SKL` | SKALE Network |
| `SKYFT` | SKYFchain |
| `SLICEC` | SLICE |
| `SLNV2` | SLNV2 |
| `SMNX` | SMNX |
| `SMPL` | SMPL Foundation |
| `SOBA` | SOBA Token |
| `SODA` | SODA Coin |
| `SOLARIX` | SOLARIX |
| `SBT` | SOLBIT |
| `SOLVE` | SOLVE |
| `SSX` | SOMESING |
| `SNM` | SONM |
| `SOTA` | SOTA Finance |
| `GLD` | SPDR Gold Shares |
| `SPY` | SPDR S&P 500 ETF FTX |
| `SXDT` | SPECTRE Dividend Token |
| `SXUT` | SPECTRE Utility Token |
| `SPT` | SPECTRUM |
| `SPIN` | SPIN Protocol |
| `SRCOIN` | SRCoin |
| `SSVCOIN` | SSVCoin |
| `STAC` | STAC |
| `STACS` | STACS Token |
| `STRS` | STARS |
| `EURS` | STASIS EURS |
| `STG` | STAYGE |
| `STEX` | STEX |
| `STK` | STK Token |
| `STONK` | STONK |
| `STPT` | STP Network |
| `STREAM` | STREAMIT COIN |
| `STRY` | STRYKZ |
| `SUKU` | SUKU |
| `SUNI` | SUNI |
| `SUP8EME` | SUP8EME Token |
| `SLA` | SUPERLAUNCH |
| `SUSHIDOWN` | SUSHIDOWN |
| `SUSHIUP` | SUSHIUP |
| `SWD` | SW DAO |
| `SWAG` | SWAG Finance |
| `SWAPP` | SWAPP Protocol |
| `SWAPS` | SWAPS Network |
| `SWAPZ` | SWAPZ.app |
| `SWFTC` | SWFTCoin |
| `SWYFTT` | SWYFT |
| `SX` | SX Network |
| `SXPDOWN` | SXPDOWN |
| `SXPUP` | SXPUP |
| `SYBC` | SYB Coin |
| `SATT` | SaTT |
| `SBR` | Saber |
| `SAC1` | Sable Coin |
| `SCAT` | Sad Cat Token |
| `ENERGYX` | Safe Energy |
| `SHA` | Safe Haven |
| `SAFESTAR` | Safe Star |
| `XSTC` | Safe Trade Coin |
| `SAFEBTC` | SafeBTC |
| `SBANK` | SafeBank Token |
| `SAFEBULL` | SafeBull |
| `SCAP` | SafeCapital |
| `SAFE` | SafeCoin |
| `SAFEX` | SafeExchangeCoin |
| `SAFEHAMSTERS` | SafeHamsters |
| `SINS` | SafeInsure |
| `SAFEMOON` | SafeMoon |
| `SFM` | SafeMoon V2 |
| `SFP` | SafePal |
| `STAMP` | SafePost |
| `SAFES` | SafeSwap |
| `SAFEMARS` | Safemars |
| `SSGT` | Safeswap |
| `SFI` | Saffron.finance |
| `SFR` | SaffronCoin |
| `SAF` | Safinus |
| `SAGA` | SagaCoin |
| `SAGE.CUR` | Sage Therapeutics, Inc. |
| `SFU` | Saifu |
| `SAITAMA` | Saitama Inu |
| `SAITO` | Saito |
| `SAKATA` | Sakata Inu |
| `SAKE` | SakeToken |
| `SKU` | Sakura |
| `SKRB` | Sakura Bloom |
| `SKR` | Sakuracoin |
| `SAL` | SalPay |
| `SALMON` | Salmon |
| `SALT` | Salt Lending |
| `SLS` | SaluS |
| `SAMO` | Samoyedcoin |
| `SMSR` | Samsara Coin |
| `QUARTZ` | Sandclock |
| `SND` | Sandcoin |
| `SANSHU` | Sanshu Inu |
| `SAN` | Santiment |
| `SANTOS` | Santos FC Fan Token |
| `SPN` | Sapien Network |
| `SETI` | Sapien Wallet |
| `SAR` | Saren |
| `SRPT.CUR` | Sarepta Therapeutics, Inc. |
| `XRF` | Sarf |
| `SASHIMI` | Sashimi |
| `SAT` | Satisfaction Token |
| `STV` | Sativa Coin |
| `SATX` | SatoExchange Token |
| `STOP` | SatoPay |
| `SATS` | Satoshi |
| `SAT2` | Saturn2Coin |
| `STO` | Save The Ocean |
| `SANDG` | Save and Gain |
| `SBRT` | SaveBritney |
| `SPE` | SavePlanetEarth |
| `SVX` | Savix |
| `SBER.CUR` | Sberbank of Russia GDR |
| `SCP` | ScPrime |
| `XLA` | Scala |
| `SCLP` | Scallop |
| `SWC` | Scanetchain Token |
| `SNcoin` | ScientificCoin |
| `SCIX` | Scientix |
| `SCOOBY` | Scooby coin |
| `SCOP` | Scopuly |
| `SCORE` | Scorecoin |
| `SCOR` | Scorista |
| `SCRM` | Scorum |
| `SCOT` | Scotcoin |
| `SCRIBE` | Scribe Network |
| `SCRL` | Scroll |
| `DDD` | Scry.info |
| `SCRPT` | ScryptCoin |
| `SCT` | ScryptToken |
| `LYRA` | Scrypta |
| `SRT` | Scrypto |
| `SEAL` | Seal Finance |
| `SEALN` | Seal Network |
| `SECI` | Seci |
| `SEA` | Second Exchange Alliance |
| `SCRT` | Secret |
| `WSCRT` | Secret ERC20 |
| `SECRT` | SecretCoin |
| `SEPA` | Secure Pad |
| `SRC` | SecureCoin |
| `SEC` | SecureCryptoPayments |
| `SRXIO` | Securix |
| `SET` | Securosys |
| `SEEDV` | Seed Venture |
| `SOW` | Seed of World |
| `SEEDS` | SeedShares |
| `SFUND` | Seedify.fund |
| `SEELE` | Seele |
| `B2X` | SegWit2x |
| `SHARE` | Seigniorage Shares |
| `SEL` | SelenCoin |
| `STOR` | Self Storage Coin |
| `KEY` | SelfKey |
| `SSC` | SelfSell |
| `SGO` | Selfie GO |
| `SCFIV2` | Semi Centralized Finance |
| `SEM` | Semux |
| `SDRN` | Senderon |
| `SENSE` | Sense Token |
| `SETS` | Sensitrust |
| `SEN` | Sentaro |
| `EMOT` | Sentigraph.io |
| `DVPN` | Sentinel |
| `SENT` | Sentinel |
| `SENC` | Sentinel Chain |
| `UPP` | Sentinel Protocol |
| `SNTVT` | Sentivate |
| `SEQ` | Sequence |
| `SERA` | Seraph |
| `SRNT` | Serenity |
| `SSL` | Sergey Save Link |
| `SRM` | Serum |
| `SECO` | Serum Ecosystem Token |
| `SRV` | ServAdvisor |
| `SERV` | Serve |
| `NOW.CUR` | ServiceNow |
| `SESG.CUR` | Ses Fdr |
| `SETHER` | Sether |
| `SP` | Sex Pistols |
| `SXC` | SexCoin |
| `KOBE` | Shabu Shabu |
| `SHACOIN` | Shacoin |
| `SHADE` | ShadeCoin |
| `SDC` | ShadowCash |
| `DOWS` | Shadows |
| `FOX` | ShapeShift FOX Token |
| `SHARD` | ShardCoin |
| `SS` | Sharder |
| `SHD` | ShardingDAO |
| `XAT` | ShareAt |
| `SSS` | ShareChain |
| `SHR` | ShareToken |
| `SGT` | SharedStake Governance Token |
| `SCTK` | SharesChain |
| `SAK` | SharkCoin |
| `SHKG` | SharkGate |
| `SHARPE` | Sharpe Capital |
| `SHEESH` | Sheesh it is bussin bussin |
| `SHEESHA` | Sheesha Finance |
| `JEW` | Shekel |
| `SHELL` | Shell Token |
| `SHER` | Shercoin |
| `SHIBO` | ShiBonk |
| `SHIBELON` | ShibElon |
| `SHIBADOLLARS` | Shiba Dollars |
| `SHIB` | Shiba Inu |
| `SHIBAL` | Shiba Launch |
| `SHIBAMOM` | Shiba Mom |
| `SHIBACASH` | ShibaCash |
| `COCK` | Shibacock |
| `WOOF` | Shibance Token |
| `SHIBERUS` | Shiberus Inu |
| `SHIBMERICAN` | Shibmerican |
| `SHINJA` | Shibnobi |
| `SDN` | Shiden Network |
| `SHIELDNET` | Shield Network |
| `SHLD` | ShieldCoin |
| `SHIFT` | Shift |
| `SHIH` | Shih Tzu |
| `SHOKK` | Shikokuaido |
| `SH` | Shilling |
| `SCOIN` | ShinCoin |
| `SHE` | Shine Chain |
| `SHIP` | ShipChain |
| `SHPT` | Shipit |
| `SHIRYOINU` | Shiryo-Inu |
| `SHON` | ShonToken |
| `SHOP.CUR` | Shopify Cl A Sub Vtg |
| `SPI` | Shopping.io |
| `1INCHDOWN` | Short 1INCH with Up to 4x Leverage |
| `BNBDOWN` | Short BNB with Up to 3x Leverage |
| `XTZDOWN` | Short Tezos with Up to 3x Leverage |
| `SHORTY` | ShortyCoin |
| `SHOW` | ShowCoin |
| `HAND` | ShowHand |
| `SHO` | Showcase Token |
| `SHPING` | Shping Coin |
| `SHREK` | ShrekCoin |
| `SCDS` | Shrine Cloud Storage Network |
| `SHROOM` | Shroom.Finance |
| `SHFT` | Shyft Network |
| `Si14` | Si14 |
| `SCA` | SiaClassic |
| `SC` | Siacoin |
| `SIB` | SibCoin |
| `XAI` | SideShift Token |
| `WSIENNA` | Sienna ERC20 |
| `SIERRA` | Sierracoin |
| `EROWAN` | Sifchain |
| `SGL` | Sigil |
| `SIGRSV` | SigmaRSV |
| `SIGUSD` | SigmaUSD |
| `SIGNA` | Signa |
| `SIG` | Signal |
| `SGN` | Signals Network |
| `SATA` | Signata |
| `SIGT` | Signatum |
| `SIGN` | SignatureChain |
| `SIG.CUR` | Signet Jewelers |
| `SNTR` | Silent Notary |
| `SILKT` | SilkChain |
| `SILK` | SilkCoin |
| `SILKR` | SilkRoadCoin |
| `Silver.CUR` | Silver Spot |
| `SLV` | Silverway |
| `SMBSWAP` | SimbCoin Swap |
| `SON` | Simone |
| `OST` | Simple Token |
| `SPLB` | SimpleBank |
| `SIMPLE` | SimpleChain |
| `SINE` | Sinelock |
| `SIGU` | Singular |
| `SNGLS` | SingularDTV |
| `SDAO` | SingularityDAO |
| `AGIX` | SingularityNET |
| `SI` | Siren |
| `SRN` | SirinLabs |
| `SISHI` | Sishi Finance |
| `SSA.CUR` | Sistema PJSFC GDR |
| `SKC` | Skeincoin |
| `SKP` | Skelpy |
| `SKI` | Skillchain |
| `SKIN` | Skincoin |
| `ST` | Skippy Token |
| `SKRP` | Skraps |
| `SKRT` | Skrilla Token |
| `SKM` | Skrumble Network |
| `SKB` | SkullBuzz |
| `SHB` | SkyHub Coin |
| `SKYM` | SkyMap |
| `SKY` | Skycoin |
| `SWKS.CUR` | Skyworks Solutions, Inc. |
| `WORK.CUR` | Slack Technologies Inc |
| `SLAM` | Slam Token |
| `SLX` | Slate |
| `SLM` | SlimCoin |
| `SLME` | Slime Finance |
| `SLING` | Sling Coin |
| `RBTC` | Smart Bitcoin |
| `SEOS` | Smart Eye Operating System |
| `SIFT` | Smart Investment Fund Token |
| `PODIUM` | Smart League |
| `TASH` | Smart Trip Platform |
| `SMART` | SmartCash |
| `SMC` | SmartCoin |
| `SMARTCREDIT` | SmartCredit Token |
| `SKEY` | SmartKey |
| `SLST` | SmartLands |
| `SMT` | SmartMesh |
| `SPLA` | SmartPlay |
| `SSP` | Smartshare |
| `SMARTUP` | Smartup |
| `SMAT` | Smathium |
| `SMG` | Smaugs NFT |
| `SMILE` | Smile Token |
| `SDC.CUR` | SmileDirectClub Inc |
| `SMLY` | SmileyCoin |
| `SMILO` | Smilo |
| `SMOKE` | Smoke |
| `SLP` | Smooth Love Potion |
| `SMTY` | Smoothy |
| `SMF` | SmurfCoin |
| `SNK` | Snake Token |
| `SNAP.CUR` | Snap |
| `SNPC` | SnapCoin |
| `SNET` | Snetwork |
| `SNOOP` | SnoopDAO |
| `SNOV` | Snovio |
| `NORA` | SnowCrash Token |
| `SNOW` | Snowswap |
| `ONG` | SoMee.Social |
| `SOP` | SoPay |
| `SOAK` | Soak Token |
| `SOAR` | Soarcoin |
| `SCH` | SoccerHub |
| `SONA` | Social Chains |
| `SLT` | Social Lending Network |
| `SMAC` | Social Media Coin |
| `SEND` | Social Send |
| `SOCC` | SocialCoin |
| `SG` | SocialGood |
| `SREUR` | SocialRemit |
| `XBOT` | SocialXbotCoin |
| `SCL` | Sociall |
| `SGE` | Society of Galactic Exploration |
| `SLINK` | Soft Link |
| `SGR` | Sogur Currency |
| `SOHU.CUR` | Sohu.com Limited |
| `SOIL` | SoilCoin |
| `SOJ` | Sojourn Coin |
| `SOKU` | Soku Swap |
| `SOLR` | SolRazr |
| `SOLA` | Sola |
| `SOL` | Solana |
| `SLIM` | Solanium |
| `SOLARDAO` | Solar DAO |
| `SLR` | SolarCoin |
| `SOLARFARM` | SolarFarm |
| `SFC` | Solarflarecoin |
| `XLR` | Solaris |
| `SOLE` | SoleCoin |
| `SLND` | Solend |
| `SLC` | Solice |
| `SOLID` | Solidified |
| `SOLO` | Sologenic |
| `SLRS` | Solrise Finance |
| `SOMA` | Soma |
| `SBE` | Sombe |
| `CUBE` | Somnium Space CUBEs |
| `SONT` | Sonata.ai |
| `SONG` | Song Coin |
| `SGB` | Songbird |
| `SSD` | Sonic Screw Driver Coin |
| `SNE.CUR` | Sony Corporation |
| `SOON` | SoonCoin |
| `SPHTX` | SophiaTX |
| `XOR` | Sora |
| `SORA` | Sora Validator Token |
| `SOSNOVKINO` | Sosnovkino |
| `GOST` | SoulCoin |
| `XSD` | SounDAC |
| `SOUND` | Sound Coin |
| `SWN.CUR` | Southwestern Energy |
| `SOVE` | Soverain |
| `SOV` | Sovryn |
| `SPX` | Sp8de |
| `SCB` | Space Cow Boy |
| `SOGE` | Space Hoge |
| `SPMK` | Space Monkey |
| `SIP` | Space SIP |
| `SCASH` | SpaceCash |
| `SPC.QRC` | SpaceChain (QRC-20) |
| `SPC` | SpaceChain ERC20 |
| `SPACECOIN` | SpaceCoin |
| `DAWGS` | SpaceDawgs |
| `FCON` | SpaceFalcon |
| `SGOLD` | SpaceGold |
| `GRIMEX` | SpaceGrime |
| `PNGN` | SpacePenguin |
| `SPAY` | SpaceY 2025 |
| `SPACE` | Spacelens |
| `MILK2` | Spaceswap MILK2 |
| `SHAKE` | Spaceswap SHAKE |
| `SP35.CUR` | Spain 35 |
| `SPAIN` | SpainCoin |
| `SNFT.BITCI` | Spanish National Team Fan Token |
| `SPANK` | SpankChain |
| `FLR` | Spark |
| `SRK` | SparkPoint |
| `SFUEL` | SparkPoint Fuel |
| `SPRKL` | Sparkle Loyalty |
| `SPK` | SparksPay |
| `SPARTA` | Spartan Protocol Token |
| `SPEC` | SpecCoin |
| `SPCIE` | Specie |
| `SSHARE` | Specter Share |
| `XSPEC` | Spectre |
| `XSPC` | SpectreSecurityCoin |
| `SPEED` | Speed Coin |
| `SPELL` | Spell Token |
| `SPEND` | Spend |
| `SPENDC` | SpendCoin |
| `SPA` | Sperax |
| `SPHR` | Sphere Coin |
| `SPHRI` | Spherium |
| `SKFT` | Sphinks Token |
| `XID` | Sphre AIR |
| `SPH` | Sphynx Network |
| `SPHYNX` | Sphynx Token |
| `SPICE` | Spice |
| `SPDR` | SpiderDAO |
| `SPIKE` | Spiking |
| `SPINC` | SpinCoin |
| `SPND` | Spindle |
| `SPS` | Splinterlands |
| `SHOPX` | Splyt |
| `SPOK` | Spock |
| `SPKL` | SpokLottery |
| `SPKZ` | Spokkz |
| `SPOOL` | Spool DAO Token |
| `SNL` | Sport and Leisure |
| `SPORTG` | SportGift |
| `SCONE` | Sportcash One |
| `SPORT` | SportsCoin |
| `SFT` | SportsFix |
| `SPF` | SportyCo |
| `SPOT` | Spotcoin |
| `SPOTS` | Spots |
| `S.CUR` | Sprint |
| `SPRTZ` | SpritzCoin |
| `SPRTS` | Sprouts |
| `SQP` | SqPay |
| `SQL` | Squall Coin |
| `SQ` | Square |
| `SQ.CUR` | Square Cl A |
| `SQR` | Squeezer |
| `SQUID` | Squid Game |
| `SQG` | Squid Token |
| `NUTS` | Squirrel Finance |
| `XSI` | Stability Shares |
| `STBZ` | Stabilize |
| `SBC` | StableCoin |
| `USDS` | StableUSD |
| `STACK` | StackOS |
| `STX` | Stacks |
| `FIS` | Stafi |
| `STAKEDETH` | StakeHound Staked Ether |
| `SWISE` | StakeWise |
| `STANDARD` | Stakeborg DAO |
| `STCN` | Stakecoin |
| `STKAAVE` | Staked Aave |
| `STETH` | Staked Ether |
| `sOHM` | Staked Olympus |
| `STZEN` | StakedZEN |
| `XSN` | Stakenet |
| `STHR` | Stakerush |
| `LABX` | Stakinglab |
| `STALIN` | StalinCoin |
| `SAS` | Stand Share |
| `QQQF` | Standard Crypto Fund |
| `STND` | Standard Protocol |
| `TST` | Standard Token |
| `ATLAS` | Star Atlas |
| `POLIS` | Star Atlas DAO |
| `STARP` | Star Pacific Coin |
| `STARC` | StarChain |
| `XSTAR` | StarCurve |
| `KST` | StarKST |
| `STARS` | StarLaunch |
| `STARL` | StarLink |
| `STARSH` | StarShip Token |
| `STT` | Staramba |
| `STAR` | Starbase |
| `SBUX.CUR` | Starbucks Corp |
| `IOV` | Starname |
| `SRP` | Starpunk |
| `START` | StartCoin |
| `STA` | Starta |
| `STP` | StashPay |
| `SQOIN` | StasyQ |
| `STR` | Stater |
| `STATERA` | Statera |
| `SNT` | Status Network Token |
| `STAX` | Staxcoin |
| `SBS` | StaysBASE |
| `XST` | StealthCoin |
| `PUNK` | SteamPunk |
| `STLD.CUR` | Steel Dynamics, Inc. |
| `STEEM` | Steem |
| `SBD` | Steem Dollars |
| `STEEP` | SteepCoin |
| `XLM` | Stellar |
| `XTL` | Stellite |
| `SCIA` | Stem Cell |
| `STEN` | Steneum Coin |
| `STEP` | Step Finance |
| `STEPH` | Step Hero |
| `STEPS` | Steps |
| `SLG` | SterlingCoin |
| `STING` | Sting |
| `SPD` | Stipend |
| `STM.CUR` | Stmicroelectronics Adr |
| `STBU` | Stobox Token |
| `STOCKBET` | StockBet |
| `SCC` | StockChain Coin |
| `STON` | Ston |
| `STN` | Stone Token |
| `STOGE` | Stoner Doge Finance |
| `SRX` | StorX |
| `STQ` | Storiqa Token |
| `STORJ` | Storj |
| `SJCX` | StorjCoin |
| `STORM` | Storm |
| `STMX` | StormX |
| `STOX` | Stox |
| `STRAKS` | Straks |
| `SISA` | Strategic Investments in Significant Areas |
| `STRAX` | Stratis |
| `STOS` | Stratos |
| `NAH` | Strayacoin |
| `STPL` | Stream Protocol |
| `SSH` | StreamSpace |
| `STE` | Streamex |
| `STM` | Streamity |
| `DATA` | Streamr |
| `STRK` | Strike |
| `STRP` | Strips Finance |
| `STRONG` | Strong |
| `SHND` | StrongHands |
| `SHX` | Stronghold Token |
| `STF` | Structure Finance |
| `$TRDL` | Strudel Finance |
| `STC` | Student Coin |
| `SUT` | Suapp |
| `SBSC` | Subscriptio |
| `SUB` | Substratum Network |
| `SUCR` | Sucre |
| `SUGAR` | Sugar Exchange |
| `SKT` | Sukhavati Network |
| `SUM` | SumSwap |
| `SUMO` | Sumokoin |
| `SUNOLD` | Sun Token |
| `SUN` | Sun Token |
| `SNC` | SunContract |
| `SSTC` | SunShotCoin |
| `SUNNY` | Sunny Aggregator |
| `SUNC` | Sunrise |
| `SUP` | Supcoin |
| `SBTC` | Super Bitcoin |
| `SLOKI` | Super Floki |
| `SHB4` | Super Heavy Booster 4 |
| `SERO` | Super Zero |
| `SUPERBID` | SuperBid |
| `SUPERC` | SuperCoin |
| `ECT` | SuperEdge |
| `SUPER` | SuperFarm |
| `UNITY` | SuperNET |
| `RARE` | SuperRare |
| `SUPERTX` | SuperTX |
| `SEED` | Superbloom |
| `SPN.CUR` | Superi Ener Svcs |
| `M1` | SupplyShock |
| `SPM` | Supreme |
| `RMT` | SureRemit |
| `SUR` | Suretly |
| `SURF` | Surf.Finance |
| `SURV` | Survival Game Online |
| `SSG` | Surviving Soldiers |
| `SUSHI` | Sushi |
| `SUTER` | Suterusu |
| `SWA` | Swace |
| `SWACH` | Swachhcoin |
| `BUCKS` | SwagBucks |
| `XWP` | Swap |
| `SDX` | SwapDEX |
| `SWFL` | Swapfolio |
| `SWPRL` | Swaprol |
| `SWT` | Swarm City Token |
| `SWM` | Swarm Fund |
| `SWARM` | SwarmCoin |
| `BZZ` | Swarmv |
| `SWASH` | Swash |
| `SWEET` | SweetStake |
| `SWRV` | Swerve |
| `SWI` | Swinca |
| `SWING` | SwingCoin |
| `SWINGBY` | Swingby |
| `SXP` | Swipe |
| `SCN` | Swiscoin |
| `CHF.CUR` | Swiss Franc |
| `CHSB` | SwissBorg |
| `SIC` | Swisscoin |
| `ESH` | Switch |
| `SWTH` | Switcheo |
| `SWOP` | Swop |
| `SDP` | SydPakCoin |
| `SYLO` | Sylo |
| `SYM` | SymVerse |
| `SIS` | Symbiosis Finance |
| `XYM` | Symbol |
| `SYNLEV` | SynLev |
| `SYN` | Synapse |
| `SYNC` | Sync Network |
| `SYNCC` | SyncCoin |
| `MFG` | SyncFab |
| `SNB` | SynchroBitcoin |
| `SYC` | SynchroCoin |
| `SYNCO` | Synco |
| `SYNX` | Syndicate |
| `SNRG` | Synergy |
| `SNS` | Synesis One |
| `SNY` | Synthetify |
| `SNX` | Synthetix |
| `NOIA` | Syntropy |
| `SYS` | SysCoin |
| `SYY.CUR` | Sysco |
| `TBT` | T-BOT |
| `TCX` | T-Coin |
| `TMUS.CUR` | T-Mobile US, Inc. |
| `TOSC` | T.OS |
| `TAGZ` | TAGZ |
| `TZO` | TANZŌ |
| `TAS` | TARUSH |
| `TBCC` | TBCC |
| `TBIS` | TBIS token |
| `TCST` | TCST Coin |
| `TDFB` | TDFB |
| `TONE` | TE-FOOD |
| `TEMCO` | TEMCO |
| `TENFI` | TEN |
| `TENT` | TENT |
| `TERA` | TERA |
| `TESMA` | TESKA Modern Accounting |
| `TKY` | THEKEY Token |
| `TIOX` | TIOx |
| `TTNT` | TITA Project |
| `TXM` | TMONEY |
| `TNC` | TNC Coin |
| `TOA` | TOA Coin |
| `TONTOKEN` | TONToken |
| `TOOLS` | TOOLS |
| `TOPN` | TOP Network |
| `TORG` | TORG |
| `XTM` | TORUM |
| `TRS` | TORUS Token |
| `TPC` | TPCash |
| `TRCB` | TRCB Chain |
| `TRX` | TRON |
| `TRONPAD` | TRONPAD |
| `DICETRX` | TRONbetDice |
| `LIVE` | TRONbetLive |
| `TRXDICE` | TRONdice |
| `XTROPTIONS` | TROPTIONS |
| `MONARCH` | TRUEMONARCH |
| `TRXDOWN` | TRXDOWN |
| `TRXUP` | TRXUP |
| `TTC` | TTC PROTOCOL |
| `TTV` | TV-TWO |
| `TWEE` | TWEEBAA |
| `TWISTR` | TWIST |
| `TXA` | TXA |
| `TTU` | TaTaTu |
| `TABOO` | Taboo Token |
| `TCHN` | Tachain |
| `IPX` | Tachyon Protocol |
| `TAG` | TagCoin |
| `TSM` | Taiwan Semiconductor Mfg |
| `TAIYO` | Taiyo |
| `TAJ` | TajCoin |
| `TAK` | TakCoin |
| `TKG` | Takamaka Green Coin |
| `TTWO.CUR` | Take-Two Interactive Software, Inc. |
| `TAN` | Taklimakan |
| `TALAO` | Talao |
| `TLNT` | Talent Token |
| `TCOIN` | Talenthon |
| `TAL` | Talentico |
| `TALK` | Talken |
| `TLO` | Talleo |
| `TMT` | Tamy Token |
| `XTO` | Tao |
| `XTP` | Tap |
| `TAPC` | Tap Coin |
| `T4M` | Tap4.Menu |
| `TJA` | TapJets |
| `TAP` | TappingCoin |
| `TARA` | Taraxa |
| `TRDG` | Tardigrades Finance |
| `TGT.CUR` | Target Corp |
| `TGT` | TargetCoin |
| `TAT` | Tatcoin |
| `TSE` | TattooCoin |
| `TAUC` | Taurus Coin |
| `TCHAIN` | Tchain |
| `TEC` | TeCoin |
| `TCHB` | Teachers Blockchain |
| `TEAM` | TeamUP |
| `TMB` | Teambrella |
| `TSA` | Teaswap Art |
| `TECH` | TechCoin |
| `THS` | TechShares |
| `TCR` | TecraCoin |
| `TONIC` | Tectonic |
| `TEK` | TekCoin |
| `TEL` | Telcoin |
| `TFX.CUR` | Teleflex |
| `MDH` | Telemedicoin |
| `TRB` | Tellor |
| `TELL` | Tellurion |
| `TLOS` | Telos |
| `TELOS` | Teloscoin |
| `TEMPO` | Tempo |
| `TPX.CUR` | Tempur Sealy International |
| `TEM` | Temtum |
| `PAY` | TenX |
| `TENX` | TenX Token |
| `TENA` | Tena |
| `TENDIE` | TendieSwap |
| `TEND` | Tendies |
| `TENNET` | Tennet |
| `10SET` | Tenset |
| `TENSHI` | Tenshi |
| `TUP` | Tenup |
| `TENZ` | Tenzorum |
| `TEP` | Tepleton |
| `TERADYNE` | Teradyne |
| `TER.CUR` | Teradyne |
| `LED` | Terawatt |
| `TCNX` | Tercet Network |
| `TERN` | Ternio |
| `TERN.ETH` | Ternio ERC20 |
| `CAPS` | Ternoa |
| `LUNA` | Terra |
| `TVK` | Terra Virtua Kolect |
| `TRC` | TerraCoin |
| `CREDIT` | TerraCredit |
| `TECO` | TerraEcoCoin |
| `TGN` | TerraGreen |
| `KRT` | TerraKRW |
| `TER` | TerraNovaCoin |
| `SDT` | TerraSDT |
| `UST` | TerraUSD |
| `TRR` | Terran Coin |
| `TSLA.CUR` | Tesla |
| `TSLA` | Tesla FTX |
| `TESLA` | TeslaCoilCoin |
| `TES` | TeslaCoin |
| `TSR` | Tesra |
| `TESSLA` | Tessla Coin |
| `TESTA` | Testa |
| `USDT` | Tether |
| `CNHT` | Tether CNH |
| `XAUT` | Tether Gold |
| `TRA` | Tetra |
| `TETRIX` | Tetrix Token |
| `TEVA.CUR` | Teva Pharma Ind Adr Rep 1 |
| `TXT.CUR` | Textron |
| `XTZ` | Tezos |
| `THNX` | ThankYou |
| `0xDIARY` | The 0xDiary Token |
| `FAMILY` | The Bitcoin Family |
| `CBE` | The Chain of Business Entertainment |
| `TCC` | The ChampCoin |
| `TCP` | The Crypto Prophecies |
| `TCY` | The Crypto You |
| `THEDAO` | The DAO |
| `DOG` | The Doge NFT |
| `EFX` | The Effect.ai |
| `ETHO` | The Etho Protocol |
| `TFT` | The Famous Token |
| `FORESTPLUS` | The Forbidden Forest |
| `TFC` | The Freedom Coin |
| `GPS.CUR` | The Gap, Inc. |
| `GT.CUR` | The Goodyear Tire & Rubber Company |
| `GOVT` | The Government Network |
| `GRT` | The Graph |
| `THC` | The Hempcoin |
| `KHC.CUR` | The Kraft Heinz Company |
| `TMTG` | The Midas Touch Gold |
| `TONCOIN` | The Open Network |
| `PEEPS` | The People’s Coin |
| `TRGI` | The Real Golden Inu |
| `SAND` | The Sandbox |
| `SMG.CUR` | The Scotts Miracle-Gro Company |
| `SUNEX` | The Sun Exchange |
| `TTT` | The Transfer Token |
| `XVE` | The Vegan Initiative |
| `WNK` | The Winkyverse |
| `CHIEF` | TheChiefCoin |
| `TFF` | TheFaustFlick |
| `FOC` | TheForce Trade |
| `TGCC` | TheGCCcoin |
| `VIG` | TheVig |
| `CREED` | Thecreed |
| `THEMIS` | Themis |
| `MAY` | Theresa May Coin |
| `THETA` | Theta |
| `TFUEL` | Theta Fuel |
| `THG` | Thetan Arena |
| `TOS` | ThingsOperatingSystem |
| `TAGR` | Think And Get Rich Coin |
| `TCO` | ThinkCoin |
| `TANK` | ThinkTank |
| `TRI.CUR` | Thomson Reuters |
| `RUNE` | Thorchain |
| `THEX` | Thore Exchange |
| `TCHTRX` | ThoreCashTRX |
| `TCH` | Thorecash |
| `THR` | Thorecoin |
| `THX` | Thorenext |
| `XRUNE` | Thorstarter |
| `3FT` | ThreeFold Token |
| `THRT` | ThriveToken |
| `THN` | Throne |
| `TT` | ThunderCore |
| `THUNDER` | ThunderStake |
| `THANKS` | Thx! |
| `TIA` | Tianhe |
| `TYT` | Tianya Token |
| `TIDAL` | Tidal Finance |
| `TDX` | Tidex Token |
| `TNT` | Tierion |
| `TIE` | Ties Network |
| `TIGER` | TigerCash |
| `TGC` | TigerCoin |
| `TIG` | Tigereum |
| `TIKI` | Tiki Token |
| `XTC` | TileCoin |
| `BILL` | TillBilly |
| `TLRY` | Tilray |
| `TLRY.CUR` | Tilray, Inc. |
| `TNB` | Time New Bank |
| `TRAVELLER` | Time and Space Traveller |
| `TMCN` | TimeCoinProtocol |
| `TDAO` | TimeDAO |
| `TME` | Timereum |
| `TMC` | TimesCoin |
| `TIMI` | Timicoin |
| `TINKU` | TinkuCoin |
| `TIP` | Tip Blockchain |
| `TITC` | TitCoin |
| `TC` | Titan Coin |
| `TTN` | Titan Coin |
| `TITAN` | TitanSwap |
| `TBAR` | Titanium BAR |
| `TIT` | TittieCoin |
| `MTXLT` | Tixl |
| `TXL` | Tixl |
| `TTM` | To The Moon |
| `TOKO` | ToKoin |
| `TODAY` | TodayCoin |
| `TON` | Tokamak Network |
| `TKD` | Tokedo |
| `TOKE` | Tokemak |
| `TKMN` | Tokemon |
| `TAAS` | Token as a Service |
| `NTB` | TokenAsset |
| `TCT` | TokenClub |
| `TDS` | TokenDesk |
| `TPAY` | TokenPay |
| `TOKENSTARS` | TokenStars |
| `TEAMT` | TokenStars TEAM Token |
| `AIRE` | Tokenaire |
| `TBX` | Tokenbox |
| `LON` | Tokenlon |
| `TEN` | Tokenomy |
| `TOK` | Tokenplace |
| `TGTC` | Tokensgate |
| `TKS` | Tokes |
| `TKA` | Tokia |
| `TKO` | Tokocrypto |
| `TOKU` | TokugawaCoin |
| `TOKAU` | Tokyo AU |
| `TOKC` | Tokyo Coin |
| `TOL` | Tolar |
| `TOMA` | TomaInfo |
| `TOM` | Tomahawkcoin |
| `TBL` | Tombola |
| `TOMO` | TomoChain |
| `TOMOE` | TomoChain ERC20 |
| `TOPC` | Topchain |
| `TOR` | TorCoin |
| `TORII` | Torii Finance |
| `TORN` | Tornado Cash |
| `TCORE` | TornadoCORE |
| `TOT` | TotCoin |
| `FP.CUR` | Total |
| `TCAP` | Total Crypto Market Cap |
| `TOTM` | Totem |
| `TOC` | TouchCon |
| `TRET` | Tourist Review |
| `TOWER` | Tower |
| `TOWN` | Town Star |
| `TOX` | Toxic |
| `TOYKEN` | Toyken |
| `TOZ` | Tozex |
| `TR3` | Tr3zor |
| `BBCT` | TraDove B2BCoin |
| `TRACE` | Trace Network Labs |
| `TAC` | Traceability Chain |
| `MTN` | TrackNetToken |
| `TRCT` | Tracto |
| `TBB` | Trade Butler Bot |
| `TD` | Trade Chain |
| `TDE` | Trade Ecology Token |
| `TXP` | Trade Pharma Network |
| `EXTP` | TradePlace |
| `TSX` | TradeStars |
| `TDZ` | Tradelize |
| `TRDS` | Traders Token |
| `TRAID` | Traid |
| `TRAK` | TrakInvest |
| `SLICE` | Tranche Finance |
| `CHESS` | Tranchess |
| `TSF` | Transaction Service Fee |
| `TNS` | Transcodium |
| `TX` | Transfer |
| `TMN` | TranslateMe |
| `TRNSC` | Transmutecoin |
| `TBCX` | TrashBurn |
| `TRAT` | Tratok |
| `TRAVA` | Trava Finance |
| `AVA` | Travala |
| `TLT` | Travelertoken |
| `TRAVEL` | Travelvee |
| `TRAXIA` | Traxia Membership Token |
| `TBC` | Trecento Blockchain Capital |
| `TREX` | TreeBlock |
| `TREEC` | TreeCoin |
| `TRCL` | Treecle |
| `TZC` | TrezarCoin |
| `FORCE` | TriForce Tokens |
| `TRIA` | Triaconta |
| `TRL` | Triall |
| `TRI` | Triangles Coin |
| `TRIAS` | Trias |
| `TRIBE` | Tribe |
| `HAKA` | TribeOne |
| `TRIBETOKEN` | TribeToken |
| `TRBT` | Tribute |
| `TRICK` | TrickyCoin |
| `TRDT` | Trident |
| `GPS` | Triffic |
| `TRIGID` | TrigID |
| `TRIG` | Trigger |
| `TIIM` | TriipMiles |
| `TRINI` | Trinity Network Credit |
| `TRIPAD` | TripAdvisor, Inc. |
| `TRIP.CUR` | TripAdvisor, Inc. |
| `TRIO` | Tripio |
| `TRIP` | Trippki |
| `TRTT` | Trittium |
| `TRIX` | TriumphX |
| `TRVC` | Trivechain |
| `TRVR` | Trivver |
| `TRW` | Triwer |
| `TRO` | Trodl |
| `TPG` | Troll Payment |
| `TRTK` | TrollTokens |
| `TROLL` | Trollcoin |
| `TRXWIN` | TronWin |
| `TRP` | Tronipay |
| `TROY` | Troy |
| `TRK` | TruckCoin |
| `TRCK` | Truckcoin |
| `TRUE` | True Chain |
| `TFL` | True Flip Lottery |
| `TIFT` | True Investment Finance |
| `PNL` | True PNL |
| `TSD` | True Seigniorage Dollar |
| `TUSD` | True USD |
| `TDP` | TrueDeck |
| `TRU` | TrueFi |
| `TGAME` | TrueGame |
| `TIC` | TrueInvestmentCoin |
| `TPLAY` | TruePlay |
| `VME` | TrueVett |
| `TFBX` | Truefeedback Token |
| `TRUMPLOSE` | Trump Loses Token |
| `TRUMPWIN` | Trump Wins Token |
| `TRUMP` | TrumpCoin |
| `TWT` | Trust Wallet Token |
| `TRST` | TrustCoin |
| `TRUST` | TrustDAO |
| `TFI` | TrustFi Network Token |
| `TPAD` | TrustPad |
| `XTPL` | TrustPlus |
| `TRV` | TrustVerse |
| `TTB` | TrustaBit |
| `TFLEX` | TrustedCars FLEX |
| `TSC` | TrusterCoin |
| `TLN` | Trustlines Network |
| `SWAP` | Trustswap |
| `WHO` | Truwho |
| `TRY` | Try.Finance |
| `TYM` | Tryvium |
| `TKINU` | Tsuki Inu |
| `NAMI` | Tsunami finance |
| `TZKI` | Tsuzuki Inu |
| `TULIP` | Tulip Protocol |
| `TLP` | TulipCoin |
| `TXT` | TuneTrade |
| `TUNEZ` | Tunez |
| `THP` | TurboHigh Performance |
| `TKC` | TurkeyChain |
| `TBFT.BITCI` | Turkiye Basketbol Federasyonu Token |
| `TUR` | Turron |
| `TRTL` | TurtleCoin |
| `TN` | TurtleNetwork |
| `TUT` | Tutellus |
| `TUDA` | Tutor's Diary |
| `TRT` | TuurnT |
| `TWLV` | Twelve Coin |
| `TWC` | Twilight |
| `TWLO.CUR` | Twilio Cl A |
| `TWIST` | TwisterCoin |
| `TWTR.CUR` | Twitter |
| `TWTR` | Twitter |
| `FF1` | Two Prime FF1 Token |
| `TYC` | Tycoon |
| `TYPE` | Typerium |
| `PHOON` | Typhoon Cash |
| `TYS` | Tyslin |
| `UUU` | U Network |
| `UCASH` | U.CASH |
| `UBX` | UBIX Network |
| `UBU` | UBU |
| `UCN` | UC Coin |
| `UCA` | UCA Coin |
| `UCOINT` | UCOIN |
| `UCH` | UChain |
| `UFO` | UFO Gaming |
| `HVE` | UHIVE |
| `UMA` | UMA |
| `UMK` | UMKA |
| `UNCL` | UNCL |
| `UNX` | UNEOX |
| `UNICORN` | UNICORN Token |
| `UNIDOWN` | UNIDOWN |
| `UNII` | UNII Finance |
| `UNN` | UNION Protocol Governance Token |
| `UNIUP` | UNIUP |
| `UOS` | UOS |
| `XUP` | UPcoin |
| `UR` | UR |
| `URX` | URANIUMX |
| `USSTEEL` | US Steel Corp |
| `USAT` | USAT |
| `USCC` | USC |
| `USCOIN` | USCoin |
| `USDC` | USD Coin |
| `USDA` | USDA |
| `USDCT` | USDCT |
| `USDFL` | USDFreeLiquidity |
| `USDG` | USDG |
| `USDJ` | USDJ |
| `USDK` | USDK |
| `USDQ` | USDQ |
| `USDSB` | USDSB |
| `USDX` | USDX Stablecoin |
| `USG` | USGold |
| `USOAMIC` | USOAMIC |
| `UTU` | UTU Protocol |
| `UBC` | Ubcoin |
| `UBE` | Ubecoin |
| `UBER` | Uber |
| `UBER.CUR` | Uber Technologies Inc |
| `UBEX` | Ubex |
| `UBQ` | Ubiq |
| `UBIQ` | Ubiqoin |
| `U` | Ucoin |
| `UHP` | Ulgen Hash Power |
| `UT` | Ulord |
| `ULT` | Ultiledger |
| `USC` | Ultimate Secure Cash |
| `UAT` | UltrAlpha |
| `ULTRA` | Ultra |
| `UTC` | UltraCoin |
| `XUN` | UltraNote |
| `UGAS` | Ultrain |
| `ULTC` | Umbrella |
| `UMC` | Umbrella Coin |
| `UMB` | Umbrella Network |
| `UMBR` | Umbria Network |
| `UNC` | UnCoin |
| `ERSDL` | UnFederalReserve |
| `UNAT` | Unattanium |
| `UNB` | Unbound Finance |
| `UBA` | Unbox.Art |
| `NBOX` | Unboxed |
| `UNBREAKABLE` | UnbreakableCoin |
| `UNCLE` | Uncle |
| `UAA.CUR` | Under Armour Cl A |
| `UNF` | Unfed Coin |
| `UNT` | Uni Token |
| `UBT` | UniBright |
| `UNCX` | UniCrypt |
| `UNIDX` | UniDex |
| `UNDG` | UniDexGas |
| `LAYER` | UniLayer |
| `UFT` | UniLend Finance |
| `UMX` | UniMex Network |
| `POWER` | UniPower |
| `TRADE` | UniTrade |
| `UNIC` | Unicly |
| `UTI` | Unicorn Technology International |
| `CANDY` | UnicornGo Candy |
| `UNIFI` | Unifi |
| `UNFI` | Unifi Protocol DAO |
| `FUND` | Unification |
| `USX` | Unified Society USDEX |
| `UFOCOIN` | Uniform Fiscal Object |
| `NIF` | Unifty |
| `IFUND` | Unifund |
| `UNIFY` | Unify |
| `UNIGRID` | Unigrid |
| `UKG` | UnikoinGold |
| `UFC` | Union Fair Coin |
| `UNIQ` | Uniqredit |
| `UNIQUE` | Unique One |
| `FOTO` | Unique Photo |
| `UCO` | Uniris |
| `SOCKS` | Unisocks |
| `UNISTAKE` | Unistake |
| `UNI` | Uniswap Protocol Token |
| `DUCK` | Unit Protocol New |
| `USDE` | UnitaryStatus Dollar |
| `UAEC` | United Arab Emirates Coin |
| `UEC` | United Emirates Coin |
| `UGD` | United Global Dollars |
| `UND` | United Network Distribution |
| `USO` | United States Oil Fund |
| `UTT` | United Traders Token |
| `UBTC` | UnitedBitcoin |
| `UCT` | UnitedCrowd |
| `GOALS` | UnitedFans |
| `UIS` | Unitus |
| `UTNP` | Universa |
| `DBTN` | Universa Native token |
| `UBI` | Universal Basic Income |
| `UPCO2` | Universal Carbon |
| `UNIT` | Universal Currency |
| `U8D` | Universal Dollar |
| `UPEUR` | Universal Euro |
| `UGT` | Universal Games Token |
| `UMO` | Universal Molecule |
| `UMI` | Universal Money Instrument |
| `UPT` | Universal Protocol Token |
| `URT` | Universal Recognition Token |
| `URP` | Universal Reward Protocol |
| `UPUSD` | Universal US Dollar |
| `UENC` | UniversalEnergyChain |
| `UNRC` | UniversalRoyalCoin |
| `UNIVRS` | Universe |
| `XYZ` | Universe.XYZ |
| `ZCX` | Unizen |
| `UFOC` | Unknown Fair Object |
| `UFFYI` | Unlimited FiscusFYI |
| `UIP` | UnlimitedIP |
| `UDT` | Unlock Protocol |
| `MARSH` | Unmarshal |
| `UNORE` | UnoRe |
| `UNO` | Unobtanium |
| `UBXT` | UpBots |
| `UP` | UpToken |
| `UFR` | Upfiring |
| `1UP` | Uptrennd |
| `UQC` | Uquid Coin |
| `URALS` | Urals Coin |
| `URAC` | Uranus |
| `URBC` | UrbanCasH |
| `URB` | Urbit Data |
| `URIS` | Uris |
| `URO` | UroCoin |
| `URUS` | Urus Token |
| `SLCA.CUR` | Us Silica Holdings |
| `USE` | Usechain Token |
| `UETL` | Useless Eth Token Lite |
| `UET` | Useless Ethereum Token |
| `UTH` | Uther |
| `UTL` | Utile Network |
| `UTIL` | Utility Coin |
| `UOP` | Utopia Genesis Foundation |
| `UTPL` | Utopialand |
| `OOT` | Utrum |
| `UTK` | Utrust |
| `UWC` | Uwezocoin |
| `UZUMAKI` | Uzumaki Inu |
| `VSYS` | V Systems |
| `VIDT` | V-ID |
| `VAIOT` | VAIOT |
| `VANIG` | VANIG |
| `VANM` | VANM |
| `VARC` | VARC |
| `VAR` | VARcrypt |
| `VBT` | VB Token |
| `VDV` | VDV Token |
| `VEDX` | VEDX TOKEN |
| `VEED` | VEED |
| `VEIL` | VEIL |
| `VNTY` | VENOTY |
| `VFOX` | VFOX (VFOX) |
| `VRX Token` | VIARIUM |
| `VIBE` | VIBEHub |
| `VBX` | VIBEXXX |
| `VINCI` | VINCI |
| `VIP` | VIP Tokens |
| `VITE` | VITE |
| `VIVO` | VIVO Coin |
| `VKNF` | VKENAF |
| `VKF` | VKF Platform |
| `VLUX` | VLUX |
| `VPAD` | VLaunch |
| `VNDC` | VNDC |
| `VNT` | VNT Chain |
| `VNXLU` | VNX Exchange |
| `VTOS` | VTOS |
| `VTUUR` | VTUUR |
| `VTRD` | VTradeExchange |
| `VVI` | VV Coin |
| `VVS` | VVS Finance |
| `VAB` | Vabble |
| `VADER` | Vader Protocol |
| `VGO` | Vagabond |
| `VAI` | Vai |
| `VAIYO` | Vaiyo |
| `VLD` | Valid |
| `VALID` | Validator Token |
| `VLDY` | Validity |
| `VAL` | Validity |
| `VALOR` | Valor Token |
| `VALORBIT` | Valorbit |
| `VALUE` | Value Liquidity |
| `VNTW` | Value Network Token |
| `VSD` | Value Set Dollar |
| `GDXJ` | VanEck Vectors Junior Gold Miners Etf |
| `VGT.CUR` | Vanguard Information Technology ETF |
| `VOO.CUR` | Vanguard S&P 500 ETF |
| `VANT` | Vanta Network |
| `VANY` | Vanywhere |
| `VPRC` | VapersCoin |
| `VRISE` | VaporRISE |
| `VAPOR` | Vaporcoin |
| `VAD` | Varanida |
| `VARIUS` | Varius |
| `VLTC` | VaultCoin |
| `XVC` | Vcash |
| `VET` | VeChain |
| `VEN` | VeChain Old |
| `VTHO` | VeChainThor |
| `VC` | Vecap |
| `VEC2` | VectorCoin 2.0 |
| `VXV` | Vectorspace AI |
| `VEGA` | Vega Protocol |
| `VCN` | VeganNation |
| `VLX` | Velas |
| `VLXPAD` | VelasPad |
| `VLS` | Veles |
| `SCAR` | Velhalla |
| `VELO` | Velo |
| `VELOX` | Velox |
| `VLT` | Veltor |
| `VENA` | Vena Network |
| `VENTION` | Vention |
| `VNS` | Venus |
| `XVS` | Venus |
| `VRT` | Venus Reward Token |
| `VENUS` | VenusEnergy |
| `VRAP` | VeraSwap |
| `VRA` | Verasity |
| `VRD` | Veredictum |
| `XVG` | Verge |
| `VBK` | VeriBlock |
| `VRC` | VeriCoin |
| `VDG` | VeriDocGlobal |
| `VRF` | Verifier |
| `VERIF` | Verifier |
| `CRED` | Verify |
| `VFY` | Verify Token |
| `VERI` | Veritaseum |
| `VRTY` | Verity |
| `VRM` | Verium |
| `VRN` | Vernam |
| `VRS` | Veros |
| `VRX` | Verox |
| `VERSA` | Versa Token |
| `VTC` | Vertcoin |
| `VTEX` | Vertex |
| `VERTEX` | Vertex |
| `VTL` | Vertical |
| `VRSC` | Verus Coin |
| `VNFT` | Very Nifty |
| `VSP` | Vesper Finance |
| `VEST` | VestChain |
| `VESTA` | Vestarin |
| `VEX` | Vexanium |
| `VZT` | Vezt |
| `VIA` | ViaCoin |
| `VIAZ` | Viaz |
| `VIB` | Viberate |
| `VICEX` | ViceToken |
| `VR` | Victoria |
| `VTM` | Victorieum |
| `VTY` | Victoriouscoin |
| `VIC` | Victorium |
| `VI` | Vid |
| `VID` | VideoCoin |
| `VDO` | VidioCoin |
| `VIDI` | Vidion |
| `VDL` | Vidulum |
| `VIDY` | Vidy |
| `VIDYX` | VidyX |
| `VIDYA` | Vidya |
| `VIEW` | Viewly |
| `VEOT` | Viewo |
| `VIKING` | Viking Swap |
| `VIN` | VinChain |
| `VD` | VinDax Coin |
| `VIOR` | ViorCoin |
| `IDORU` | Vip2Fan |
| `VIPS` | Vipstar Coin |
| `VIRAL` | Viral Coin |
| `VUC` | Virta Unique Coin |
| `VTA` | VirtaCoin |
| `XVP` | VirtacoinPlus |
| `VRH` | Virtual Rehab |
| `VMC` | VirtualMining Coin |
| `VPP` | Virtue Poker Points |
| `V.CUR` | Visa Inc |
| `VISIO` | Visio |
| `VIT` | Vision Industry Token |
| `VNX` | VisionX |
| `VISR` | Visor |
| `VITAE` | Vitae |
| `VIU` | Viuly |
| `VIVID` | Vivid Coin |
| `VDX` | Vodi X |
| `VODKA` | Vodka Token |
| `VOICE` | Voice Token |
| `VOISE` | Voise |
| `VOLAIR` | VolAir |
| `VLC` | Volcano Uni |
| `VLTX` | Volentix |
| `VOW3.CUR` | Volkswagen AG |
| `VOLLAR` | Vollar |
| `VLP` | Volpo |
| `ACDC` | Volt |
| `VTN` | Voltroon |
| `VLM` | Volum |
| `VOL` | Volume Network |
| `VOOT` | VootCoin |
| `VTX` | Vortex DeFi |
| `VST` | Vostok |
| `VBSC` | Votechain |
| `VOT` | Votecoin |
| `IPL` | VouchForMe |
| `VOXEL` | Voxies |
| `VOYA` | Voyacoin |
| `VGX` | Voyager Token |
| `VSX` | Vsync |
| `VTR` | Vtorrent |
| `PYR` | Vulcan Forged |
| `VULC` | Vulcano |
| `VYBE` | Vybe |
| `WGP` | W Green Pay |
| `W1` | W1 |
| `W12` | W12 Protocol |
| `W3C` | W3Coin |
| `WABI` | WABI |
| `WAB` | WABnetwork |
| `WAXE` | WAXE |
| `WCOIN` | WCoin |
| `WEB3` | WEB3 Inu |
| `WETH` | WETH |
| `WHALE` | WHALE |
| `WRL` | WHIRL |
| `WIN` | WINk |
| `WIKEN` | WITH |
| `WMC` | WMCoin |
| `WOLFY` | WOLFY |
| `WLO` | WOLLO |
| `WOLVERINU` | WOLVERINU |
| `WOM` | WOM |
| `WOWX` | WOWX |
| `WOW` | WOWswap |
| `WRT` | WRTcoin |
| `WTXH` | WTX HUB |
| `WU` | WULET |
| `WXT` | WXT |
| `WTK` | WadzPay Token |
| `WGR` | Wagerr |
| `WAIF` | Waifu Token |
| `WMT.CUR` | Wal-Mart Stores Inc |
| `WBA.CUR` | Walgreen Boots Alliance |
| `WSG` | Wall Street Games |
| `WSB` | WallStreetBets DApp |
| `XPAY` | Wallet Pay |
| `WPX` | Wallet Plus X |
| `DIS.CUR` | Walt Disney |
| `WTC` | Waltonchain |
| `WANA` | Wanaka Farm |
| `WAI` | Wanaka Farm WAIRERE Token |
| `WAN` | Wanchain |
| `WAND` | WandX |
| `WARP` | WarpCoin |
| `WASABI` | WasabiX |
| `WASH` | WashingtonCoin |
| `WUG` | WatchUGot |
| `WMB` | WatermelonBlock |
| `WAULT` | Wault Finance |
| `WAVES` | Waves |
| `WCT` | Waves Community Token |
| `WEST` | Waves Enterprise |
| `WGO` | WavesGO |
| `WBET` | Wavesbet |
| `WNET` | Wavesnode.net |
| `WAY` | WayCoin |
| `W.CUR` | Wayfair Cl A |
| `WICC` | WaykiChain |
| `WGRT` | WaykiChain Governance Coin |
| `WRX` | WazirX |
| `WSX` | WeAreSatoshi |
| `WON` | WeBlock |
| `WBY` | WeBuy |
| `WGC` | WeGen Platform |
| `WPR` | WePower |
| `WET` | WeShow Token |
| `WAR` | WeStarter |
| `WT` | WeToken |
| `WEALTH` | WealthCoin |
| `WVR` | Weave |
| `WFX` | WebFlix |
| `WEBC` | Webchain |
| `WEB` | Webcoin |
| `WCS` | Weecoins |
| `WDX` | WeiDex |
| `WB.CUR` | Weibo Corporation |
| `WELD` | Weld |
| `WELL` | Well |
| `WLME` | Wellmee |
| `WFC.CUR` | Wells Fargo & Co |
| `WTL` | Welltrado |
| `WMK` | Wemark |
| `WEMIX` | Wemix Token |
| `WENLAMBO` | Wenlambo |
| `WRZ` | Weriz |
| `WEX` | Wexcoin |
| `WHL` | WhaleCoin |
| `AWT` | WhatsOnPic |
| `WHEAT` | Wheat Token |
| `WHEEL` | Wheelers |
| `WHEN` | WhenHub |
| `WHIRL` | Whirl Finance |
| `WHY` | Whisky Token |
| `WP` | White Pigeon |
| `WSD` | White Standard |
| `WSLT` | White Stripe Lottery |
| `XWC` | WhiteCoin |
| `WHITE` | Whiteheart |
| `WLL.CUR` | Whiting Petroleum |
| `NODE` | Whole Network |
| `WIC` | Wi Coin |
| `WBX` | WiBX |
| `WBBC` | Wibcoin |
| `WIB` | Wibson |
| `WDR` | Wider Coin |
| `WIFEDOGE` | Wifedoge |
| `WIFI` | Wifi Coin |
| `WIIX` | Wiix |
| `WIKI` | Wiki Token |
| `WBB` | Wild Beast Coin |
| `WILDC` | Wild Crypto |
| `WILD` | Wilder World |
| `WNRZ` | WinPlay |
| `WINS` | WinStars |
| `WINT` | WinToken |
| `WCC` | Wincash Coin |
| `WMD` | WindMine |
| `WHN` | Windhan Energy |
| `LIF` | Winding Tree |
| `JCB` | Wine Chain |
| `WINE` | WineCoin |
| `WING` | Wing Finance |
| `WINGS` | Wings DAO |
| `WINK` | Wink |
| `WISC` | WisdomCoin |
| `WISE` | Wise Token |
| `WSC` | WiserCoin |
| `WSH` | Wish Finance |
| `WIT` | Witcoin |
| `WIX` | Wixlar |
| `WLF` | Wolfs Group |
| `WLK` | Wolk |
| `WOWS` | Wolves of Wall Street |
| `WOMEN` | WomenCoin |
| `WND` | WonderHero |
| `TIME` | Wonderland |
| `LOG` | Wood Coin |
| `WOOFY` | Woofy |
| `WOONK` | Woonkly |
| `WOOP` | Woonkly Power |
| `WOO` | Wootrade |
| `WQT` | Work Quest |
| `WDAY.CUR` | Workday Inc |
| `WCG` | World Crypto Gold |
| `WRLGC` | World Gold Coin |
| `WMT` | World Mobile Token |
| `$TREAM` | World Stream Finance |
| `WORLD` | World Token |
| `XWT` | World Trade Funds |
| `WOD` | World of Defish |
| `WOBTC` | WorldBTC |
| `WDC` | WorldCoin |
| `WOP` | WorldPay |
| `WRC` | Worldcore |
| `WPT` | Worldopo |
| `WAXP` | Worldwide Asset eXchange |
| `WORX` | Worx |
| `WWB` | Wowbit |
| `WANATHA` | Wrapped ANATHA |
| `WBIND` | Wrapped BIND |
| `WBNB` | Wrapped BNB |
| `WBTC` | Wrapped Bitcoin |
| `WCELO` | Wrapped Celo |
| `WCUSD` | Wrapped Celo Dollar |
| `WCFG` | Wrapped Centrifuge |
| `WCCX` | Wrapped Conceal |
| `WOMI` | Wrapped ECOMI |
| `WFIL` | Wrapped Filecoin |
| `WILC` | Wrapped ILCOIN |
| `WLUNA` | Wrapped LUNA Token |
| `WMATIC` | Wrapped Matic |
| `MCAT20` | Wrapped Moon Cats |
| `WNCG` | Wrapped NCG |
| `WNXM` | Wrapped NXM |
| `WNYC` | Wrapped NewYorkCoin |
| `WOA` | Wrapped Origin Axie |
| `wsOHM` | Wrapped Staked Olympus |
| `WXTZ` | Wrapped Tezos |
| `WUST` | Wrapped UST Token |
| `WVG0` | Wrapped Virgin Gen-0 CryptoKittties |
| `WXDAI` | Wrapped XDAI |
| `WZEC` | Wrapped Zcash |
| `WYR` | Wyrify |
| `WYS` | Wysker |
| `XRED` | X Real Estate Development |
| `XWG` | X World Games |
| `IX` | X-Block |
| `XCASH` | X-CASH |
| `XC` | X11 Coin |
| `X2` | X2Coin |
| `X42` | X42 Protocol |
| `X8X` | X8Currency |
| `XAEAXII` | XAEA-Xii Token |
| `XAYA` | XAYA |
| `XBE` | XBE Token |
| `XCAD` | XCAD Network |
| `XCZ` | XCOYNZ |
| `XCO` | XCoin |
| `XFYI` | XCredit |
| `XDEFI` | XDEFI |
| `XDNA` | XDNA |
| `XELS` | XELS Coin |
| `XTN` | XEND token |
| `XG` | XG Sports |
| `XIO` | XIO |
| `XLMDOWN` | XLMDOWN |
| `XLMUP` | XLMUP |
| `XMON` | XMON |
| `XMX` | XMax |
| `XOV` | XOVBank |
| `XPNET` | XP Network |
| `XPO.CUR` | XPO Logistics |
| `POCKET` | XPocket |
| `XRP` | XRP |
| `XRPDOWN` | XRPDOWN |
| `XRPUP` | XRPUP |
| `XSGD` | XSGD |
| `SYL` | XSL Labs |
| `XSP` | XSwap |
| `XT` | XT.com Token |
| `XBY` | XTRABYTES |
| `XUEZ` | XUEZ |
| `XUSD` | XUSD Stable |
| `XXX` | XXXCoin |
| `XYO` | XY Oracle |
| `XNX` | XanaxCoin |
| `XANK` | Xank |
| `XAU` | XauCoin |
| `XAUR` | Xaurum |
| `XLD` | Xcel Defi |
| `XCEL` | XcelTrip |
| `XLAB` | Xceltoken Plus |
| `XCG` | Xchange |
| `XDEF2` | Xdef Finance |
| `XEND` | Xend Finance |
| `XNC` | Xenios |
| `XEN` | XenixCoin |
| `XNO` | Xeno Token |
| `XNN` | Xenon |
| `XENO` | Xenoverse |
| `XSR` | Xensor |
| `XNB` | Xeonbit |
| `XFI` | Xfinance |
| `XFIT` | Xfit |
| `MI` | XiaoMiCoin |
| `1810.CUR` | Xiaomi corp. |
| `XIASI` | Xiasi Inu |
| `XLNX.CUR` | Xilinx, Inc. |
| `XDC` | Xinfin Network |
| `XGT` | Xion Finance |
| `XIOS` | Xios |
| `XIOT` | Xiotri |
| `XETH` | Xplosive Ethereum |
| `XRIBA` | Xriba |
| `XT3` | Xt3ch |
| `XTNC` | XtendCash |
| `XTX` | Xtock |
| `XRBT` | Xtribe |
| `YAM` | YAM |
| `YAMV1` | YAM v1 |
| `YAMV2` | YAM v2 |
| `YAY` | YAY Games |
| `YAYCOIN` | YAYcoin |
| `YAC` | YAcCoin |
| `YDR` | YDragon |
| `YTN` | YENTEN |
| `YFL` | YF Link |
| `YFARM` | YFARM Token |
| `YFF` | YFF.Finance |
| `YFFII` | YFFII Finance |
| `YFIDOWN` | YFIDOWN |
| `YFIE` | YFIEXCHANGE.FINANCE |
| `YFO` | YFIONE |
| `YFIS` | YFISCURITY |
| `YFIUP` | YFIUP |
| `YFIVE` | YFIVE FINANCE |
| `YFPRO` | YFPRO Finance |
| `YFTE` | YFTether |
| `YFV` | YFValue |
| `YFR` | YFarmer |
| `YLD` | YIELD App |
| `YIN` | YIN Finance |
| `YOSI` | YOI SHIBA INU |
| `YOU` | YOU Chain |
| `YOUC` | YOUengine |
| `UNTD` | YOUnited |
| `YPTO` | YPTOspace |
| `YPRO` | YPro.Finance |
| `YUSRA` | YUSRA |
| `YVS` | YVS.Finance |
| `YY.CUR` | YY Inc. |
| `YYFI` | YYFI.Protocol |
| `YACHTCO` | Yachtco |
| `YAG` | Yaki Gold |
| `YMC` | YamahaCoin |
| `YMZ` | Yamzu |
| `YNDX.CUR` | Yandex N.V. |
| `YANU` | Yanu |
| `YAP` | Yap Stone |
| `YBC` | YbCoin |
| `YEC` | Ycash |
| `YDY` | Ydentity |
| `YEFI` | YeFi |
| `YCBF` | Yearn Coin Barter Finance |
| `YVBOOST` | Yearn Compounding veCRV yVault |
| `YFBT` | Yearn Finance Bit |
| `YSEC` | Yearn Secure |
| `YEE` | Yeeco |
| `YEL` | Yel.Finance |
| `YBT` | YellowBetter |
| `YELP.CUR` | Yelp |
| `YES` | YesCoin |
| `YETU` | Yetucoin |
| `YFDAI` | YfDAI.finance |
| `YEED` | Yggdrash |
| `YFXL` | Yield Farming XL |
| `YGG` | Yield Guild Games |
| `YOP` | Yield Optimization Platform & Protocol |
| `YIELD` | Yield Protocol |
| `YLDY` | Yieldly |
| `WATCH` | Yieldwatch |
| `YINBI` | Yinbi |
| `YOC` | YoCoin |
| `YO` | Yobit Token |
| `YOVI` | YobitVirtualCoin |
| `YOCO` | YocoinYOCO |
| `YON` | YondoCoin |
| `YOOSHI` | YooShi |
| `YSH` | Yoshi |
| `YTA` | YottaChain |
| `U42` | You42 |
| `UC` | YouLive Coin |
| `YFX` | Your Futures Exchange |
| `YBK` | YourBlock |
| `YOYOW` | Yoyow |
| `YSR` | Ystar |
| `YCC` | Yuan Chain Coin |
| `YUANG` | Yuang Coin |
| `YUM` | Yumerium |
| `YUMMY` | Yummy |
| `Z2` | Z2 Coin |
| `ZAB` | ZABERcoin |
| `ZAZA` | ZAZA |
| `ZB` | ZB |
| `ZT` | ZBG Token |
| `ZCC` | ZCC Coin |
| `ZEC` | ZCash |
| `ZECD` | ZCashDarkCoin |
| `ZCG` | ZCashGOLD |
| `ZCL` | ZClassic |
| `ZCR` | ZCore |
| `ZNZ` | ZENZO |
| `ZINC` | ZINC |
| `ZIX` | ZIX Token |
| `ZJLT` | ZJLT Distributed Factoring Network |
| `ZKS` | ZKSwap |
| `ZLQ` | ZLiteQubit |
| `ZMN` | ZMINE |
| `ZNAQ` | ZNAQ |
| `ZPR` | ZPER |
| `ZSE` | ZSEcoin |
| `ZUNA` | ZUNA |
| `ZITARA` | ZUSD |
| `ZVC` | ZVCHAIN |
| `ZABAKU` | Zabaku Inu |
| `ZEX` | Zaddex |
| `ZAIF` | Zaif Token |
| `ZAM` | Zamio |
| `ZANO` | Zano |
| `ZAP` | Zap |
| `ZAPP` | Zappermint |
| `ZAT` | ZatGo |
| `ZYD` | ZayedCoin |
| `ZCON` | Zcon Protocol |
| `ZXT` | Zcrypt |
| `NZL` | Zealium |
| `ZCO` | Zebi Coin |
| `ZED` | ZedCoins |
| `ZDEX` | Zeedex |
| `ZPT` | Zeepin |
| `ZEEW` | Zeew |
| `ZEIT` | ZeitCoin |
| `ZPAE` | ZelaaPayAE |
| `ZEL` | Zelcash |
| `ZLS` | Zelerius |
| `ZLW` | Zelwin |
| `ZP` | Zen Protocol |
| `ZND` | Zenad |
| `ZEFU` | Zenfuse |
| `ZENI` | Zennies |
| `ZNA` | Zenome |
| `ZNN` | Zenon |
| `ZEON` | Zeon Network |
| `ZEPH` | Zeph |
| `ZEP` | Zeppelin Dao |
| `ZPTC` | Zeptacoin |
| `ZER` | Zero |
| `ZAI` | Zero Collateral Dai |
| `ZERO` | Zero Tech |
| `ZUT` | Zero Utility Token |
| `ZEROB` | ZeroBank |
| `ZCC1` | ZeroCarbon |
| `ZEE` | ZeroSwap |
| `ZEST` | ZestCoin |
| `ZET2` | Zeta2Coin |
| `ZET` | ZetaCoin |
| `ZTN` | Zetanet |
| `ZSC` | Zeusshield |
| `ZUC` | Zeux |
| `ZCHN` | Zichain |
| `ZIG` | Zignaly |
| `ZWAP` | ZilSwap |
| `ZBC` | Zilbercoin |
| `ZLA` | Zilla |
| `ZLST` | Zillios |
| `ZIL` | Zilliqa |
| `ZIN` | Zin Finance |
| `ZMT` | Zipmex Token |
| `ZIP` | Zipper |
| `ZIPT` | Zippie |
| `ZDR` | Zloadr |
| `ZOE` | Zoe Cash |
| `ZOI` | Zoin |
| `ZNE` | ZoneCoin |
| `ZOOT` | Zoo Token |
| `ZOO` | ZooCoin |
| `ZM` | Zoom |
| `ZOOM` | ZoomCoin |
| `ZMY` | Zoomy |
| `ZOPT` | Zoptax |
| `ZORT` | Zort |
| `ZRC` | ZrCoin |
| `ZCOR` | Zrocor |
| `ZFL` | Zuflo Coin |
| `ZUM` | ZumCoin |
| `ZUP` | Zupply Token |
| `ZUR` | Zurcoin |
| `ZUUM` | Zuum |
| `ZYN` | Zynecoin |
| `ZYRO` | Zyro |
| `ZYTARA` | Zytara dollar |
| `AGT` | aGifttoken |
| `AQU` | aQuest |
| `AXPR` | aXpire |
| `AAS` | aassio |
| `ELF` | aelf |
| `AGEUR` | agEUR |
| `APM` | apM Coin |
| `BALPHA` | bAlpha |
| `SBDO` | bDollar Share |
| `BPN` | beepnow |
| `OX` | betbox |
| `BCEO` | bitCEO |
| `BITCNY` | bitCNY |
| `BITGOLD` | bitGold |
| `BITSILVER` | bitSilver |
| `BITUSD` | bitUSD |
| `BLUE.CUR` | bluebird bio, Inc. |
| `CCOMP` | cCOMP |
| `CUSDT` | cUSDT |
| `CORE` | cVault.finance |
| `CSQ` | cosquare |
| `DART` | dART Insurance |
| `DAPPX` | dAppstore |
| `DF` | dForce |
| `DFND` | dFund |
| `DHT` | dHedge DAO |
| `DKA` | dKargo |
| `DYDX` | dYdX |
| `DCS` | deCLOUDs |
| `DDOS` | disBalancer |
| `DNT` | district0x |
| `MOOV` | dotmoovs |
| `ECHT` | e-Chat |
| `NGM` | e-Money |
| `EBAY.CUR` | eBay |
| `EBIT` | eBit |
| `EBTC` | eBitcoin |
| `EBST` | eBoost |
| `XEC` | eCash |
| `EGI` | eGame |
| `ELTC2` | eLTC |
| `LYQD` | eLYQD |
| `DEM` | eMark |
| `EMU` | eMusic |
| `ePRX` | eProxy |
| `EREAL` | eREAL |
| `ESW` | eSwitch® |
| `AUDX` | eToro Australian Dollar |
| `CADX` | eToro Canadian Dollar |
| `CNYX` | eToro Chinese Yuan |
| `EURX` | eToro Euro |
| `GOLDX` | eToro Gold |
| `HKDX` | eToro Hong Kong Dollar |
| `JPYX` | eToro Japanese Yen |
| `NZDX` | eToro New Zealand Dollar |
| `POLNX` | eToro Polish Zloty |
| `RUBX` | eToro Russian Ruble |
| `SLVX` | eToro Silver |
| `SGDX` | eToro Singapore Dollar |
| `ZARX` | eToro South African Rand |
| `CHFX` | eToro Swiss Franc |
| `TRYX` | eToro Turkish Lira |
| `USDEX` | eToro US Dollar |
| `XPC` | eXPerience Chain |
| `EDEXA` | edeXa Security Token |
| `EMPR` | empowr |
| `VOY` | enVoy DeFi |
| `BLACK` | eosBLACK |
| `EOSDAC` | eosDAC |
| `FTG` | fantomGO |
| `FDX` | fidentiaX |
| `GASP` | gAsp |
| `GCN` | gCn Coin |
| `FFUEL` | getFIFO |
| `GOTEM` | gotEM |
| `GZIL` | governance ZIL |
| `HBE` | healthbank |
| `HI` | hi Dollar |
| `ICHN` | i-chain |
| `I9C` | i9 Coin |
| `IBG` | iBG Token |
| `IBNB` | iBNB |
| `IBANK` | iBankCoin |
| `IBFR` | iBuffer Token |
| `DEAL` | iDealCash |
| `IDICE` | iDice |
| `IETH` | iEthereum |
| `RLC` | iExec |
| `IOWN` | iOWN Token |
| `ILT` | iOlite |
| `OSC` | iOscar |
| `IRBT.CUR` | iRobot Corporation |
| `ITU` | iTrue |
| `IW` | iWallet |
| `IXT` | iXledger |
| `IMU` | imusify |
| `SURE` | inSure |
| `ITM` | intimate.io |
| `IOEX` | ioeX |
| `TANGO` | keyTango |
| `KXUSD` | kxUSD |
| `MCN` | mCoin |
| `MUSD` | mStable USD |
| `MVU` | meVu |
| `MIBO` | miBoodle |
| `MINISHIB` | miniSHIB ETH |
| `MOOLYA` | moolyacoin |
| `NOS` | nOS |
| `N0031` | nYFI |
| `NII` | nahmii |
| `NDAU` | ndau |
| `pBTC35A` | pBTC35A |
| `PEOS` | pEOS |
| `PNT` | pNetwork Token |
| `STKATOM` | pSTAKE Staked ATOM |
| `STKXPRT` | pSTAKE Staked XPRT |
| `PUX` | pukkamex |
| `RUGZ` | pulltherug.finance |
| `MOON` | r/CryptoCurrency Moons |
| `R3FI` | r3fi.finance |
| `redBUX` | redBUX |
| `RFI` | reflect.finance |
| `RENBTC` | renBTC |
| `RENDOGE` | renDOGE |
| `SETH2` | sETH2 |
| `SKLAY` | sKLAY |
| `SUSD` | sUSD |
| `SVD` | savedroid |
| `SBA` | simplyBrand |
| `SSV` | ssv.network |
| `TBTC` | tBTC |
| `TAI` | tBridge Token |
| `UPX` | uPlexa |
| `UGC` | ugChain |
| `UNDB` | unibot.cash |
| `VSL` | vSlice |
| `VSPACEX` | vSpaceX |
| `VTAG` | veriTAG Token |
| `WLITI` | wLITI |
| `STAKE` | xDai Chain |
| `XETH-G` | xETH-G |
| `XFUND` | xFund |
| `XTAG` | xHashtag |
| `XNFT` | xNFT Protocol |
| `XSUSHI` | xSUSHI |
| `XTK` | xToken |
| `XWIN` | xWIN Finance |
| `NSFW` | xxxNifty |
| `YAXIS` | yAxis |
| `YFI` | yearn.finance |
| `YFBETA` | yfBeta |
| `YFFC` | yffc.finance |
| `YFFI` | yffi finance |
| `YSAFE` | yieldfarming.insure |
| `ZLOT` | zLOT Finance |
| `ZKT` | zkTube |
| `ZZZ` | zzz.finance |
| `ZZZV2` | zzz.finance v2 |
| `OPET` | ÕpetFoundation |
| `ETSC` | ​Ether star blockchain |

<!-- END TABLE INJECT -->

## Building

The JSON list, the currency icons, and the Markdown Table shown above (in this readme) are auto-generated
from the coin list made available by the [cryptocompare coinlist API](https://www.cryptocompare.com/api/data/coinlist/),
and can be updated automatically by running:

```
$ npm run build
```

## License

MIT © [Crypti Team](https://github.com/crypti)

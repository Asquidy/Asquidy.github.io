---
layout: post
title: "A Guide To Using Private Sector Data for Research (Part 1)"
category: posts
tags:
quality: good
post_type: essay
---

*Introduction* 

Private sector data is increasingly used in economics and other social science research. By private sector data, I mean data on product usage, transactions and other internal operations that is stored within companies. The process of obtaining and working with such data poses unique challenges that are not present in traditionally used datasets (surveys and administrative data). In this guide I seek to discuss the important choices that researchers must make when pursuing research with the private sector. My qualification for writing this guide is my experience working with datasets from Airbnb, Google and Womply as well as my failures in obtaining datasets from other well known companies. I hope that this guide will be a useful resource for social scientists and others considering the best way to use "Big Data" to push the research frontier.

The guide is organized into the following parts:

1. [The Pros and Cons of Using Private Sector Data](#why)

2. [Getting Access to Private Sector Data](#access)

3. [Effectively Doing Research with Private Data](#effectively) 

___

<a name="why"></a>

*The Pros and Cons of Using Private Sector Data*

The main draw of private sector data is that it allows social scientists to observe previously unobservable data. Much of economic theory involves theoretical objects, such as search activity, consumption, communication and production costs, for which empirical analogues are hard to obtain. Social scientists have typically tried to get around their lack of data by making strong assumptions about behavior. For example, in the field of industrial organization, the costs of production are typically inferred from the production and pricing decisions of firms. Similarly, macroeconomics and labor economics typically make assumption about the process of search and matching. Private sector data provides new ways of allowing us to directly test those assumptions and to quantify the importance of theoretical mechanisms in the real world. For example, in my work with Scott Baker, we use data on Google Searches for the term 'jobs' to create a proxy for aggregate job search effort. We then use this data to study what happened to job search in response to the expansions of unemployment insurance benefits. 

Private sector data also has other benefits for researchers. First of all, companies are often much less bureaucratic organizations than governments. Thus, it is much easier to run experiments or to exert influence on policy within a company rather than a government. Secondly, working with a company gives researchers a view inside of a company. This view is rare for career academics to have and often informs research in a positive way. For example, when I started researching Airbnb, I was mostly interested in how the platform reduces transaction costs and improves matches. However, while working at the company and talking to decision makers, I realized that experimental design is really important and challenging for marketplaces. This lesson was reflected in my thesis research, which explicitly models the differences between the true effects of experiments and the suboptimal ways in which experimental analysis is typically done. Lastly, there are specific tools (such as Hadoop, Hive and Github) that are increasingly used within companies but are not taught by academics. These tools are useful to learn because they are oftentimes more effective than the tools used by academics and because they help in obtaining high quality non-academic jobs. The last, and probably least important, benefit of working with private sector data is money. I was able to finance part of my grad school by working a part-time job with Airbnb.

However, working with private data is extremely risky. The biggest risk is data quality. Even if companies do record the data you are interested in, it is often the case that what is recorded is incomplete and difficult to access. Therefore, almost any plans for a project with a dataset will be greatly complicated by missing documentation and data. In mine and my classmates' experiences, it typically takes a year to learn enough of the relevant details of a company's data infrastructure to do good research. This also highlights why a relationship where the researcher does not have direct access to the data typically does not work. Researchers learn about data by manipulating it, asking further questions and iterating. If each iteration step required work from a company employee then progress would be slow and the company employees could become resentful of the researcher. The above problems might be mitigated if the data is very standardized, as in the case of auction data with bids and final sales. Another problem can occur when using data that companies publish online, such as Google Trends or Orbitz Labs data on hotel prices. This data is derived from the underlying behavioral data in a peculiar way that can be harmful to proper statistical analysis. For example, Google Trends is a public dataset that is supposed to be a proxy for the aggregate volume of searches for a particular term on Google. However, because Google oftentimes changes its product (by changing the suggested terms for a term or the algorithm), the aggregate data series may move in ways unrelated to the underlying behavior of interest. It is typically difficult to correct for these imperfections using statistical techniques. See [this Science article] (http://www.sciencemag.org/content/343/6176/1203) for more discussion of the pitfalls of aggregated private sector data.

There are other important risks when working with the private sector as a researcher:

- *Ambiguous Relationships:* The company justifiably does not want negative information to be released. Even if there is a formal agreement between the company and the researcher, there is often unspoken pressure to suppress any potentially negative information. Potential conflicts of interest highlight why, when engaged in a formal agreement with the company, it is prudent to stay out of political issues. Therefore, some avenues of research are closed off to the researcher. On the other hand, if the data is being obtained without permission, though scraping, there are different pitfalls. Specifically, the company can often detect scraping activity and fight it by banning specific ips or by serving false data to the scraper.

- *Reproducibility:* Company data is often subject to a Non-Disclosure Agreement (NDA). NDA's typically state that raw data cannot be released to the public for reproduction. Furthermore, some data, such as summary statistics, are also embargoed by company lawyers. This is a big problem for researchers using private data because reproducibility is a huge problem and is becoming an important requirement for journal submission. Even 'simple' data analysis is oftentimes non-reproducible. Reproducibility is even more important for sophisticated econometric strategies, which have a much higher chance of programming error.[^1]

- *Time Horizon:* Lastly, research takes a long time, especially in economics where the time from journal submission to publishing often exceeds 2 years even without a rejection. It is very difficult for a company to commit to such a long-term relationship if only because the employees of the company are likely to change within that span of time. Therefore, undertaking long-run research agendas with internal company data is inherently dangerous This is also a problem with scraping research strategies because the company may shut off the ability to scrape at some future time. Lastly, doing research on a company also involves making a bet on the future of a company. For example, Ned Augenblick's [paper](http://faculty.haas.berkeley.edu/ned/Augenblick_JMP_Penny_Auction.pdf) about penny options would probably be more read today if the site he studies, Swoopo, did not go bankrupt.


<a name="access"></a>

*Getting Access to Private Sector Data*

(Coming Soon)

<a name="effectively"></a>
*Effectively Doing Research with Private Data*

(Coming Soon)

[^1]: See [this Economist article](http://www.economist.com/news/briefing/21588057-scientists-think-science-self-correcting-alarming-degree-it-not-trouble) for a good overview of the state of reproducibility in science. 
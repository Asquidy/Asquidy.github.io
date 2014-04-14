---
layout: post
title: "A Guide To Using Private Sector Data for Research"
category: posts
tags:
quality: good
post_type: essay
---

*Introduction* 

Private sector data is increasingly used in economics and other social science research. By private sector data, I mean data concerning product usage, transactions and other operations that is stored within corporate databases. The process of obtaining and working with such data poses challenges that are not present in surveys and administrative data. In this guide I discuss the process by which researchers obtain and pursue research with the private sector. My qualification for writing this guide is my experience working with datasets from Airbnb, Google, Zonability and Womply, as well as my failures in obtaining datasets from other well known companies. I hope that this guide will be a useful resource for social scientists and others considering the best way to use "Big Data" to push the research frontier.

The guide is organized into the following parts:

1. [The Pros and Cons of Using Private Sector Data](#why)

2. [How to Obtain Access to Private Sector Data](#access)

3. [Thoughts About Working with Private Data](#effectively) (Coming Soon)

If you have any comments, questions or stories please email me at: afradkin (at) gmail (dot) com
___

<a name="why"></a>

*The Pros and Cons of Using Private Sector Data*

The main draw of private sector data for social scientists is the ability to observe previously unobservable data. Much of economic theory involves theoretical objects, such as search activity, consumption, communication and production costs, for which empirical analogues are hard to obtain. Social scientists have typically tried to get around their lack of data by making strong assumptions about behavior. For example, in the field of industrial organization, the costs of production are typically inferred from the production and pricing decisions of firms. Similarly, macroeconomics and labor economics typically make assumption about the process of search and matching. Private sector data provides new ways of allowing us to directly test those assumptions and to quantify the importance of theoretical mechanisms in the real world. For example, in my work with Scott Baker, we use data on Google Searches for the term 'jobs' to create a proxy for aggregate job search effort. We then use this data to study what happened to job search in response to the expansions of unemployment insurance benefits. 

Private sector data also has other benefits for researchers. First, companies are often less bureaucratic than governments. Thus, it is easier to run experiments or to exert influence on policy within a company. Secondly, working with a company gives researchers a view inside of a company. This view is rare for career academics and often informs research in a positive way. For example, when I started researching Airbnb, I was mostly interested in how the platform reduces transaction costs and improves matches. However, while working at the company and talking to decision makers, I realized that experimental design is really important and challenging for marketplaces. This lesson was reflected in my thesis research, which explicitly models the differences between the true effects of experiments and the estimated effects of experiments obtained by standard, but biased, methods. Lastly, there are specific tools (such as Hadoop, Hive and Github) that are increasingly used within companies but are not taught by academics. These tools are useful to learn because they are oftentimes more effective than the tools used by academics and because they help in obtaining high quality non-academic jobs. The last, and probably least important, benefit of working with private sector data is money. I was able to finance part of my grad school by working a part-time job with Airbnb.

However, working with private data is risky. The biggest risk is data quality. Even if companies do record the data you are interested in, it is often the case that what is recorded is incomplete and difficult to access. Therefore, almost any plans for a project with a dataset will be greatly complicated by missing documentation and data. It typically takes a year to learn enough of the relevant details of a company's data infrastructure to do good research. This also highlights why a relationships where the researcher has direct access to the company databases is better. Researchers learn about data by manipulating it, asking further questions and iterating. If each iteration step required work from a company employee then progress would be slow and the company employees could become resentful of the researcher. The above problems might be mitigated if the data is very standardized, as in the case of auction data with bids and final sales. Another problem can occur when using data that companies publish online, such as Google Trends or Orbitz Labs data on hotel prices. This data is derived from the underlying behavioral data in a peculiar way that can be harmful to proper statistical analysis. For example, Google Trends is a public dataset that is supposed to be a proxy for the aggregate volume of searches for a particular term on Google. However, because Google oftentimes changes its product (by changing the suggested terms for a term or the algorithm), the aggregate data series may move in ways unrelated to the underlying behavior of interest. It is typically difficult to correct for these imperfections using statistical techniques. See [this Science article](http://www.sciencemag.org/content/343/6176/1203) for more discussion of the pitfalls of aggregated private sector data.

There are other important risks when working with the private sector as a researcher:

- *Ambiguous Relationships:* The company justifiably does not want negative information to be released. Even if there is a formal agreement between the company and the researcher, there is often unspoken pressure to suppress potentially negative information. It is therefore prudent to avoid doing research on overtly political issues. On the other hand, if the data is being obtained without permission, though scraping, there are different pitfalls. Specifically, the company can often detect scraping activity and fight it by banning specific IP addresses or by serving false data to the scraper.

- *Reproducibility:* Company data is often subject to a Non-Disclosure Agreement (NDA). NDA's typically state that raw data cannot be released to the public for reproduction. Furthermore, some data, such as summary statistics, are also embargoed by company lawyers. This is a big problem for researchers using private data because reproducibility is a huge problem and is becoming an important requirement for journal submission. Even 'simple' data analysis is oftentimes non-reproducible. Reproducibility is even more important for sophisticated econometric strategies, which have a much higher chance of programming error.[^1]

- *Time Horizon:* Lastly, research takes a long time, especially in economics where the time from journal submission to publishing often exceeds 2 years even without a rejection. It is very difficult for a company to commit to such a long-term relationship if only because the employees of the company are likely to change within that span of time. Therefore, undertaking long-run research agendas with internal company data is inherently dangerous This is also a problem with scraping research strategies because the company may shut off the ability to scrape in the future. Lastly, doing research on a company also involves making a bet on the future of a company. For example, Ned Augenblick's [paper](http://faculty.haas.berkeley.edu/ned/Augenblick_JMP_Penny_Auction.pdf) about penny options would probably be more read today if the site he studies, Swoopo, did not go bankrupt.

___
<a name="access"></a>

*How to Obtain Access to Private Sector Data*
<!--- Mention Company Size? -->
Let's say that you've thought long and hard about your research project and that you've decided that you want a specific type of data. There are three ways to get it: ask for it directly from a company, get it from a third-party or collect the data yourself (through scraping, surveys or field studies). To take a concrete example, suppose that you want an individual level browsing history. Here are some strategies that you might take:

1. Ask a company like Google, Microsoft or Apple for data.

2. Ask for or purchase data from a third-party like Quantcast, Nielsen or Comscore.

3. Collect your own data. For example, you could create an app that downloads individual browsing histories with the permission of the user. For other types of data you could try scraping information from websites.
	
First, you should seriously consider all strategies, one of several approaches might be sufficient for your purposes, even if each approach is imperfect. Second, you should pursue as many options as possible because most of your attempts will likely fail. Furthermore, datasets from different sources are often complimentary to each other. For example, data from Airbnb is very detailed but does not include data on traditional hotel supply and demand. On the other hand, [STR](http://strglobal.com/) collects more aggregated data on hotel supply and demand across markets and over time. These two datasets are a lot more powerful together than alone. There are pros and cons for each of the above approaches. Internal company data will likely be the most detailed but will also be the hardest to get and will come with the most restrictions. Third-party party data is easier to obtain but is often limited and very expensive.[^2] Creating you own data is unlikely to work well for web browsing data because few users will want to give away their browsing histories. Each dataset will also suffer from varying degrees of non-representativeness. Below, I focus on approaches 1 and 2, because there are already great guides to approach 3.[^3] 

The standard way to ask for data is to look up an appropriate person within a company (using LinkedIn or Twitter) and to send an introductory email. The median outcome from a cold email is no response. Even if there is a response, it will likely not lead anywhere because someone in the company will try to block the research arrangement. Some employees will view the researcher as a hassle because extracting the data, talking to researchers and getting formal approval for the project takes effort. Others will view the research proposal as a business risk because there's always a chance that the researcher finds out something unpleasant about the company or is careless with the data. Furthermore, there is often a perception that academic research is hard to apply to practical company problems.[^4] Each of these objections should be addressed at some point in your conversation with the company (although not in the initial email). There are several approaches that increase the likelihood that your data request will be taken seriously:

- _Use Your Social Network_: 
	One of the best ways to get your data request taken seriously is to have a reference. Many students at Stanford, for example, have obtained data because a professor has done connections at a specific company. Alternatively, people often find that friends from college with high quality connections at companies. LinkedIn is a useful tool for finding such connections. Lastly, you can try to make your own connection with a company by going to industry events and meet-ups.  

- _Demonstrate Value_: 
	One way to get attention within a company is to write a great blog post or paper on a related subject. This strategy works because it credibly signals that you are serious and capable of doing good work. Furthermore, companies are often eager to have someone write data-centric blog posts for them. This strategy worked for John Horton when Uber contacted him after this [post](http://john-joseph-horton.com/market-clearing-without-consternation-the-case-of-ubers-surge-pricing/).   

<!--- Other Examples? -->

- _Be a Recognized Expert_: 
	It is much easier to convince a company to pay attention if you've published academic papers and received accolades. It is difficult to achieve this status in the short-run but it is worth playing up any external indicators of expertise in conversations. 

- _Get an Internship_: 
	Perhaps the best way to start doing research with company data is to get an internship with that company first. Many companies have formal summer internships and others are willing to consider an internship even without a formal position. Doing an internship will allow you to befriend co-workers, learn more about the company and familiarize yourself with the data. If you do a good job then the company will be much more willing to let you do research with its data. The major cost of an internship is that you spend less time at the department talking with researchers and listening to seminars.[^5]

Getting data is still not trivial even after the company has agreed to talk to you. I've talked with 3 different companies who ultimately said no even after initial interest and a proposal. I spent 4 months writing proposals and meeting with one company, who after a change of management decided to back out. The data agreement process typically starts with the company asking for a research proposal and then meeting to discuss that proposal. Here are my recommendations for such a proposal. First, the proposal cannot be technical because the people reading it need to understand it. Even if you have a sophisticated model, try to explain it in the simplest words. Second of all, you should stress how the research will be useful to the company. Try to include something in the proposal that an analyst within the company should already be doing. You can also offer to create an infographic, index or blog post. Lastly, and most importantly, do not spend too much time on the proposal. The likelihood of failure is high and even if you get the data your research strategy will probably change. There is a much higher return to talking to multiple companies and making a mediocre proposal for each one than in talking to one company with a really good proposal. The details of the proposal are much less likely to matter than other factors such as your credentials and how you carry yourself in meetings with the company. Even if you succeed, it will take between a month and a year to actually actually receive the data, by which point the exact research strategy is likely to have changed. 

The key part to getting the data is the meeting with company employees and making a good impression. The employees must come away thinking that you are competent and easy to communicate with. Everyone has their own way to prepare for this type of meeting. I try to get good sleep the night before, to know as much as possible about the company and to think through the ways in which I can respond to possible objections from the company.

An important part of any data sharing agreement is the exact way in which the data will be shared. There amount of access that a researcher gets lies between two extremes: a one off data pull and direct access to company databases. It is, of course, more desirable to get as much direct access to the company's databases. The benefits of direct access are: more control over the exact data you receive, the ability to quickly iterate if you need additional variables or a different sample, and the ability to explore other types of data that you may not have thought about when writing the proposal. If you manage to get access to the code repository, you can find previously run experiments and policy changes. 

Initially, however, the company is likely to restrict access as much as possible, especially if lawyers are involved. Here are two arguments you should make for why more direct access is beneficial to the company. First, there is rarely just one data pull. Research tends to be iterative and researchers will ask the company for more or different data several types before the project is done. Directly running queries for researchers is likely to be time consuming for the company while slowing the researcher. If, instead, there is direct access then the researcher will take up less of the company's time and will be able to do better research. Second, good social scientists tend to be good data scientists and will spot discrepancies and interesting facts in the data. This service is useful for the company and will come for free as a function of giving the researcher access. 

Even if the initial agreement is not great, do not despair. Initial arrangements with little access often evolve into direct access as the researcher earns the trust of the company. 

In conclusion:

- Consider all options for data sources.
- Don't spend too much time on the proposal.
- Make a good impression in the meeting.
- Fight for as much access as possible.
___
<a name="effectively"></a>
*Thoughts About Working with Private Data*

(Coming Soon)

[^1]: See [ this Economist article ](http://www.economist.com/news/briefing/21588057-scientists-think-science-self-correcting-alarming-degree-it-not-trouble) for a good overview of the state of reproducibility in science. 
[^2]: Companies are sometimes willing to provide free access to researchers. Furthermore, universities often have funds available for purchasing this type of data.
[^3]: See this [ProPublica Guide](http://www.propublica.org/nerds/item/doc-dollars-guides-collecting-the-data), for useful resources on scraping. Selenium and Beautiful Soup are good scraping packages for Python. For field experiments (and especially those using Mechanical Turk) see ["Running experiments on Amazon Mechanical Turk"](http://repub.eur.nl/pub/31983/jdm10630a[1].pdf) in _Judgment and Decision Making_.  
[^4]: I plan on writing a blog post containing examples of academic contributions to product/profit. Here's one example: Yahoo added reserve auctions based on work from [Michael Ostrovsky and Michael Shwartz](http://faculty-gsb.stanford.edu/ostrovsky/papers/rp.pdf) and increased revenue by hundreds of millions of dollars. 
[^5]: This is not a minor cost. Almost everyone who has spent time as the lone researcher at a company has claimed to become "stupider" (at least in terms of math and academic knowledge) as a result.


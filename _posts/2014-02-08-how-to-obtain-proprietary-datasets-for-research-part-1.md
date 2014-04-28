---
layout: post
title: "A Guide To Using Corporate Data for Academic Research"
category: posts
tags:
quality: good
post_type: essay
---

*Introduction* 

Corporate data is increasingly used in economics and other social science research. By corporate data, I mean data concerning product usage, transactions and other operations that is stored within company databases. The process of obtaining and working with such data poses challenges that are not present in surveys and administrative data. In this guide I discuss the process by which researchers obtain and pursue research with the private sector. My qualification for writing this guide is my experience working with datasets from Airbnb, Google, Zonability and Womply, as well as my failures in obtaining datasets from other well known companies. I hope that this guide will be a useful resource for social scientists and others considering the best way to use "Big Data" to push the research frontier.

The guide is organized into three parts:

1. [The Pros and Cons of Using Corporate Data](#why)

2. [How to Obtain Access to Corporate Data](#access)

3. [Thoughts About Working with Corporate Data](#effectively)

If you have any comments,[^0] questions or stories please email me at: afradkin (at) gmail (dot) com
___

<a name="why"></a>

*The Pros and Cons of Using Corporate Data*

The main draw of corporate data for social scientists is the ability to observe previously unobservable data. Much of economic theory involves theoretical objects, such as search activity, consumption, communication and production costs, for which empirical analogues are hard to obtain. Social scientists have typically tried to get around their lack of data by making strong assumptions about behavior. For example, in the field of industrial organization, the costs of production are typically inferred from the production and pricing decisions of firms. Similarly, macroeconomics and labor economics typically make assumption about the process of search and matching. Private sector data provides new ways of allowing us to directly test those assumptions and to quantify the importance of theoretical mechanisms in the real world. For example, in my work with Scott Baker, we use data on Google Searches for the term 'jobs' to create a proxy for aggregate job search effort. We then use this data to study what happened to job search in response to the expansions of unemployment insurance benefits. It's also exciting to work with data that few, if any, researchers have explored.

The are several other advantages to working with private sector data and the private sector more generally. First, companies are often more open than governments to running experiments or changing policies. These experiments can provide the identification required to publish in top journals. Furthermore, working with a company gives researchers a view inside of a company and this view often informs research in a positive way. For example, when I started researching Airbnb, I was mostly interested in how the platform reduces transaction costs and improves matches. However, while working at the company and talking to decision makers, I realized that experimental design is important and challenging for marketplaces. This lesson was reflected in my thesis research, which explicitly models the differences between the true effects of experiments and the estimated effects of experiments obtained by standard, but biased, methods. 

There is also a specific set of skills that is useful for working with data but is not taught in grad school. These skills include, data cleaning, database management and programmatic manipulation of file-systems. Working with company data gives researchers an opportunity to develop those skills and to learn new ones --- such as Hadoop, Hive and Github. Learning these tools is useful not only because they make research more efficient but also because they establish your credibility with engineers. It is easier to convince an engineer to share data if you understand how the data infrastructure of a company works. An additional benefit is that programming skills are a pre-requisite for becoming a consultant or full time employee in a tech company. I was able to finance part of my grad school by working a part-time job with Airbnb. 

However, working with private data is risky because the internal data are often incomplete and difficult to access. Almost any plans for a project with a dataset will be greatly complicated by missing documentation and data. It typically takes a year to learn enough about a company's data infrastructure to do good research. This also highlights why relationships where the researcher has direct access to the company databases are better. Researchers learn about data by manipulating it, asking further questions and iterating. If each iteration step required work from a company employee then progress would be slow and the company employees could become resentful of the researcher. These problems matter less if the data is very standardized, as in the case of auction data with bids and final sales. Publicly posted data also poses statistical dangers because it is often transformed in a peculiar way from the underlying data. For example, Google Trends is a public dataset that is supposed to be a proxy for the aggregate volume of searches for a particular term on Google. However, because Google oftentimes changes its product (by changing the suggested terms for a term or the algorithm), the aggregate data series may move in ways unrelated to the underlying behavior of interest. It is typically difficult to correct for these imperfections using statistical techniques. See [this Science article](http://www.sciencemag.org/content/343/6176/1203) for more discussion of the pitfalls of aggregated private sector data.

There are other important risks when working with the private sector as a researcher:

- *Ambiguous Relationships:* The company justifiably does not want negative information to be released. Even if there is a formal agreement between the company and the researcher, there is often unspoken pressure to suppress potentially negative information. It is therefore prudent to avoid doing research on overtly political issues. On the other hand, if the data is being obtained without permission, through scraping, there are other pitfalls. The company can often detect scraping activity and fight it by banning specific IP addresses, by serving false data to the scraper or by suing the scraper. Furthermore, scrapers can develop a bad reputation, making other companies hesitant to work with them.

- *Reproducibility:* Company data is often subject to a Non-Disclosure Agreement (NDA). NDA's typically state that raw data cannot be released to the public for reproduction. Some data, such as summary statistics, can also embargoed by company lawyers. These restrictions make it difficult to share data with the research community and to reproduce the research. Reproducibility is a first order problem in modern research because even 'simple' data analysis is often non-reproducible. Reproducibility is even more important for sophisticated econometric strategies, which have a much higher chance of programming error.[^1] 

- *Time Horizon:* Research takes a long time, especially in economics where the time from journal submission to publishing often exceeds 2 years in the best case scenario. It is very difficult for a company to commit to such a long-term relationship --- if only because the employees of the company are likely to change within that span of time. Therefore, undertaking long-run research agendas with internal company data is inherently dangerous. This is also a problem with scraping strategies because the company may shut off the ability to scrape in the future. Lastly, doing research on a company also involves making a bet on the future of a company. If the company goes bankrupt, fewer people may be interested in the research and the data might disappear. 

___
<a name="access"></a>

*How to Obtain Access to Corporate Data*
<!--- Mention Company Size? -->
Suppose you've thought seriously about a research project and decided that you want a specific type of data. There are three ways to get it: ask for it directly from a company, get it from a third-party or collect the data yourself (through scraping, surveys or field studies). To take a concrete example, suppose that you transaction level data from an e-commerce site so that you can estimate models of online search. Here are some strategies you might take:

1. Ask a company like Amazon, Ebay or Walmart for data.

2. Ask for or purchase data from a third-party like Nielsen or Comscore.

3. Collect your own data by scraping information from websites or by building your own experimental e-commerce website.
	
First, you should seriously consider all strategies, one of several approaches might be sufficient for your purposes, even if each approach is imperfect. Second, you should pursue as many options as possible because most of your attempts will likely fail. Furthermore, datasets from different sources are often complementary to each other. For example, data from Airbnb is very detailed but does not include data on traditional hotel supply and demand. On the other hand, [STR](http://strglobal.com/) collects more aggregated data on hotel supply and demand across markets and over time. These two datasets are a lot more powerful together than alone. There are pros and cons for each of the above approaches. Internal company data will likely be the most detailed but will also be the hardest to get and will come with the most restrictions. That said, growing small to mid-sized companies are the most likely to share data because they have less bureaucracy and lack the resources to do analyze data themselves. Lastly, third-party party data is easier to obtain than internal data but is often limited and very expensive.[^2] Scraping data is sometimes an attractive option[^3] but bears the risk of legal and reputational repercussions. Below, I focus on approaches 1 and 2, because there are already great guides to approach 3.[^4] 

The standard way to ask for data is to look up an appropriate person within a company (using LinkedIn or Twitter) and to send an introductory email. The median outcome resulting from a cold email is no response. Even if there is a response, it will likely be negative. Several forces stand in the way of obtaining a company's data. Some employees will view the researcher as a hassle because extracting the data, talking to researchers and getting formal approval for the project takes effort. Others will view the research proposal as a business risk because there's always a chance that the researcher finds out something unpleasant about the company or is careless with the data. Furthermore, employees often perceive that academic research is hard to apply to practical company problems.[^5] Each of these objections should be addressed at some point in your conversation with the company (although not in the initial email). There are several approaches that increase the likelihood that your data request will be taken seriously:

- _Use Your Social Network_: 
	One of the best ways to get your data request taken seriously is to have a reference. Many students at Stanford, for example, have obtained data because a professor has done connections at a specific company. Alternatively, others find friends from college with high quality connections at companies. LinkedIn is a useful tool for finding such connections. Lastly, you can try to make your own connection with a company by going to industry events and meet-ups.  

- _Demonstrate Value_: 
	One way to get attention within a company is to write a great blog post or paper on a related subject. This strategy works because it credibly signals that you are serious and capable of doing good work. Furthermore, companies are often eager to have someone write data-centric blog posts for them. This strategy worked for John Horton when Uber contacted him after this [post](http://john-joseph-horton.com/market-clearing-without-consternation-the-case-of-ubers-surge-pricing/).   

- _Be a Recognized Expert_: 
	It is much easier to convince a company to pay attention if you've published academic papers and received accolades. It is difficult to achieve this status in the short-run but it is worth playing up any external indicators of expertise in conversations. 

- _Get an Internship_: 
	Perhaps the best way to start doing research with company data is to get an internship with that company first. Many companies have formal summer internships and others are willing to consider an internship even without having a prior, posted position. Doing an internship will allow you to befriend co-workers, learn more about the company and familiarize yourself with the data. If you do a good job then the company will be much more willing to let you do research with its data. The major cost of an internship is that you spend less time at the university talking with researchers and going to seminars.[^6]

Getting data is still not trivial even after the company has agreed to talk to you. I've talked with three different companies who ultimately said no even after initial interest and a proposal. I spent four months writing proposals and meeting with one company, who after a change of management decided to back out. The data agreement process typically starts with the company asking for a research proposal and then meeting to discuss that proposal. Here are my recommendations for such a proposal. First, the proposal cannot be technical because the people reading it need to understand it. Even if you have a sophisticated model, try to explain it in the simplest words. Second of all, you should stress how the research will be useful to the company. Try to include something in the proposal that an analyst within the company should already be doing. Choosing a research question that can directly impact the company's bottom line is even better. You can also offer to create an infographic, index or blog post. Lastly, and most importantly, do not spend all of your energy on one proposal or one research strategy. The likelihood of failure during this process is high and even if you get the data, your research strategy will probably change.[^7] Furthermore, the details of the proposal are much less likely to matter than other factors such as your credentials and how you carry yourself in meetings with the company. Even if you succeed, it will take between a month and a year to receive the data, by which point the exact research strategy may have changed. 

The key part to getting the data is the meeting with company employees and making a good impression. The employees must come away thinking that you are competent and easy to communicate with. Everyone has their own way to prepare for this type of meeting. I try to get good sleep the night before, to know as much as possible about the company and to think through the ways in which I can respond to possible objections from the company.

An important part of any data sharing agreement is the exact way in which the data will be shared. There amount of access that a researcher gets lies between two extremes: a one off data pull and direct access to company databases. It is, of course, more desirable to get as much direct access to the company's databases. The benefits of direct access are: more control over the exact data you receive, the ability to quickly iterate if you need additional variables or a different sample, and the ability to explore other types of data that you may not have thought about when writing the proposal. If you manage to get access to the code repository, you can find previously run experiments and policy changes. 

Initially, however, the company is likely to restrict access as much as possible, especially if lawyers are involved. Here are two arguments you should make for why direct access is a better arrangement. First, there is rarely just one data pull. Research tends to be iterative and researchers will inevitably ask the company for more or different data types before the project is done. Having employees run such queries is time consuming for both the employer and the researcher. If, instead, there is direct access then the researcher will take up less of the company's time and will be able to do better research. Second, good social scientists tend to be good data scientists and will spot discrepancies and interesting facts in the data. This service is useful for the company and will come for free as a function of giving the researcher access. 

Even if the initial agreement is not great, do not despair. Initial arrangements with little access often evolve into direct access as the researcher earns the trust of the company. Build a reputation for providing value and doors to new and better data will open for you.

In conclusion:

- Consider all options for data sources.
- Don not spend too much time on the proposal.
- Make a good impression in the meeting.
- Fight for as much access as possible.
- Be aware that the process can take a long time.
___
<a name="effectively"></a>
*Thoughts About Working with Corporate Data*

There is already much advice about how to write and present empirical work.[^8] However, none of those guides deal with the actual process of exploring a novel corporate dataset and converting it into good research. Corporate data is difficult to deal with because it is often not consistently logged or documented. Furthermore, the most finely grained data (such as browser actions, purchases or messages) is often stored in databases that require programming expertise to access. My recommendation for undertaking a project with corporate data is to behave like an anthropologist. Here are some questions that you want to answer before writing diving into the actual analysis:

- What data exist?
- How is the data generated?
- What tools do I need to effectively manipulate the data?
- What issues with the data are engineers most concerned about?
- What business problems are the most important to the company?

The way to get at these questions is by talking to engineers and by exploring the code base. The beginning of a project is an especially good time to learn how to use Github or the preferred version control system within the company (all scientific work should also use version control). Furthermore, it's worthwhile to learn the programming tools widely used within the company. The more programming tools you learn, the less you have to depend on others for obtaining and understanding the data. Make sure to verify that the important variables in the dataset are properly logged. I've seen several examples of incomplete logging ruining an otherwise well designed experiment. Another good idea is to document the policy changes have occurred over the history of the company. These policy changes can provide useful variation for empirical analysis. You should also talk to decision markers in the company and sit in on a few meetings, if possible. Although managers are not concerned with scientific inquiry, the business questions they care about are often related to interesting scientific questions. 

Once you understand how the dataset works, you can start to write academic papers. This is a difficult process because the variety and size of the data is overwhelming. There is a risk that people view your research as merely a consulting project which is not useful outside of its particular domain. Choosing an appropriate research project is a core skill of being an academic and one that I have yet to master. My advice is to get frequent feedback from the set of academics that are your principal audience. That way, you never stray too far from the important questions in the field. Some of my prior projects were, in retrospect, too domain specific to be of general interest and I would've been able to figure that out earlier if I had more exposure. __Remember, cool data does not automatically make cool research.__

[^0]: Thanks to John Horton for comments.
[^1]: See [ this Economist article ](http://www.economist.com/news/briefing/21588057-scientists-think-science-self-correcting-alarming-degree-it-not-trouble) for a good overview of the state of reproducibility in science. 
[^2]: Companies are sometimes willing to provide free access to researchers. Furthermore, universities often have funds available for purchasing this type of data.
[^3]: For a couple of particularly interesting applications of scraping see: [The Billion Prices Project](http://bpp.mit.edu/) and ["Traveling the silk road: a measurement analysis of a large anonymous online marketplace,"](http://dl.acm.org/citation.cfm?id=2488408) a paper that uses data scraped from the now-defunct anonymous marketplace [Silk Road](http://en.wikipedia.org/wiki/Silk_Road_%28marketplace%29).
[^4]: See this [ProPublica Guide](http://www.propublica.org/nerds/item/doc-dollars-guides-collecting-the-data), for useful resources on scraping. Selenium and Beautiful Soup are good scraping packages for Python. For field experiments (and especially those using Mechanical Turk) see ["Running experiments on Amazon Mechanical Turk"](http://repub.eur.nl/pub/31983/jdm10630a[1].pdf) in _Judgment and Decision Making_.
[^5]: I plan on writing a blog post containing examples of academic contributions to product/profit. Here's one example: Yahoo added reserve auctions based on work from [Michael Ostrovsky and Michael Shwartz](http://faculty-gsb.stanford.edu/ostrovsky/papers/rp.pdf) and increased revenue by hundreds of millions of dollars.
[^6]: This is not a minor cost. Almost everyone who has spent time as the lone researcher at a company has claimed to become "stupider" (at least in terms of math and academic knowledge) as a result.
[^7]: Of course this varies by research strategy. Sometimes only one company has the data you want.
[^8]: See John Cochrane's ["Writing Tips for Ph.D. Students](http://faculty.chicagobooth.edu/john.cochrane/research/papers/phd_paper_writing.pdf) and ["How to Give an Applied Micro Talk"](http://faculty.chicagobooth.edu/jesse.shapiro/research/applied_micro_slides.pdf) by Jesse Shapiro.
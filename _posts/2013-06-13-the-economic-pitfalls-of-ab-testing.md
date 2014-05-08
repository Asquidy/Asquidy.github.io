---
layout: post
title: "The Economic Pitfalls of A/B Testing"
description: ""
category: 
tags: 
post_type: Essay
status: final
---

A/B testing within companies is on the rise but so is it's misuse.  As a reminder, an A/B test is set up to show some users differing versions of a website. The test then determines if outcomes of interest such as click through rate are higher for one version of the site than the other. 
The most common type of experimentation within companies involves modifying minor details of a website. [Google](http://googleblog.blogspot.com/2008/08/search-experiments-large-and-small.html) famously runs experiments on the amount of white space that is displayed between search results. Experiments with operations, marketing and human resources are also becoming prevalent at companies like Google. 

[Most](http://techcrunch.com/2013/01/12/current-conversion-rate-and-desired-confidence-interval-will-help-you-avoid-analysis-paralysis-stop-running-stupid-tests/) [critiques](http://www.evanmiller.org/how-not-to-run-an-ab-test.html) of [experimentation](http://analytics.blogspot.com/2013/01/multi-armed-bandit-experiments.html) in the business community have focused on statistics. For example, classical statistical procedures such as t-testing are no longer valid if the decision of how long to run the experiment is influenced by preliminary results. 

In this article, I will focus on the limitations of A/B due to the fact that the complex decision making of users is difficult to capture with a short run measurement of one outcome variable.

**Equilibrium Effects**

Most experiments are run on a very small share of all the users of a site. However, using just part of the population in an experiment can produce a very different result than using whole population. Suppose that Ebay increases the cost to list for some sellers. Ebay then determines that sellers who are part of the experiment listed fewer goods and generated less revenue for the site. We might naively think that Ebay should therefore not raise it's listing fee. However, what if the reason that experimental listers listed fewer items was that they could no longer compete with other sellers on price? In that case, the decreased listings by the experimental group benefited the control group who then listed more. The aggregate effect on the market might have been completely different had every seller received the same price increase. 

The experiment outline above cannot conclusively evaluate the increase in listing fees because the site-wide effect of the change might be very different that the partial effect. 

 An alternative experiment might have raised listing fees for sellers in some markets but not in others. Under the assumption that sellers in one market do not compete with sellers in the other market, the experiment would be more defensible from the above concern.  

**Long Run Adjustment**

Another issue with A/B tests is that they typically measure a very short run response when what really matters is the long run effect. Suppose that a site like Techcrunch tries to determine whether it is better to create sensational or accurate headlines for an article.  An A/B that looks at click through rates for the article would find that sensational headlines get more click throughs. 

In reality, readers may feel deceived after clicking on a sensational headline. Those readers might then infer that future links from Techcrunch are not worth clicking on in the future. 

The problem with the above A/B test is that it measures the wrong outcome variable. That is, it was a valid design, but it did not answer the relevant question. The proper A/B test would look at long-run readership by users who were randomly exposed to more or less sensational headlines over a significant time period. 

**Strategic Manipulation of Experiments by Users**

Lastly, too much experimentation may give users an incentive to game the system. For example, suppose that Amazon experiments with prices to measure elasticity. If buyers catch on to the experimentation they might create spoof accounts until they find an usually low price. Alternatively, they may wait until there is a randomly lower price in order to buy the good. If Amazon was naive and only used A/B tests they would overestimate the [demand elasticity](http://onlinelibrary.wiley.com/doi/10.1111/j.1468-0262.2006.00721.x/abstract).

The above difficulties in experimental design are difficult but not insurmountable. Designers can become more effective A/B testers by:

* Carefully thinking about what outcome variable is truly relevant for the site.
* Committing to run longer experiments
* Calibrating models of user behavior with estimates from an A/B test in order to make out of sample predictions.


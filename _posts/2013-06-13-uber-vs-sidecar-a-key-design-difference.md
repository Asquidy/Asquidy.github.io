---
layout: post
title: "Uber vs Sidecar: A key design difference"
description: ""
category: posts 
tags: 
post_type: Thought
status: final
---

Recently, I was struck by a seemingly minor design difference between the taxi apps Uber[^1] and Sidecar: I need to tell Sidecar where I'm going before I hail a ride whereas I don't need to tell Uber.

The difference in rules between Uber and Sidecar highlights a key distinction in platform strategy. The destination of a cab ride is actually very important for the cab driver. Suppose that the destination is a place on the outskirts of a city where there are few passengers. In order to get the next passenger, the driver must waste gas and time to get to where the passenger is. Alternatively, it is usually easy to get the next rider in a downtown area. 

Sidecar is allowing its drivers to pick passengers based on where they are going. That means that a passenger is less likely to be picked up if they are going somewhere weird. The increased waiting time for a ride, makes Sidecar a worse experience for potential passengers. Sidecar favors drivers because it is very difficult to get normal people to sign up to drive other people around.  For Sidecar, there are usually not enough drivers to handle all of the demand in the system. The design decision is one way in which sidecar tries to recruit more drivers.

On the other hand, Uber hurts some of its drivers by forcing them to take rides to far off destinations. Uber is focusing on the demand side of the market. It wants to be known as the app for a fast and reliable cab experience. That means that Uber cannot discriminate between riders going to different destinations. Anyone who wants a ride needs to know that Uber will be quick. Uber's primary suppliers, black cars, have always had to deal with the limitation of having to drive individuals wherever they needed to go. They are less likely to be bothered by Uber's rules than non-professional drivers. 

One question remains: Why don't cab companies also determine prices based on the destination of the passanger?

First, the value of arriving in a particular location varies based on time of day and day of the week. It is difficult to calculate the value of arriving at a particular location without a passenger. Second, having variable and non-transparent prices is likely to confuse customers. Passengers may be surprised by a high fee for going to a non-popular location and may never use the service again.

In some cases cabs do charge based on destination. A ride to the airport costs a predetermined amount that  differs from the implied mileage of driving to the airport. Differential pricing for rides to the airport is acceptable to companies because the price difference is known by passengers. 

Interestingly, taxi cab markets have been used to model the volume of matches that occur in decentralized markets in general. In his paper [An Analysis of the Market for Taxicab Rides in New York City](https://6df3260d-a-62cb3a1a-s-sites.googlegroups.com/site/rl561a/IER2003.pdf?attachauth=ANoY7co1TxhLnyB2RN9AkBwqhd0CfgjFho9b-wCYS93qCfympk1FGtARH4a79VhIYjHeC_ErpvrcXFhDn9SccmU8dIj9kQZboiRxOJL5azbyNvb7eL-bgEt41OCWQB_ZjXndhps28f3sY-8BkBDk-lKEjD8wjhaTarzlMtOzHkCl9BOfK-WwRW0E7d99_GdIxf0K_bPguA_0teQzvvdn5ep7DPEPxL9F0Q%3D%3D&attredirects=0), Ricardo Lagos uses such a model to simulate how the effect of an increase in cab fares would impact market prices for taxi cab medallions. 

[^1]: Uber is an Iphone app that allows a user to hail a black car driver. Sidecar is a competitor which allows users to hail non-professional drivers who drive their own cars.
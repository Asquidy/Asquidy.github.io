---
layout: post
title: "Combining Hive and Python"
description: ""
category: posts 
post_type: code
status: final
---

Querying large datasets with Hive is trivial. However, there are times when Hive's built in functions are insufficient. For example, I recently needed to extract the ordering of elements in an array.

The common advice for such problems is to write a custom Java UDF (User Defined Function). However, since I do not know Java, that would take a lot of time. Luckily, it's easy to create a script in another language and feed it into a hive query using the function TRANSFORM.

For example, the query below runs a python script on an array of ids seen in search and several other columns.

{% highlight sql%}

SELECT
TRANSFORM (hosting_ids, user_id, d) 
USING 'python combine_arrays.py' AS (hosting_ranks_array, user_id, d)
FROM 
s_table;

{% endhighlight %}

The python script below takes in a set of lines in which table columns are delimited by tabs. It splits the lines and transforms the first column to include the search rank as a subfield. Note, the script must also handle the the other fields and return them in the proper order. Getting the formatting correct is important because Hive is fickle and not very verbose when returning errors.



{% highlight python %}

import sys

### First columns looks like [123, 213, 212312]
### First column returns [123:0,  213:1,  212312:2]. 

for line in sys.stdin:
    ### Format string
    line = line.strip()
    line = str(line).replace("[", '').replace(']', '').replace('{', '').replace('}', '').replace('(', '').replace(')', '')
    line = line.split('\t')

    ### Format array
    array1 = str(line[0]).split(',')
    num_items = len(array1)
    combined_array = []
    for i in range(num_items):
        this_item = str(array1[i]) + ':' + str(i)
        combined_array.append(this_item)

    ### Remove array characters from resulting string.
    combined_array = str(combined_array).replace('[', '').replace(']', '')
    combined_array = combined_array.replace('\'', '').replace('\"', '')

    ## Add additional fields if they exist and print.
    if len(line) == 1:
        print combined_array
    else:
        rest = '\t'.join(([str(i) for i in line[1:]]))
        print '\t'.join([combined_array, rest])


{% endhighlight %}
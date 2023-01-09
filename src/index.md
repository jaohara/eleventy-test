---
title: John O'Hara
# layout: "base.njk"
layout: "frontpage.njk"
# templateEngineOverride: njk,md
---

{% import "components.njk" as ui %}

{{ ui.hero() }}


<div class="content-container"><div id="projects-wrapper" class="content-wrapper">

# Generic Content
This is a generic block of content. Below it I'm going to mess around with a div that has a generative canvas background.
</div></div>


<div class="content-container container-alt-bg"><div class="content-wrapper">

# Can I mix HTML in here?
What happens if I do something <strong>like this</strong>?

# A few test tags
I need to remember to make a few basic tags from `<span>`s combined with one of those 11ty macros in the in the `component.ui` file. What are the tags that I need to make? 

- Date tag
- topic tag?

## Date tag
Alright, here's an inline example of a date tag from {{ui.dateTag("Nov. 20th, 2022")}} as well as one on another line:

{{ui.dateTag("11-20-22")}}

{{ui.dateTag("Nov. 20th, 2022")}}

# First Level Header
This is a paragraph of text. I'm typing some stuff out so that the paragraph has some content.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, accusantium [debitis laboriosam]() quod nisi nulla incidunt ut officiis quis, animi obcaecati ratione fuga pariatur provident nobis maiores labore [placeat hic!]()

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum non eaque atque consectetur. Sint repudiandae suscipit, cum at excepturi enim cupiditate sit unde provident voluptas eaque optio illum quisquam tenetur numquam minima nostrum nisi a libero quibusdam sed vero pariatur.

- Some list of items
- Some short
- Others longer than the shorter ones
- But just enough
- To demonstrate these lists

# What about ordered lists?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque suscipit quos facilis non, vitae ducimus harum eveniet in iste aliquam nemo accusantium temporibus cupiditate magni velit! Id, nostrum. [Consectetur cum deserunt]() perferendis dolorum quo sunt adipisci voluptate nobis nostrum aliquid in dolore asperiores necessitatibus porro excepturi ipsa, doloremque vel ullam maiores autem perspiciatis sequi architecto. 

1. Make a List
2. Add things to list
3. Continue addding things
4. Look back at the list
5. Admire your list

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus debitis tempore minus accusamus est ipsa cum nemo possimus nulla cumque.

# What do buttons look like?
{{ ui.button("Another Test Button!") }}

</div></div>


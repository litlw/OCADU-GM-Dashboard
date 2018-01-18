# Sample Arc Diagram

Based from : https://bl.ocks.org/rpgove/53bb49d6ed762139f33bdaea1f3a9e1c

### Notes about the data:

The data needs to be in a certain format. The rules for this are pretty simple.

Datatype: json

Structure:
<code>
json: {
  nodes: [{
    id: "the page id (basically)"
    name: "the page name",
    value(s): [{
      user_id: "some id",
      timestamp: "if we get a timestamp it would go here",
      score: "whatever score"
    }, {
      Repeat for as many ids as we have.
      Use python, don't write this by hand.
      }]
    }]
}
</code>

What's important to note here is that, unlike the navigation, this data set has no parent->child relationship. This means that whatever rules we have come up with need to be re-addressed when we build this data.

As I mentioned before in the data structure, please use python to write this out. It will take some time to process, and maybe we make several JSON files instead of just one.

To build your data, please check data/fake_data_generator.ipynb

I will include a demo data file.

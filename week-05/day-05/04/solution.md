# Fake Coin

### This activity is a word problem that doesn't require any coding. Create a new file named `challenge-prompt.md` to write your answer.

<hr>

You are opening a currency authentication business. Unfortunately, you spent all your starter funds on a totally sweet market stall, so you only had the money to buy a simple two-pan balance scale. The scale didn't come with any weights, but it will tell you which pan has heavier contents.

You breathe in the early morning air and look around at the villagers starting to filter into the market. Everything is possible (as long as it only requires a simple scale). As you take in your surroundings, you notice someone walking purposefully towards your stall and your heart starts beating a little faster. Your first customer approaches! 

After some discussion, you allow yourself a sigh of relief. His request is fulfillable despite your subpar equipment.

The customer was recently paid for his work by some less than reputable citizens. He had been given 8 visually identical coins, but he's certain one of those coins is counterfeit. According to the research you'd done before opening your stall, the current incarnation of counterfeit coins weigh slightly less than authentic coins.

What is the minimum number of times you need to use the scale in order to find which coin is counterfeit and what are the steps in order to do so.

<hr>

* The number of steps is less important for the purposes of this exercise than defining the actions you're taking during those steps

* Once you have written your solution (or if you're stuck), refer to the hints file for the minimum number of uses. Then, if this minimum is fewer than your answer, update the steps you need to solve this problem in that number of uses.

## Solution:
Answer:2 steps
1. First remove 2 coins from the lot, and divide the remaining 6 into 2 lots of 3 coins each and put each lot on the scale. 
2. If they are equal, the 2 coins that we removed should have a faulty coin.
    If one of the scale shows less weight, the faulty coin should be one of the coins on that scale.
3. We have either 2 or 3 coins lot to check now.
4. If we have 2 left, we keep each of them on the scale, and find the faulty one.
    If we have 3 coins left, we remove one from them and put each of the remaining 2 coins on the scale. If they are eaqual, then the coin we removed is the faulty one. If one of the scale shows less weight, then the coin on that scale is the faulty one.
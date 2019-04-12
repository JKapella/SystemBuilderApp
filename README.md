# SystemBuilderApp
A simple js based app to procedurally generate a star system

## Notes

* **Calculate Star Mass** 
  * This is currently random - but within limits for a g-type main sequence star. Ideally this will take into account some sort of starting condition - e.g. the material available in the cloud of material the star is formed from.
* **Calculate Star Age**
  * Currently random, restricted to stellar 'middle age' when planets have formed, but star hasn't yet cooled and expanded.
* **Calculate Star Size**
  * Currently calculates based on relative age and mass to our sun - based on the below table:

Period | Age | Radius
-------|-----|--------
ZAMS | 0.00 | 0.89
present | 4.58 | 1.00
MS:ﬁnal | 10.00 | 1.37
RGB:tip | 12.17 | 256.
ZA-He | 12.17 | 11.2
AGB:tip | 12.30 | 149.

 * Ideally I need to create a single scale to set this based on star mass and age from start to end of star life.
* **Calculate Number Of Planets**
  * Disappointingly, there seems currently no consensus over what factors (beyond makeup of the original cloud the system formed from) that defines the number of planets a system has - so it's going to have to be a random number for now
  * For now, this is between 1 and 10, because none is boring, and 10 is the limit of what we know of so far...
 
## Roadmap (mid-term to-do list)

* Add function for proc-gen a star name - using proper stellar classification
* Make Calculate Star Type - dynamic as I introduce other star types
* Make Calculate Number Of Planets related to original size of pre-stellar gas cloud

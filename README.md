# Seattle Car Collision Before and During Covid-19

[Link for projct]()

![CarCollision](https://user-images.githubusercontent.com/77243665/111259010-55474c00-85db-11eb-80b7-6ff49c6c1d92.png)

## Project Description
The dashboard visualizes the data and geographic location of all types of car collision from 2018 to 2020 and shows people what changes before and after covid-19. It is composed of various responded design and interactive elements and present users with rich information, multi-function, and visual effects.

the major functions:
* Side Panel & Chart (responsive design): The interactive Side Panel displays the specific data of car collision from 2018 to 2020 each year, and users can switch options to view. The Chart with responsive design displays the car collision information for each month in three years and compares the correlation and difference between the data at different times in the histogram.

* Heat maps: The heatmap visualization technology displays car collision phenomena as two-dimensional colors of different intensities. Geographical locations with frequent car collisions show stronger colors, while road sections with fewer collisions show weaker colors. Heatmap conveys information about the density of car collision to the users.

* Thematic Maps & Interactive Elements: The design that fits the car collision theme reflects the visual effect. The thematic map highlights the city's traffic roads and shows the specific geographic location of the car collision. The Interactive function allows users to select different themed maps. It is designed by MapBox Studio.

## Project Goal
The project is inspired by some thoughts about road safety data. According to statistics from experts and media reports, traffic accidents during the covid-19 period have decreased, but they have become more frequent. So, the dashboard aim to show the geographic location where Seattle accidents frequently happen. Through spatial analysis, provide users with traffic safety information.

## Data Sources
* The data comes from [data.seattle.gov](https://data.seattle.gov/dataset/Collisions/nuam-5pkc)
* Publisher: Seattle IT
* Dataset Owner: Seattle City GIS Program
* Data processing: Use Python to grab the available data we need from raw data, such as all data about car crash information from 2018 to 2020. Use QGIS and SQL filtering to convert the available data into shapefile types and generate tile layers of raster format, such as basemaps and heatmaps.
* Data Format：CSV format, Shapefile format, raster format.

## Applied Libraries and Web Servises
* Font Awesome @5.15.1
* Mapbox Studio for generating basemap tiles
* Leaflet CSS and JS @1.7.1
* jQuery @3.1.0
* Favicon for tab icon
* D3.js @v5
* c3 CSS and JS @0.7.16

## Acknowledgment
I sincerely appreciate UW Professor Bo Zhao for providing the lectures, materials and project instructions.

##  Reference
##### [1] The Rothenberg Law Firm: https://injurylawyer.com/car-accidents/has-the-covid-19-pandemic-reduced-the-number-of-car-accident-fatalities/
##### [2] Accident Analysis & Prevention: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7364169/

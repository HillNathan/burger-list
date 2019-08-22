# Eat Da Burger

<p>Background photo by 
<a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@armandoascorve?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from Armando Ascorve Morales"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-2px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg></span><span style="display:inline-block;padding:2px 3px">Armando Ascorve Morales</span></a></p>
<br>
<img src="public\images\burger-clip-art.jpg" style="float:left; margin:10px"><p style="font-size: 14pt">
<b>Eat Da Burger</b> is a full-stack web app designed to track a list of burgers you want to eat, and burgers you have already eaten. Data on the burgers persists in a SQL database, and the server is an Express web server built in Node.js. <b>Eat Da Burger</b> was created to fulfill the requirements of a homework assignment in the Penn LPS Web Coding Bootcamp. Requirements were to create a full-stack app using a SQL database using a coded ORM with a MVC, and to be able to display those records using handlebars. We also needed to be able to add a burger, and mark whether it was "devoured", moving from one column to another once it was marked. </p>
<p style="font-size: 14pt">
I added some additional functionality to my app as well. I provided the ability to "delete" a burger, perhaps if there was an error made in entering or for any other reason. I wrote the word "delete" in quotes as this is a soft delete. The record will remain in the database, however it will not be displayed by the app any longer. This is accomplished using a "deleted" boolean record in the database, and using handelbars to exclude those records, rather than changing the query to only pull records that were not flagged as "deleted". The same could be accomplished by doing the reverse - leaving the handlebars as is, and altering the query, but I felt like reprogramming the ORM and the model would be more work than just adding a flag to the handlebars. </p>
<p style="font-size: 14pt">
There is also server logging, using the winston and winston-express npm packages as middleware loggers. Individual server interatctions are logged to a server.log file as json objects, 
</p>
<p style="font-size: 14pt">
I also added a full API call, which returns the entire burger list as a JSON object (not displayed through handlebars) so that someone could see all of the burgers - including deleted burgers - if they so choose. </p>
<hr>
<br>
<h2>Upgrades</h2>
<p style="font-size: 14pt">
Potential upgrades for <b>Eat Da Burger</b> would include user login and authentication so that each user would have their own unique burger list to maintain. Right now there is but a single list. I might also look at making the interface more mobile-friendly, since the current Bootstrap wireframe is not tailored to mobile display.

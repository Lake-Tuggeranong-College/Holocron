---
tags:
  - "2022"
  - archived
---
# Create Index.html

<aside>
‼️ The individual pages, such as index.html, will have limited HTML, CSS and JS in them - this will be inherited from template.html.

</aside>

Right click on the template folder, and choose New → HTML File.

![[_images/Screen_Shot_2022-06-21_at_10.11.36_am.png|Screen Shot 2022-06-21 at 10.11.36 am.png]]

Call the file `index`.

![[_images/Screen_Shot_2022-06-21_at_10.12.05_am.png|Screen Shot 2022-06-21 at 10.12.05 am.png]]

Replace the contents of `index.html` with the following code.

For the moment, make no other changes.

Save the file.

```python
{% extends 'template.html' %}

{# Place the content for the cellContent1 in this block #}
{% block cellContent1 %}

{% endblock %}

{# Place the content for the cellContent2 in this block #}
{% block cellContent2 %}

{% endblock %}

{# Place the content for the cellContent3 in this block #}
{% block cellContent3 %}

{% endblock %}
```

# Update App.py

First, update `app.py` to also import `render_template` from the flask library.

<aside>
‼️ This new import allows Flask to take the index.html and template.html pages written and replace the contents with what is required.

</aside>

![[_images/Screen_Shot_2022-06-21_at_10.42.45_am.png|Screen Shot 2022-06-21 at 10.42.45 am.png]]

Rename the `hello_world()` function to something more appropriate - `homepage()`.

![[_images/Screen_Shot_2022-06-21_at_10.45.50_am.png|Screen Shot 2022-06-21 at 10.45.50 am.png]]

Update the return statement to render the `index.html` file, and also assign the title variable to be “Ngunnawal Country”.

![[_images/Screen_Shot_2022-06-21_at_10.47.59_am.png|Screen Shot 2022-06-21 at 10.47.59 am.png]]

- Code
	
	```python
	return render_template("index.html", title="Ngunnawal Country")
	```
	

Run the site and click the link to open in the browser.

![[_images/Screen_Shot_2022-06-21_at_10.49.51_am.png|Screen Shot 2022-06-21 at 10.49.51 am.png]]

Back in Pycharm, update the cellContent blocks with some text.

![[_images/Screen_Shot_2022-06-21_at_10.14.13_pm.png|Screen Shot 2022-06-21 at 10.14.13 pm.png]]

Reload the page in the browser, and you should see the update content.

![[_images/Screen_Shot_2022-06-21_at_10.14.56_pm.png|Screen Shot 2022-06-21 at 10.14.56 pm.png]]

## Refreshing the page doesn’t work?

If you save changes to your code, and the changes aren’t reflected in the browser, try this:

Click on the Configurations dropdown in the toolbar, and then **Edit Configurations**.

![[_images/Screen_Shot_2022-06-21_at_10.20.35_pm.png|Screen Shot 2022-06-21 at 10.20.35 pm.png]]

Tick the **FLACK_DEBUG** checkbox and click Ok.

<aside>
‼️

You may need to restart the server for this setting to take effect.

</aside>

![[_images/Screen_Shot_2022-06-21_at_10.21.30_pm.png|Screen Shot 2022-06-21 at 10.21.30 pm.png]]

That should let you make changes to the code, and not restart the server to see the changes made.

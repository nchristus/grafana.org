---
title: Grafana 3.1 Beta Released
author: Torkel Ödegaard
published_on: June 23, 2016
---

Grafana 3.1 beta is now available for download! In this relase we have focused on
making monitoring more collaborative by enabling Grafana users to easily
share dashboards with others. We have also added dashboards to
[Grafana.net](https://grafana.net) a place where anyone can share and download dashboards
for popular infrastructure and server applications.

<div class="text-center">
<a class="button secondary radius" href="/download">Download Grafana 3.1</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

## Release Highlights

- **Dashboard Repository** at [Grafana.net](https://grafana.net), you can now discover and upload dashboards.
- **Dashboard** time range and variables values are now always synced with URL.
- **Constant Template Variable** have been added to make dashboard sharing easier (use as metric prefix).
- **Singlestat** can now map ranges to text.
- **Metrics** Grafana now supports sending metrics about itself.
- [Full changelog](https://github.com/grafana/grafana/blob/master/CHANGELOG.md)

## Dashboard Export & Import

The export feature is now reached from the share menu.

![](/assets/img/v31/export_menu.png)

Dashboards exported from Grafana 3.1 are now more portable and easier for others to import than before.
The export process extracts information data source types used by panels and adds these to a new `inputs`
section in the dashboard json. So when you or another person tries to import the dashboard they will be asked to
select data source and optional metrix prefix options.

![](/assets/img/v31/import_step1.png)

The above screenshot shows the new import modal that gives you 3 options for how to import a dashboard.
One notable new addition here is the ability to import directly from Dashboards shared on [Grafana.net](https://grafana.net).

The next step in the import process:

![](/assets/img/v31/import_step2.png)

Here you can change the name of the dashboard and also pick what data sources you want the dashboard to use. The above screenshot
shows a CollectD dashboard for Graphite that requires a metric prefix be specified.

## Discover Dashboards

On [Grafana.net](https://grafana.net) you can now browse & search for dashboards. We have already added a few but
more are being uploaded every day.

![](/assets/img/v31/gnet_dashboards_list.png)

## Share Dashboards

If you have an awesome MongoDB or Nginx Dashboard why not share it with the rest of the world?

Start by creating a [Grafana.net](https://grafana.net) account and login. Then head over to your profile page.

![](/assets/img/blog/v3.1/gnet_header.png)

From there click on My Dashboards tab and then `Upload Dashboard` button.

![](/assets/img/blog/v3.1/gnet_profile_dashboards.png)

Pick the dashboard json file that you exported from Grafana. At this point we only accept dashboards exported from Grafana v3.1+ as only
those dashboards contain information about what data source types the panels use.


After hitting `Upload Dashboard` button you will be taken to the dashboard page where you can modify dashboard name, description,
add screenshots and most importantly you can write a detailed README (in Markdown) explaining the config you use for the metric collectors
(CollectD or similar).

When you are happy with everything you can publish the Dashboard which will make it publicly accessable.

## Dashboard Urls
Having current time range and template variable value always sync with the URL makes it possible to always copy your current
Grafana url to share with a colleague without having to use the Share modal.

## Internal metrics

Do you want metrics about viewing metrics? Ofc you do! In this release we added support for sending metrics about Grafana to graphite.
You can configure interval and server in the config file.

### Breaking changes
- **Logging** format have been changed to improve log filtering.
- **Graphite PNG** Graphite PNG support dropped from Graph panel (use Grafana native PNG instead).
- **Migration** No longer possible to migrate dashboards from 1.x (Stored in ES or Influx 0.8).

## Thanks
A big thank you to everyone who helped test and report issues with the beta release.

<div class="">
<a class="button secondary radius" href="/download">Download Grafana 3.1</a>.
<a class="button primary radius" href="http://play.grafana.org" target="_blank">Live Demo</a>.
</div>

#### Subscribe to project updates
<section class="newsletter">
  <form action="http://grafana.us8.list-manage.com/subscribe/post?u=2aeb5711db2aececc990be536&amp;id=5585d37ecc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
    <row class="collapse">
      <div class="medium-10 columns">
        <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address">
      </div>
      <div class="medium-2 columns">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button postfix">
      </div>
    </row>
  </form>
</section>


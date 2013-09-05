function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),name = locals_.name,url = locals_.url,address = locals_.address,city = locals_.city,state = locals_.state,zip = locals_.zip,phone = locals_.phone,bblogo = locals_.bblogo,bbview = locals_.bbview,bbdownload = locals_.bbdownload,bbsend = locals_.bbsend,bbupdate = locals_.bbupdate;buf.push("<h1 class=\"page-title\">Get my health records<div class=\"row\"><div class=\"col-md-4 col-sm-12\"><h2>" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "</h2><h6 class=\"fg-daqua\"><a" + (jade.attrs({ 'href':(url), 'target':("_blank") }, {"href":true,"target":true})) + ">" + (jade.escape((jade.interp = url) == null ? '' : jade.interp)) + "</a></h6><h6 class=\"fg-mgrey\">" + (jade.escape((jade.interp = address) == null ? '' : jade.interp)) + "<br/>" + (jade.escape((jade.interp = city) == null ? '' : jade.interp)) + ", " + (jade.escape((jade.interp = state) == null ? '' : jade.interp)) + " " + (jade.escape((jade.interp = zip) == null ? '' : jade.interp)) + "</h6><h6 class=\"fg-mgrey\">" + (jade.escape((jade.interp = phone) == null ? '' : jade.interp)) + "</h6></div><div class=\"col-md-8 col-sm-12\"><div class=\"col-md-3 col-sm-3 no-pad\"><a href=\"#\" target=\"_blank\" class=\"go-get-em-btn blockize\"><img src=\"img/bb-logo-vector.png\"/></a></div><div class=\"col-md-8 col-sm-9 get-records-prep col-md-offset-1\"><h3 class=\"fg-maqua\">Get my health records</h3><p class=\"fg-maqua\">After clicking here, you will be redirected to your organization’s website where you can get your health records.</p><p class=\"fg-maqua\">Don't forget to come back once you have your health records to find apps and services that help you stay at your best.</p><img src=\"img/arrow-left.png\" class=\"arrow-left hidden-xs\"/></div></div></div><h3 class=\"sub-title\">Features</h3><ul class=\"row clearfix list-unstyled text-center\"><li class=\"col-md-2\"><p>");
if (bblogo)
{
buf.push("<span class=\"fake-checkbox checked\"><em>provider is</em></span>");
}
else
{
buf.push("<span class=\"fake-checkbox\"><em>provider is not</em></span>");
}
buf.push(" Using the Blue Button logo on website</p></li><li class=\"col-md-2\"><p>");
if (bbview)
{
buf.push("<span class=\"fake-checkbox checked\"><em>you can</em></span>");
}
else
{
buf.push("<span class=\"fake-checkbox\"><em>you cannot</em></span>");
}
buf.push(" view your records online</p></li><li class=\"col-md-2\"><p>");
if (bbdownload)
{
buf.push("<span class=\"fake-checkbox checked\"><em>you can</em></span>");
}
else
{
buf.push("<span class=\"fake-checkbox\"><em>you cannot</em></span>");
}
buf.push(" download your records</p></li><li class=\"col-md-2\"><p>");
if (bbsend)
{
buf.push("<span class=\"fake-checkbox checked\"><em>you can</em></span>");
}
else
{
buf.push("<span class=\"fake-checkbox\"><em>you cannot</em></span>");
}
buf.push(" Securely send your records to your preferred application</p></li><li class=\"col-md-2\"><p>");
if (bbupdate)
{
buf.push("<span class=\"fake-checkbox checked\"><em>you can</em></span>");
}
else
{
buf.push("<span class=\"fake-checkbox\"><em>you cannot</em></span>");
}
buf.push(" Automatically receive updates to your health records</p></li></ul><div class=\"ask-participate\"><h5 class=\"fw-normal fg-dblue\">Ask your organization to participate!</h5><h6 class=\"fg-mgrey\">If some features are not available, ask them why and request it now.</h6><a href=\"#\" class=\"btn btn-primary btn-lg\">Request</a></div></h1>");;return buf.join("");
}
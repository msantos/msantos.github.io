---
layout: entry
---

~~~
-module(hello_world).
-export([start/0,about/0]).

start() ->
~~~

<ul class="erl-proplist">
    {% for post in site.posts %}
    <li class="erl-proplist">
        {{ site.lcb }}{{ post.date | date: "%Y,%m,%d" }}{{ site.rcb }},
        <a href="{{ post.url }}">
            {{ site.lbb }}"{{ post.title }}"{{ site.rbb }}
        </a>,
        {{ site.lbb }}"{{ post.summary }}"{{ site.rbb }}
    </li>
    {% endfor %}
    <li class="erl-proplist">
        {2011,04,23},
        <a href="http://listincomprehension.com">
            {{ site.lbb }}"List Incomprehension"{{ site.rbb }}
        </a>,
        {{ site.lbb }}"network legerdemain and packet buffoonery"{{ site.rbb }}
    </li>
</ul>

~~~
about() ->
~~~
<ul class="erl-proplist">
    <li class="erl-proplist">
        github, <a href="https://github.com/msantos">
                {{ site.lbb }}"https://github.com/msantos"{{ site.rbb }}
            </a>
    </li>
    <li class="erl-proplist">
        email, {{ site.lbb }}"michael.santos@gmail.com"{{ site.rbb }}
    </li>
</ul>

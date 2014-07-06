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
        <ul class="erl-tuple">
            <li class="erl-tuple">{{ site.lcb }}{{ post.date | date: "%Y,%m,%d" }}{{ site.rcb }}</li>
            <li class="erl-tuple">
                <a href="{{ post.url }}">
                    {{ site.lbb }}"{{ post.title }}"{{ site.rbb }}
                </a>
            </li>
            <li class="erl-tuple">
                {{ site.lbb }}"{{ post.summary }}"{{ site.rbb }}
            </li>
        </ul>
    </li>
    {% endfor %}

    <li class="erl-proplist">
        <ul class="erl-tuple">
            <li class="erl-tuple">{2011,04,23}</li>
            <li class="erl-tuple">
                <a href="http://listincomprehension.com">
                    {{ site.lbb }}"List Incomprehension"{{ site.rbb }}
                </a>
            </li>
            <li class="erl-tuple">
                {{ site.lbb }}"network legerdemain and packet buffoonery"{{ site.rbb }}
            </li>
        </ul>
    </li>
</ul>

~~~
about() ->
~~~
<ul class="erl-proplist">
    <li class="erl-proplist">
        <ul class="erl-tuple">
            <li class="erl-tuple">github</li>
            <li class="erl-tuple">
                <a href="https://github.com/msantos">
                    {{ site.lbb }}"https://github.com/msantos"{{ site.rbb }}
                </a>
            </li>
        </ul>
    </li>
    <li class="erl-proplist">
        <ul class="erl-tuple">
            <li class="erl-tuple">email</li>
            <li class="erl-tuple">
                {{ site.lbb }}"michael.santos@gmail.com"{{ site.rbb }}
            </li>
        </ul>
    </li>
</ul>

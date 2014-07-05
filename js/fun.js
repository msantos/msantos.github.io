/*
 * Given a div id, display a js-sequence-diagram
 * (http://bramp.github.io/js-sequence-diagrams/). If js is disbled,
 * display the text input to the diagram.
 *
 * <div id="foo">
 * <pre>
 * participant A
 * participant B
 * participant C
 * A->C:message
 * Note right of C:activity
 * C->B:reply
 * B->A:proxied
 * </pre>
 * </div>
 * <script>render('foo');</script>
 *
 */
function render(id) {
    var el = document.getElementById(id);
    var diagram = Diagram.parse(el.innerText);
    document.getElementById(id).innerHTML = "";
    diagram.drawSVG(id, {theme: 'simple'});
}

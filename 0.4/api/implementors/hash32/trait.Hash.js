(function() {var implementors = {};
implementors["hash32"] = [];
implementors["heapless"] = [{"text":"impl&lt;N&gt; Hash for String&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;u8&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Hash for Vec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N, U, C&gt; Hash for Queue&lt;T, N, U, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: Uxx,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: XCore,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
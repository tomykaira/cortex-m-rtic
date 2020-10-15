(function() {var implementors = {};
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S&gt; Extend&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; Extend&lt;T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, S&gt; Extend&lt;&amp;'a T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["heapless"] = [{"text":"impl&lt;K, V, N, S&gt; Extend&lt;(K, V)&gt; for IndexMap&lt;K, V, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;Bucket&lt;K, V&gt;&gt; + ArrayLength&lt;Option&lt;Pos&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K, V, N, S&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for IndexMap&lt;K, V, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;Bucket&lt;K, V&gt;&gt; + ArrayLength&lt;Option&lt;Pos&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N, S&gt; Extend&lt;T&gt; for IndexSet&lt;T, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;Bucket&lt;T, ()&gt;&gt; + ArrayLength&lt;Option&lt;Pos&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, N, S&gt; Extend&lt;&amp;'a T&gt; for IndexSet&lt;T, N, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Eq + Hash + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;Bucket&lt;T, ()&gt;&gt; + ArrayLength&lt;Option&lt;Pos&gt;&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Extend&lt;T&gt; for Vec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, N&gt; Extend&lt;&amp;'a T&gt; for Vec&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, N&gt; Extend&lt;T&gt; for HistoryBuffer&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, N&gt; Extend&lt;&amp;'a T&gt; for HistoryBuffer&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + Clone,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: ArrayLength&lt;T&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; Extend&lt;(K, V)&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, K, V, S&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq + Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: Copy,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; Extend&lt;T&gt; for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, T, S&gt; Extend&lt;&amp;'a T&gt; for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash + Eq + Copy + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl Extend&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl Extend&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; Extend&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; Extend&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]},{"text":"impl Extend&lt;Error&gt; for Error","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()
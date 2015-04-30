<!DOCTYPE html>
<head>
<?php print $head; ?>
<title><?php print $head_title; ?></title>
<?php print $styles; ?>
<?php print $scripts; ?>
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<script src="/sites/all/themes/phoenix-responsive-theme/js/accordion.js"></script>
<!-- Add icons for mobile bookmarks -->
<link href="http://http://dev-benz-communications-project-library.pantheon.io/apple-touch-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
<link href="http://http://dev-benz-communications-project-library.pantheon.io/apple-touch-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
</head>
<body class="<?php print $classes; ?>"<?php print $attributes; ?>>
  <?php print $page_top; ?>
  <?php print $page; ?>
  <?php print $page_bottom; ?>
</body>
</html>
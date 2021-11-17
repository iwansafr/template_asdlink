var $s = jQuery.noConflict();
$s(document).ready(function () {

$s(".click-loading").click(function() {
$s('#fadeandscale_default').popup({
        autoopen: true,
        pagecontainer: '.container',
        transition: 'all 0.3s',
        blur: false
});
});

$s(".divbox-icon25-2").click(function() {
$s('#box_menulainnya').hide();
$s('#box_topmenu').hide();
$s('#clean_search_from').hide();
$s('#clean_search_from_lainnya').hide();
$s('#fadeandscale_default').popup({
        autoopen: true,
        pagecontainer: '.container',
        transition: 'all 0.3s',
        blur: false
});
});

$s(".divbox-icon20-2").click(function() {
$s('#box_menulainnya').hide();
$s('#box_topmenu').hide();
$s('#clean_search_from').hide();
$s('#clean_search_from_lainnya').hide();
$s('#fadeandscale_default').popup({
        autoopen: true,
        pagecontainer: '.container',
        transition: 'all 0.3s',
        blur: false
});
});

});
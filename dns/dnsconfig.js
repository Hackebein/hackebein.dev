var REG_OVH = NewRegistrar("ovh");
var DSP_OVH = NewDnsProvider("ovh");

var GITHUB_PAGES_IPV4S = [
    "185.199.108.153",
    "185.199.109.153",
    "185.199.110.153",
    "185.199.111.153"
];
var GITHUB_PAGES_IPV6S = [
    "2606:50c0:8000::153",
    "2606:50c0:8001::153",
    "2606:50c0:8002::153",
    "2606:50c0:8003::153"
];

D("hackebein.dev", REG_OVH, DnsProvider(DSP_OVH),
    // email
    MX("@", 1, "hosted.mailcow.de."),
    TXT("@", "v=spf1 mx ~all"),
    TXT("@", "mailcow"),

    TXT("_github-pages-challenge-hackebein", "629cf02ee13c9ce5859c79bd1a1ca8"),
    
    // hackebein.dev, www.hackebein.dev
    GITHUB_PAGES_IPV4S.map(function(ip) { return A("@", ip); }),
    //GITHUB_PAGES_IPV4S.map(function(ip) { return A("www", ip); }),
    GITHUB_PAGES_IPV6S.map(function(ip) { return AAAA("@", ip); }),
    //GITHUB_PAGES_IPV6S.map(function(ip) { return AAAA("www", ip); }),
    CNAME("www", "hackebein.github.io."),

    // vpm.hackebein.dev
    CNAME("vpm", "hackebein.github.io."),

    // vpmm.hackebein.dev
    CNAME("vpmm", "hackebein.github.io."),
END);

/* 
 * Author: lngost
 * See <https://lngost.github.io>
 */

var startupmsg = new Array(1);
startupmsg[0] = "Copyright (c) 1992-2014 The FreeBSD Project.";
startupmsg.push("Copyright (c) 1979, 1980, 1983, 1986, 1988, 1989, 1991, 1992, 1993, 1994");
startupmsg.push("The Regents of the University of California. All rights reserved.");
startupmsg.push("FreeBSD is a registered trademark of The FreeBSD Foundation.");
startupmsg.push("FreeBSD 10.0-RELEASE #0 r260789: Thu Jan 16 22:34:59 UTC 2014");
startupmsg.push("root@snap.freebsd.org:/usr/obj/usr/src/sys/GENERIC amd64");
startupmsg.push("FreeBSD clang version 3.3 (tags/RELEASE_33/final 183502) 20130610");
startupmsg.push("CPU: Intel(R) Core(TM) i5-3427U CPU @ 1.80GHz (2297.29-MHz K8-class CPU)");
startupmsg.push("real memory  = 1073676288 (1023 MB)");
startupmsg.push("avail memory = 1012174848 (965 MB)");
startupmsg.push("ioapic0 <Version 1.1> irqs 0-23 on motherboard");
startupmsg.push("kbd1 at kbdmux0");
startupmsg.push("acpi0: Power Button (fixed)");
startupmsg.push("acpi0: Sleep Button (fixed)");
startupmsg.push("cpu0: <ACPI CPU> on acpi0...[<span class='bold green'>ok</span>]");
startupmsg.push("pci0: <ACPI PCI bus> on pcib0...[<span class='bold green'>ok</span>]");
startupmsg.push("isab0: <PCI-ISA bridge> at device 1.0 on pci0...[<span class='bold green'>ok</span>]");
startupmsg.push("isa0: <ISA bus> on isab0...[<span class='bold green'>ok</span>]");
startupmsg.push("ata0: <ATA channel> at channel 0 on atapci0...[<span class='bold green'>ok</span>]");
startupmsg.push("vgapci0: Boot video device...[<span class='bold green'>ok</span>]");
startupmsg.push("em0: Ethernet address: aa:aa:aa:aa:aa:aa");
startupmsg.push("usbus0 on ohci0");
startupmsg.push("atkbdc0: <Keyboard controller (i8042)> port 0x60,0x64 irq 1 on acpi0...[<span class='bold green'>ok</span>]");
startupmsg.push("psm0: <PS/2 Mouse> irq 12 on atkbdc0");
startupmsg.push("vga0: <Generic ISA VGA> at port 0x3c0-0x3df iomem 0xa0000-0xbffff on isa0...[<span class='bold green'>ok</span>]");
startupmsg.push("atrtc0: <AT realtime clock> at port 0x70 irq 8 on isa0...[<span class='bold green'>ok</span>]");
startupmsg.push("Event timer 'RTC' frequency 32768 Hz quality 0...[<span class='bold green'>ok</span>]");
startupmsg.push("ppc0: cannot reserve I/O port range...[<span class='bold yellow'>skip</span>]");
startupmsg.push("Timecounters tick every 10.000 msec...[<span class='bold green'>ok</span>]");
startupmsg.push("usbus0: 12Mbps Full Speed USB v1.0");
startupmsg.push("ada0 at ata0 bus 0 scbus0 target 0 lun 0...[<span class='bold green'>ok</span>]");
startupmsg.push("ada0: 33.300MB/s transfers (UDMA2, PIO 65536bytes)");
startupmsg.push("ada0: 10240MB (20971520 512 byte sectors: 16H 63S/T 16383C)");
startupmsg.push("random: unblocking device....[<span class='bold green'>ok</span>]");
startupmsg.push("Netvsc initializing... Timecounter 'TSC-low' frequency 1148643006 Hz quality 800...[<span class='bold green'>ok</span>]");
startupmsg.push("Root mount waiting for: usbus0...[<span class='bold green'>ok</span>]");
startupmsg.push("uhub0: 8 ports with 8 removable, self powered...[<span class='bold green'>ok</span>]");
startupmsg.push("Trying to mount root from ufs:/dev/ada0p2 [rw]......[<span class='bold green'>ok</span>]");
startupmsg.push("em0: link state changed to UP...[<span class='bold green'>ok</span>]");
startupmsg.push("Executing '/etc/rc.d/dhclient quietstart em0'...[<span class='bold green'>ok</span>]");

var initloadspan = new Array(4);
initloadspan[0] = "-";
initloadspan[1] = "\\";
initloadspan[2] = "|";
initloadspan[3] = "/";
//There's always a way to figure it out.
var profile = "U2FsdGVkX18I7lo42lalowGxvDfJkGmAPHzl6Otj616HHNsLSieJ4+Er+WpVoHOrVeU4CKPVdoqK3NG7E4RaA1P4mbw625AgYauIdz8i5Ju7GC60bXTcCdTgD0u6HmVEE7gk02k1x3fL2eZ+yNaXuwPdZnAopJt1O2KM4YtnjlTzidruls4tT3Iy/jOd5p6a6cBGBbStgGM5pR3WKlfIivgKufszUuCqsK1js7UqE2lgwVHRy8pMpg0r5oWfA1nnqVQ/KlD5WBG4aRGiL35gXdKC9ESZHrViYx5n6OYkYPf8xpnjg28WZzJagVCzKnYMmy+dh5bYApOMhwDczeAOMxX6cWM0lM7SFPq97L67Qd81yncuk/BIbKEpKl48hiLycGcldo57Ekfw45YD5UKhA0LZD97Jpqx7IHlFB78yq0Z9c5sJp6XzI4wPEbpgFODRVQtHsohOo1hop3HkeUJtzelGpWuvfoazSj6z/6l77VGCpV9pWpG7xYJRDG71WxSIKZYyjuykc7NE+evu4ClmDGMQHHzqsf2PZCqjy542JAqo2ajA0haVHUSDu9C4enyG4YiBrd3y/tepAMTleaCIQ6jx+L+gTFkILSANCfQouA4oL/8GdhmW6sxJcaYGBrTq91fWgSKsELC3xBnNcPE85ZQqfV64sC3qCCeAdbPWFMeIj7p3a2ZHs3fKnuUw/KA5R+yh7WKDoZC8iB3cZNkwLX2Hkm1tsOv10OhB9ExTIClieXxZMagGvDvb4VLJHP/QXQ2fBr12pnXmuZoqYLtrktR8a46n9StiUrfvCprDyVTmaERl2WlsUUzkihq6xI5Eqd+z57wb3KuLJHW4Y+Aiqyxxh98TEY33kXOr0/rkU9TNJnBWvh+tpetC+YWyHedFd4J26Xv1zvNzQbJwFj966ZoigyXqGDER3HR4Oeyp0YSazzOAjqjjQE1Ylit362s+zm8HB4drOnnCM0Q74yz9M2DtzlpvcgiI5hAXqPR3xUUC2HUEVm7beSsH5tRLOR4jxVTrSrqJ8vXsDgGqpL/co3cKjPH3AqrrxQg0tzukI69eNpmriPaT/k1iEujE7BwUf2CD80R8POmJqat1UY1Njq1tzMMkZ1hr6YgW3ed+RRNW9eactsyx/6/GHt9bTgSBsFYUCT51ETrVRBRhi7F0TA==";

var flag_cmdinput = true;
var flag_bmaster = true;
var flag_tab = 0;

var pat_ls = /^ls\x20*$/;
var pat_lsl = /^ls\x20{1,}-l\x20*$/;
var pat_lsa = /^ls\x20{1,}-a\x20*$/;
var pat_lsla = /^ls\x20{1,}((-la)||(-al)||(-l\x20{1,}-a)||(-a\x20{1,}-l))\x20*$/;
var pat_cat = /^cat\x20{1,}README.txt\x20*$/;
var pat_gitbranch = /^git\x20{1,}branch\x20*$/;
var pat_gitcheckoutm = /^git\x20{1,}checkout\x20{1,}master\x20*$/;
var pat_gitcheckoutd = /^git\x20{1,}checkout\x20{1,}dev\x20*$/;
var pat_manman = /^man\x20{1,}man\x20*$/;
var pat_mancat = /^man\x20{1,}cat\x20*$/;
var pat_manclear = /^man\x20{1,}clear\x20*$/;
var pat_mangit = /^man\x20{1,}git\x20*$/;
var pat_manls = /^man\x20{1,}ls\x20*$/;
var pat_clear = /^clear\x20*$/;
var pat_aout = /^.\/a.out\x20*$/;

var prefix = "<span class='blue'>lngost##$:BKUW300PS345672: </span>";
//This might be the right one and yet not enough.
var keypass = "kyhl066Urcl$";

function Terminal(divid, width, height) {
    this.div = document.getElementById(divid);
    this.div.style.width = width;
    this.div.style.height = height;
    
    if(this.proset !== true) {
        Terminal.prototype.proset = true;
        
        Terminal.prototype.println = function(text) {
            var ele = document.createElement("p");
            ele.innerHTML = text;
            this.div.appendChild(ele);
            this.div.scrollTop = this.div.scrollHeight;
        };
        
        Terminal.prototype.clr = function() {
            this.div.innerHTML = "";
        };
        
        Terminal.prototype.cmdinput = function() {
            var ele = document.createElement("p");
            ele.innerHTML = prefix + "<input type='text' name='terminput' size='50' maxlength='50' />";
            this.div.appendChild(ele);
            this.div.scrollTop = this.div.scrollHeight;
            this.div.getElementsByTagName("input")[0].focus();
        };
        
        
    }
}

function cmdlist(term, node, cmd) {
    var ele = document.createElement("p");
    if(pat_ls.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "README.txt";
        } else {
            ele.innerHTML = "a.out&nbsp;&nbsp;README.txt";
        }
        node.appendChild(ele);
    } else if(pat_lsa.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = ".&nbsp;&nbsp;..&nbsp;&nbsp;.git&nbsp;&nbsp;README.txt";
        } else {
            ele.innerHTML = ".&nbsp;&nbsp;..&nbsp;&nbsp;.git&nbsp;&nbsp;a.out&nbsp;&nbsp;README.txt";
        }
        node.appendChild(ele);
    }else if(pat_lsl.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "total 4\n\
                             <p>-r--r--r-- 1 lngost staff 50 Sep&nbsp;&nbsp;1 12:03 README.txt</p>";
        } else {
            ele.innerHTML = "total 2360\n\
                             <p>-r-xr--r-- 1 lngost staff 2411724 Sep&nbsp;&nbsp;1 12:45 a.out</p>\n\
                             <p>-r--r--r-- 1 lngost staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28 Sep&nbsp;&nbsp;1 12:21 README.txt</p>";
        }
        node.appendChild(ele);
    } else if(pat_lsla.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "total 16\n\
                             <p>drwxr-xr-x 2 lngost staff 4096 Sep&nbsp;&nbsp;1 12:45 .</p>\n\
                             <p>dr-xr-xr-x 3 lngost staff 4096 Sep&nbsp;&nbsp;1 10:37 ..</p>\n\
                             <p>drwxr-xr-x 8 lngost staff 4096 Sep&nbsp;&nbsp;1 23:59 .git</p>\n\
                             <p>-r--r--r-- 1 lngost staff &nbsp;&nbsp;50 Sep&nbsp;&nbsp;1 12:03 README.txt</p>";
        } else {
            ele.innerHTML = "total 2372\n\
                             <p>drwxr-xr-x 2 lngost staff &nbsp;&nbsp;&nbsp;4096 Sep&nbsp;&nbsp;1 12:45 .</p>\n\
                             <p>dr-xr-xr-x 3 lngost staff &nbsp;&nbsp;&nbsp;4096 Sep&nbsp;&nbsp;1 10:37 ..</p>\n\
                             <p>drwxr-xr-x 8 lngost staff &nbsp;&nbsp;&nbsp;4096 Sep&nbsp;&nbsp;1 23:59 .git</p>\n\
                             <p>-r-xr--r-- 1 lngost staff 2411724 Sep&nbsp;&nbsp;1 12:45 a.out</p>\n\
                             <p>-r--r--r-- 1 lngost staff &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28 Sep&nbsp;&nbsp;1 12:21 README.txt</p>";
        }
        node.appendChild(ele);
    } else if(pat_cat.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "You wanna know about me? Show me what you've got.";
        } else {
            ele.innerHTML = "You are close. " + keypass;
        }
        node.appendChild(ele);
    } else if(pat_gitbranch.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "<p>&nbsp;&nbsp;dev</p>\n\
                             <p>*&nbsp;<span class='bold green'>master</span></p>";
        } else {
            ele.innerHTML = "<p>*&nbsp;<span class='bold green'>dev</span></p>\n\
                             <p>&nbsp;&nbsp;master</p>";
        }
        node.appendChild(ele);
    } else if(pat_gitcheckoutm.test(cmd) === true) {
        if(flag_bmaster) {
            ele.innerHTML = "Already on 'master'";
        } else {
            flag_bmaster = true;
            ele.innerHTML = "Switched to branch 'master'";
        }
        node.appendChild(ele);
    } else if(pat_gitcheckoutd.test(cmd) === true) {
        if(flag_bmaster) {
            flag_bmaster = false;
            ele.innerHTML = "Switched to branch 'dev'";
        } else {
            ele.innerHTML = "Already on 'dev'";
        }
        node.appendChild(ele);
    } else if(pat_manman.test(cmd) === true) {
        ele.innerHTML = "<p>man(1)</p><br/>\n\
                         <p>NAME</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;man -- format and display the on-line manual pages</p><br/>\n\
                         <p>SYNOPSIS</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;man [cat|clear|git|ls|man]</p>";
        node.appendChild(ele);
    } else if(pat_mancat.test(cmd) === true) {
        ele.innerHTML = "<p>CAT(1)</p><br/>\n\
                         <p>NAME</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat -- concatenate files and print on the standard output</p><br/>\n\
                         <p>SYNOPSIS</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cat [FILE]</p>";
        node.appendChild(ele);
    } else if(pat_manclear.test(cmd) === true) {
        ele.innerHTML = "<p>clear(1)</p><br/>\n\
                         <p>NAME</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear -- clear the terminal screen</p><br/>\n\
                         <p>SYNOPSIS</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;clear</p>";
        node.appendChild(ele);
    } else if(pat_mangit.test(cmd) === true) {
        ele.innerHTML = "<p>GIT(1)</p><br/>\n\
                         <p>NAME</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git -- the stupid content tracker</p><br/>\n\
                         <p>SYNOPSIS</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git branch</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git checkout &lt;branch&gt;</p><br/>\n\
                         <p>EXAMPLE</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git branch -- list local branches</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git checkout dev -- switch to branch dev</p>";
        node.appendChild(ele);
    } else if(pat_manls.test(cmd) === true) {
        ele.innerHTML = "<p>LS(1)</p><br/>\n\
                         <p>NAME</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ls -- list directory contents</p><br/>\n\
                         <p>SYNOPSIS</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ls [OPTION] [FILE]</p><br/>\n\
                         <p>OPTION</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-a</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list all files including entries starting with .</p><br/>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-l</p>\n\
                         <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use a long listing format</p>";
        node.appendChild(ele);
    } else if(pat_aout.test(cmd) === true && flag_bmaster === false) {
        flag_cmdinput = false;
        ele.innerHTML = "<p>&gt;Running script... [<span class='bold green'>ok</span>]</p>\n\
                         <p>&gt;Background scanning database... [<span></span>]<span></span></p>";
        node.appendChild(ele);
        node.scrollTop = node.scrollHeight;
        var bar = new Array(10);
        for(var i=0; i<10; ++i) {
            bar[i] = "&nbsp;";
        }
        var pbar = ele.getElementsByTagName("span")[1];
        var pbarok = ele.getElementsByTagName("span")[2];
        pbar.innerHTML = bar.join("");
        var index = 0;
        function probar() {
            if(index >= 10) {
                pbarok.innerHTML = "[<span class='bold green'>ok</span>]";
                ele.innerHTML += "<p>&gt;Enter key code: <input type='password' name='aoutinput' size='50' maxlength='50' /></p>";
                ele.getElementsByTagName("input")[0].focus();
                return;
            }
            
            bar[index] = "#";
            pbar.innerHTML = bar.join("");
            ++index;
            setTimeout(probar, 300);
        }
        probar();
        
    }
    else if(pat_clear.test(cmd) === true) {
        term.clr();
    } else {
        ele.innerHTML = "Command not found.";
        node.appendChild(ele);
    }
}

function terminit(term) {
    window.addEventListener("keydown", function(e) {
        var target = e.target;
        if(target.name !== "terminput" && target.name !== "aoutinput") {
            return;
        }
        
        var val = target.value;
        var parp = target.parentNode;
        var pardiv = parp.parentNode;

        var keynum;
        if(window.event) {
            keynum = e.keyCode;
        } else if(e.which) {
            keynum = e.which;
        }
        
        if(target.name === "aoutinput") {
            if(keynum === 13) {
                if(val === keypass) {
                    parp.innerHTML = "&gt;Enter key code: ******";
                    parp.innerHTML += "<p>&gt;Decrypting data... [<span class='bold green'>ok</span>]</p>";
                    parp.innerHTML += GibberishAES.dec(profile, keypass);
                } else {
                    parp.innerHTML = "&gt;Enter key code: ******";
                    parp.innerHTML += "<p>&gt;Decrypting data... [<span class='bold red'>error</span>]</p>\n\
                                       <p>&gt;Quiting...</p>";
                }
                term.cmdinput();
            }
            return;
        }
        
        if(keynum === 13) {
            //enter pressed
            parp.innerHTML = prefix + val;
            cmdlist(term, pardiv, val);
            if(flag_cmdinput) {
                term.cmdinput();
            } else {
                flag_cmdinput = true;
            }
        } else if(keynum === 9) {
            //tab pressed
            e.preventDefault();
            ++flag_tab;
            if(flag_tab >= 2 && val === "") {
                parp.innerHTML = prefix + "<p>Command prompt:</p>\n\
                                  <p>./&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git</p>\n\
                                  <p>cat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ls</p>\n\
                                  <p>clear&nbsp;&nbsp;&nbsp;man</p>";
                term.cmdinput();
            }
            setTimeout(function() {
                flag_tab = 0;
            }, 500);
        }
    }, false);
}

window.onload = function() {
    var term1 = new Terminal("term1", "1000px", "500px");
    terminit(term1);
    
    term1.println("System is on...");
    term1.println("Initializing......<span id='downcount'>3</span>[<span id='initload'></span>]");
    var downcount = document.getElementById("downcount");
    var initload = document.getElementById("initload");
    var index = 0;
    var loadi = 0;
    function initload_d() {
        if(index >= 176) {
            downcount.innerHTML = "0";
            index = 0;
            systemup();
            return;
        } else if(index >= 117) {
            downcount.innerHTML = "1";
        } else if(index >= 58) {
            downcount.innerHTML = "2";
        }
        initload.innerHTML = initloadspan[loadi];
        ++index;
        ++loadi;
        if(loadi >= 4) {
            loadi = 0;
        }
        setTimeout(initload_d, 17);
    }
    
    function systemup() {
        if(index >= startupmsg.length) {
            userlogin();
            return;
        }
        term1.println(startupmsg[index]);
        ++index;
        setTimeout(systemup, 30);
    }
    
    function userlogin() {
        term1.clr();
        term1.println("Welcome to E.Corp.<br/><br/>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.                    </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....                  </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........                </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........                  </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.            </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.........&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....          </p>\n\
<p>&nbsp;&nbsp;&nbsp;.............&nbsp;&nbsp;&nbsp;.........        </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....................          </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;................&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.    </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;............&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.....  </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;............&nbsp;&nbsp;&nbsp;.........</p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....................  </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;................    </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;............      </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;........        </p>\n\
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;....          </p>");
        term1.println("<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Evil Corp</h1>");
        term1.println("<p>Command prompt:</p>\n\
                      <p>./&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;git</p>\n\
                      <p>cat&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ls</p>\n\
                      <p>clear&nbsp;&nbsp;&nbsp;man</p>");
        term1.cmdinput();
    }
    
    initload_d();
};


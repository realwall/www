# Linux实用字符处理命令


### awk
把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行各种分析处理。

假设last -n 5的输出如下

    [root@www ~]# last -n 5 <==仅取出前五行
    root     pts/1   192.168.1.100  Tue Feb 10 11:21   still logged in
    root     pts/1   192.168.1.100  Tue Feb 10 00:46 - 02:28  (01:41)
    root     pts/1   192.168.1.100  Mon Feb  9 11:41 - 18:30  (06:48)
    dmtsai   pts/1   192.168.1.100  Mon Feb  9 11:41 - 11:41  (00:00)
    root     tty1                   Fri Sep  5 14:09 - 14:10  (00:01)
如果只是显示最近登录的5个帐号

    #last -n 5 | awk  '{print $1}'
    root
    root
    root
    dmtsai
    root

awk工作流程是这样的：读入有'\n'换行符分割的一条记录，然后将记录按指定的域分隔符划分域，填充域，$0则表示所有域，$1表示第一个域，$n表示第n个域。默认域分隔符是"空白键" 或 "[tab]键"，所以$1表示登录用户，$3表示登录用户ip，以此类推。

- -F指定域分隔符为':'。

如果只是显示/etc/passwd的账户和账户对应的shell,而账户与shell之间以tab键分割

    #cat /etc/passwd |awk  -F ':'  '{print $1"\t"$7}'
    root    /bin/bash
    daemon  /bin/sh
    bin     /bin/sh
    sys     /bin/sh

[参考](https://www.cnblogs.com/ggjucheng/archive/2013/01/13/2858470.html)

### sort
将文件的每一行作为一个单位，相互比较，比较原则是从首字符向后，依次按ASCII码值进行比较，最后将他们按升序输出。
- -u选项 去除重复行；
- -r选项 降序；
- -n选项 以数值来排序；
- -t选项和-k选项 设定间隔符，指定了间隔符之后，就可以用-k来指定列数；
- -f会将小写字母都转换为大写字母来进行比较，亦即忽略大小写。

[参考](https://www.cnblogs.com/51linux/archive/2012/05/23/2515299.html)

### wc
Word Count 统计指定文件中的字节数、字数、行数，并将统计结果显示输出。

- -c 统计字节数。
- -l 统计行数。
- -m 统计字符数。这个标志不能与 -c 标志一起使用。
- -w 统计字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。
- -L 打印最长行的长度。



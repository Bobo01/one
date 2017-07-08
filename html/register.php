<?php
	//字符编码使用utf-8；
	header("Content-type: text/html; charset=utf-8");

	//1、接收客户端的输入的数据
	$usename = $_POST['userName'];//$_POST:针对post请求方法。
	$usepassword = $_POST['userPass'];
	$usephone = $_POST['userPhone'];

	//2、保存到数据库
	//1)、连接数据库
	$con = mysql_connect("localhost","root","qianfeng");
	if(!$con){
		//die("连接失败".mysql.error());
		echo "注册失败:服务器连接有问题".mysql_error();
	}else{
		//2)、执行SQL语句
		mysql_select_db("localhost",$con);
		$str="insert into register(usename,usepassword,usephone) values('".$usename."','".$usepassword."','".$usephone."')";
		$count = mysql_query($str,$con); 
		
		//3)、关闭数据库
		mysql_close($con);
		
		//3、响应
		if($count==1){
			echo "<script>window.location.href=debark.html</script>";
		}else{
			echo "注册失败";
		}
	}	
?>

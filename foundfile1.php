<?php
$arr = array();
function get_extension($file){
	$itme = false;
	if(pathinfo($file, PATHINFO_EXTENSION) == "png" || pathinfo($file, PATHINFO_EXTENSION) == "jpg") {
		$itme = true;
	}
	return $itme;
}
function listDir($dir,$path="")
{	
	global $arr;
	echo "<meta charset='utf-8'>";
	if(is_dir($dir))
	{
		if ($dh = opendir($dir)) 
		{
			while (($file = readdir($dh)) !== false)
			{
				if((is_dir($dir."/".$file)) && $file!="." && $file!="..")
				{
					echo "<b><font color='red'>文件名：</font></b>",$dir."/".$file,"<br><hr>";
					listDir($dir."/".$file."/",$path.$file."/");
				}
				else
				{
					if($file!="." && $file!="..")
					{
						if ($path !== "") {
							if(get_extension($path.$file)){
								echo $path.$file."<br>";
								array_push($arr, $path.$file);
							}
						}
						else{
							if(get_extension($file)){
								echo $file."<br>";
								array_push($arr, $path.$file);
							}
						}
//						var_dump($a);
					}
				}
			}
			closedir($dh);
		}
	}
}


//开始运行
$a = listDir("1");
//echo "<b><font color='red'>arr：</font></b><br><hr>";
//var_dump($arr);
//echo "<b><font color='red'>print_r：</font></b><br><hr>";
//print_r($arr);
echo "<b><font color='red'>json：</font></b><br><hr>";
echo str_replace("\\/", "/",  json_encode($arr));

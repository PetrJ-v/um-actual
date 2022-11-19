<?php

	$data = file_get_contents('feedbaks.json');     // Открыть файл feedbaks.json
	echo(json_encode($data));

?>
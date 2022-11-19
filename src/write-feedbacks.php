<?php
	$lastFeedback = json_encode($_POST);

	function wright_feedback($lastFeedback, $data){
		$record = file_put_contents('feedbaks.json', $data);
		if ($record !== false) {
			echo($lastFeedback);
		};
	};

	if (file_exists('feedbaks.json')) {
		$data = file_get_contents('feedbaks.json');     // Открыть файл feedbaks.json
		$clear_data = trim($data, "[]"); //Убираем квадратные скобки в полученной строке, чтобы не дублирвоать их при записи
		$new_data = '[' . $clear_data . ',' . $lastFeedback . ']';

		wright_feedback($lastFeedback, $new_data);
	}
	else{
		$new_data = '[' . $lastFeedback . ']';

		wright_feedback($lastFeedback, $new_data);
	};

?>
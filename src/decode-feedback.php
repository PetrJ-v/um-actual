<?php
    $feedback = file_get_contents('feedbaks.json');
    // $decoded_feedbacks = json_decode($feedback);
    $decoded_feedbacks = json_decode($feedback, true);
    $decoded_string = serialize($decoded_feedbacks);
    // print_r($decoded_feedbacks);
    // echo ('feedbacs wrighten to file');
    file_put_contents('decoded-feedbaks.json', $decoded_string);
?>
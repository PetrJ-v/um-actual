<?php
    $decoded_string = file_get_contents('decoded-feedbaks.json');
    // $decoded_feedbacks = json_decode($feedback);
    $encoded_feedbacks = unserialize($decoded_string);
    $encoded_feedbacks = json_encode($decoded_string, true);
    // $decoded_string = serialize($decoded_feedbacks);
    // print_r($decoded_feedbacks);
    // echo ('feedbacs wrighten to file');
    file_put_contents('edited-feedbaks.json', $encoded_feedbacks);
    echo ('data was add to edited-feedbaks.json')
?>
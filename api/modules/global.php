<?php

class GlobalMethods {
    public function sendPayload($code, $remarks, $message, $data) {
        $status = array("remarks" => $remarks, "message" => $message);
        http_response_code($code);
        header("Content-Type: application/json");
        return json_encode(array(
            "status" => $status,
            "data" => $data,
            "prepared_by" => "Christel Ng",
            "timestamp" => date("Y-m-d H:i:s")
        ));
    }
}
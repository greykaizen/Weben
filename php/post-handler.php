<?php
require_once 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data["caption"])) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

$caption = trim($data["caption"]);
$tags = trim($data["tags"]);
$scheduleTime = $data["scheduleTime"] ?? null;

// Prepare SQL query
if ($scheduleTime) {
    $sql = "INSERT INTO posts (caption, tags, scheduled_time, status) VALUES (?, ?, ?, 'scheduled')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$caption, $tags, $scheduleTime]);
} else {
    $sql = "INSERT INTO posts (caption, tags, created_at, status) VALUES (?, ?, NOW(), 'published')";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$caption, $tags]);
}

echo json_encode(["success" => true]);
?>
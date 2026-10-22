<?php
// Proxxy Media audit request handler.
// Emails info@proxxymedia.com and keeps a copy of each request outside the public web folder.

declare(strict_types=1);

const TO_EMAIL   = 'info@proxxymedia.com';
const FROM_EMAIL = 'info@proxxymedia.com';

function back(string $code): void {
    header('Location: /?error=' . $code . '#contact', true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#contact', true, 303);
    exit;
}

function field(string $key, int $max): string {
    $v = isset($_POST[$key]) ? (string) $_POST[$key] : '';
    $v = trim(str_replace(["\r", "\0"], '', $v));
    return mb_substr($v, 0, $max);
}

// Spam checks: hidden field must be empty, and the form must not be sent within 3 seconds of loading.
if (field('website', 200) !== '') {
    header('Location: /thanks.html', true, 303);
    exit;
}
$ts = (int) field('ts', 20);
if ($ts > 0 && (time() - $ts) < 3) {
    header('Location: /thanks.html', true, 303);
    exit;
}

$name    = str_replace("\n", ' ', field('name', 120));
$firm    = str_replace("\n", ' ', field('firm', 160));
$email   = str_replace("\n", '', field('email', 160));
$phone   = str_replace("\n", ' ', field('phone', 40));
$sector  = str_replace("\n", ' ', field('sector', 60));
$message = field('message', 3000);
$riq     = field('registeriq', 5) === 'yes' ? 'Yes' : 'No';
$consent = field('consent', 5) === 'yes';

if ($name === '' || $firm === '' || $email === '' || $sector === '' || !$consent) {
    back('missing');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    back('email');
}

$when = date('Y-m-d H:i');
$body = "New audit request from proxxymedia.com\n\n"
      . "Name: $name\n"
      . "Firm: $firm\n"
      . "Email: $email\n"
      . "Phone: " . ($phone !== '' ? $phone : 'not given') . "\n"
      . "Sector: $sector\n"
      . "RegisterIQ early access: $riq\n"
      . "Received: $when\n\n"
      . "What takes up most of their time:\n"
      . ($message !== '' ? $message : 'not given') . "\n";

// Keep a copy outside public_html so nothing is lost if mail delivery fails.
$logDir  = dirname(__DIR__) . '/proxxy_leads';
$saved = false;
if (is_dir($logDir) || @mkdir($logDir, 0700, true)) {
    $fh = @fopen($logDir . '/audit_requests.csv', 'ab');
    if ($fh) {
        fputcsv($fh, [$when, $name, $firm, $email, $phone, $sector, $riq, $message]);
        fclose($fh);
        $saved = true;
    }
}

$subject = 'Audit request: ' . $firm;
$headers = [
    'From: Proxxy Media website <' . FROM_EMAIL . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
];
$sent = @mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);

if (!$sent && !$saved) {
    back('send');
}

header('Location: /thanks.html', true, 303);
exit;

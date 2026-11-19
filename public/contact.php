<?php
// Proxxy Media consultation request handler.
// Emails info@proxxymedia.com and keeps a copy of each request outside the public web folder.
declare(strict_types=1);

const TO_EMAIL   = 'info@proxxymedia.com';
const FROM_EMAIL = 'info@proxxymedia.com';
const NEEDS = [
  'compliance-desk' => 'Compliance desk', 'records-care' => 'Records care', 'automation-care' => 'Automation care',
  'training' => 'Training and AI literacy', 'research-data' => 'Research data and open science',
  'journal-publishing' => 'Journal publishing support', 'library-systems' => 'Library systems',
  'digitisation' => 'Digitisation and archive grants', 'not-sure' => 'Not sure yet',
];

// Works at the site root or inside a preview folder such as /v2.
$base = rtrim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'] ?? '/contact.php')), '/');

function go(string $to): void { header('Location: ' . $to, true, 303); exit; }
function field(string $key, int $max): string {
  $v = isset($_POST[$key]) ? (string) $_POST[$key] : '';
  return mb_substr(trim(str_replace(["\r", "\0"], '', $v)), 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') go($base . '/contact/');

// Spam checks: hidden field must stay empty, and the form must not be sent within 3 seconds of loading.
if (field('website', 200) !== '') go($base . '/thanks/');
$ts = (int) field('ts', 20);
if ($ts > 0 && (time() - $ts) < 3) go($base . '/thanks/');

$one = fn(string $k, int $m) => str_replace("\n", ' ', field($k, $m));
$needKey = $one('need', 60);
$need    = NEEDS[$needKey] ?? '';
$name    = $one('name', 120);
$firm    = $one('firm', 160);
$email   = str_replace("\n", '', field('email', 160));
$phone   = $one('phone', 40);
$sector  = $one('sector', 80);
$country = $one('country', 80);
$message = field('message', 3000);
$consent = field('consent', 5) === 'yes';

if ($need === '' || $name === '' || $firm === '' || $email === '' || $sector === '' || $country === '' || !$consent) go($base . '/contact/?error=missing');
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) go($base . '/contact/?error=email');

$when = date('Y-m-d H:i');
$body = "New consultation request from proxxymedia.com\n\n"
  . "Needs help with: $need\nName: $name\nOrganisation: $firm\nEmail: $email\n"
  . 'Phone: ' . ($phone !== '' ? $phone : 'not given') . "\n"
  . "Type: $sector\nCountry: $country\nReceived: $when\n\nTheir note:\n"
  . ($message !== '' ? $message : 'not given') . "\n";

// Keep a copy outside public_html so nothing is lost if mail delivery fails.
$root = $_SERVER['DOCUMENT_ROOT'] ?? __DIR__;
$logDir = dirname(rtrim($root, '/')) . '/proxxy_leads';
$saved = false;
if (is_dir($logDir) || @mkdir($logDir, 0700, true)) {
  $fh = @fopen($logDir . '/consultation_requests.csv', 'ab');
  if ($fh) { fputcsv($fh, [$when, $need, $name, $firm, $email, $phone, $sector, $country, '', $message]); fclose($fh); $saved = true; }
}

$subject = $need . ': ' . $firm . ' (' . $country . ')';
$headers = ['From: Proxxy Media website <' . FROM_EMAIL . '>', 'Reply-To: ' . $email, 'Content-Type: text/plain; charset=UTF-8'];
$sent = @mail(TO_EMAIL, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM_EMAIL);

if (!$sent && !$saved) go($base . '/contact/?error=send');
go($base . '/thanks/');

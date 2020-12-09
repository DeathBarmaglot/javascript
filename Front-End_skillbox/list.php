<?
 
    $dbh = new PDO('mysql:host=localhost;dbname=cy70845_db', 'cy70845_db', 'cy70845_db');
    $sth = $dbh->prepare("SELECT `time`, name, email FROM `order`");
    $sth->execute();
    $data = $sth->fetchAll();
 
    header('Content-Type: text/plain; charset=utf-8');
    print_r($data);
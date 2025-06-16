<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $service = strip_tags(trim($_POST["service"]));
    $date = strip_tags(trim($_POST["date"]));
    $guests = strip_tags(trim($_POST["guests"]));
    $message = trim($_POST["message"]);
    
    // Проверяем данные
    if (empty($name) || empty($phone) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Пожалуйста, заполните форму корректно.";
        exit;
    }
    
    // Формируем email
    $recipient = "Dr.Pixel8@yandex.com";
    $subject = "Новая заявка от $name";
    
    $email_content = "Имя: $name\n";
    $email_content .= "Телефон: $phone\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Услуга: $service\n";
    $email_content .= "Дата: $date\n";
    $email_content .= "Количество человек: $guests\n\n";
    $email_content .= "Дополнительная информация:\n$message\n";
    
    $email_headers = "From: $name <$email>";
    
    // Отправляем email
    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Спасибо! Ваша заявка отправлена.";
    } else {
        http_response_code(500);
        echo "Ой! Что-то пошло не так, и мы не смогли отправить вашу заявку.";
    }
    
} else {
    http_response_code(403);
    echo "Возникла проблема с отправкой, пожалуйста, попробуйте еще раз.";
}
?>
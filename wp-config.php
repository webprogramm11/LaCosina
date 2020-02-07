<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'lacosina_db' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'QThb:t8zufGU+k-.H3((wsT19z.I6yC$haE 8eO2g03!|.(#x`?&Cxuk+# 1Fdbs' );
define( 'SECURE_AUTH_KEY',  '*_(FL!%Ob:%SnAvp7N@c@h*Wan,JxP_V#0{kE#Ii/iT,[}sz]y{$4=g^_2Ma ;vR' );
define( 'LOGGED_IN_KEY',    'gmrUn&4r_dmMb&Rn-!{23Y(3MrRl[F XTBPiW,rm6=u9K?Z36mC/;0rX_lqV.SzF' );
define( 'NONCE_KEY',        'hX?Nk44|Zev{>8 K{$n}Etp?41^ZNs;QK/H?rm`:[||@J4w--4?tS0ZVKibN3.1@' );
define( 'AUTH_SALT',        'jy.J6X.p0N7|)IejSFI/J|m;@g BL8Bvc%*zv6XiVn=yXkt< e8UP%l}hR]Ud7wk' );
define( 'SECURE_AUTH_SALT', 'WX-?lU+TROH#d:2jw_YYl1!%Ck.wtob/)pS;g?B?4W|DD~,ZP4_-)GZI_7~>,V#6' );
define( 'LOGGED_IN_SALT',   'C_6.59h4DEv5^U`hcA]vC,/#m@k$ymTDg<lV9/kzA-Kg]iC{f-~TZ{Z2%0humAqs' );
define( 'NONCE_SALT',       ':eUfv`1VEyKKu$oliad![pM|@RT*<>JK_`K<+O-!Odf&wT;_3z>SB/0P{f<MS-@2' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );

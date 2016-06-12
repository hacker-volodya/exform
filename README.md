# exform
Легковесный скрипт для отправки форм

## Зависимости:
  * jQuery

## Пример формы:

    <form action="contactme.php" data-success="Мы вам перезвоним!" data-error="Произошла ошибка, попробуйте позже" method="POST">
      <input type="hidden" name="comment" value="Перезвонить"/>

      <div class="form-group">
        <input class="form-control" type="text" placeholder="Имя"/>
      </div>
      
      <div class="form-group">
        <input class="form-control" type="tel" placeholder="Телефон"/>
      </div>
      
      <div class="info-success" style="display: none;"></div>
      <div class="info-error" style="display: none;"></div>
      
      <button type="submit" class="btn btn-primary btn-lg">Перезвоните мне!</button>
    </form>

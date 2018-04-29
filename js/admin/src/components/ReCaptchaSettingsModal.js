import app from 'flarum/app';
import SettingsModal from 'flarum/components/SettingsModal';
import Switch from 'flarum/components/Switch';

export default class ReCaptchaSettingsModal extends SettingsModal {
  className() {
    return 'ReCaptchaSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('sijad-recaptcha.admin.recaptcha_settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>
          {app.translator.trans('sijad-recaptcha.admin.recaptcha_settings.sitekey_label')}
        </label>
        <input className="FormControl" bidi={this.setting('sijad-recaptcha.sitekey')} />
      </div>,
      <div className="Form-group">
        <label>
          {app.translator.trans('sijad-recaptcha.admin.recaptcha_settings.secret_label')}
        </label>
        <input className="FormControl" bidi={this.setting('sijad-recaptcha.secret')} />
      </div>,
      <div className="Form-group">
        <label>
          <input type="checkbox" bidi={this.setting('sijad-recaptcha.invisible')} />
          {' '}
          {app.translator.trans('sijad-recaptcha.admin.recaptcha_settings.invisible_label')}
        </label>
      </div>,
    ];
  }
}

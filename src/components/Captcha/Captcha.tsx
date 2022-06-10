import ReCAPTCHA from 'react-google-recaptcha';
import s from './Captcha.module.css';

export type CaptchaProps = {
  onChange?: (value: string | null) => void;
  siteKey?: string;
};

export default function Captcha(props: CaptchaProps) {
  const { onChange, siteKey = process.env.CAPTCHA_KEY as string } = props;

  return (
    <div className={s.container}>
      <ReCAPTCHA
        key="light"
        theme="light"
        sitekey={siteKey}
        onChange={onChange}
      />
    </div>
  );
}

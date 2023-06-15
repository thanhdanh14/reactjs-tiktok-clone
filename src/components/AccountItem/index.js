import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/e858ba7fca26aa2554fb438019b237e9~c5_100x100.jpeg?x-expires=1686798000&x-signature=AYd7LjjP7uHT9OLaFLgwIvjldkU%3D"
                className={cx('avatar')}
                alt="Danh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Bien Thanh Danh</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faStar} />
                </h4>
                <span className={cx('username')}>bienthanhdanh</span>
            </div>
        </div>
    );
}

export default AccountItem;

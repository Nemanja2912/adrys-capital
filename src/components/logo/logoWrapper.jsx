import Logo from "../../assets/logo/logo.svg";

import styles from "./logoWrapper.module.css";

const LogoWrapper = () => {
  return (
    <div className={styles.logoWrapper}>
      <img src={Logo} alt="" />
    </div>
  );
};

export default LogoWrapper;

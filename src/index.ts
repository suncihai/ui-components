import Avatar from './components/Avatar';
import Button from './components/Button';
import Card from './components/Card';
import Flex from './components/Flex';
import Loading from './components/Loading';
import Modal from './components/Modal';
import Pod from './components/Pod';
import PremiumRoomButton from './components/PremiumRoomButton';
import ToggleSwitch from './components/ToggleSwitch';

import useDebounce from './hooks/useDebounce';
import useIsMounted from './hooks/useIsMounted';
import useMediaQueries from './hooks/useMediaQueries';
import useTimeout from './hooks/useTimeout';

import formatNumbers from './utils/formatNumbers';
// NOTE: here we would export components
export {
  Avatar,
  Button,
  Card,
  Flex,
  Loading,
  Modal,
  Pod,
  PremiumRoomButton,
  ToggleSwitch,
};

//NOTE: here we would export hooks
export { useDebounce, useIsMounted, useMediaQueries, useTimeout };

//NOTE: here we would export utils
export { formatNumbers };

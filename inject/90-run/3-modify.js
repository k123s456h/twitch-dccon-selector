////////////////////////////////////////

/**
 * 현재 채팅창에 있는 아이콘을 렌더링한다.
 */
const run_3_modify = async () => {
  if(fail) return;

  try
  {
    logger.debug("[run_3_modify]");

    if(!isVod && !isClip) // live, popout
    {
      inputAreaExists();
      inputAreaParentExists();
      iconAreaExists();
      inputSendButtonExists();
    }
    chatAreaExists();

    return true;
  }
  catch(err)
  {
    fail = true;
    error = err;
  }
  finally
  {
    return;
  }
}


////////////////////////////////////////